/*
  basics:

  - basically, you can do with RxJS what you can do with Promises or Callbacks
*/

   // make a box, make another box.
   // mouse over box one, turn box 1 green.
   // click box one to turn box two red.


// some text
var bigtext = $('#big')
var smalltext = $('#small')

// change colors
function changeColor(colorstring) {
  return function (evt) {
    return $(evt.target).css('background-color', colorstring);
  }
}

// $jq
// var jqBigOver = bigtext.on('mouseover', changeColor('red') )
// var jqSmallOver = smalltext.on('mouseover', changeColor('green') )

// // rx
var mouseOverBig = Rx.Observable.fromEvent( bigtext, 'mouseover');
var mouseOverSmall = Rx.Observable.fromEvent( smalltext, 'mouseover');

mouseOverBig.subscribe(changeColor('red'))
mouseOverSmall.subscribe(changeColor('green'))















// revert colors

// jq
// var jqBigLeave = bigtext.on('mouseleave', changeColor('white') )
// var jqSmallLeave = smalltext.on('mouseleave', changeColor('white') )

// rx
var mouseLeaveBig = Rx.Observable.fromEvent( bigtext, 'mouseleave');
var mouseLeaveSmall = Rx.Observable.fromEvent( smalltext, 'mouseleave');

mouseLeaveBig.subscribe(changeColor('white'))
mouseLeaveSmall.subscribe(changeColor('white'))













/*
  composeability

*/






/*
   merge hovered
*/

// $jq
// bigtext.on('mouseover', function(evt){
//   var txt = $(evt.target).html()
//   return $('#hoverText').html(txt)
// })

// smalltext.on('mouseover', function(evt){
//   var txt = $(evt.target).html()
//   return $('#hoverText').html(txt)
// })


// // rx
var hoveredBox = Rx.Observable.merge(
  // mouseOverBig
  mouseOverBig.delay(1000)
  ,mouseOverSmall
  ,mouseLeaveBig
  ,mouseLeaveSmall
  )
  .map(function justElementText(evt){
    /* backwards if for demo */
    if (evt.type !== 'mouseover') {
      return ''
    }
    return $(evt.target).html()
  })

var subHover = hoveredBox.subscribe(showHovered)

function showHovered(txt){
  return $('#hoverText').html(txt)
}

function delayHoverBy(val){
  subHover && subHover.dispose()
  return subHover = hoveredBox.delay(val).subscribe(showHovered)
}




// ===============
// var overs = [];
// var eles = [];
// var subEles = [];
// for (var i = 144 - 1; i >= 0; i--) {
//   // an empty element
//   var ele = $('<div ' + 'id="'+ 'i'+'" class="col s1"></div>')
//   // a name for above
//   var subEle = $('<p>' + i + '</p>')
//   ele.append(subEle)
//   $('#boxes').append(ele)

//   eles.push(ele);
//   subEles.push(subEle)


//   var eleOver = Rx.Observable.fromEvent( ele, 'mouseover');
//   overs.push(eleOver);
// }


// var eleOverSequence = Rx.Observable.fromArray(overs)
// var eleSubs = [];
// eleOverSequence.subscribe(function(obs){
//   return obs.subscribe(changeColor('red'))
// })

























// eleOverSequence
// .map(function(obs){
//   return obs.delay(250)
// })
// .subscribe(function(obs){
//   eleSubs.push(obs.subscribe(changeColor('white')))
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



function asyncPhoneCall() {
  var resp = randoms(10000)
  setTimeout(function(){
    return resp;
  }, 1500)
}


