window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("desktopnav").style.backgroundColor = "var(--navbg)";
        document.getElementById("desktopnav").style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        document.getElementById("desktopnav").style.backdropFilter = 'blur(14px)';
        document.getElementById("mobilenav").style.backgroundColor = "var(--navbg)";
        document.getElementById("mobilenav").style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        document.getElementById("mobilenav").style.backdropFilter = 'blur(14px)';
    } else {
        document.getElementById("desktopnav").style.backgroundColor = "transparent";
        document.getElementById("desktopnav").style.boxShadow = "none";
        document.getElementById("desktopnav").style.backdropFilter = 'blur(0px)';
        document.getElementById("mobilenav").style.backgroundColor = "transparent";
        document.getElementById("mobilenav").style.boxShadow = "none";
        document.getElementById("mobilenav").style.backdropFilter = 'blur(0px)';

    }
}

window.onload = function () {
    document.getElementById("mobilemenu").onclick = function () {
        console.log("Mobile menu clicked");
        openNav()
    };

    document.getElementById("mobilebg").onclick = function () {
        closeNav()
    };

    document.getElementById("mobilemenuexit").onclick = function () {
        closeNav()
    };
}

function openNav() {
    document.getElementById("mobilenav").style.top = "-7vh";
    document.getElementById("mobilebg").style.backdropFilter = 'blur(0px)';
    document.body.style.overflow = 'hidden';
    document.getElementById("mobilebg").style.display = 'block';
    setTimeout(function () {
        document.getElementById("mobilepanel").style.left = '0';
        document.getElementById("mobilebg").style.backdropFilter = 'blur(13px)';
    }, 50);
}

function closeNav() {
    document.body.style.overflow = 'visible';
    document.getElementById("mobilenav").style.top = '0';
    setTimeout(function () {
        document.getElementById("mobilebg").style.backdropFilter = 'blur(0px)';
        document.getElementById("mobilepanel").style.left = '-75%';
    }, 50);
    document.getElementById("mobilebg").style.display = 'none';
}