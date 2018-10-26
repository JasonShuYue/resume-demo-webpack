!function() {
    // var view = document.getElementById("navTopBar");
    var view = View("#navTopBar");
    var controller = {
        view: null,

        init: function(view) {
            this.view = view;
            this.bindEvents();
        },

        bindEvents: function() {
            var view = this.view;
            window.addEventListener("load", (e) => {
                if(window.scrollY > 0) {
                    this.addSticky();
                } else {
                    this.removeSticky();
                }
            });
            window.addEventListener("scroll", (e) => {
                if(window.scrollY > 0) {
                    this.addSticky();
                } else {
                    this.removeSticky();
                }
            });
        },

        // navBar sticky
        addSticky: function() {
            var view = this.view;
            view.classList.add("sticky");
        },
        removeSticky: function () {
            var view = this.view;
            view.classList.remove("sticky");
        }
    };
    controller.init(view);
}.call();