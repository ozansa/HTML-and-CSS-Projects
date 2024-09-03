// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

setInterval(() => {
    document.getElementById('animated-heading').style.color =
        `hsl(${Math.random() * 360}, 100%, 50%)`;
}, 500);