!function() {
    var view = document.querySelectorAll("[section-x]");
    var controller = {
        view: null,

        init: function(view) {
            this.view = view;
            this.bindEvents();
        },

        bindEvents: function() {
            window.addEventListener("load",  () => {
                var closestIndex = this.findClosestIndex();
                this.heighLight(closestIndex);
            });

            window.addEventListener("scroll", () => {
                var closestIndex = this.findClosestIndex();
                this.heighLight(closestIndex);
            });
        },

        heighLight: function(closestIndex) {
            var view = this.view;
            var href = view[closestIndex].id;
            let targetNode = document.querySelector('a[href="#'+ href +'"]');

            this.clearHighLight();
            targetNode.parentNode.classList.add("heighlight");
        },

        clearHighLight: function() {
            let firstNavigatorLi = document.querySelectorAll('.first-navigator');
            for(let i = 0; i < firstNavigatorLi.length; i++) {
                firstNavigatorLi[i].classList.remove("heighlight");
            }
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