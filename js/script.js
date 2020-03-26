$(document).ready(function() {
  $(".hamburger-link").click(() => {
    $(".menu-inner").toggleClass("open");
  });

  $(".nav-link").on('click', (event) => {
    var hash = event.target.getAttribute("data-section");
    $(".menu-inner").toggleClass("open");
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(hash).offset().top
      },
      1000
    );
  });

  $(".chevron-down").on('click', (event) => {
    var hash = event.target.getAttribute("data-section");
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(hash).offset().top
      },
      1000
    );
  });
});
