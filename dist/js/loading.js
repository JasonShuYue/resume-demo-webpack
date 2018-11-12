"use strict";

!function () {
    // var view = document.getElementById("siteWelcome");
    var view = View("#siteWelcome");
    var controller = {
        view: null,

        init: function init(view) {
            var _this = this;

            this.view = view;
            // loading延迟
            setTimeout(function () {
                _this.view.classList.remove("active");
                // this.deactive(this.view);
            }, 100);
        }

        // deactive: () => {
        //     console.log()
        // },
    };
    controller.init(view);
}.call();