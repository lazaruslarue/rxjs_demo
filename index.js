


var bigtext = $('#big')
var tinytext = $('#small')

var bigSequence = Rx.Observable.fromEvent( bigtext, 'mouseover');
var tinySequence = Rx.Observable.fromEvent( tinytext, 'mouseover');

var bs = bigSequence.delay(2000).subscribe(function(evt){
  return $('#big').css('background-color', 'red');
})
var ts = tinySequence.subscribe(function(evt){
  return $('#small').css('background-color', 'green');
})


