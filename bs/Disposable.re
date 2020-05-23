module Error = {
  type t;
};

module DisposableLike = {
  type t;

  [@bs.get] external error: t => option(Error.t) = "error";

  [@bs.get] external isDisposed: t => bool = "isDisposed";
};

module SerialDisposableLike = {
  type t;

  external asDisposableLike: t => DisposableLike.t = "%identity";

  [@bs.get] external inner: t => DisposableLike.t = "inner";
  [@bs.set] external setInner: (t, DisposableLike.t) => unit = "inner";
};

// FIXME: DisposableValueLike

[@bs.send]
external addDisposable: (DisposableLike.t, DisposableLike.t) => unit = "add";

[@bs.module "@reactive-js/core/disposable"] [@bs.val]
external addDisposableDisposeParentOnChildError:
  (DisposableLike.t, DisposableLike.t) => unit =
  "addDisposableDisposeParentOnChildError";

// FIXME: addOnDisposedWithError
// FIXME: addOnDisposedWithErrorTeardown
// FIXME: addOnDisposedWithoutError
// FIXME: addOnDisposedWithoutErrorTeardown

[@bs.send]
external addTeardown:
  (DisposableLike.t, [@bs.uncurry] (option(Error.t) => unit)) => unit =
  "add";

[@bs.module "@reactive-js/core/disposable"] [@bs.val]
external bindDisposables: (DisposableLike.t, DisposableLike.t) => unit =
  "bindDisposables";

[@bs.module "@reactive-js/core/disposable"] [@bs.val]
external createDisposable: unit => DisposableLike.t = "createDisposable";

[@bs.module "@reactive-js/core/disposable"] [@bs.val]
external createDisposableWithTeardown:
  ([@bs.uncurry] (option(Error.t) => unit)) => DisposableLike.t =
  "createDisposable";

// FIXME: createDisposableValue

[@bs.module "@reactive-js/core/disposable"] [@bs.val]
external createSerialDisposable: unit => SerialDisposableLike.t =
  "createSerialDisposable";

[@bs.send]
external dispose: (DisposableLike.t, option(Error.t)) => unit = "dispose";

[@bs.module "@reactive-js/core/disposable"] [@bs.val]
external disposed: DisposableLike.t = "disposed" /*FIXME: toErrorHandle*/;