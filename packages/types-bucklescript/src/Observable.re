type t('a);

module ObservableOperator = {
  type nonrec t('a, 'b) = t('a) => t('b);
};

module BufferOptions = {
  type t;

  [@bs.obj]
  external create: (~duration: int=?, ~maxBufferSize: int=?, unit) => t = "";
};

[@bs.module "@reactive-js/observable"]
external buffer:
  (~options: BufferOptions.t=?, unit) => ObservableOperator.t('a, array('a)) =
  "buffer";

[@bs.module "@reactive-js/observable"]
external combineLatest2:
  ((t('a), t('b)), [@bs.uncurry] (('a, 'b) => 'c)) => t('c) =
  "combineLatest";

[@bs.module "@reactive-js/observable"]
external combineLatest3:
  ((t('a), t('b), t('c)), [@bs.uncurry] (('a, 'b, 'c) => 'd)) => t('d) =
  "combineLatest";

[@bs.module "@reactive-js/observable"]
external combineLatest4:
  (
    (t('a), t('b), t('c), t('d)),
    [@bs.uncurry] (('a, 'b, 'c, 'd) => 'e)
  ) =>
  t('e) =
  "combineLatest";

[@bs.module "@reactive-js/observable"]
external combineLatest5:
  (
    (t('a), t('b), t('c), t('d), t('e)),
    [@bs.uncurry] (('a, 'b, 'c, 'd, 'e) => 'f)
  ) =>
  t('f) =
  "combineLatest";

[@bs.module "@reactive-js/observable"]
external combineLatest6:
  (
    (t('a), t('b), t('c), t('d), t('e), t('f)),
    [@bs.uncurry] (('a, 'b, 'c, 'd, 'e, 'f) => 'g)
  ) =>
  t('g) =
  "combineLatest";

[@bs.module "@reactive-js/observable"]
external combineLatest7:
  (
    (t('a), t('b), t('c), t('d), t('e), t('f), t('g)),
    [@bs.uncurry] (('a, 'b, 'c, 'd, 'e, 'f, 'g) => 'h)
  ) =>
  t('h) =
  "combineLatest";
[@bs.module "@reactive-js/observable"]
external combineLatest8:
  (
    (t('a), t('b), t('c), t('d), t('e), t('f), t('g), t('h)),
    [@bs.uncurry] (('a, 'b, 'c, 'd, 'e, 'f, 'g, 'h) => 'i)
  ) =>
  t('i) =
  "combineLatest";

[@bs.module "@reactive-js/observable"]
external combineLatest9:
  (
    (t('a), t('b), t('c), t('d), t('e), t('f), t('g), t('h), t('i)),
    [@bs.uncurry] (('a, 'b, 'c, 'd, 'e, 'f, 'g, 'h, 'i) => 'j)
  ) =>
  t('j) =
  "combineLatest";

[@bs.module "@reactive-js/observable"] [@bs.variadic]
external concat: (t('a), t('a), array(t('a))) => t('a) = "concat";

[@bs.module "@reactive-js/observable"]
external concatAll:
  (~maxBufferSize: int=?, unit) => ObservableOperator.t(t('a), 'a) =
  "concatAll";

[@bs.module "@reactive-js/observable"]
external contains:
  ('a, ~equals: [@bs.uncurry] (('a, 'a) => bool)=?, unit) =>
  ObservableOperator.t('a, bool) =
  "contains";

[@bs.module "@reactive-js/observable"]
external distinctUntilChanged:
  (~equals: [@bs.uncurry] (('a, 'a) => bool)=?, unit) =>
  ObservableOperator.t('a, 'a) =
  "distinctUntilChanged";

[@bs.module "@reactive-js/observable"]
external empty: (~delay: int=?, unit) => t('a) = "empty";

[@bs.module "@reactive-js/observable"] [@bs.variadic]
external endWith: ('a, array('a)) => ObservableOperator.t('a, 'a) =
  "endWith";

[@bs.module "@reactive-js/observable"]
external every: ([@bs.uncurry] ('a => bool)) => ObservableOperator.t('a, bool) =
  "every";

[@bs.module "@reactive-js/observable"]
external exhaust: unit => ObservableOperator.t(t('a), 'a) = "exhaust";

[@bs.module "@reactive-js/observable"]
external forEach:
  (VirtualTimeScheduler.t, [@bs.uncurry] ('a => unit)) =>
  Operator.t(t('a), unit) =
  "forEach";

module FromArrayOptions = {
  type t;

  [@bs.obj]
  external create: (~delay: int=?, ~startIndex: int=?, unit) => t = "";
};

[@bs.module "@reactive-js/observable"]
external fromArray:
  (array('a), ~options: FromArrayOptions.t=?, unit) => t('a) =
  "fromArray";

[@bs.module "@reactive-js/observable"]
external fromPromise: ([@bs.uncurry] (unit => Js.Promise.t('a))) => t('a) =
  "fromPromise";

[@bs.module "@reactive-js/observable"]
external generate:
  ([@bs.uncurry] ('a => 'a), 'a, ~delay: int=?, unit) => t('a) =
  "generate";

[@bs.module "@reactive-js/observable"]
external ignoreElements: unit => ObservableOperator.t('a, 'a) =
  "ignoreElements";

[@bs.module "@reactive-js/observable"]
external keep: ([@bs.uncurry] ('a => bool)) => ObservableOperator.t('a, 'a) =
  "keep";

[@bs.module "@reactive-js/observable"]
external map: ([@bs.uncurry] ('a => 'b)) => ObservableOperator.t('a, 'b) =
  "map";

[@bs.module "@reactive-js/observable"] [@bs.variadic]
external merge: (t('a), t('a), array(t('a))) => t('a) = "merge";

module MergeAllOptions = {
  type t;

  [@bs.obj]
  external create: (~maxBufferSize: int=?, ~maxConcurrency: int=?, unit) => t =
    "";
};

[@bs.module "@reactive-js/observable"]
external mergeAll:
  (~options: MergeAllOptions.t=?, unit) => ObservableOperator.t(t('a), 'a) =
  "mergeAll";

[@bs.module "@reactive-js/observable"]
external never: unit => t('a) = "never";

[@bs.module "@reactive-js/observable"]
external none: ([@bs.uncurry] ('a => bool)) => ObservableOperator.t('a, bool) =
  "every";

[@bs.module "@reactive-js/observable"]
external ofValue: ('a, ~delay: int=?, unit) => t('a) = "ofValue";

[@bs.module "@reactive-js/observable"]
external onDispose:
  ([@bs.uncurry] ((~error: Error.t=?, unit) => unit)) =>
  ObservableOperator.t('a, 'a) =
  "onDispose";

[@bs.module "@reactive-js/observable"]
external onError:
  ([@bs.uncurry] (Error.t => unit)) => ObservableOperator.t('a, 'a) =
  "onError";

[@bs.module "@reactive-js/observable"]
external onNotify:
  ([@bs.uncurry] ('a => unit)) => ObservableOperator.t('a, 'a) =
  "onNotify";

[@bs.module "@reactive-js/observable"]
external reduce:
  ([@bs.uncurry] (('acc, 'a) => 'acc), [@bs.uncurry] (unit => 'acc), unit) =>
  ObservableOperator.t('a, 'acc) =
  "reduce";

[@bs.module "@reactive-js/observable"]
external scan:
  ([@bs.uncurry] (('acc, 'a) => 'acc), [@bs.uncurry] (unit => 'acc), unit) =>
  ObservableOperator.t('a, 'acc) =
  "scan";

[@bs.module "@reactive-js/observable"]
external skipFirst: (~count: int=?, unit) => ObservableOperator.t('a, 'a) =
  "skipFirst";

[@bs.module "@reactive-js/observable"]
external some: ([@bs.uncurry] ('a => bool)) => ObservableOperator.t('a, bool) =
  "some";

[@bs.module "@reactive-js/observable"] [@bs.variadic]
external startWith: ('a, array('a)) => ObservableOperator.t('a, 'a) =
  "endWith";

[@bs.module "@reactive-js/observable"]
external subscribe: Scheduler.t => Operator.t(t('a), Disposable.t) =
  "subscribe";

[@bs.module "@reactive-js/observable"]
external subscribeOn: Scheduler.t => ObservableOperator.t('a, 'a) =
  "subscribeOn";

[@bs.module "@reactive-js/observable"]
external switchAll: unit => ObservableOperator.t(t('a), 'a) = "switchAll";

[@bs.module "@reactive-js/observable"]
external takeFirst: (~count: int=?, unit) => ObservableOperator.t('a, 'a) =
  "takeFirst";

[@bs.module "@reactive-js/observable"]
external takeLast: (~count: int=?, unit) => ObservableOperator.t('a, 'a) =
  "takeLast";

[@bs.module "@reactive-js/observable"]
external takeWhile:
  ([@bs.uncurry] ('a => bool)) => ObservableOperator.t('a, 'a) =
  "takeWhile";

[@bs.module "@reactive-js/observable"]
external toArray:
  ([@bs.uncurry] (unit => VirtualTimeScheduler.t)) =>
  Operator.t(t('a), array('a)) =
  "toArray";

[@bs.module "@reactive-js/observable"]
external toPromise: Scheduler.t => Operator.t(t('a), Js.Promise.t('a)) =
  "toPromise";

[@bs.module "@reactive-js/observable"]
external toValue:
  ([@bs.uncurry] (unit => VirtualTimeScheduler.t)) => Operator.t(t('a), 'a) =
  "toValue";

[@bs.module "@reactive-js/observable"]
external withLatestFrom:
  (t('b), ~selector: ('a, 'b) => 'c, unit) => ObservableOperator.t('a, 'c) =
  "withLatestFrom";
