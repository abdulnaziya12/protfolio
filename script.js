document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript Loaded");

    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
        form.reset();
    });
});