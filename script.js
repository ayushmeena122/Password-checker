// Get the password input from HTML
const passwordInput = document.getElementById("password");

// Get the Show/Hide button
const togglePassword = document.getElementById("togglePassword");

// Get the strength text
const strengthText = document.getElementById("strengthText");

// Get the strength bar
const strengthFill = document.getElementById("strengthFill");


// Get all password requirements
const lengthRequirement = document.getElementById("length");
const uppercaseRequirement = document.getElementById("uppercase");
const lowercaseRequirement = document.getElementById("lowercase");
const numberRequirement = document.getElementById("number");
const specialRequirement = document.getElementById("special");


// Check the password whenever the user types
passwordInput.addEventListener("input", function () {

    // Get the password entered by the user
    const password = passwordInput.value;


    // Check password requirements

    // At least 8 characters
    const hasLength = password.length >= 8;

    // At least one uppercase letter
    const hasUppercase = /[A-Z]/.test(password);

    // At least one lowercase letter
    const hasLowercase = /[a-z]/.test(password);

    // At least one number
    const hasNumber = /[0-9]/.test(password);

    // At least one special character
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{}:;<>,.?/|`~]/.test(password);


    // Update the requirements on the screen
    updateRequirement(lengthRequirement, hasLength);

    updateRequirement(uppercaseRequirement, hasUppercase);

    updateRequirement(lowercaseRequirement, hasLowercase);

    updateRequirement(numberRequirement, hasNumber);

    updateRequirement(specialRequirement, hasSpecial);


    // Start the strength score at zero
    let score = 0;


    // Add one point for every requirement satisfied
    if (hasLength) {
        score++;
    }

    if (hasUppercase) {
        score++;
    }

    if (hasLowercase) {
        score++;
    }

    if (hasNumber) {
        score++;
    }

    if (hasSpecial) {
        score++;
    }


    // Update the strength meter
    updateStrength(score);
});


// Function to update each requirement
function updateRequirement(element, passed) {

    // Find the ✕ or ✓ symbol
    const currentText = element.textContent;

    // Get the requirement text without the symbol
    const requirementText = currentText.substring(2);


    if (passed) {

        // Add the "valid" class
        element.classList.add("valid");

        // Change ✕ to ✓
        element.textContent = "✓ " + requirementText;

    } else {

        // Remove the "valid" class
        element.classList.remove("valid");

        // Change ✓ back to ✕
        element.textContent = "✕ " + requirementText;
    }
}


// Function to update password strength
function updateStrength(score) {

    // No password entered
    if (score === 0) {

        strengthText.textContent = "WAITING";

        strengthFill.style.width = "0%";

        return;
    }


    // Weak password
    if (score <= 2) {

        strengthText.textContent = "WEAK";

        strengthFill.style.width = "25%";

        return;
    }


    // Medium password
    if (score <= 4) {

        strengthText.textContent = "MEDIUM";

        strengthFill.style.width = "60%";

        return;
    }


    // Strong password
    if (score === 5) {

        strengthText.textContent = "STRONG";

        strengthFill.style.width = "100%";
    }
}


// Show / Hide password
togglePassword.addEventListener("click", function () {

    // Check whether the password is currently hidden
    if (passwordInput.type === "password") {

        // Show password
        passwordInput.type = "text";

        togglePassword.textContent = "HIDE";

    } else {

        // Hide password
        passwordInput.type = "password";

        togglePassword.textContent = "SHOW";
    }
});