// Add this script to your HTML or link it from an external file

document.addEventListener("DOMContentLoaded", function() {
    // Get the form and submit button by their IDs
    const signupForm = document.getElementById("signupForm");
    const submitButton = document.getElementById("submitButton");

    // Add an event listener to the submit button
    submitButton.addEventListener("click", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the email and password values from the input fields
        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        // Print the email and password values to the console
        console.log("Email:", email);
        console.log("Password:", password);
    });
});
// Get all social media buttons
const linkedinButton = document.querySelector('.btn-linkedin');
const twitterButton = document.querySelector('.btn-twitter');
const facebookButton = document.querySelector('.btn-facebook');

// Add click event listeners to the buttons
linkedinButton.addEventListener('click', function() {
    console.log('Sign up with LinkedIn clicked!');
});

twitterButton.addEventListener('click', function() {
    console.log('Sign up with Twitter clicked!');
});

facebookButton.addEventListener('click', function() {
    console.log('Sign up with Facebook clicked!');
});
