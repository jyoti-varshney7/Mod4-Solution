(function (window) {
  var goodByeSpeaker = {};

  var greeting = "Good Bye ";
  goodByeSpeaker.speak = function (name) {
    console.log(greeting + name);
  }

  window.goodByeSpeaker = goodByeSpeaker;

})(window);



