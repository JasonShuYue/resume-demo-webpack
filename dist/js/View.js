"use strict";

window.View = function (Selector) {
    var view = document.querySelectorAll(Selector);
    if (view.length === 1) {
        return view[0];
    } else {
        return view;
    }
};