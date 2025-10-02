window.onload = function () {
    document.getElementById("joshua").onclick = function () {
        document.getElementById("teamphoto").src = "/assets/img/joshua.jpg";
        document.getElementById("teamname").innerHTML = "Joshua Herron";
        document.getElementById("teamwebsite").href = "https://joshiepoo.com/";
        document.getElementById("teamSTiBaRC").href = "https://stibarc.com/user.html?username=herronjo";
        document.getElementById("teamdesc").innerHTML = "Founder and CEO of STiBaRC, LLC, Joshua Herron first released STiBaRC in 2017, as a tribute to his friend Andrew. Josh has experimented and released a series of various different programs, including web-based game 'Ketchup the Banana' and the microblogging platform Thinkblog. An avid programmer, Josh graduated from the Ohio State University in 2024 with a degree in Computer Science.";
        openTeamWindow()
    };

    document.getElementById("sophie").onclick = function () {
        openTeamWindow()
    };

    document.getElementById("joseph").onclick = function () {
        openTeamWindow()
    };
}

function openTeamWindow() {
    document.body.style.overflow = 'hidden';
    document.getElementById("teampopup").style.display = 'block';
}