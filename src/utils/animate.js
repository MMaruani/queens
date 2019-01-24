
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                               window.webkitRequestAnimationFrame || window.msRequestAnimationFrame

window.cancelAnimationFrame  = window.cancelAnimationFrame || window.mozCancelAnimationFrame ||
                               window.webkitCancelAnimationFrame || window.msCancelAnimationFrame


export function animate(animFunc, duration, ease) {
    const   animationDuration = duration ? duration : 500,
            animationEffect = ease || "easeInOut",
            startTime = new Date().getTime();

    let     requestId, timeSpent, delta;

    start();
    function _animate() {
        timeSpent = new Date().getTime() - startTime;
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
    }
}
