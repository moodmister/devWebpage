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

var mymap = L.map('mapid').setView([43.8408650611807, 25.95971783771574], 7);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  foo: 'bar',
  maxZoom: 20,
  attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(mymap);

var marker = L.marker([43.844613, 25.959775]).addTo(mymap);