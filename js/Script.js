(function (){
var names = ["Yaakov", "John", "Joe","Jason","Paul","Frank","Larry","Paula",
"Laura","Jim"];

for (var i = 0; i < names.length; i++) {
	var firstLetter = names[i].charAt(0).toLowerCase();

  	if(firstLetter === 'j'){
  		goodByeSpeaker.speak(names[i]);
  	}
  	else{
  		helloSpeaker.sayHello(names[i]);
  	}
}
	
})();





