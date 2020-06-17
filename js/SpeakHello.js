(function (window) {
  var helloSpeaker = {};

  var greeting = "Hello ";
  helloSpeaker.sayHello = function (name) {
    console.log(greeting + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
