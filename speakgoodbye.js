(function(window) {
    let speakWord = "Good Bye";
    window.byeSpeaker = function (name) {
        console.log(speakWord + " " + name);
    };

})(window);
