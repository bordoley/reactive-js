type t;

[@bs.send] external add: (t, t) => t = "add";
[@bs.send] external addTeardown: (unit => unit, t) => t = "add";
[@bs.send] external dispose: (~error: Error.t=?,  t) => unit = "dispose";
[@bs.get] external isDisposed: t => bool = "isDisposed";

[@bs.module "@reactive-js/disposable"]
external create: (~teardown: ('a, 'a) => bool=?, unit) => t = "createDisposable";

[@bs.module "@reactive-js/disposable"]
external disposed: t = "disposed";
