type t('a) = {
  isDisposed: bool,
};

external asDisposable: t('a) => Disposable.t = "%identity";
external asDisposableOrTeardown: t('a) => Disposable.DisposableOrTeardown.t = "%identity";
external asObservable: t('a) => Observable.t('a) = "%identity";

[@bs.send] external add: (t('a), Disposable.DisposableOrTeardown.t) => unit = "add";
[@bs.send] [@bs.variadic] external addAll: (t('a), array(Disposable.DisposableOrTeardown.t)) => unit = "add";
[@bs.send] external dispose: t('a) => unit = "dispose";
[@bs.send] external remove: (t('a), Disposable.DisposableOrTeardown.t) => unit = "remove";
[@bs.send] [@bs.variadic] external removeAll: (t('a), array(Disposable.DisposableOrTeardown.t)) => unit = "remove";

module ObservableResourceOperator = {
  type observableResource('a) = t('a);
  type t('a, 'b) = Operator.t(observableResource('a), observableResource('b));
};

[@bs.module "@reactive-js/observable-resource"]
external concatAll:
  (~maxBufferSize: int=?, unit) => ObservableResourceOperator.t(Observable.t('a), 'a) =
  "concatAll";

[@bs.module "@reactive-js/observable-resource"]
external distinctUntilChanged:
  (~equals: ('a, 'a) => bool=?, unit) => ObservableResourceOperator.t('a, 'a) =
  "distinctUntilChanged";

[@bs.module "@reactive-js/observable-resource"] [@bs.variadic]
external endWith: ('a, array('a)) => ObservableResourceOperator.t('a, 'a) =
  "endWith";

[@bs.module "@reactive-js/observable-resource"]
external exhaust: unit => ObservableResourceOperator.t(Observable.t('a), 'a) = "exhaust";

[@bs.module "@reactive-js/observable-resource"]
external ignoreElements: unit => ObservableResourceOperator.t('a, 'b) =
  "ignoreElements";

[@bs.module "@reactive-js/observable-resource"]
external keep: ([@bs.uncurry] ('a => bool)) => ObservableResourceOperator.t('a, 'a) =
  "keep";

[@bs.module "@reactive-js/observable-resource"]
external map: ('a => 'b) => ObservableResourceOperator.t('a, 'b) = "map";

[@bs.module "@reactive-js/observable-resource"]
external mergeAll: Observable.MergeAllConfig.t => ObservableResourceOperator.t(Observable.t('a), 'a) =
  "mergeAll";

[@bs.module "@reactive-js/observable-resource"]
external observe: Observer.t('a) => ObservableResourceOperator.t('a, 'a) = "observe";

[@bs.module "@reactive-js/observable-resource"]
external onComplete:
  ([@bs.uncurry] (option(Error.t) => unit)) => ObservableResourceOperator.t('a, 'a) =
  "onComplete";

[@bs.module "@reactive-js/observable-resource"]
external onError:
  ([@bs.uncurry] (Error.JsError.t => unit)) => ObservableResourceOperator.t('a, 'a) =
  "onError";

[@bs.module "@reactive-js/observable-resource"]
external onNext: ([@bs.uncurry] ('a => unit)) => ObservableResourceOperator.t('a, 'a) =
  "onNext";

[@bs.module "@reactive-js/observable-resource"]
external reduce:
  (
    [@bs.uncurry] (('acc, 'a) => 'acc),
    ~initialValue: [@bs.uncurry] (unit => 'acc),
    unit
  ) =>
  ObservableResourceOperator.t('a, 'acc) =
  "reduce";

[@bs.module "@reactive-js/observable-resource"]
external repeat:
  (~predicate: [@bs.uncurry] (int => bool)=?, unit) =>
  ObservableResourceOperator.t('a, 'a) =
  "repeat";

[@bs.module "@reactive-js/observable-resource"]
external repeatCount: (int, unit) => ObservableResourceOperator.t('a, 'a) = "repeat";

[@bs.module "@reactive-js/observable-resource"]
external retry:
  (~predicate: [@bs.uncurry] ((int, Error.JsError.t) => bool)=?, unit) =>
  ObservableResourceOperator.t('a, 'a) =
  "retry";

[@bs.module "@reactive-js/observable-resource"]
external scan:
  (
    [@bs.uncurry] (('acc, 'a) => 'acc),
    ~initialValue: [@bs.uncurry] (unit => 'acc),
    unit
  ) =>
  ObservableResourceOperator.t('a, 'acc) =
  "scan";

[@bs.module "@reactive-js/observable-resource"]
external share:
  (Scheduler.t, ~replayCount: int=?, unit) => ObservableResourceOperator.t('a, 'a) =
  "share";

[@bs.module "@reactive-js/observable-resource"] [@bs.variadic]
external startWith: ('a, array('a)) => ObservableResourceOperator.t('a, 'a) =
  "startWith";

[@bs.module "@reactive-js/observable-resource"]
external subscribeOn: Scheduler.t => ObservableResourceOperator.t('a, 'a) =
  "subscribeOn";

[@bs.module "@reactive-js/observable-resource"]
external switchAll: unit => ObservableResourceOperator.t(Observable.t('a), 'a) = "switchAll";

[@bs.module "@reactive-js/observable-resource"]
external take: int => ObservableResourceOperator.t('a, 'a) = "take";

[@bs.module "@reactive-js/observable-resource"]
external takeLast: int => ObservableResourceOperator.t('a, 'a) = "takeLast";

[@bs.module "@reactive-js/observable-resource"]
external takeWhile:
  ([@bs.uncurry] ('a => bool)) => ObservableResourceOperator.t('a, 'a) =
  "takeWhile";

[@bs.module "@reactive-js/observable-resource"]
external throttle:
  ([@bs.uncurry] ('a => Observable.t('any))) => ObservableResourceOperator.t('a, 'a) =
  "throttle";

[@bs.module "@reactive-js/observable-resource"]
external throttleFirst:
  ([@bs.uncurry] ('a => Observable.t('any))) => ObservableResourceOperator.t('a, 'a) =
  "throttleFirst";

[@bs.module "@reactive-js/observable-resource"]
external throttleFirstTime: int => ObservableResourceOperator.t('a, 'a) =
  "throttleFirstTime";

[@bs.module "@reactive-js/observable-resource"]
external throttleLast:
  ([@bs.uncurry] ('a => Observable.t('any))) => ObservableResourceOperator.t('a, 'a) =
  "throttleLast";

[@bs.module "@reactive-js/observable-resource"]
external throttleLastTime: int => ObservableResourceOperator.t('a, 'a) =
  "throttleLastTime";

[@bs.module "@reactive-js/observable-resource"]
external throttleTime: int => ObservableResourceOperator.t('a, 'a) = "throttleTime";

[@bs.module "@reactive-js/observable-resource"]
external timeout: int => ObservableResourceOperator.t('a, 'a) = "timeout";

[@bs.module "@reactive-js/observable-resource"]
external withLatestFrom:
  (Observable.t('b), ~selector: ('a, 'b) => 'c, unit) => ObservableResourceOperator.t('a, 'c) =
  "withLatestFrom";
