// Flashcard Quiz Application
(function() {
    'use strict';

    // State
    let cards = [];
    let totalCards = 0;
    let currentIndex = 0;
    let cardOrder = [];
    let isFlipped = false;
    let answers = {};
    let currentCardAnswered = false;

    // DOM Elements
    const flashcard = document.getElementById('flashcard');
    const questionImg = document.getElementById('questionImg');
    const answerImg = document.getElementById('answerImg');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const cardIndicators = document.getElementById('cardIndicators');
    const answerPrompt = document.getElementById('answerPrompt');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const resultsOverlay = document.getElementById('resultsOverlay');
    const restartBtn = document.getElementById('restartBtn');
    const statPercentage = document.getElementById('statPercentage');
    const competencyLevel = document.getElementById('competencyLevel');
    const correctCount = document.getElementById('correctCount');
    const incorrectCount = document.getElementById('incorrectCount');
    const progressRing = document.getElementById('progressRing');

    // Load cards from JSON
    async function loadCards() {
        try {
            const response = await fetch('cards.json');
            const data = await response.json();

            // Set title if provided
            if (data.title) {
                document.querySelector('h1').textContent = data.title;
                document.title = data.title;
            }

            cards = data.cards;
            totalCards = cards.length;
            cardOrder = Array.from({ length: totalCards }, (_, i) => i);

            init();
        } catch (error) {
            console.error('Error loading cards:', error);
            alert('Error loading flashcards. Please check that cards.json exists.');
        }
    }

    // Initialize the application
    function init() {
        createIndicators();
        updateCard();
        updateProgress();
        attachEventListeners();
    }

    // Create card indicator dots
    function createIndicators() {
        cardIndicators.innerHTML = '';
        for (let i = 0; i < totalCards; i++) {
            const dot = document.createElement('div');
            dot.className = 'indicator';
            dot.dataset.index = i;
            dot.addEventListener('click', () => goToCard(i));
            cardIndicators.appendChild(dot);
        }
        updateIndicators();
    }

    // Update indicator states
    function updateIndicators() {
        const dots = cardIndicators.querySelectorAll('.indicator');
        dots.forEach((dot, i) => {
            dot.classList.remove('active', 'answered-yes', 'answered-no');
            if (i === currentIndex) {
                dot.classList.add('active');
            }
            if (answers[i] === true) {
                dot.classList.add('answered-yes');
            } else if (answers[i] === false) {
                dot.classList.add('answered-no');
            }
        });
    }

    // Update the current card images
    function updateCard() {
        const cardData = cards[cardOrder[currentIndex]];

        // Get card face elements
        const frontFace = document.querySelector('.flashcard-front');
        const backFace = document.querySelector('.flashcard-back');

        // Add loading state
        questionImg.classList.add('loading');
        answerImg.classList.add('loading');
        frontFace.classList.add('is-loading');
        backFace.classList.add('is-loading');

        // Preload images
        const qImg = new Image();
        const aImg = new Image();

        qImg.onload = () => {
            questionImg.src = cardData.question;
            questionImg.classList.remove('loading');
            frontFace.classList.remove('is-loading');
        };

        aImg.onload = () => {
            answerImg.src = cardData.answer;
            answerImg.classList.remove('loading');
            backFace.classList.remove('is-loading');
        };

        qImg.src = cardData.question;
        aImg.src = cardData.answer;

        // Reset flip state when changing cards
        if (isFlipped) {
            flipCard(false);
        }

        // Check if this card was already answered
        currentCardAnswered = answers[currentIndex] !== undefined;

        // Hide answer prompt
        hideAnswerPrompt();

        updateIndicators();
    }

    // Update progress bar and text
    function updateProgress() {
        const progress = ((currentIndex + 1) / totalCards) * 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${currentIndex + 1} / ${totalCards}`;
    }

    // Flip the card
    function flipCard(state) {
        if (typeof state === 'boolean') {
            isFlipped = state;
        } else {
            isFlipped = !isFlipped;
        }

        if (isFlipped) {
            flashcard.classList.add('flipped');
            if (!currentCardAnswered) {
                showAnswerPrompt();
            }
        } else {
            flashcard.classList.remove('flipped');
            hideAnswerPrompt();
        }
    }

    // Show answer prompt
    function showAnswerPrompt() {
        answerPrompt.classList.add('visible');
    }

    // Hide answer prompt
    function hideAnswerPrompt() {
        answerPrompt.classList.remove('visible');
    }

    // Record answer
    function recordAnswer(knewAnswer) {
        answers[currentIndex] = knewAnswer;
        currentCardAnswered = true;
        hideAnswerPrompt();
        updateIndicators();

        // Check if all cards answered
        if (Object.keys(answers).length === totalCards) {
            setTimeout(showResults, 500);
        } else {
            setTimeout(() => {
                if (currentIndex < totalCards - 1) {
                    nextCard();
                }
            }, 300);
        }
    }

    // Calculate results
    function calculateResults() {
        let correct = 0;
        let incorrect = 0;

        for (let i = 0; i < totalCards; i++) {
            if (answers[i] === true) {
                correct++;
            } else if (answers[i] === false) {
                incorrect++;
            }
        }

        const percentage = Math.round((correct / totalCards) * 100);
        return { correct, incorrect, percentage };
    }

    // Show results screen
    function showResults() {
        const results = calculateResults();

        correctCount.textContent = results.correct;
        incorrectCount.textContent = results.incorrect;
        competencyLevel.textContent = `${results.percentage}%`;
        statPercentage.textContent = `${results.percentage}%`;

        const circumference = 2 * Math.PI * 54;
        const offset = circumference - (results.percentage / 100) * circumference;

        progressRing.style.stroke = getGradientColor(results.percentage);
        progressRing.style.strokeDasharray = circumference;
        progressRing.style.strokeDashoffset = circumference;

        resultsOverlay.classList.add('visible');

        setTimeout(() => {
            progressRing.style.strokeDashoffset = offset;
        }, 100);
    }

    // Get color based on percentage
    function getGradientColor(percentage) {
        if (percentage >= 80) return '#10b981';
        if (percentage >= 60) return '#6366f1';
        if (percentage >= 40) return '#f59e0b';
        return '#ef4444';
    }

    // Hide results screen
    function hideResults() {
        resultsOverlay.classList.remove('visible');
    }

    // Navigate to next card
    function nextCard() {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
            updateCard();
            updateProgress();
        }
    }

    // Navigate to previous card
    function prevCard() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCard();
            updateProgress();
        }
    }

    // Go to specific card
    function goToCard(index) {
        if (index >= 0 && index < totalCards) {
            currentIndex = index;
            updateCard();
            updateProgress();
        }
    }

    // Shuffle cards (Fisher-Yates algorithm)
    function shuffleCards() {
        answers = {};
        currentCardAnswered = false;

        for (let i = cardOrder.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cardOrder[i], cardOrder[j]] = [cardOrder[j], cardOrder[i]];
        }
        currentIndex = 0;
        updateCard();
        updateProgress();
        createIndicators();

        flashcard.style.transform = 'scale(0.95)';
        setTimeout(() => {
            flashcard.style.transform = '';
        }, 200);
    }

    // Reset to original order
    function resetCards() {
        cardOrder = Array.from({ length: totalCards }, (_, i) => i);
        currentIndex = 0;
        answers = {};
        currentCardAnswered = false;
        isFlipped = false;
        flashcard.classList.remove('flipped');
        hideAnswerPrompt();
        hideResults();
        updateCard();
        updateProgress();
        createIndicators();

        flashcard.style.transform = 'scale(0.95)';
        setTimeout(() => {
            flashcard.style.transform = '';
        }, 200);
    }

    // Attach event listeners
    function attachEventListeners() {
        flashcard.addEventListener('click', () => flipCard());

        yesBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            recordAnswer(true);
        });

        noBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            recordAnswer(false);
        });

        restartBtn.addEventListener('click', resetCards);

        document.addEventListener('keydown', handleKeydown);

        let touchStartX = 0;
        let touchEndX = 0;

        flashcard.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        flashcard.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextCard();
                } else {
                    prevCard();
                }
            }
        }
    }

    // Keyboard handler
    function handleKeydown(e) {
        if (resultsOverlay.classList.contains('visible')) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                resetCards();
            }
            return;
        }

        switch (e.key) {
            case ' ':
                e.preventDefault();
                flipCard();
                break;
            case 'y':
            case 'Y':
                if (isFlipped && !currentCardAnswered) {
                    recordAnswer(true);
                }
                break;
            case 'n':
            case 'N':
                if (isFlipped && !currentCardAnswered) {
                    recordAnswer(false);
                }
                break;
        }
    }

    // Start by loading cards from JSON
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadCards);
    } else {
        loadCards();
    }
})();
