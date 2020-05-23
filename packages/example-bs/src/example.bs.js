

import * as Web$Reactive from "@reactive-js/core/bs/Web.bs.js";
import * as Observable$Reactive from "@reactive-js/core/bs/Observable.bs.js";
import * as React from "@reactive-js/core/react";
import * as Disposable from "@reactive-js/core/disposable";
import * as Observable from "@reactive-js/core/observable";

Disposable.createDisposable();

Disposable.createDisposable((function (_e) {
        
      }));

var x = Disposable.createSerialDisposable();

var y = Observable$Reactive.subscribe(React.idlePriority, Observable$Reactive.map((function (i) {
            return i + 1 | 0;
          }), Observable.never()));

Web$Reactive.createEventSource([
      "error",
      "message",
      "test"
    ], undefined, "http://localhost:8080/events");

export {
  x ,
  y ,
  
}
/*  Not a pure module */
