import {animate} from "./animate.js"

export function scrollToTop(event) {
    event.preventDefault();
    scrollToPos(0, 500);
}

export function scrollToPos (scrollEndY, speed) {
    var scrollInitY = window.scrollY || window.pageYOffset,
        scrollHeight = scrollEndY - scrollInitY,
        x = window.scrollX;

    animate(function(delta, doAnimate) {
        if(doAnimate) {
            window.scrollTo(x, scrollInitY + (scrollHeight * delta));
        }
   }, speed);
}