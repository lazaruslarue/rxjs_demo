








# intro



streams
















## disclaimer
    - whoami
    - whoiamnot

























    - questions?
















## covered:
 * docs... 
    which to use, which to avoid
    (intro)[http://www.introtorx.com]
    (docs)[http://reactivex.io/]
 * wtf? 
    Observer / Observable / ... Subject(spooky noise)
    Sequences / Subscriptions / Subjects(spooky noise)
    Some fun operators (merge, defer, maybe {hehe... not real})
    Bugging/Debugging

## maybe:
    - live coding, live bugging, live debugging

















## not covered
    - where to begin
    - convincing your coworkers you're "safe"
    - dancing:
        + pants
        + no pants




































## Observables:

----o-------------o-----------o---------|-- >

"msg"

subscribe (o) -> 

Hot & Cold Observables


* hot: 
    always running ... sweaty ... 


* cold: 
    passive ... sedentary ... begin producing notifications on request (when subscribed to)









































### Hot observables:

"ungh" <sultry voice>

Sequences that are active.

- mouse movements
- sockets


>   "Hot Observables they are always running and they broadcast notifications irrespective of who's listening... ungh"
>                                          - Leonard Knowsaboutit Nemoy




(cue the guy screaming in the field, with nobody listening)






















### Cold Observables:

Sequences that you have to ask for... 

Sequences that are passive and start producing notifications on request (when subscribed to)
    ("if only you would have asked, i would have told you")


    - async (remind me to show you an example of this)
    - Observable.Create
    - "on demand sequences"



>   "Cold Observables are lazy, and only act when acted upon."
>                                               - Julia Chillin' Childs






var a = observable.subscribe(function(){
    retrn // change the view
})


== > a = observer 










### Subjects

>   "subjects... navelgazers and perverts, the whole lot."
>                                                    - David Vorriccelli
















Debugging:

http://davesexton.com/Social/RxTips.aspx

Hot:

hot observables broadcast notifications to all observers.  The canonical example is converting an event into an observable; e.g., FromEventPattern.  If three observers subscribe to IObservable<MouseMoveEventArgs>, then each observer will serially2 observe the same notifications, as opposed to observing different notifications or concurrent notifications.
http://davesexton.com/blog/post/Hot-and-Cold-Observables.aspx

Use general streams, generally…

http://rxmarbles.com/
