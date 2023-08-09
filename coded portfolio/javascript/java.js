$("dropdown-menu").ready(function () {
    $('.dropdown-toggle').click(function () {
      $(this).next('.dropdown-menu').toggleClass('show');
    });
    $("dropdown-menu").click(function (e) {
      var target = e.target;
      if ($(target).is('.dropdown-toggle')  & $(target).parents().is('.dropdown-menu')) {
        $('.dropdown-menu').removeClass('show');
      }
    });
  });
  console.log("function");

  $(document).ready(function () {
    // Add a hover event handler for buttons
    $('button').hover(
      function () {
        // Mouse enter - change background color to dark blue
        $(this).css('background-color', 'darkblue');
      },
      function () {
        // Mouse leave - reset background color to its original state
        $(this).css('background-color', '');
      }
    );
  });
  



