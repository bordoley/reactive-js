type t;

external asDisposable: t => Disposable.t = "%identity";
external asDisposableOrTeardown: t => Disposable.DisposableOrTeardown.t = "%identity";

[@bs.send] external add: (t, Disposable.DisposableOrTeardown.t) => t = "add";
[@bs.send] [@bs.variadic] external addAll: (t, array(Disposable.DisposableOrTeardown.t)) => t = "add";
[@bs.send] external dispose: t => unit = "dispose";
[@bs.get] external isDisposed: t => bool = "isDisposed";
[@bs.send] external remove: (t, Disposable.DisposableOrTeardown.t) => t = "remove";
[@bs.send] [@bs.variadic] external removeAll: (t, array(Disposable.DisposableOrTeardown.t)) => t = "remove";

[@bs.get] external disposable: t => Disposable.t = "disposable";
[@bs.set] external setDisposable: (t, Disposable.t) => unit = "disposable";

[@bs.module "@reactive-js/disposable"]
external create: unit => t = "createSerialDisposable";