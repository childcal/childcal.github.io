/**
 * Main JavaScript for Pediatric Calculations
 * Common functionality across all pages
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Initialize the application
 */
function initializeApp() {
    setupNavigationToggle();
    setupClickOutsideHandler();
    addFadeInAnimations();
    setupFormValidation();
}

/**
 * Setup navigation toggle functionality
 */
function setupNavigationToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('mainNavbar');
    
    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            navbar.classList.toggle('show');
            
            // Update icon
            const icon = menuToggle.querySelector('i');
            if (navbar.classList.contains('show')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }
}

/**
 * Setup click outside handler to close navbar
 */
function setupClickOutsideHandler() {
    document.addEventListener('click', function(event) {
        const navbar = document.getElementById('mainNavbar');
        const menuToggle = document.getElementById('menuToggle');
        
        if (navbar && menuToggle) {
            // Check if click is outside navbar and menu toggle
            if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
                navbar.classList.remove('show');
                
                // Reset icon
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-bars';
                }
            }
        }
    });
}

/**
 * Add fade-in animations to elements
 */
function addFadeInAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Add intersection observer for better performance
    if (window.IntersectionObserver) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });

        fadeElements.forEach(element => {
            // Set initial state
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out';
            
            observer.observe(element);
        });
    } else {
        // Fallback for older browsers
        fadeElements.forEach(element => {
            element.classList.add('fade-in');
        });
    }
}

/**
 * Setup form validation
 */
function setupFormValidation() {
    // Clear error messages when user starts typing
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            clearErrorMessage(this);
        });
        
        input.addEventListener('change', function() {
            clearErrorMessage(this);
        });
    });
}

/**
 * Clear error message for an input
 * @param {HTMLElement} input - The input element
 */
function clearErrorMessage(input) {
    const errorElement = document.getElementById(input.id + 'message') || 
                        document.getElementById(input.id.charAt(0) + 'message');
    if (errorElement) {
        errorElement.textContent = '';
    }
}

/**
 * Show error message for an input
 * @param {string} inputId - The input element ID
 * @param {string} message - The error message
 */
function showErrorMessage(inputId, message) {
    const errorElement = document.getElementById(inputId + 'message') || 
                        document.getElementById(inputId.charAt(0) + 'message');
    if (errorElement) {
        errorElement.textContent = message;
    }
}

/**
 * Validate required fields
 * @param {Array} fields - Array of field objects with id and name
 * @returns {boolean} - True if all fields are valid
 */
function validateRequiredFields(fields) {
    let isValid = true;
    
    fields.forEach(field => {
        const element = document.getElementById(field.id);
        if (element) {
            const value = element.value.trim();
            
            if (!value || value === '0') {
                showErrorMessage(field.id, `Please select/enter ${field.name}`);
                isValid = false;
            } else {
                clearErrorMessage(element);
            }
        }
    });
    
    return isValid;
}

/**
 * Validate numeric input
 * @param {string} inputId - The input element ID
 * @param {string} fieldName - The field name for error messages
 * @param {number} min - Minimum value (optional)
 * @param {number} max - Maximum value (optional)
 * @returns {boolean} - True if valid
 */
function validateNumericInput(inputId, fieldName, min = null, max = null) {
    const element = document.getElementById(inputId);
    if (!element) return false;
    
    const value = parseFloat(element.value);
    
    if (isNaN(value)) {
        showErrorMessage(inputId, `Please enter a valid ${fieldName}`);
        return false;
    }
    
    if (min !== null && value < min) {
        showErrorMessage(inputId, `${fieldName} must be at least ${min}`);
        return false;
    }
    
    if (max !== null && value > max) {
        showErrorMessage(inputId, `${fieldName} must be at most ${max}`);
        return false;
    }
    
    clearErrorMessage(element);
    return true;
}

/**
 * Display results in the results area
 * @param {string} message - The message to display
 * @param {string} type - The type of message (success, warning, error)
 */
function displayResult(message, type = 'success') {
    const resultElement = document.getElementById('cmessage');
    if (resultElement) {
        resultElement.textContent = message;
        resultElement.className = type;
    }
}

/**
 * Format number to specified decimal places
 * @param {number} num - The number to format
 * @param {number} decimals - Number of decimal places
 * @returns {string} - Formatted number
 */
function formatNumber(num, decimals = 1) {
    return Number(num).toFixed(decimals);
}

/**
 * Smooth scroll to element
 * @param {string} elementId - The ID of the element to scroll to
 */
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

/**
 * Show loading state on button
 * @param {string} buttonId - The button element ID
 * @param {boolean} loading - Whether to show loading state
 */
function setButtonLoading(buttonId, loading = true) {
    const button = document.getElementById(buttonId);
    if (button) {
        if (loading) {
            button.disabled = true;
            const originalText = button.innerHTML;
            button.setAttribute('data-original-text', originalText);
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Calculating...';
        } else {
            button.disabled = false;
            const originalText = button.getAttribute('data-original-text');
            if (originalText) {
                button.innerHTML = originalText;
            }
        }
    }
}

/**
 * Debounce function to limit function calls
 * @param {Function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @returns {Function} - The debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Get current page name from URL
 * @returns {string} - The current page name
 */
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    return page || 'index.html';
}

/**
 * Highlight current navigation item
 */
function highlightCurrentNavItem() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Initialize highlight on page load
document.addEventListener('DOMContentLoaded', highlightCurrentNavItem);

/**
 * Handle form submission with validation
 * @param {Function} calculationFunction - The calculation function to call
 * @param {Array} requiredFields - Array of required field objects
 * @param {string} buttonId - The calculate button ID
 */
function handleFormSubmission(calculationFunction, requiredFields, buttonId = 'calculate') {
    // Show loading state
    setButtonLoading(buttonId, true);
    
    // Small delay to show loading state
    setTimeout(() => {
        try {
            // Validate required fields
            if (validateRequiredFields(requiredFields)) {
                // Call the calculation function
                calculationFunction();
                
                // Scroll to results
                scrollToElement('cmessage');
            }
        } catch (error) {
            console.error('Calculation error:', error);
            displayResult('An error occurred during calculation. Please check your inputs.', 'error');
        } finally {
            // Remove loading state
            setButtonLoading(buttonId, false);
        }
    }, 300);
}

// Export functions for use in other scripts
window.PediatricCalc = {
    validateRequiredFields,
    validateNumericInput,
    displayResult,
    formatNumber,
    showErrorMessage,
    clearErrorMessage,
    handleFormSubmission,
    setButtonLoading,
    scrollToElement,
    debounce
};
