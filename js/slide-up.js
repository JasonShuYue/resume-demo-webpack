!function() {
    // var view = document.querySelectorAll("[section-x]");
    var view = View("[section-x]");
    var controller = {
        view: null,
        init: function(view) {
            this.view = view;
            this.bindEvents();
        },

        slideUp: function(closestIndex) {
            var view = this.view;
            let href = view[closestIndex].id;
            let targetNode = document.getElementById(href);
            targetNode.classList.add("slideUp");
        },

        bindEvents: function() {
            window.addEventListener("load", () => {
                var index = this.findClosestIndex();
                this.slideUp(index);
            });
            window.addEventListener("scroll", () => {
                var index = this.findClosestIndex();
                this.slideUp(index);
            });
        },
        //find closestIndex
        findClosestIndex: function() {
            let sectionPart = document.querySelectorAll("[section-x]");
            let contentContainer = document.getElementsByClassName("content-container")[0];
            let currentPosition = window.scrollY + document.documentElement.clientHeight;
            let closestIndex = 0;
            for(let i = 0 ;i < sectionPart.length; i++) {
                if(currentPosition >= sectionPart[i].offsetTop + contentContainer.offsetTop + 100) {
                    closestIndex = i;
                }
            }
            return closestIndex;
        }
    };
    controller.init(view);
}.call();