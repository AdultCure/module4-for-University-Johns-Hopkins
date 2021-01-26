(function(window) {
    let speakWord = "Hello";
    window.helloSpeaker = function (name) {
        console.log(speakWord + " " + name);
    };

})(window);
