type t = {
  mutable disposable: Disposable.t,
  isDisposed: bool,
};

[@bs.send] external add: (t, Disposable.t) => unit = "add";
[@bs.send] external addTeardown: (t, unit => unit) => unit = "add";
[@bs.send] [@bs.variadic] external addAll: (t, array(Disposable.t)) => unit = "add";
external asDisposable: t => Disposable.t = "%identity";
[@bs.send] external dispose: t => unit = "dispose";
[@bs.send] external remove: (t, Disposable.t) => unit = "remove";
[@bs.send] external removeTeardown: (t, unit => unit) => unit = "add";
[@bs.send] [@bs.variadic] external removeAll: (t, array(Disposable.t)) => unit = "remove";