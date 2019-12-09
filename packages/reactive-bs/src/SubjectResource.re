type t('a) = {
  isDisposed: bool,
};


external asDisposables: t('a) => Disposable.t = "%identity";
external asObservable: t('a) => Observable.t('a) = "%identity";
external asObserver: t('a) => Observer.t('a) = "%identity";
external asSubject: t('a) => Subject.t('a) = "%identity";

[@bs.module "@reactive-js/rx"]
external create: unit => t('a) = "createSubject";

[@bs.module "@reactive-js/rx"]
external createWithReplay: int => t('a) = "createSubject";

[@bs.send] external add: (t('a), Disposable.t) => unit = "add";
[@bs.send] external addTeardown: (t('a), unit => unit) => unit = "add";
[@bs.send] [@bs.variadic] external addAll: (t('a), array(Disposable.t)) => unit = "add";
[@bs.send] external dispose: t('a) => unit = "dispose";
[@bs.send] external remove: (t('a), Disposable.t) => unit = "remove";
[@bs.send] external removeTeardown: (t('a), unit => unit) => unit = "add";
[@bs.send] [@bs.variadic] external removeAll: (t('a), array(Disposable.t)) => unit = "remove";