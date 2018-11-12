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

        slideUp: function slideUp(closestIndex) {
            var view = this.view;
            var href = view[closestIndex].id;
            var targetNode = document.getElementById(href);
            targetNode.classList.add("slideUp");
        },

        bindEvents: function bindEvents() {
            var _this = this;

            window.addEventListener("load", function () {
                var index = _this.findClosestIndex();
                _this.slideUp(index);
            });
            window.addEventListener("scroll", function () {
                var index = _this.findClosestIndex();
                _this.slideUp(index);
            });
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