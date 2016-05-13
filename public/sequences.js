

// elements
var Elements = [];
// child elements to element observables
var ChildElements = [];
// mouseover observables
var overs = [];

/*
// make a hundred boxes
for (var i = 200 - 1; i >= 0; i--) {
  // an empty element
  var ele = $('<div ' + 'id="'+ i+'" class="square left center valign-wrapper"></div>')
  // come content in a child element
  var subEle = $('<h5 class="valign">'+i+'</h5>')
  ele.append(subEle)
  $('#boxes').append(ele)

  // cache them
  Elements.push(ele);
  ChildElements.push(subEle)

  var eleOver = Rx.Observable
    .fromEvent( ele, 'mouseover')
    .filter(parentsOnly);
  // cache the observable
  overs.push(eleOver);
}

function parentsOnly(evt) {
  // only allow parent elements on this sequence
  return evt.target.children.length
}


*/


// i'm a "pretty pretty princess"


// var count = Rx.Observable.range(0,200)

// count
//   .map(elementFromNumber)
//   .do(appendElement)
//   .do(cacheElements)
//   .subscribe(observeMouseOver)

// function elementFromNumber(number) {
//   return $('<div ' + 'id="'+ number+'" class="square left center valign-wrapper"></div>')
// }
// function appendElement(element) {
//   var subEle = $('<h5 class="valign">'+$(element).attr('id')+'</h5>')
//   element.append(subEle)
//   return $('#boxes').append(element)
// }
// function cacheElements(element) {
//   return Elements.push(element);
// }

// function observeMouseOver(element) {
//   var eleOver = Rx.Observable
//   .fromEvent( element, 'mouseover')
//   .filter(parentsOnly);
//   // cache the observable
//   return overs.push(eleOver);
// }





/* for all the observables, let's do something princesslike */
function changeColor(colorstring) {
  return function (evt) {
    return $(evt.target).css('background-color', colorstring);
  }
}
// var ElementMouseOverEvents = Rx.Observable.fromArray(overs)
// var eleSubs = [];
// ElementMouseOverEvents.subscribe(function(obs){
//   return eleSubs.push(obs.subscribe(changeColor('red')))
// })

/*
// in the spirit of observable sequences acting like arrays,
   we could also do...

  overs.map(subscribeFunciton)

*/

/* timing example */

function delayObservable(observableThing){
  // delay observable a quarter second
  return observableThing.delay(250)
}


// // same sequence of ElementMouseoverEvents
// ElementMouseOverEvents
// .map(delayObservable)
// .subscribe(function(obs){
//   return eleSubs.push(obs.subscribe(changeColor('white')))
// })


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


function stopSubs(arrayOfSubs){
  return Rx.Observable.from(arrayOfSubs)
    .subscribe(function (sub) {
      sub.dispose()
    })
}

