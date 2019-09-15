document.addEventListener("DOMContentLoaded", function(event) { 
    setTimeout(function(){
    new TypeIt('.typing')
      .type('&lt;/web&gt; Developer')
      .pause(1000)
      .delete()
      .type('Developer')
      .pause(1000)
      .delete()
      .type('Likes to code')
      .go();
  }, 500);
});