type t('a);

module ObservableOperator = {
  type observable('a) = t('a);
  type t('a, 'b) = Operator.t(observable('a), observable('b));
};

[@bs.module "@reactive-js/rx"]
external create: ([@bs.uncurry] (Observer.t('a) => Disposable.t)) => t('a) =
  "createObservable";

[@bs.module "@reactive-js/rx"]
external combineLatest2:
  ((t('a), t('b)), [@bs.uncurry] (('a, 'b) => 'c)) => t('c) =
  "combineLatest";

[@bs.module "@reactive-js/rx"]
external combineLatest3:
  ((t('a), t('b), t('c)), [@bs.uncurry] (('a, 'b, 'c) => 'd)) => t('d) =
  "combineLatest";

[@bs.module "@reactive-js/rx"]
external combineLatest4:
  (
    (t('a), t('b), t('c), t('d)),
    [@bs.uncurry] (('a, 'b, 'c, 'd) => 'e)
  ) =>
  t('e) =
  "combineLatest";

[@bs.module "@reactive-js/rx"]
external combineLatest5:
  (
    (t('a), t('b), t('c), t('d), t('e)),
    [@bs.uncurry] (('a, 'b, 'c, 'd, 'e) => 'f)
  ) =>
  t('f) =
  "combineLatest";

[@bs.module "@reactive-js/rx"]
external combineLatest6:
  (
    (t('a), t('b), t('c), t('d), t('e), t('f)),
    [@bs.uncurry] (('a, 'b, 'c, 'd, 'e, 'f) => 'g)
  ) =>
  t('g) =
  "combineLatest";

[@bs.module "@reactive-js/rx"]
external combineLatest7:
  (
    (t('a), t('b), t('c), t('d), t('e), t('f), t('g)),
    [@bs.uncurry] (('a, 'b, 'c, 'd, 'e, 'f, 'g) => 'h)
  ) =>
  t('h) =
  "combineLatest";
[@bs.module "@reactive-js/rx"]
external combineLatest8:
  (
    (t('a), t('b), t('c), t('d), t('e), t('f), t('g), t('h)),
    [@bs.uncurry] (('a, 'b, 'c, 'd, 'e, 'f, 'g, 'h) => 'i)
  ) =>
  t('i) =
  "combineLatest";

[@bs.module "@reactive-js/rx"]
external combineLatest9:
  (
    (t('a), t('b), t('c), t('d), t('e), t('f), t('g), t('h), t('i)),
    [@bs.uncurry] (('a, 'b, 'c, 'd, 'e, 'f, 'g, 'h, 'i) => 'j)
  ) =>
  t('j) =
  "combineLatest";

[@bs.module "@reactive-js/rx"] [@bs.variadic]
external concat: (t('a), t('a), array(t('a))) => t('a) = "concat";

[@bs.module "@reactive-js/rx"]
external defer: ([@bs.uncurry] (unit => t('a))) => t('a) = "defer";

[@bs.module "@reactive-js/rx"]
external empty: (~delay: int=?, unit) => t('a) = "empty";

[@bs.module "@reactive-js/rx"]
external fromArray: (array('a), ~delay: int=?, unit) => t('a) = "fromArray";

[@bs.module "@reactive-js/rx"]
external fromPromiseFactory:
  ([@bs.uncurry] (unit => Js.Promise.t('a))) => t('a) =
  "fromPromiseFactory";

[@bs.module "@reactive-js/rx"] [@bs.variadic]
external fromScheduledValues: ((int, 'a), array((int, 'a))) => t('a) =
  "fromScheduledValues";

[@bs.module "@reactive-js/rx"]
external generate: ('a => 'a, ~initialValue: 'a, ~delay: int=?, unit) => t('a) =
  "generate";

[@bs.module "@reactive-js/rx"] [@bs.variadic]
external merge: (t('a), t('a), array(t('a))) => t('a) = "merge";

[@bs.module "@reactive-js/rx"]
external never: unit => t('a) = "never";

[@bs.module "@reactive-js/rx"]
external ofValue: 'a => t('a) = "ofValue";

[@bs.module "@reactive-js/rx"]
external subscribe: Scheduler.t => Operator.t(t('a), Disposable.t) =
  "subscribe";

[@bs.module "@reactive-js/rx"]
external throws: (Error.JsError.t, ~delay: int=?, unit) => t('a) = "throws";

[@bs.module "@reactive-js/rx"]
external buffer:
  (~duration: int, ~maxBufferSize: int=?, unit) =>
  ObservableOperator.t('a, array('a)) =
  "buffer";

[@bs.module "@reactive-js/rx"]
external concatAll:
  (~maxBufferSize: int=?, unit) => ObservableOperator.t(t('a), 'a) =
  "concatAll";

[@bs.module "@reactive-js/rx"]
external distinctUntilChanged:
  (~equals: ('a, 'a) => bool=?, unit) => ObservableOperator.t('a, 'a) =
  "distinctUntilChanged";

[@bs.module "@reactive-js/rx"] [@bs.variadic]
external endWith: ('a, array('a)) => ObservableOperator.t('a, 'a) =
  "endWith";

[@bs.module "@reactive-js/rx"]
external exhaust: unit => ObservableOperator.t(t('a), 'a) = "exhaust";

[@bs.module "@reactive-js/rx"]
external ignoreElements: unit => ObservableOperator.t('a, 'b) =
  "ignoreElements";

[@bs.module "@reactive-js/rx"]
external keep: ([@bs.uncurry] ('a => bool)) => ObservableOperator.t('a, 'a) =
  "keep";

[@bs.module "@reactive-js/rx"]
external map: ('a => 'b) => ObservableOperator.t('a, 'b) = "map";

module MergeAllConfig = {
  type t;

  [@bs.obj]
  external create: (~maxBufferSize: int=?, ~maxConcurrency: int=?, unit) => t =
    "";
};

[@bs.module "@reactive-js/rx"]
external mergeAll: MergeAllConfig.t => ObservableOperator.t(t('a), 'a) =
  "mergeAll";

[@bs.module "@reactive-js/rx"]
external observe: Observer.t('a) => ObservableOperator.t('a, 'a) = "observe";

[@bs.module "@reactive-js/rx"]
external onComplete:
  ([@bs.uncurry] (option(Error.t) => unit)) => ObservableOperator.t('a, 'a) =
  "onComplete";

[@bs.module "@reactive-js/rx"]
external onError:
  ([@bs.uncurry] (Error.JsError.t => unit)) => ObservableOperator.t('a, 'a) =
  "onError";

[@bs.module "@reactive-js/rx"]
external onNext: ([@bs.uncurry] ('a => unit)) => ObservableOperator.t('a, 'a) =
  "onNext";

[@bs.module "@reactive-js/rx"]
external reduce:
  (
    [@bs.uncurry] (('acc, 'a) => 'acc),
    ~initialValue: [@bs.uncurry] (unit => 'acc),
    unit
  ) =>
  ObservableOperator.t('a, 'acc) =
  "reduce";

[@bs.module "@reactive-js/rx"]
external repeat:
  (~predicate: [@bs.uncurry] (int => bool)=?, unit) =>
  ObservableOperator.t('a, 'a) =
  "repeat";

[@bs.module "@reactive-js/rx"]
external repeatCount: (int, unit) => ObservableOperator.t('a, 'a) = "repeat";

[@bs.module "@reactive-js/rx"]
external retry:
  (~predicate: [@bs.uncurry] ((int, Error.JsError.t) => bool)=?, unit) =>
  ObservableOperator.t('a, 'a) =
  "retry";

[@bs.module "@reactive-js/rx"]
external scan:
  (
    [@bs.uncurry] (('acc, 'a) => 'acc),
    ~initialValue: [@bs.uncurry] (unit => 'acc),
    unit
  ) =>
  ObservableOperator.t('a, 'acc) =
  "scan";

[@bs.module "@reactive-js/rx"] [@bs.variadic]
external startWith: ('a, array('a)) => ObservableOperator.t('a, 'a) =
  "startWith";

[@bs.module "@reactive-js/rx"]
external subscribeOn: Scheduler.t => ObservableOperator.t('a, 'a) =
  "subscribeOn";

[@bs.module "@reactive-js/rx"]
external switchAll: unit => ObservableOperator.t(t('a), 'a) = "switchAll";

[@bs.module "@reactive-js/rx"]
external take: int => ObservableOperator.t('a, 'a) = "take";

[@bs.module "@reactive-js/rx"]
external takeLast: int => ObservableOperator.t('a, 'a) = "takeLast";

[@bs.module "@reactive-js/rx"]
external takeWhile:
  ([@bs.uncurry] ('a => bool)) => ObservableOperator.t('a, 'a) =
  "takeWhile";

[@bs.module "@reactive-js/rx"]
external throttle:
  (
    [@bs.uncurry] ('a => t('any)),
    ~throttleConfig: [@bs.int] [
                       | [@bs.as 1] `First
                       | [@bs.as 2] `Last
                       | [@bs.as 2] `Interval
                     ]
                       =?,
    unit
  ) =>
  ObservableOperator.t('a, 'a) =
  "throttle";

[@bs.module "@reactive-js/rx"]
external throttleTime:
  (
    int,
    ~throttleConfig: [@bs.int] [
                       | [@bs.as 1] `First
                       | [@bs.as 2] `Last
                       | [@bs.as 2] `Interval
                     ]
                       =?,
    unit
  ) =>
  ObservableOperator.t('a, 'a) =
  "throttle";

[@bs.module "@reactive-js/rx"]
external timeout: int => ObservableOperator.t('a, 'a) = "timeout";

[@bs.module "@reactive-js/rx"]
external toArray:
  (~schedulerFactory: [@bs.uncurry] (unit => SchedulerResource.t)=?, unit) =>
  Operator.t(t('a), array('a)) =
  "toArray";

[@bs.module "@reactive-js/rx"]
external toPromise:
  (~schedulerFactory: [@bs.uncurry] (unit => SchedulerResource.t)=?, unit) =>
  Operator.t(t('a), Js.Promise.t('a)) =
  "toPromise";

[@bs.module "@reactive-js/rx"]
external withLatestFrom:
  (t('b), ~selector: ('a, 'b) => 'c, unit) => ObservableOperator.t('a, 'c) =
  "withLatestFrom";