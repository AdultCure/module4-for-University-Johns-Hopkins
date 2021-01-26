(function(window) {
    var byeUser = new Object();
    var speakWord = "Good Bye";
    byeUser.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.byeUser = byeUser;
})(window);
