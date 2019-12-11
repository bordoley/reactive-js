type t('a) = {
  isDisposed: bool,
  subscriberCount: int,
};

[@bs.module "@reactive-js/rx"]
external create: (~replay: int=?, unit) => t('a) = "createSubject";

external asDisposable: t('a) => Disposable.t = "%identity";
external asDisposableOrTeardown: t('a) => Disposable.DisposableOrTeardown.t = "%identity";
external asMulticastObservable: t('a) => MulticastObservable.t('a) = "%identity";
external asMulticastObservableResource: t('a) => MulticastObservableResource.t('a) = "%identity";
external asObservable: t('a) => Observable.t('a) = "%identity";
external asObserver: t('a) => Observer.t('a) = "%identity";
external asSubject: t('a) => Subject.t('a) = "%identity";

[@bs.send] external add: (t('a), Disposable.DisposableOrTeardown.t) => unit = "add";
[@bs.send] [@bs.variadic] external addAll: (t('a), array(Disposable.DisposableOrTeardown.t)) => unit = "add";
[@bs.send] external dispose: t('a) => unit = "dispose";
[@bs.send] external remove: (t('a), Disposable.DisposableOrTeardown.t) => unit = "remove";
[@bs.send] [@bs.variadic] external removeAll: (t('a), array(Disposable.DisposableOrTeardown.t)) => unit = "remove";

[@bs.send] external complete: (t('a), ~error: Error.t=?, unit) => unit = "complete";
[@bs.send] external next: (t('a), 'a) => unit = "next";
