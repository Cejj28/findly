document.addEventListener('DOMContentLoaded', function() {
    // Get forms
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    // Password toggle functionality
    setupPasswordToggles();
    
    // Password strength meter (for registration)
    setupPasswordStrengthMeter();
    
    // Form validation and submission
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginSubmit);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegisterSubmit);
    }
    
    // Social login buttons
    setupSocialButtons();
});

// Function to toggle password visibility
function setupPasswordToggles() {
    const passwordToggles = document.querySelectorAll('.password-toggle');
    
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const passwordField = this.previousElementSibling;
            
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                this.textContent = 'Hide';
            } else {
                passwordField.type = 'password';
                this.textContent = 'Show';
            }
        });
    });
}

// Function to setup password strength meter
function setupPasswordStrengthMeter() {
    const passwordField = document.getElementById('password');
    const strengthBar = document.getElementById('strengthBar');
    const strengthText = document.getElementById('strengthText');
    
    if (passwordField && strengthBar && strengthText) {
        passwordField.addEventListener('input', function() {
            const password = this.value;
            const strength = calculatePasswordStrength(password);
            
            // Update strength bar
            strengthBar.className = 'strength-bar';
            
            if (password.length === 0) {
                strengthBar.style.width = '0';
                strengthText.textContent = 'Password strength';
            } else if (strength < 30) {
                strengthBar.classList.add('strength-weak');
                strengthText.textContent = 'Weak';
                strengthText.style.color = '#ef4444';
            } else if (strength < 60) {
                strengthBar.classList.add('strength-fair');
                strengthText.textContent = 'Fair';
                strengthText.style.color = '#f59e0b';
            } else if (strength < 80) {
                strengthBar.classList.add('strength-good');
                strengthText.textContent = 'Good';
                strengthText.style.color = '#3d6eee';
            } else {
                strengthBar.classList.add('strength-strong');
                strengthText.textContent = 'Strong';
                strengthText.style.color = '#10b981';
            }
        });
    }
}

// Function to calculate password strength
function calculatePasswordStrength(password) {
    let strength = 0;
    
    // Length contribution
    if (password.length >= 8) {
        strength += 25;
    }
    
    // Character variety contribution
    if (/[a-z]/.test(password)) strength += 10;
    if (/[A-Z]/.test(password)) strength += 15;
    if (/[0-9]/.test(password)) strength += 15;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 20;
    
    // Complexity contribution
    if (password.length >= 12) strength += 15;
    
    return Math.min(strength, 100);
}

// Function to handle login form submission
function handleLoginSubmit(e) {
    e.preventDefault();
    
    // Reset error messages
    clearErrors();
    
    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember')?.checked;
    
    // Validate email
    if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        return;
    }
    
    // Validate password
    if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters');
        return;
    }
    
    // If everything is valid, simulate login
    console.log('Login form submitted:', { email, password, remember });
    
    // Simulate API call with a delay
    showLoadingState(true);
    
    setTimeout(() => {
        // For demo, consider any login as successful
        showLoadingState(false);
        loginSuccess();
    }, 1500);
}

// Function to handle register form submission
function handleRegisterSubmit(e) {
    e.preventDefault();
    
    // Reset error messages
    clearErrors();
    
    // Get form values
    const firstName = document.getElementById('firstName')?.value;
    const lastName = document.getElementById('lastName')?.value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword')?.value;
    const terms = document.getElementById('terms')?.checked;
    
    // Validate first name and last name
    if (firstName && firstName.trim().length < 2) {
        showError('firstNameError', 'First name must be at least 2 characters');
        return;
    }
    
    if (lastName && lastName.trim().length < 2) {
        showError('lastNameError', 'Last name must be at least 2 characters');
        return;
    }
    
    // Validate email
    if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        return;
    }
    
    // Validate password
    if (password.length < 8) {
        showError('passwordError', 'Password must be at least 8 characters');
        return;
    }
    
    // Validate password strength
    const strength = calculatePasswordStrength(password);
    if (strength < 50) {
        showError('passwordError', 'Please create a stronger password');
        return;
    }
    
    // Validate confirm password
    if (confirmPassword && confirmPassword !== password) {
        showError('confirmPasswordError', 'Passwords do not match');
        return;
    }
    
    // Validate terms
    if (terms !== undefined && !terms) {
        showError('termsError', 'You must accept the terms and conditions');
        return;
    }
    
    // If everything is valid, simulate registration
    console.log('Registration form submitted:', { firstName, lastName, email, password });
    
    // Simulate API call with a delay
    showLoadingState(true);
    
    setTimeout(() => {
        // For demo, consider any registration as successful
        showLoadingState(false);
        registrationSuccess();
    }, 1500);
}

// Helper function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to show error message
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

// Helper function to clear all error messages
function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

// Helper function to show/hide loading state
function showLoadingState(isLoading) {
    const submitButton = document.querySelector('button[type="submit"]');
    
    if (submitButton) {
        if (isLoading) {
            submitButton.disabled = true;
            submitButton.innerHTML = '<span class="loading-spinner"></span> Please wait...';
        } else {
            submitButton.disabled = false;
            submitButton.innerHTML = submitButton.closest('#loginForm') ? 'Sign In' : 'Create Account';
        }
    }
}

// Set up social login buttons
function setupSocialButtons() {
    const socialButtons = document.querySelectorAll('.btn-social');
    
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const provider = this.classList.contains('btn-google') ? 'Google' : 'Facebook';
            console.log(`${provider} authentication requested`);
            
            // Simulate social auth with a delay
            this.innerHTML = `<span class="loading-spinner"></span> Connecting to ${provider}...`;
            this.disabled = true;
            
            setTimeout(() => {
                showNotification(`${provider} authentication successful!`);
                
                // Redirect to dashboard after successful login
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            }, 1500);
        });
    });
}

// Function to handle successful login
function loginSuccess() {
    showNotification('Login successful! Redirecting to your dashboard...');
    
    // Save login state in localStorage (for demo purposes)
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify({
        name: 'John Doe',
        email: document.getElementById('email').value,
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    }));
    
    // Redirect to dashboard after successful login
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

// Function to handle successful registration
function registrationSuccess() {
    showNotification('Registration successful! Please check your email to verify your account.', 5000);
    
    // Redirect to login page after successful registration
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}

// Notification function
function showNotification(message, duration = 3000) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification success';
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification to page
    document.body.appendChild(notification);
    
    // Show notification (with animation)
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto-close after specified duration
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    notification.remove();
                }
            }, 300);
        }
    }, duration);
}

// Add CSS for the notification and loading spinner
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: white;
        border-radius: var(--radius);
        box-shadow: var(--shadow-lg);
        padding: 15px 20px;
        z-index: 1000;
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .notification.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification.success {
        border-left: 4px solid var(--success);
    }
    
    .notification.error {
        border-left: 4px solid var(--danger);
    }
    
    .notification-close {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: var(--gray-500);
    }
    
    .loading-spinner {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: #fff;
        animation: spin 0.8s linear infinite;
        margin-right: 8px;
    }
    
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;
document.head.appendChild(style);