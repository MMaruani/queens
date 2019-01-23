
window.requestAnimationFrame = (function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();


export function animate(animFunc, duration, ease) {
    const   animationDuration = duration ? duration : 500,
            animationEffect = ease || "easeInOut",
            startTime = new Date().getTime();

    let     requestId = 0,
            timeSpent, delta;

    start();
    function _animate() {
        timeSpent = new Date().getTime() - startTime;
        //delta = Math.sqrt(time) / sqrt;
        if(animationEffect === "easeInOut") {
            delta = 1/2 + Math.cos(Math.PI * (animationDuration - timeSpent) / (animationDuration)) /2;
        } else if(animationEffect === "easeOut" ) {
            delta =  1 - Math.cos(Math.PI/2 * (timeSpent) / (animationDuration));
        } else if(animationEffect === "easeIn" ) {
            delta = Math.sin(Math.PI/2 * (timeSpent) / (animationDuration));
        }

        if(timeSpent < animationDuration) {
            animFunc(delta, true);
            requestId = window.requestAnimationFrame(_animate);
        } else {
            // animation end
            animFunc(1, false);
            stop();
        }

    }
    function start() {
      requestId = window.requestAnimationFrame(_animate);
    }
    function stop() {
      if (requestId) {
        window.cancelAnimationFrame(requestId);
      }
      requestId = 0;
    }
}