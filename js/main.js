let siteWelcome = document.getElementById("siteWelcome");
let navTopBar = document.getElementById("navTopBar");
let portfolioBar = document.getElementById("portfolioBar");
let portfolio1 = document.getElementById("portfolio1");
let portfolio2 = document.getElementById("portfolio2");
let portfolio3 = document.getElementById("portfolio3");
let userAbout = document.getElementById("userAbout");
let progressSkills = document.getElementById("progressSkills");
let portfolio = document.getElementById("portfolio");
let firstNavigator = document.querySelectorAll('.first-navigator a');

// loading延迟
setTimeout(function() {
    siteWelcome.classList.remove("active");
}, 1000);

// scroll滚动事件添加sticky效果
window.onscroll = function() {
    if(window.scrollY > 0) {
        navTopBar.classList.add("sticky");
    } else {
        navTopBar.classList.remove("sticky");
    }
}

// 作品集bar
portfolio1.onclick = function() {
    portfolioBar.className = "portfolioBar state-1";
}

portfolio2.onclick = function() {
    portfolioBar.className = "portfolioBar state-2";
}

portfolio3.onclick = function() {
    portfolioBar.className = "portfolioBar state-3";
}


// auto scroll smoothly
for(let i = 0; i < firstNavigator.length; i++) {
    firstNavigator[i].onclick = function(e) {
        console.log(e.target)
        e.preventDefault();
        let a = e.target;
        let href = a.getAttribute("href");
        let element = document.querySelector(href);
        let top = element.offsetTop;
        console.log(top)
        window.scrollTo(0, top + 90);
    }
}


