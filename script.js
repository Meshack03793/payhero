const viewNames = ["view-home", "view-learn-more", "view-apply", "view-login"];
const validHomeSections = ["home", "about", "programmes", "news", "students", "contact"];

function updateView() {
    const hash = window.location.hash.slice(1);
    const activeView = viewNames.includes(hash)
        ? hash
        : validHomeSections.includes(hash)
            ? "view-home"
            : "view-login";
    document.body.dataset.view = activeView;

    viewNames.forEach((viewName) => {
        const view = document.getElementById(viewName);
        view.hidden = viewName !== activeView;
    });

    if (activeView === "view-home" && validHomeSections.includes(hash)) {
        const section = document.getElementById(hash);
        if (section) {
            section.scrollIntoView();
        }
    }
}

window.addEventListener("hashchange", updateView);
updateView();

function openViewInNewTab(viewName) {
    const url = `${window.location.pathname}${window.location.search}#${viewName}`;
    window.open(url, "_blank");
}

document.getElementById("learnMore").addEventListener("click", () => {
    openViewInNewTab("view-learn-more");
});

document.getElementById("apply").addEventListener("click", () => {
    openViewInNewTab("view-apply");
});

const menu = document.getElementById("mobileMenu");
const menuButton = document.getElementById("menuButton");
const closeMenuButton = document.getElementById("closeMenuButton");

menuButton.addEventListener("click", () => {
    menu.hidden = false;
    menuButton.setAttribute("aria-expanded", "true");
});

closeMenuButton.addEventListener("click", () => {
    menu.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
});

const applicationForm = document.getElementById("applicationForm");
const applicationName = document.getElementById("applicationName");
const applicationEmail = document.getElementById("applicationEmail");
const applicationNumber = document.getElementById("applicationNumber");
const applicationNameError = document.getElementById("applicationNameError");
const applicationEmailError = document.getElementById("applicationEmailError");
const applicationPhoneError = document.getElementById("applicationPhoneError");
const slipFile = document.getElementById("slip");
const certificateFile = document.getElementById("certificate");
const slipError = document.getElementById("slipError");
const certificateError = document.getElementById("certificateError");
const applicationResult = document.getElementById("applicationResult");

function setError(element, message) {
    element.textContent = message;
}

function clearError(element) {
    element.textContent = "";
}

function validateApplicationForm() {
    let isValid = true;

    if (applicationName.value.trim().length < 3) {
        setError(applicationNameError, "Name must be more than three");
        isValid = false;
    } else {
        clearError(applicationNameError);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicationEmail.value.trim())) {
        setError(applicationEmailError, "Enter a valid email");
        isValid = false;
    } else {
        clearError(applicationEmailError);
    }

    if (!/^(?:07|01)\d{8}$|^254\d{9}$/.test(applicationNumber.value.trim())) {
        setError(applicationPhoneError, "Enter a valid phone number");
        isValid = false;
    } else {
        clearError(applicationPhoneError);
    }

    if (!slipFile.value) {
        setError(slipError, "Upload your result slip");
        isValid = false;
    } else {
        clearError(slipError);
    }

    if (!certificateFile.value) {
        setError(certificateError, "Upload your leaving certificate");
        isValid = false;
    } else {
        clearError(certificateError);
    }

    return isValid;
}

applicationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    applicationResult.textContent = "";

    if (validateApplicationForm()) {
        applicationResult.textContent = "Form is valid";
        applicationResult.className = "ok";
    } else {
        applicationResult.textContent = "Fix the errors";
        applicationResult.className = "error";
    }
});

const loginForm = document.getElementById("loginForm");
const loginName = document.getElementById("loginName");
const loginEmail = document.getElementById("loginEmail");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");
const loginNameError = document.getElementById("loginNameError");
const loginEmailError = document.getElementById("loginEmailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");
const loginResult = document.getElementById("loginResult");

function validateLoginForm() {
    let isValid = true;

    if (loginName.value.trim().length < 2) {
        setError(loginNameError, "Name must be at least two characters");
        isValid = false;
    } else {
        clearError(loginNameError);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginEmail.value.trim())) {
        setError(loginEmailError, "Enter a valid email address");
        isValid = false;
    } else {
        clearError(loginEmailError);
    }

    if (passwordInput.value.trim().length < 8) {
        setError(passwordError, "Password must be at least 8 characters");
        isValid = false;
    } else {
        clearError(passwordError);
    }

    if (!confirmInput.value) {
        setError(confirmError, "Please confirm your password");
        isValid = false;
    } else if (confirmInput.value !== passwordInput.value) {
        setError(confirmError, "Passwords do not match");
        isValid = false;
    } else {
        clearError(confirmError);
    }

    return isValid;
}

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    loginResult.textContent = "";

    if (validateLoginForm()) {
        loginResult.textContent = "Form is valid!";
        loginResult.className = "ok";
        window.location.hash = "view-home";
    } else {
        loginResult.textContent = "Please fix the errors";
        loginResult.className = "error";
    }
});
