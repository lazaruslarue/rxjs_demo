function changeColor(colorstring) {
  return function (evt) {
    return $(evt.target).css('background-color', colorstring);
  }
}


var overs = [];
var eles = [];
var subEles = [];
for (var i = 144 - 1; i >= 0; i--) {
  // an empty element
  var ele = $('<div ' + 'id="'+ 'i'+'" class="col s1"></div>')
  // a name for above
  var subEle = $('<p>' + i + '</p>')
  ele.append(subEle)
  $('#boxes').append(ele)

  eles.push(ele);
  subEles.push(subEle)


  var eleOver = Rx.Observable.fromEvent( ele, 'mouseover');
  overs.push(eleOver);
}


var eleOverSequence = Rx.Observable.fromArray(overs)
var eleSubs = [];
eleOverSequence.subscribe(function(obs){
  return obs.subscribe(changeColor('red'))
})




eleOverSequence
.map(function(obs){
  return obs.delay(250)
})
.subscribe(function(obs){
  eleSubs.push(obs.subscribe(changeColor('white')))
})





/*
   select time delay, turn red after delay
*/




/*
   change on time delay
*/



/*
  cancel button
*/





/*
  but wait, cancel button validates with timed mouseover
*/






/*
   random error
*/




/*
   select time delay, turn red after delay
*/




// a timer
var time = $('#time')

function startTimer(){
 return setInterval(function(){
    var current = time.html().toString() || 0;
    return time.html(++current)
  }, 1000);
}






// some random response
function randoms(count) {
  var randos = [];
  while (randos.length < count) {
    randos.push(Math.random());
  }
  return randos
}



function asyncPhoneCall() {
  var resp = randoms(10000)
  setTimeout(function(){
    return resp;
  }, 1500)
}

