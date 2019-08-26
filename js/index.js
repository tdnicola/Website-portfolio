//scrolling
    window.onscroll = function() { stickyBar() };
    // Get the navbar
    window.addEventListener('scroll', stickyBar);
    var navbar = document.getElementById("menubar");
    var sticky = navbar.offsetTop;
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function stickyBar() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
