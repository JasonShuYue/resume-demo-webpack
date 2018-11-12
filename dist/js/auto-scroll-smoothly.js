"use strict";

!function () {
    // var view = document.querySelectorAll('.first-navigator a');
    var view = View('.first-navigator a');
    var controller = {
        view: null,
        init: function init(view) {
            this.view = view;
            this.initAnimation();
            this.bindEvents();
        },
        initAnimation: function initAnimation() {
            // Setup the animation loop.
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement: function scrollToElement(element) {
            var targetPosition = element.offsetTop + 90;
            var currentPosition = window.scrollY;
            var s = targetPosition - currentPosition;
            var t = Math.abs(s / 100 * 300);
            if (t > 500) {
                t = 500;
            }
            var coords = { x: 0, y: currentPosition };
            var tween = new TWEEN.Tween(coords).to({ x: 0, y: targetPosition }, t).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function () {
                window.scrollTo(0, coords.y);
            }).start();
        },
        bindEvents: function bindEvents() {
            var _this = this;

            var view = this.view;
            // auto scroll smoothly
            for (var i = 0; i < view.length; i++) {
                view[i].addEventListener("click", function (e) {
                    e.preventDefault();
                    var a = e.target;
                    var href = a.getAttribute("href");
                    var element = document.querySelector(href);
                    _this.scrollToElement(element);
                });
            }
        }
    };
    controller.init(view);
}.call();