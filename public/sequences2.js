

// elements
var Elements = [];
// child elements to element observables
var ChildElements = [];
// mouseover observables
var overs = [];


// make some hundred boxes
var count = Rx.Observable.range(0,200)

count
  .map(elementFromNumber)
  .do(appendElement)
  .do(cacheElements)
  .subscribe(observeMouseOver)


function elementFromNumber(number) {
  return $('<div ' + 'id="'+ number+'" class="square left center valign-wrapper"></div>')
}

function appendElement(element) {
  var subEle = $('<h5 class="valign">'+$(element).attr('id')+'</h5>')
  element.append(subEle)
  return $('#boxes').append(element)
}

function cacheElements(element) {
  return Elements.push(element);
}

function observeMouseOver(element) {
  var eleOver = Rx.Observable
  .fromEvent( element, 'mouseover')
  .filter(parentsOnly);
  // cache the observable
  return overs.push(eleOver);
}

function parentsOnly(evt) {
  // only allow parent elements on this sequence
  return evt.target.children.length
}


/* for all the observables, let's do something princesslike */
function changeColor(colorstring) {
  return function (evt) {
    // i'm a "pretty pretty princess"
    return $(evt.target).css('background-color', colorstring);
  }
}
var ElementMouseOverEvents = Rx.Observable.fromArray(overs)
var eleSubs = [];
ElementMouseOverEvents.subscribe(function(obs){
  return eleSubs.push(obs.subscribe(changeColor('red')))
})

/*
// in the spirit of observable sequences acting like arrays,
   we could also do...

  overs.map(subscribeFunciton)

*/



/* limited time princessness */

/* timing example */

function delayObservable(observableThing){
  // delay observable a quarter second
  return observableThing.delay(250)
}


// // same sequence of ElementMouseoverEvents
ElementMouseOverEvents
.map(delayObservable)
.subscribe(function(obs){
  return eleSubs.push(obs.subscribe(changeColor('white')))
})
















































/* disposing example */

var numbermachine  = $('#numbermachine');

var delayedKeyedIntegers = Rx.Observable.fromEvent(numbermachine, 'keyup')
              .delay(500)
              .map(justNewValue)
              .filter(is_int)



/* & more timing */
var halfsecond = Rx.Observable.interval(500);










delayedKeyedIntegers
.subscribe(function (e) {
  console.log(e); // dev
})

function justNewValue(e) {
  return $(e.target).val()
}

function is_int(value){
  // yoink!
  if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
      if (value < 200 ) {
        return true;
      } else {
        return false;
      }
      return true;
  } else {
      return false;
  }
}


















var inputObserver = Rx.Observer.create(keyNext, keyErr, keyComplete)



function keyNext(msg) {
  // dispose of backwards counter
  if (countdownsub) {
    countdownsub.dispose();
  }

}

function keyErr(msg) {
  console.log('err', msg);
}

function keyComplete(msg) {
  console.log('completed');
}





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

// observables are reusable.
count
  .delay(5000)
  .take(10)
  .map(function(i){return 2*i})
  .subscribe() // TODO: light up some stuff...



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

