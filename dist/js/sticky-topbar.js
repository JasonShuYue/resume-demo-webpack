"use strict";

!function () {
    // var view = document.getElementById("navTopBar");
    var view = View("#navTopBar");
    var controller = {
        view: null,

        init: function init(view) {
            this.view = view;
            this.bindEvents();
        },

        bindEvents: function bindEvents() {
            var _this = this;

            var view = this.view;
            window.addEventListener("load", function (e) {
                if (window.scrollY > 0) {
                    _this.addSticky();
                } else {
                    _this.removeSticky();
                }
            });
            window.addEventListener("scroll", function (e) {
                if (window.scrollY > 0) {
                    _this.addSticky();
                } else {
                    _this.removeSticky();
                }
            });
        },

        // navBar sticky
        addSticky: function addSticky() {
            var view = this.view;
            view.classList.add("sticky");
        },
        removeSticky: function removeSticky() {
            var view = this.view;
            view.classList.remove("sticky");
        }
    };
    controller.init(view);
}.call();