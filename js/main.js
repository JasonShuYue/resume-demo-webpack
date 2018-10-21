let portfolioBar = document.getElementById("portfolioBar");
let portfolio1 = document.getElementById("portfolio1");
let portfolio2 = document.getElementById("portfolio2");
let portfolio3 = document.getElementById("portfolio3");




// window.onload = function() {
//     heighLight(findClosestIndex());
//     // slideUp(findClosestIndex());
// };
//
// // scroll滚动事件添加sticky效果, heighLight效果
// window.onscroll = function() {
//     let index = findClosestIndex();
//     heighLight(index);
//     // slideUp(index);
// }

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





// // heighLight Nav bar li
// function heighLight(closestIndex) {
//     let sectionPart = document.querySelectorAll("[section-x]");
//     let href = sectionPart[closestIndex].id;
//     // console.log(href)
//     let firstNavigatorLi  = document.querySelectorAll('.first-navigator');
//     let targetNode = document.querySelector('a[href="#'+ href +'"]');
//
//     for(let i = 0; i < firstNavigatorLi.length; i++) {
//         firstNavigatorLi[i].classList.remove("heighlight");
//     }
//     targetNode.parentNode.classList.add("heighlight");
// }
//
// //find closestIndex
// function findClosestIndex() {
//     let sectionPart = document.querySelectorAll("[section-x]");
//     let contentContainer = document.getElementsByClassName("content-container")[0];
//     let currentPosition = window.scrollY + document.documentElement.clientHeight;
//     let closestIndex = 0;
//     for(let i = 0 ;i < sectionPart.length; i++) {
//         if(currentPosition >= sectionPart[i].offsetTop + contentContainer.offsetTop + 100) {
//             closestIndex = i;
//         }
//     }
//     return closestIndex;
// }

//
// // Element SlideUp
// function slideUp(closestIndex) {
//     let sectionPart = document.querySelectorAll("[section-x]");
//     let href = sectionPart[closestIndex].id;
//     let targetNode = document.getElementById(href);
//     targetNode.classList.add("slideUp");
// }






