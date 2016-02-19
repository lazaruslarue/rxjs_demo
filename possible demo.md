possible demo…
mouse on / mouse off…
differ mouse off and check if over another element already before performing mouse leave function.

http://reactivex.io/

intro

- disclaimer
    - whoami
    

    HR8
    




    SolarCity

- covered:
    - Observer / Observable / Subject(spooky noise)
    - Streams / Subscriptions / Subjects(spooky noise)
    - Some fun operators
    - Bugging/Debugging

- not covered

- maybe:
    - live bugging, live debugging

Observables:
Hot & Cold Observables

Hot observables are always running and they broadcast notifications to all observers.

Cold observables generate notifications for each observer.

Observers:

Subjects:

Debugging:

http://davesexton.com/Social/RxTips.aspx

Hot:

hot observables broadcast notifications to all observers.  The canonical example is converting an event into an observable; e.g., FromEventPattern.  If three observers subscribe to IObservable<MouseMoveEventArgs>, then each observer will serially2 observe the same notifications, as opposed to observing different notifications or concurrent notifications.
http://davesexton.com/blog/post/Hot-and-Cold-Observables.aspx

Use general streams, generally…
