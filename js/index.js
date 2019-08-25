document.addEventListener('DOMContentLoaded', function() {
    // window.onscroll = function() {myFunction()};
    // Get the navbar
    window.addEventListener('scroll', stickyBar);
    var navbar = document.getElementById("menubar");
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function stickyBar() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add(".sticky")
        } else {
            navbar.classList.remove(".sticky");
        }
    }
})
