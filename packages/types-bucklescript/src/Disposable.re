type t;

module DisposableOrTeardown {
  type t;

  external create: (unit => unit) => t = "%identity";
}

external asDisposableOrTeardown: t => DisposableOrTeardown.t = "%identity";

[@bs.send] external add: (t, DisposableOrTeardown.t) => unit = "add";
[@bs.send] [@bs.variadic] external addAll: (t, array(DisposableOrTeardown.t)) => unit = "add";
[@bs.send] external dispose: t => unit = "dispose";
[@bs.get] external isDisposed: t => bool = "isDisposed";
[@bs.send] external remove: (t, DisposableOrTeardown.t) => unit = "remove";
[@bs.send] [@bs.variadic] external removeAll: (t, array(DisposableOrTeardown.t)) => unit = "remove";

[@bs.module "@reactive-js/disposable"]
external throwIfDisposed: t => unit = "throwIfDisposed";
