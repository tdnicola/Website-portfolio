//waiting until page is loaded for typewritter effect
function showTyping() {
    var typeWriter = document.querySelector('.typewriter');
    setTimeout(function() {
        typeWriter.classList.remove('hidden');
    }, 500 );
}

window.addEventListener('load', showTyping);