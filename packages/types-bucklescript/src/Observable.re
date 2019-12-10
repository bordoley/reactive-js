type t('a);

module ObservableOperator = {
  type observable('a) = t('a);
  type t('a, 'b) = Operator.t(observable('a), observable('b));
};

[@bs.module "@reactive-js/rx"]
external connect: Scheduler.t => Operator.t(t('a), Disposable.t) = "connect";

[@bs.module "@reactive-js/rx"]
external create: ([@bs.uncurry] (Observer.t('a) => Disposable.t)) => t('a) =
  "createObservable";

[@bs.module "@reactive-js/observable"]
external combineLatest2: (t('a), t('b)) => t(('a, 'b)) = "combineLatest";

[@bs.module "@reactive-js/observable"]
external combineLatest3: (t('a), t('b), t('c)) => t(('a, 'b, 'c)) =
  "combineLatest";

[@bs.module "@reactive-js/observable"]
external combineLatest4:
  (t('a), t('b), t('c), t('d)) => t(('a, 'b, 'c, 'd)) =
  "combineLatest";

[@bs.module "@reactive-js/observable"]
external combineLatest5:
  (t('a), t('b), t('c), t('d), t('e)) => t(('a, 'b, 'c, 'd, 'e)) =
  "combineLatest";

[@bs.module "@reactive-js/observable"]
external combineLatest6:
  (t('a), t('b), t('c), t('d), t('e), t('f)) =>
  t(('a, 'b, 'c, 'd, 'e, 'f)) =
  "combineLatest";

[@bs.module "@reactive-js/observable"]
external combineLatest7:
  (t('a), t('b), t('c), t('d), t('e), t('f), t('g)) =>
  t(('a, 'b, 'c, 'd, 'e, 'f, 'g)) =
  "combineLatest";

[@bs.module "@reactive-js/observable"]
external combineLatest8:
  (t('a), t('b), t('c), t('d), t('e), t('f), t('g), t('h)) =>
  t(('a, 'b, 'c, 'd, 'e, 'f, 'g, 'h)) =
  "combineLatest";

[@bs.module "@reactive-js/observable"]
external combineLatest9:
  (t('a), t('b), t('c), t('d), t('e), t('f), t('g), t('h), t('i)) =>
  t(('a, 'b, 'c, 'd, 'e, 'f, 'g, 'h, 'i)) =
  "combineLatest";

[@bs.module "@reactive-js/observable"] [@bs.variadic]
external concat: (t('a), t('a), array(t('a))) => t('a) = "concat";

[@bs.module "@reactive-js/observable"]
external empty: (~delay: int=?, unit) => t('a) = "empty";

[@bs.module "@reactive-js/observable"]
external fromArray: (array('a), ~delay: int=?, unit) => t('a) = "fromArray";

[@bs.module "@reactive-js/observable"]
external fromPromiseFactory:
  ([@bs.uncurry] (unit => Js.Promise.t('a))) => t('a) =
  "fromPromiseFactory";

[@bs.module "@reactive-js/observable"] [@bs.variadic]
external fromScheduledValues: ((int, 'a), array((int, 'a))) => t('a) =
  "fromScheduledValues";

[@bs.module "@reactive-js/observable"]
external generate: ('a => 'a, ~initialValue: 'a, ~delay: int=?, unit) => t('a) =
  "generate";

[@bs.module "@reactive-js/observable"] [@bs.variadic]
external merge: (t('a), t('a), array(t('a))) => t('a) = "merge";

[@bs.module "@reactive-js/observable"]
external never: unit => t('a) = "never";

[@bs.module "@reactive-js/observable"]
external ofValue: 'a => t('a) = "ofValue";

[@bs.module "@reactive-js/observable"]
external throws: (Error.JsError.t, ~delay: int=?, unit) => t('a) = "throws";

[@bs.module "@reactive-js/observable"]
external concatAll:
  (~maxBufferSize: int=?, unit) => ObservableOperator.t(t('a), 'a) =
  "concatAll";

[@bs.module "@reactive-js/observable"]
external distinctUntilChanged:
  (~equals: ('a, 'a) => bool=?, unit) => ObservableOperator.t('a, 'a) =
  "distinctUntilChanged";

[@bs.module "@reactive-js/observable"] [@bs.variadic]
external endWith: ('a, array('a)) => ObservableOperator.t('a, 'a) =
  "endWith";

[@bs.module "@reactive-js/observable"]
external exhaust: unit => ObservableOperator.t(t('a), 'a) = "exhaust";

[@bs.module "@reactive-js/observable"]
external ignoreElements: unit => ObservableOperator.t('a, 'b) =
  "ignoreElements";

[@bs.module "@reactive-js/observable"]
external iterate: unit => Operator.t(t('a), unit) = "ignoreElements";

[@bs.module "@reactive-js/observable"]
external keep: ([@bs.uncurry] ('a => bool)) => ObservableOperator.t('a, 'a) =
  "keep";

[@bs.module "@reactive-js/observable"]
external map: ('a => 'b) => ObservableOperator.t('a, 'b) = "map";

module MergeAllConfig = {
  type t;

  [@bs.obj]
  external create: (~maxBufferSize: int=?, ~maxConcurrency: int=?, unit) => t =
    "";
};

[@bs.module "@reactive-js/observable"]
external mergeAll: MergeAllConfig.t => ObservableOperator.t(t('a), 'a) =
  "mergeAll";

[@bs.module "@reactive-js/observable"]
external observe: Observer.t('a) => ObservableOperator.t('a, 'a) = "observe";

[@bs.module "@reactive-js/observable"]
external onComplete:
  ([@bs.uncurry] (option(Error.t) => unit)) => ObservableOperator.t('a, 'a) =
  "onComplete";

[@bs.module "@reactive-js/observable"]
external onError:
  ([@bs.uncurry] (Error.JsError.t => unit)) => ObservableOperator.t('a, 'a) =
  "onError";

[@bs.module "@reactive-js/observable"]
external onNext: ([@bs.uncurry] ('a => unit)) => ObservableOperator.t('a, 'a) =
  "onNext";

[@bs.module "@reactive-js/observable"]
external reduce:
  (
    [@bs.uncurry] (('acc, 'a) => 'acc),
    ~initialValue: [@bs.uncurry] (unit => 'acc),
    unit
  ) =>
  ObservableOperator.t('a, 'acc) =
  "reduce";

[@bs.module "@reactive-js/observable"]
external repeat:
  (~predicate: [@bs.uncurry] (int => bool)=?, unit) =>
  ObservableOperator.t('a, 'a) =
  "repeat";

[@bs.module "@reactive-js/observable"]
external repeatCount: (int, unit) => ObservableOperator.t('a, 'a) = "repeat";

[@bs.module "@reactive-js/observable"]
external retry:
  (~predicate: [@bs.uncurry] ((int, Error.JsError.t) => bool)=?, unit) =>
  ObservableOperator.t('a, 'a) =
  "retry";

[@bs.module "@reactive-js/observable"]
external scan:
  (
    [@bs.uncurry] (('acc, 'a) => 'acc),
    ~initialValue: [@bs.uncurry] (unit => 'acc),
    unit
  ) =>
  ObservableOperator.t('a, 'acc) =
  "scan";

[@bs.module "@reactive-js/observable"]
external share:
  (Scheduler.t, ~replayCount: int=?, unit) => ObservableOperator.t('a, 'a) =
  "share";

[@bs.module "@reactive-js/observable"] [@bs.variadic]
external startWith: ('a, array('a)) => ObservableOperator.t('a, 'a) =
  "startWith";

[@bs.module "@reactive-js/observable"]
external subscribeOn: Scheduler.t => ObservableOperator.t('a, 'a) =
  "subscribeOn";

[@bs.module "@reactive-js/observable"]
external switchAll: unit => ObservableOperator.t(t('a), 'a) = "switchAll";

[@bs.module "@reactive-js/observable"]
external take: int => ObservableOperator.t('a, 'a) = "take";

[@bs.module "@reactive-js/observable"]
external takeLast: int => ObservableOperator.t('a, 'a) = "takeLast";

[@bs.module "@reactive-js/observable"]
external takeWhile:
  ([@bs.uncurry] ('a => bool)) => ObservableOperator.t('a, 'a) =
  "takeWhile";

[@bs.module "@reactive-js/observable"]
external throttle:
  ([@bs.uncurry] ('a => t('any))) => ObservableOperator.t('a, 'a) =
  "throttle";

[@bs.module "@reactive-js/observable"]
external throttleFirst:
  ([@bs.uncurry] ('a => t('any))) => ObservableOperator.t('a, 'a) =
  "throttleFirst";

[@bs.module "@reactive-js/observable"]
external throttleFirstTime: int => ObservableOperator.t('a, 'a) =
  "throttleFirstTime";

[@bs.module "@reactive-js/observable"]
external throttleLast:
  ([@bs.uncurry] ('a => t('any))) => ObservableOperator.t('a, 'a) =
  "throttleLast";

[@bs.module "@reactive-js/observable"]
external throttleLastTime: int => ObservableOperator.t('a, 'a) =
  "throttleLastTime";

[@bs.module "@reactive-js/observable"]
external throttleTime: int => ObservableOperator.t('a, 'a) = "throttleTime";

[@bs.module "@reactive-js/observable"]
external timeout: int => ObservableOperator.t('a, 'a) = "timeout";

[@bs.module "@reactive-js/observable"]
external toArray:
  (~schedulerFactory: [@bs.uncurry] (unit => SchedulerResource.t)=?, unit) =>
  Operator.t(t('a), array('a)) =
  "toArray";

[@bs.module "@reactive-js/observable"]
external toPromise:
  (~schedulerFactory: [@bs.uncurry] (unit => SchedulerResource.t)=?, unit) =>
  Operator.t(t('a), Js.Promise.t('a)) =
  "toPromise";

[@bs.module "@reactive-js/observable"]
external withLatestFrom:
  (t('b), ~selector: ('a, 'b) => 'c, unit) => ObservableOperator.t('a, 'c) =
  "withLatestFrom";
