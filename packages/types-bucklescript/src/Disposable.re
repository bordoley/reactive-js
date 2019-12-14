type t;

module DisposableOrTeardown {
  type t;

  external create: (unit => unit) => t = "%identity";
}

external asDisposableOrTeardown: t => DisposableOrTeardown.t = "%identity";

[@bs.send] external add: (t, DisposableOrTeardown.t) => t = "add";
[@bs.send] [@bs.variadic] external addAll: (t, array(DisposableOrTeardown.t)) => t = "add";
[@bs.send] external dispose: t => unit = "dispose";
[@bs.get] external isDisposed: t => bool = "isDisposed";
[@bs.send] external remove: (t, DisposableOrTeardown.t) => t = "remove";
[@bs.send] [@bs.variadic] external removeAll: (t, array(DisposableOrTeardown.t)) => t = "remove";

[@bs.module "@reactive-js/disposable"]
external create: unit => t = "createDisposable";

[@bs.module "@reactive-js/disposable"]
external disposed: t = "disposed";

[@bs.module "@reactive-js/disposable"]
external throwIfDisposed: t => unit = "throwIfDisposed";
