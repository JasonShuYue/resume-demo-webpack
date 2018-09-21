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
}, 100);

addSticky();
// scroll滚动事件添加sticky效果, heighLight效果
window.onscroll = function() {
    let index = findClosestIndex();
    addSticky();
    heighLight(index);
    slideUp(index);
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
        e.preventDefault();
        let a = e.target;
        let href = a.getAttribute("href");
        let element = document.querySelector(href);
        let targetPosition = element.offsetTop + 90;
        let currentPosition = window.scrollY;
        let s = targetPosition - currentPosition;
        let t = Math.abs((s/100) * 300);
        if(t > 500) {
            t = 500;
        }
        let coords = { x: 0, y: currentPosition };
        let tween = new TWEEN.Tween(coords)
            .to({ x: 0, y: targetPosition }, t)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function() {
               window.scrollTo(0, coords.y);
            })
            .start();
    }
}


heighLight(findClosestIndex());
slideUp(findClosestIndex());


// heighLight Nav bar li
function heighLight(closestIndex) {
    let sectionPart = document.querySelectorAll("[section-x]");
    let href = sectionPart[closestIndex].id;
    let firstNavigatorLi = document.querySelectorAll('.first-navigator');
    let targetNode = document.querySelector('a[href="#'+ href +'"]');

    for(let i = 0; i < firstNavigatorLi.length; i++) {
        firstNavigatorLi[i].classList.remove("heighlight");
    }
    targetNode.parentNode.classList.add("heighlight");
}

//find closestIndex
function findClosestIndex() {
    let sectionPart = document.querySelectorAll("[section-x]");
    let contentContainer = document.getElementsByClassName("content-container")[0];
    let currentPosition = window.scrollY + document.documentElement.clientHeight;
    let closestIndex = 0;
    for(let i = 0 ;i < sectionPart.length; i++) {
        if(currentPosition >= sectionPart[i].offsetTop + contentContainer.offsetTop + 100) {
            closestIndex = i;
        }
    }
    console.log(closestIndex)
    return closestIndex;
}

// navBar sticky
function addSticky() {
    if(window.scrollY > 0) {
        navTopBar.classList.add("sticky");
    } else {
        navTopBar.classList.remove("sticky");
    }
}

// Element SlideUp
function slideUp(closestIndex) {
    let sectionPart = document.querySelectorAll("[section-x]");
    let href = sectionPart[closestIndex].id;
    let targetNode = document.getElementById(href);
    targetNode.classList.add("slideUp");
}

// Setup the animation loop.
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);




