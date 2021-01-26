(function(window) {
    var helloUser = new Object();
    var speakWord = "Hello";
    helloUser.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.helloUser = helloUser;
})(window);
