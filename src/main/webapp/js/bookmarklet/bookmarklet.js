/*
 * JS to include as href value
 * Then the link should be dragged to favorite bar to install as bookmarklet
 *
 * This function load an extra JS script (sendToRemindIt_all.js) and run the sendToRemindIt function.
 */
(function () {
    var urlJS = 'http://localhost:8080/js/bookmarklet/sendToRemindIt_all.min.js';

    //Load sendToRemindIt_all.js only if needed
    if (window.sendToRemindIt === undefined) {

        var done = false;
        var script = document.createElement('script');
        script.src = urlJS;
        script.onload = script.onreadystatechange = function () {
            if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                done = true;
                sendToRemindIt();
            }
        };
        document.getElementsByTagName('head')[0].appendChild(script);

    } else {
        sendToRemindIt();
    }

})();