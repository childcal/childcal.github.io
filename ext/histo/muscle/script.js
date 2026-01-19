// Flashcard Quiz Application
(function() {
    'use strict';

    // Configuration
    const TOTAL_CARDS = 9;

    // State
    let currentIndex = 0;
    let cardOrder = Array.from({ length: TOTAL_CARDS }, (_, i) => i + 1);
    let isFlipped = false;
    let answers = {}; // Track answers: { cardIndex: true/false }
    let currentCardAnswered = false;

    // DOM Elements
    const flashcard = document.getElementById('flashcard');
    const questionImg = document.getElementById('questionImg');
    const answerImg = document.getElementById('answerImg');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
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

    // Initialize the application
    function init() {
        createIndicators();
        updateCard();
        updateProgress();
        updateNavButtons();
        attachEventListeners();
    }

    // Create card indicator dots
    function createIndicators() {
        cardIndicators.innerHTML = '';
        for (let i = 0; i < TOTAL_CARDS; i++) {
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
        const cardNumber = cardOrder[currentIndex];

        // Add loading state
        questionImg.classList.add('loading');
        answerImg.classList.add('loading');

        // Preload images
        const qImg = new Image();
        const aImg = new Image();

        qImg.onload = () => {
            questionImg.src = `img/${cardNumber}-Q.png`;
            questionImg.classList.remove('loading');
        };

        aImg.onload = () => {
            answerImg.src = `img/${cardNumber}-A.png`;
            answerImg.classList.remove('loading');
        };

        qImg.src = `img/${cardNumber}-Q.png`;
        aImg.src = `img/${cardNumber}-A.png`;

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
        const progress = ((currentIndex + 1) / TOTAL_CARDS) * 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${currentIndex + 1} / ${TOTAL_CARDS}`;
    }

    // Update navigation button states
    function updateNavButtons() {
        prevBtn.disabled = currentIndex === 0;
        // Allow next if answered or on last card (to show results)
        nextBtn.disabled = false;
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
            // Show answer prompt if not already answered
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
        if (Object.keys(answers).length === TOTAL_CARDS) {
            // Small delay before showing results
            setTimeout(showResults, 500);
        } else {
            // Auto-advance to next card after a short delay
            setTimeout(() => {
                if (currentIndex < TOTAL_CARDS - 1) {
                    nextCard();
                }
            }, 300);
        }
    }

    // Calculate results
    function calculateResults() {
        let correct = 0;
        let incorrect = 0;

        for (let i = 0; i < TOTAL_CARDS; i++) {
            if (answers[i] === true) {
                correct++;
            } else if (answers[i] === false) {
                incorrect++;
            }
        }

        const percentage = Math.round((correct / TOTAL_CARDS) * 100);
        return { correct, incorrect, percentage };
    }

    // Show results screen
    function showResults() {
        const results = calculateResults();

        // Update UI
        correctCount.textContent = results.correct;
        incorrectCount.textContent = results.incorrect;
        competencyLevel.textContent = `${results.percentage}%`;
        statPercentage.textContent = `${results.percentage}%`;

        // Animate circular progress
        const circumference = 2 * Math.PI * 54; // r = 54
        const offset = circumference - (results.percentage / 100) * circumference;

        // Set initial state
        progressRing.style.stroke = getGradientColor(results.percentage);
        progressRing.style.strokeDasharray = circumference;
        progressRing.style.strokeDashoffset = circumference;

        // Show overlay
        resultsOverlay.classList.add('visible');

        // Animate after a short delay
        setTimeout(() => {
            progressRing.style.strokeDashoffset = offset;
        }, 100);
    }

    // Get color based on percentage
    function getGradientColor(percentage) {
        if (percentage >= 80) return '#10b981'; // Green
        if (percentage >= 60) return '#6366f1'; // Purple
        if (percentage >= 40) return '#f59e0b'; // Orange
        return '#ef4444'; // Red
    }

    // Hide results screen
    function hideResults() {
        resultsOverlay.classList.remove('visible');
    }

    // Navigate to next card
    function nextCard() {
        if (currentIndex < TOTAL_CARDS - 1) {
            currentIndex++;
            updateCard();
            updateProgress();
            updateNavButtons();
        }
    }

    // Navigate to previous card
    function prevCard() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCard();
            updateProgress();
            updateNavButtons();
        }
    }

    // Go to specific card
    function goToCard(index) {
        if (index >= 0 && index < TOTAL_CARDS) {
            currentIndex = index;
            updateCard();
            updateProgress();
            updateNavButtons();
        }
    }

    // Shuffle cards (Fisher-Yates algorithm)
    function shuffleCards() {
        // Reset answers when shuffling
        answers = {};
        currentCardAnswered = false;

        for (let i = cardOrder.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cardOrder[i], cardOrder[j]] = [cardOrder[j], cardOrder[i]];
        }
        currentIndex = 0;
        updateCard();
        updateProgress();
        updateNavButtons();
        createIndicators();

        // Visual feedback
        flashcard.style.transform = 'scale(0.95)';
        setTimeout(() => {
            flashcard.style.transform = '';
        }, 200);
    }

    // Reset to original order
    function resetCards() {
        cardOrder = Array.from({ length: TOTAL_CARDS }, (_, i) => i + 1);
        currentIndex = 0;
        answers = {};
        currentCardAnswered = false;
        isFlipped = false;
        flashcard.classList.remove('flipped');
        hideAnswerPrompt();
        hideResults();
        updateCard();
        updateProgress();
        updateNavButtons();
        createIndicators();

        // Visual feedback
        flashcard.style.transform = 'scale(0.95)';
        setTimeout(() => {
            flashcard.style.transform = '';
        }, 200);
    }

    // Attach event listeners
    function attachEventListeners() {
        // Click to flip
        flashcard.addEventListener('click', () => flipCard());

        // Navigation buttons
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            prevCard();
        });

        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            nextCard();
        });

        // Answer buttons
        yesBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            recordAnswer(true);
        });

        noBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            recordAnswer(false);
        });

        // Restart button
        restartBtn.addEventListener('click', resetCards);

        // Keyboard navigation
        document.addEventListener('keydown', handleKeydown);

        // Touch/swipe support
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
                    // Swipe left - next card
                    nextCard();
                } else {
                    // Swipe right - previous card
                    prevCard();
                }
            }
        }
    }

    // Keyboard handler
    function handleKeydown(e) {
        // Don't handle if results overlay is visible
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

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
