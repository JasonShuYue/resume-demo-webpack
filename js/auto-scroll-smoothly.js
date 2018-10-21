!function() {
    var view = document.querySelectorAll('.first-navigator a');
    var controller = {
        view: null,
        init: function(view) {
            this.view = view;
            this.initAnimation();
            this.bindEvents();
        },
        initAnimation: function() {
            // Setup the animation loop.
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement: function(element) {
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
        },
        bindEvents: function() {
            var view = this.view;
            // auto scroll smoothly
            for(let i = 0; i < view.length; i++) {
                view[i].addEventListener("click", (e) => {
                    e.preventDefault();
                    let a = e.target;
                    let href = a.getAttribute("href");
                    let element = document.querySelector(href);
                    this.scrollToElement(element);
                });
            }
        },
    };
    controller.init(view);
}.call();