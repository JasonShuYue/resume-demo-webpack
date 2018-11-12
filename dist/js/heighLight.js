"use strict";

!function () {
    // var view = document.querySelectorAll("[section-x]");
    var view = View("[section-x]");
    var controller = {
        view: null,

        init: function init(view) {
            this.view = view;
            this.bindEvents();
        },

        bindEvents: function bindEvents() {
            var _this = this;

            window.addEventListener("load", function () {
                var closestIndex = _this.findClosestIndex();
                _this.heighLight(closestIndex);
            });

            window.addEventListener("scroll", function () {
                var closestIndex = _this.findClosestIndex();
                _this.heighLight(closestIndex);
            });
        },

        heighLight: function heighLight(closestIndex) {
            var view = this.view;
            var href = view[closestIndex].id;
            var targetNode = document.querySelector('a[href="#' + href + '"]');

            this.clearHighLight();
            targetNode.parentNode.classList.add("heighlight");
        },

        clearHighLight: function clearHighLight() {
            var firstNavigatorLi = document.querySelectorAll('.first-navigator');
            for (var i = 0; i < firstNavigatorLi.length; i++) {
                firstNavigatorLi[i].classList.remove("heighlight");
            }
        },

        //find closestIndex
        findClosestIndex: function findClosestIndex() {
            var sectionPart = document.querySelectorAll("[section-x]");
            var contentContainer = document.getElementsByClassName("content-container")[0];
            var currentPosition = window.scrollY + document.documentElement.clientHeight;
            var closestIndex = 0;
            for (var i = 0; i < sectionPart.length; i++) {
                if (currentPosition >= sectionPart[i].offsetTop + contentContainer.offsetTop + 100) {
                    closestIndex = i;
                }
            }
            return closestIndex;
        }
    };
    controller.init(view);
}.call();