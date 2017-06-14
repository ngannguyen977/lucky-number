

$(document).ready(function() {

    $.fn.animateRotate = function(angle, duration, easing, complete) {
      var args = $.speed(duration, easing, complete);
      var step = args.step;
      return this.each(function(i, e) {
        args.complete = $.proxy(args.complete, e);
        args.step = function(now) {
          $.style(e, 'transform', 'rotate(' + now + 'deg)');
          if (step) return step.apply(e, arguments);
        };
        $({deg: 0}).animate({deg: angle}, args);
      });
    };
    $("#main-page").css({
        "height": "100vh",
        "width": "100%"
    });
    $("#main-page").fadeIn();
    $(".maincontent").fadeIn();
    
    $(".mainlink").on("click", function() {
        $(".maincontent").fadeOut();
        $("#main-page").animate({
            width: "25px",
            height: "375px"
        }, function() {
            $(this).animateRotate(90);
        });
        
        setTimeout(function() {
            $("#main-page").fadeOut();       
        }, 300);
        
        setTimeout(function() {
            $("#next-page").animateRotate(0, 0);
            $("#next-page").css("height", "25px");
            $("#next-page").css("width", "375px");
            $("#next-page").fadeIn();
            $("#next-page").animate({
                backgroundColor: "#27ae60"
            }, function() {
                $(this).animate({
                    height: "100vh"
                }, function() {
                    $(this).animate({
                        width: "100%"
                    }, function() {
                        $(".nextcontent").fadeIn(100);
                    });
                });
            });
        }, 300);
    });
        
    $(".nextlink").on("click", function() {
        $(".nextcontent").fadeOut();
        $("#next-page").animate({
            width: "25px",
            height: "375px"
        }, function() {
            $(this).animateRotate(-90);
        });
        
        setTimeout(function() {
            $("#next-page").fadeOut();          
        }, 300);
        
        setTimeout(function() {
        $("#main-page").animateRotate(0, 0);
        $("#main-page").css("height", "25px");
        $("#main-page").css("width", "375px");
            $("#main-page").fadeIn();
            $("#main-page").animate({
                height: "100vh"
            }, function() {
                $(this).animate({
                    width: "100%"
                }, function() {
                    $(".maincontent").fadeIn(100);
                });
            });
        }, 300);
    });
    
    /* TOGGLE SIDEBAR MENU
    *********************************************/
    $('#nav-btn').click(function() {
        toggleSideBar(1000);
        var settingButton = $('#nav-btn'),
        settingButtonIcon = $('#nav-btn i');

        function toggleSideBar(speed) {
            $('#nav-btn, #sidebar').toggleClass('active', speed, "easeOutQuint");
            $('.btn-close').click(function(){
                // $('#sidebar').hide();
                // $('.nav-btn').show();
            })
            if (settingButtonIcon.hasClass('fa-cogs')){
                settingButtonIcon.removeClass('fa-cogs').addClass('fa-close');
                settingButton.css('cursor', 'pointer');
            }
            else {
                settingButtonIcon.delay(3000).removeClass('fa-close').addClass('fa-cogs');
                settingButton.css('cursor', '');
            }
        }
    });
});
