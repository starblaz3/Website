// sticky navbar    
let navbar = document.getElementById('navbar');
let offsetter = null;
if (window.location.toString().includes("index")) {
    offsetter = document.getElementById("home-bg");    
    let count=localStorage.getItem("counter");
    if(count==null)
        count=1;
    else    
        count=1+Number(count);
    localStorage.setItem("counter",count);
    console.log(count);
    document.getElementById("counter-id").innerHTML="You visited the page "+count+" times";    
    
}
else if (window.location.toString().includes("images")) {
    offsetter = document.getElementById("page-bg");
}
else if (window.location.toString().includes("table")) {
    offsetter = document.getElementById("table-bg");
}
if (navbar && offsetter) {
    let navPos = navbar.getBoundingClientRect().top;
    window.addEventListener("scroll", e => {
        let scrollPos = window.scrollY;
        if (scrollPos > navPos) {
            navbar.classList.add('sticky');
            document.getElementById("home-bg").style.paddingTop = navbar.offsetHeight + "px";
        }
        else {
            navbar.classList.remove("sticky");
            document.getElementById("home-bg").style.paddingTop = 0 + "px";
        }
    });
}
// images cycling code
let count = 0;
let intToStr = { 0: "../media/images/DP2.jpg", 1: "../media/images/picture_2022-02-21_15-04-18.jpg", 2: "../media/images/resumeDP.jpg", 3: "../media/images/Screenshot_20220414_040438.png", 4: "../media/images/chanz.jpg" };
function rotateImg() {
    count += 1
    count = count % 5;
    document.getElementById("img").src = intToStr[count];
}

// form input code
let formPage = document.getElementById("form");
let dict = [];
let table = document.getElementById("table");
if (formPage) {
    formPage.addEventListener("submit", function (event) {
        event.preventDefault();
        if (formPage["name"].value != "" || formPage["skill"].value != "" || formPage["comment"].value != "") {
            dict[formPage["name"].value] = [formPage["skill"].value, formPage["level"].value, formPage["comment"].value];
            var row = table.insertRow();
            row.insertCell().innerHTML = formPage["name"].value;
            row.insertCell().innerHTML = formPage["skill"].value;
            row.insertCell().innerHTML = formPage["level"].value;
            row.insertCell().innerHTML = formPage["comment"].value;
        }
        console.log(dict);
    });
}

// scroll to top button function
if (document.getElementById("top-button")) {
    document.getElementById("top-button").onclick = function (e) {
        scrollTo(0, 0);
    };
}


// center the name element in home
if(navbar)
{
    let navHeight=navbar.offsetHeight;
    console.log("navheight:"+document.getElementsByClassName('home-name-bg')[0].offsetTop);
    document.getElementsByClassName("home-name-bg")[0].style.marginTop="-"+navHeight+"px";
}

// change img source using js for phone for about me section
if(window.matchMedia("(max-width:480px)").matches)
{
    document.getElementsByClassName("about-me-pic")[0].src="../media/images/DP1.jpg";
}