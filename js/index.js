//scrolling
window.onscroll = function() { stickyBar() };
    // Get the navbar
window.addEventListener('scroll', stickyBar);
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyBar() {
    var navbar = document.getElementById("menubar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

//waiting until page is loaded for typewritter effect
function showTyping() {
    var typeWriter = document.querySelector('.typewriter');
    typeWriter.classList.remove('hidden');
}

console.log('hello')
window.addEventListener('load', showTyping);