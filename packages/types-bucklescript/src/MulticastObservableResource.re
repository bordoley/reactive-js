type t('a) = {
  isDisposed: bool,
  subscriberCount: int,
};

external asDisposable: t('a) => Disposable.t = "%identity";
external asDisposableOrTeardown: t('a) => Disposable.DisposableOrTeardown.t = "%identity";
external asMulticastObservable: t('a) => MulticastObservable.t('resp) = "%identity";
external asObservable: t('a) => Observable.t('a) = "%identity";
external asObservableResource: t('a) => ObservableResource.t('a) = "%identity";

[@bs.send] external add: (t('a), Disposable.DisposableOrTeardown.t) => unit = "add";
[@bs.send] [@bs.variadic] external addAll: (t('a), array(Disposable.DisposableOrTeardown.t)) => unit = "add";
[@bs.send] external dispose: t('a) => unit = "dispose";
[@bs.send] external remove: (t('a), Disposable.DisposableOrTeardown.t) => unit = "remove";
[@bs.send] [@bs.variadic] external removeAll: (t('a), array(Disposable.DisposableOrTeardown.t)) => unit = "remove";
