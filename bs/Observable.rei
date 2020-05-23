module ObservableLike: {type t('a);};

module MulticastObservableLike: {
  type t('a);

  external asDisposableLike: t('a) => Disposable.DisposableLike.t =
    "%identity";

  external asObservableLike: t('a) => ObservableLike.t('a) = "%identity";
};

module DispatcherLike: {
  type t('a);

  external asDisposableLike: t('a) => Disposable.DisposableLike.t =
    "%identity";

  [@bs.send] external dispatch: (t('a), 'a) => unit = "dispatch";
};

module StreamLike: {
  type t('req, 'resp);

  external asDispatcherLike: t('req, 'resp) => DispatcherLike.t('req);
  external asDisposableLike: t('req, 'resp) => Disposable.DisposableLike.t =
    "%identity";
  external asMulticastObservableLike:
    t('req, 'resp) => MulticastObservableLike.t('resp) =
    "%identity";
  external asObservableLike: t('req, 'resp) => ObservableLike.t('resp) =
    "%identity";
};

module SubjectLike: {type t('a) = StreamLike.t('a, 'a);};

let await:
  ('a => ObservableLike.t('b), ObservableLike.t('a)) => ObservableLike.t('b);

let buffer:
  (~duration: int=?, ~maxBufferSize: int=?, ObservableLike.t('a)) =>
  ObservableLike.t(array('a));

// FIXME: catchError

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external combineLatest2:
  (ObservableLike.t('a), ObservableLike.t('b)) =>
  ObservableLike.t(('a, 'b)) =
  "combineLatest";

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external combineLatest3:
  (ObservableLike.t('a), ObservableLike.t('b), ObservableLike.t('c)) =>
  ObservableLike.t(('a, 'b, 'c)) =
  "combineLatest";

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external combineLatest4:
  (
    ObservableLike.t('a),
    ObservableLike.t('b),
    ObservableLike.t('c),
    ObservableLike.t('d)
  ) =>
  ObservableLike.t(('a, 'b, 'c, 'd)) =
  "combineLatest";

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external combineLatest5:
  (
    ObservableLike.t('a),
    ObservableLike.t('b),
    ObservableLike.t('c),
    ObservableLike.t('d),
    ObservableLike.t('e)
  ) =>
  ObservableLike.t(('a, 'b, 'c, 'd, 'e)) =
  "combineLatest";

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external combineLatest6:
  (
    ObservableLike.t('a),
    ObservableLike.t('b),
    ObservableLike.t('c),
    ObservableLike.t('d),
    ObservableLike.t('e),
    ObservableLike.t('f)
  ) =>
  ObservableLike.t(('a, 'b, 'c, 'd, 'e, 'f)) =
  "combineLatest";

let combineLatestWith:
  (ObservableLike.t('b), ObservableLike.t('a)) =>
  ObservableLike.t(('a, 'b));

let compute: (~delay: int=?, unit => 'a) => ObservableLike.t('a);

[@bs.module "@reactive-js/core/observable"] [@bs.val] [@bs.variadic]
external concat: array(ObservableLike.t('a)) => ObservableLike.t('a) =
  "concat";

let concatAll:
  ObservableLike.t(ObservableLike.t('a)) => ObservableLike.t('a);

let concatMap:
  ('b => ObservableLike.t('a), ObservableLike.t('b)) => ObservableLike.t('a);

let concatWith:
  (ObservableLike.t('a), ObservableLike.t('a)) => ObservableLike.t('a);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external createObservable:
  ([@bs.uncurry] (DispatcherLike.t('a) => unit)) => ObservableLike.t('a) =
  "createObservable";

let createSubject: (~replay: int=?, unit) => SubjectLike.t('a);

let distinctUntilChanged:
  (~equality: ('a, 'a) => bool=?, ObservableLike.t('a)) =>
  ObservableLike.t('a);

let empty: (~delay: int=?, unit) => ObservableLike.t('a);

let endWith: (array('a), ObservableLike.t('a)) => ObservableLike.t('a);

let exhaust: ObservableLike.t(ObservableLike.t('a)) => ObservableLike.t('a);

let exhaustMap:
  ('a => ObservableLike.t('b), ObservableLike.t('a)) => ObservableLike.t('b);

let fromArray:
  (~delay: int=?, ~startIndex: int=?, ~endIndex: int=?, array('a)) =>
  ObservableLike.t('a);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external fromDisposable: Disposable.DisposableLike.t => ObservableLike.t('any) =
  "fromDisposable";

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external fromPromise:
  ([@bs.uncurry] (unit => Js.Promise.t('a))) => ObservableLike.t('a) =
  "fromPromise";

let fromValue: (~delay: int=?, 'a) => ObservableLike.t('a);

// FIXME: genMap
// FIXME: generate

// FIXME: Might want to take a unit arg for type reasons
let ignoreElements: ObservableLike.t('a) => ObservableLike.t('b);

let keep: ('a => bool, ObservableLike.t('a)) => ObservableLike.t('a);

let map: ('a => 'b, ObservableLike.t('a)) => ObservableLike.t('b);

let mapAsync:
  ('a => Js.Promise.t('b), ObservableLike.t('a)) => ObservableLike.t('b);

let mapTo: ('b, ObservableLike.t('a)) => ObservableLike.t('b);

[@bs.module "@reactive-js/core/observable"] [@bs.val] [@bs.variadic]
external merge: array(ObservableLike.t('a)) => ObservableLike.t('a) =
  "merge";

let mergeAll:
  (
    ~maxBufferSize: int=?,
    ~maxConcurrency: int=?,
    ObservableLike.t(ObservableLike.t('a))
  ) =>
  ObservableLike.t('a);

let mergeMap:
  (
    ~maxBufferSize: int=?,
    ~maxConcurrency: int=?,
    'b => ObservableLike.t('a),
    ObservableLike.t('b)
  ) =>
  ObservableLike.t('a);

let mergeWith:
  (ObservableLike.t('a), ObservableLike.t('a)) => ObservableLike.t('a);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external never: unit => ObservableLike.t('a) = "never";

let onNotify: ('a => unit, ObservableLike.t('a)) => ObservableLike.t('a);

// FIXME: onSubscribe

let pairwise: ObservableLike.t('a) => ObservableLike.t((option('a), 'a));

let publish:
  (~replay: int=?, Scheduler.SchedulerLike.t, ObservableLike.t('a)) =>
  MulticastObservableLike.t('a);

let reduce:
  (('acc, 'a) => 'acc, unit => 'acc, ObservableLike.t('a)) =>
  ObservableLike.t('acc);

let repeat: ObservableLike.t('a) => ObservableLike.t('a);

let repeatCount: (int, ObservableLike.t('a)) => ObservableLike.t('a);

let repeatPredicate:
  ('a => bool, ObservableLike.t('a)) => ObservableLike.t('a);

// FIXME: retry

let scan:
  (('acc, 'a) => 'acc, unit => 'acc, ObservableLike.t('a)) =>
  ObservableLike.t('acc);

let scanAsync:
  (
    ('acc, 'a) => ObservableLike.t('acc),
    unit => 'acc,
    ObservableLike.t('a)
  ) =>
  ObservableLike.t('acc);

let share:
  (~replay: int=?, Scheduler.SchedulerLike.t, ObservableLike.t('a)) =>
  ObservableLike.t('a);

let skipFirst: (~count: int=?, ObservableLike.t('a)) => ObservableLike.t('a);

let startWith: (array('a), ObservableLike.t('a)) => ObservableLike.t('a);

let subscribe:
  (Scheduler.SchedulerLike.t, ObservableLike.t('a)) =>
  Disposable.DisposableLike.t;

let subscribeOn:
  (Scheduler.SchedulerLike.t, ObservableLike.t('a)) => ObservableLike.t('a);

let switchAll:
  ObservableLike.t(ObservableLike.t('a)) => ObservableLike.t('a);

let switchMap:
  ('a => ObservableLike.t('b), ObservableLike.t('a)) => ObservableLike.t('b);

let takeFirst: (~count: int=?, ObservableLike.t('a)) => ObservableLike.t('a);

let takeLast: (~count: int=?, ObservableLike.t('a)) => ObservableLike.t('a);

let takeUntil:
  (ObservableLike.t('any), ObservableLike.t('a)) => ObservableLike.t('a);

let takeWhile:
  (~inclusive: bool=?, 'a => bool, ObservableLike.t('a)) =>
  ObservableLike.t('a);

// FIXME: throttle
// FIXME: throwIfEmpty
// FIXME: throws

let timeoutAfter: (int, ObservableLike.t('a)) => ObservableLike.t('a);

let toPromise:
  (Scheduler.SchedulerLike.t, ObservableLike.t('a)) => Js.Promise.t('a);

let toRunnable:
  (
    ~schedulerFactory: unit => Scheduler.VirtualTimeSchedulerLike.t=?,
    ObservableLike.t('a)
  ) =>
  Runnable.RunnableLike.t('a);

// FIXME: using

let withLatestFrom:
  (ObservableLike.t('b), ('a, 'b) => 'c, ObservableLike.t('a)) =>
  ObservableLike.t('c);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external zip2:
  (ObservableLike.t('a), ObservableLike.t('b)) =>
  ObservableLike.t(('a, 'b)) =
  "zip";

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external zip3:
  (ObservableLike.t('a), ObservableLike.t('b), ObservableLike.t('c)) =>
  ObservableLike.t(('a, 'b, 'c)) =
  "zip";

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external zip4:
  (
    ObservableLike.t('a),
    ObservableLike.t('b),
    ObservableLike.t('c),
    ObservableLike.t('d)
  ) =>
  ObservableLike.t(('a, 'b, 'c, 'd)) =
  "zip";

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external zip5:
  (
    ObservableLike.t('a),
    ObservableLike.t('b),
    ObservableLike.t('c),
    ObservableLike.t('d),
    ObservableLike.t('e)
  ) =>
  ObservableLike.t(('a, 'b, 'c, 'd, 'e)) =
  "zip";

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external zip6:
  (
    ObservableLike.t('a),
    ObservableLike.t('b),
    ObservableLike.t('c),
    ObservableLike.t('d),
    ObservableLike.t('e),
    ObservableLike.t('f)
  ) =>
  ObservableLike.t(('a, 'b, 'c, 'd, 'e, 'f)) =
  "zip";

let zipLatestWith:
  (ObservableLike.t('b), ObservableLike.t('a)) =>
  ObservableLike.t(('a, 'b));

let zipWith:
  (ObservableLike.t('b), ObservableLike.t('a)) =>
  ObservableLike.t(('a, 'b));

let zipWithLatestFrom:
  (ObservableLike.t('b), ('a, 'b) => 'c, ObservableLike.t('a)) =>
  ObservableLike.t('c);