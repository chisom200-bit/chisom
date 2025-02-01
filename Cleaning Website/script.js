// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-bx');
    navbar.classList.toggle('active');  // Toggle class to show/hide menu
};


// Login Page Form Validation

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".login-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = form.querySelector("input[type='email']").value.trim();
        const password = form.querySelector("input[type='password']").value.trim();

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 8 characters long.");
            alert("Password must contain a capital letter, symbol and a number");
            return;
        }

        alert("Congrats you have Logged into this Website!");
        // You can replace this alert with actual form submission logic.
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});

// Sign Up Page Form Validation

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".signup-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = form.querySelector("input[name='username']").value.trim();
        const phone = form.querySelector("input[name='phone']").value.trim();
        const address = form.querySelector("input[name='address']").value.trim();
        const password = form.querySelector("input[name='password']").value.trim();

        if (username.length < 8) {
            alert("Username must be at least 8 characters long.");
            alert("Username must have a Capital letter, symbol and a number");
            return;
        }

        if (phone.length < 11) {
            alert("Phone Number must have 11 digits");
            return;
        }

        if (address.length < 10) {
            alert("Address must be at least 10 characters long.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 8 characters long.");
            alert("Password must contain a capital letter, symbol and a number");
            return;
        }

        alert("Congrats You have created an Account with us!");
        // You can replace this alert with actual form submission logic.
        
    });

    function validatePhone(phone) {
        const phonePattern = /^[0-9]{10,15}$/;
        return phonePattern.test(phone);
    }
});
