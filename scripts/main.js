var $win = $(window);
var $containers = $('.container'); // Change this to affect your desired element.

$win.on('scroll', function () {
    var scrollTop = $win.scrollTop();

    $containers.each(function () {
        var $self = $(this);
        var prev = $self.offset();
        if ( (scrollTop - prev.top) > -300) {
          $self.css({"animation":"fadein 5s", "opacity":"1"});
        }

    });

}).scroll();

function ShowMobileMenu() {
    var obj = document.getElementById('mobile-menu');
    if (obj.style.height == '100%')
        obj.style.height = '0';
    else
        obj.style.height = '100%';
}

function DarkModeToggle() {
    document.body.classList.toggle("lightMode");
    document.getElementById("nav").classList.toggle("lightMode-nav");
    document.getElementById('email-link').classList.toggle("lightMode");

    var moon = document.getElementsByClassName("fa-moon");
    var sun = document.getElementsByClassName("fa-sun");

    var sunCSS = window.getComputedStyle(sun[0]);
    var sunDisplay = sunCSS.getPropertyValue('display');

    var mobilesunCSS = window.getComputedStyle(sun[1]);
    var mobilesunDisplay = mobilesunCSS.getPropertyValue('display');
    if (sunDisplay == "block") {
        sun[0].style.display = "none";
        moon[0].style.display = "block";
    }
    else {
        sun[0].style.display = "block";
        moon[0].style.display = "none";
    }
    
    if (mobilesunDisplay == "inline-block") {
        sun[1].style.display = "none";
        moon[1].style.display = "inline-block";
    }
    else {
        sun[1].style.display = "inline-block";
        moon[1].style.display = "none";
    }
}

function ScrollTo(point) {
    var vpheight = window.innerHeight;
    console.log(vpheight * point);
    window.scrollTo(0, vpheight * point);
}

