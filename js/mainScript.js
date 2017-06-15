

$(document).ready(function() {
    /* TOGGLE SIDEBAR MENU
    *********************************************/
    $('#nav-btn').click(function() {
        toggleSideBar(1000);
        var settingButton = $('#nav-btn');
        // settingButtonIcon = $('#nav-btn i');

        function toggleSideBar(speed) {
            $('.custom').addClass('active', speed, "easeOutQuint");
            $('.btn-close').click(function(){
                $('.custom').removeClass('active', speed, "easeOutQuint");
            })
            
        }
    });
    /* POPUP
    *********************************************/
    var navItem = $('.nav-item');
    var overlay = $('.overlay');
    navItem.click(function() {
      overlay.addClass('is-active')
    });

    overlay.click(function(e) {
      if ($(event.target).hasClass("overlay")) {
        $(this).removeClass('is-active');
      } else {
        return false;
      }
    });

});
