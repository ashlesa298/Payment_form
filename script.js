function validateField(id, condition, message = "") {
const input = document.getElementById(id);
const error = document.getElementById(id + "Error");

if (condition) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    error.textContent = "";
    return true;
} else {
    input.classList.add("invalid");
    input.classList.remove("valid");
    error.textContent = message;
    return false;
}
}

document.addEventListener("DOMContentLoaded", () => {
const today = new Date();

document.getElementById("name").addEventListener("input", () => {
    const value = document.getElementById("name").value.trim();
    validateField("name", /^[A-Za-z ]{3,}$/.test(value), "Name must be at least 3 letters.");
});

document.getElementById("email").addEventListener("input", () => {
    const value = document.getElementById("email").value.trim();
    validateField("email", /^\S+@\S+\.\S+$/.test(value), "Invalid email format.");
});

document.getElementById("pincode").addEventListener("input", () => {
    const value = document.getElementById("pincode").value.trim();
    validateField("pincode", /^\d{6}$/.test(value), "Pincode must be 6 digits.");
});

document.getElementById("cardNumber").addEventListener("input", () => {
    const value = document.getElementById("cardNumber").value.trim();
    validateField("cardNumber", /^\d{16}$/.test(value), "Card number must be 16 digits.");
});

document.getElementById("expiry").addEventListener("input", () => {
    const value = new Date(document.getElementById("expiry").value);
    validateField("expiry", value > today, "Expiration must be a future date.");
});

document.getElementById("cvv").addEventListener("input", () => {
    const value = document.getElementById("cvv").value.trim();
    validateField("cvv", /^\d{3,4}$/.test(value), "CVV must be 3 or 4 digits.");
});

  // Final form validation on submit
document.getElementById("paymentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const isNameValid = validateField("name", /^[A-Za-z ]{3,}$/.test(document.getElementById("name").value.trim()));
    const isEmailValid = validateField("email", /^\S+@\S+\.\S+$/.test(document.getElementById("email").value.trim()));
    const isPincodeValid = validateField("pincode", /^\d{6}$/.test(document.getElementById("pincode").value.trim()));
    const isCardValid = validateField("cardNumber", /^\d{16}$/.test(document.getElementById("cardNumber").value.trim()));
    const isExpiryValid = validateField("expiry", new Date(document.getElementById("expiry").value) > today);
    const isCvvValid = validateField("cvv", /^\d{3,4}$/.test(document.getElementById("cvv").value.trim()));

    if (isNameValid && isEmailValid && isPincodeValid && isCardValid && isExpiryValid && isCvvValid) {
    alert("Payment Successful!");
    this.reset();
    document.querySelectorAll("input").forEach(input => input.classList.remove("valid"));
    } else {
    alert("Please fix errors before submitting.");
    }
});
});
