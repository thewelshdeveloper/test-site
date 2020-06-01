$(document).ready(function() {
  $(".hamburger-link").click(() => {
      event.preventDefault();
    $(".home-menu-inner").toggleClass("open");
  });

  $(".nav-link").on('click', (event) => {
      event.preventDefault();
    var hash = event.target.getAttribute("data-section");
    $(".home-menu-inner").toggleClass("open");
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(hash).offset().top
      },
      1000
    );
  }); 

  $(".chevron-icon").on('click', (event) => {
      event.preventDefault();
    var hash = event.target.getAttribute("data-section");
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(hash).offset().top
      },
      1000
    );
  });
});
