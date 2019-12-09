type t = {
  isDisposed: bool,
};

[@bs.send] external add: (t, t) => unit = "add";
[@bs.send] external addTeardown: (t, unit => unit) => unit = "add";
[@bs.send] [@bs.variadic] external addAll: (t, array(t)) => unit = "add";
[@bs.send] external dispose: t => unit = "dispose";
[@bs.send] external remove: (t, t) => unit = "remove";
[@bs.send] external removeTeardown: (t, unit => unit) => unit = "add";
[@bs.send] [@bs.variadic] external removeAll: (t, array(t)) => unit = "remove";

[@bs.module "@reactive-js/disposable"]
external throwIfDisposed: t => unit = "throwIfDisposed";
