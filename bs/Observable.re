module Function1 = {
  type t('a, 't) = (. 'a) => 't;
};

module ObservableLike = {
  type t('a);
};

module MulticastObservableLike = {
  type t('a);

  external asDisposableLike: t('a) => Disposable.DisposableLike.t =
    "%identity";

  external asObservableLike: t('a) => ObservableLike.t('a) = "%identity";
};

module DispatcherLike = {
  type t('a);

  external asDisposableLike: t('a) => Disposable.DisposableLike.t =
    "%identity";

  [@bs.send] external dispatch: (t('a), 'a) => unit = "dispatch";
};

module StreamLike = {
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

module SubjectLike = {
  type t('a) = StreamLike.t('a, 'a);
};

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external await:
  ([@bs.uncurry] ('a => ObservableLike.t('b))) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('b)) =
  "await";

let await = (mapper, obs) => (await(mapper))(. obs);

module BufferOptions = {
  type t = {
    duration: option(int),
    maxBufferSize: option(int),
  };
};

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external buffer:
  BufferOptions.t =>
  Function1.t(ObservableLike.t('a), ObservableLike.t(array('a))) =
  "buffer";

let buffer = (~duration=?, ~maxBufferSize=?, obs) =>
  (buffer({duration, maxBufferSize}))(. obs);

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

let combineLatestWith = (obsB, obsA) => combineLatest2(obsA, obsB);

module ComputeOptions = {
  type t = {delay: option(int)};
};

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external compute:
  ComputeOptions.t => Function1.t((. unit) => 'a, ObservableLike.t('a)) =
  "compute";

let compute = (~delay=?, f) => (compute({delay: delay}))(. (.) => f());

[@bs.module "@reactive-js/core/observable"] [@bs.val] [@bs.variadic]
external concat: array(ObservableLike.t('a)) => ObservableLike.t('a) =
  "concat";

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external concatAll:
  unit =>
  Function1.t(ObservableLike.t(ObservableLike.t('a)), ObservableLike.t('a)) =
  "concatAll";

let concatAll = src => (concatAll())(. src);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external concatMap:
  ([@bs.uncurry] ('a => ObservableLike.t('b))) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('b)) =
  "concatMap";

let concatMap = (mapper, obs) => (concatMap(mapper))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external concatWith:
  ObservableLike.t('a) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('a)) =
  "concatWith";

let concatWith = (obsB, obsA) => (concatWith(obsB))(. obsA);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external createObservable:
  ([@bs.uncurry] (DispatcherLike.t('a) => unit)) => ObservableLike.t('a) =
  "createObservable";

module CreateSubjectOptions = {
  type t = {replay: option(int)};
};

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external createSubject: CreateSubjectOptions.t => SubjectLike.t('a) =
  "createSubject";

let createSubject = (~replay=?, ()) => createSubject({replay: replay});

module DistinctUntilChangedOptions = {
  type t('a) = {equality: option((. 'a, 'a) => bool)};
};

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external distinctUntilChanged:
  option(DistinctUntilChangedOptions.t('a)) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('a)) =
  "distinctUntilChanged";

let distinctUntilChanged = (~equality=?, obs) =>
  switch (equality) {
  | Some(equality) =>
    (
      distinctUntilChanged(
        Some({equality: Some((. a, b) => equality(a, b))}),
      )
    )(.
      obs,
    )
  | None => (distinctUntilChanged(None))(. obs)
  };

module EmptyOptions = {
  type t = {delay: option(int)};
};

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external empty: EmptyOptions.t => ObservableLike.t('a) = "empty";

let empty = (~delay=?, ()) => empty({delay: delay});

[@bs.module "@reactive-js/core/observable"] [@bs.val] [@bs.variadic]
external endWith:
  array('a) => Function1.t(ObservableLike.t('a), ObservableLike.t('a)) =
  "endWith";

let endWith = (tail, obs) => (endWith(tail))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external exhaust:
  unit =>
  Function1.t(ObservableLike.t(ObservableLike.t('a)), ObservableLike.t('a)) =
  "exhaust";

let exhaust = obs => (exhaust())(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external exhaustMap:
  ([@bs.uncurry] ('a => ObservableLike.t('b))) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('b)) =
  "exhaustMap";

let exhaustMap = (f, obs) => (exhaustMap(f))(. obs);

module FromArrayOptions = {
  type t = {
    delay: option(int),
    startIndex: option(int),
    endIndex: option(int),
  };
};

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external fromArray:
  FromArrayOptions.t => Function1.t(array('a), ObservableLike.t('a)) =
  "fromArray";

let fromArray = (~delay=?, ~startIndex=?, ~endIndex=?, arr) =>
  (fromArray({delay, startIndex, endIndex}))(. arr);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external fromDisposable: Disposable.DisposableLike.t => ObservableLike.t('any) =
  "fromDisposable";

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external fromPromise:
  ([@bs.uncurry] (unit => Js.Promise.t('a))) => ObservableLike.t('a) =
  "fromPromise";

let fromValue = (~delay=?, v) => fromArray(~delay?, [|v|]);

// FIXME: genMap
// FIXME: generate

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external ignoreElements:
  unit => Function1.t(ObservableLike.t('a), ObservableLike.t('b)) =
  "ignoreElements";

let ignoreElements = obs => (ignoreElements())(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external keep:
  ([@bs.uncurry] ('a => bool)) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('a)) =
  "keep";

let keep = (p, obs) => (keep(p))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external map:
  ([@bs.uncurry] ('a => 'b)) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('b)) =
  "map";

let map = (f, obs) => (map(f))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external mapAsync:
  ([@bs.uncurry] ('a => Js.Promise.t('b))) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('b)) =
  "mapAsync";

let mapAsync = (f, obs) => (mapAsync(f))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external mapTo:
  'b => Function1.t(ObservableLike.t('a), ObservableLike.t('b)) =
  "mapTo";

let mapTo = (b, obs) => (mapTo(b))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val] [@bs.variadic]
external merge: array(ObservableLike.t('a)) => ObservableLike.t('a) =
  "merge";

module MergeAllOptions = {
  type t = {
    maxBufferSize: option(int),
    maxConcurrency: option(int),
  };
};

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external mergeAll:
  MergeAllOptions.t =>
  Function1.t(ObservableLike.t(ObservableLike.t('a)), ObservableLike.t('a)) =
  "mergeAll";

let mergeAll = (~maxBufferSize=?, ~maxConcurrency=?, obs) =>
  (mergeAll({maxBufferSize, maxConcurrency}))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external mergeMap:
  ([@bs.uncurry] ('a => ObservableLike.t('b)), MergeAllOptions.t) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('b)) =
  "mergeMap";

let mergeMap = (~maxBufferSize=?, ~maxConcurrency=?, mapper, obs) =>
  (mergeMap(mapper, {maxBufferSize, maxConcurrency}))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external mergeWith:
  ObservableLike.t('a) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('a)) =
  "mergeWith";

let mergeWith = (obsB, obsA) => (mergeWith(obsB))(. obsA);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external never: unit => ObservableLike.t('a) = "never";

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external onNotify:
  ([@bs.uncurry] ('a => unit)) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('a)) =
  "onNotify";

let onNotify = (f, obs) => (onNotify(f))(. obs);

// FIXME: onSubscribe

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external pairwise:
  unit =>
  Function1.t(ObservableLike.t('a), ObservableLike.t((option('a), 'a))) =
  "pairwise";

let pairwise = obs => (pairwise())(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external publish:
  (Scheduler.SchedulerLike.t, CreateSubjectOptions.t) =>
  Function1.t(ObservableLike.t('a), MulticastObservableLike.t('a)) =
  "publish";

let publish = (~replay=?, scheduler, obs) =>
  (publish(scheduler, {replay: replay}))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external reduce:
  ([@bs.uncurry] (('acc, 'a) => 'acc), [@bs.uncurry] (unit => 'acc)) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('acc)) =
  "reduce";

let reduce = (f, acc, obs) => (reduce(f, acc))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external repeat:
  unit => Function1.t(ObservableLike.t('a), ObservableLike.t('a)) =
  "repeat";

let repeat = obs => (repeat())(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external repeatCount:
  int => Function1.t(ObservableLike.t('a), ObservableLike.t('a)) =
  "repeat";

let repeatCount = (n, obs) => (repeatCount(n))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external repeatPredicate:
  ([@bs.uncurry] ('a => bool)) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('a)) =
  "repeat";

let repeatPredicate = (p, obs) => (repeatPredicate(p))(. obs);

// FIXME: retry

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external scan:
  ([@bs.uncurry] (('acc, 'a) => 'acc), [@bs.uncurry] (unit => 'acc)) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('acc)) =
  "scan";

let scan = (f, acc, obs) => (scan(f, acc))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external scanAsync:
  (
    [@bs.uncurry] (('acc, 'a) => ObservableLike.t('acc)),
    [@bs.uncurry] (unit => 'acc)
  ) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('acc)) =
  "scanAsync";

let scanAsync = (f, acc, obs) => (scanAsync(f, acc))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external share:
  (Scheduler.SchedulerLike.t, CreateSubjectOptions.t) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('a)) =
  "share";

let share = (~replay=?, scheduler, obs) =>
  (share(scheduler, {replay: replay}))(. obs);

module SkipFirstOptions = {
  type t = {count: option(int)};
};

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external skipFirst:
  SkipFirstOptions.t =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('a)) =
  "skipFirst";

let skipFirst = (~count=?, obs) => (skipFirst({count: count}))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val] [@bs.variadic]
external startWith:
  array('a) => Function1.t(ObservableLike.t('a), ObservableLike.t('a)) =
  "startWith";

let startWith = (arr, obs) => (startWith(arr))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external subscribe:
  Scheduler.SchedulerLike.t =>
  Function1.t(ObservableLike.t('a), Disposable.DisposableLike.t) =
  "subscribe";

let subscribe = (scheduler, obs) => (subscribe(scheduler))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external subscribeOn:
  Scheduler.SchedulerLike.t =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('a)) =
  "subscribeOn";

let subscribeOn = (scheduler, obs) => (subscribeOn(scheduler))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external switchAll:
  unit =>
  Function1.t(ObservableLike.t(ObservableLike.t('a)), ObservableLike.t('a)) =
  "switchAll";

let switchAll = obs => (switchAll())(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external switchMap:
  ([@bs.uncurry] ('a => ObservableLike.t('b))) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('b)) =
  "switchMap";

let switchMap = (f, obs) => (switchMap(f))(. obs);

module TakeFirstOptions = {
  type t = {count: option(int)};
};

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external takeFirst:
  TakeFirstOptions.t =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('a)) =
  "takeFirst";

let takeFirst = (~count=?, obs) => (takeFirst({count: count}))(. obs);

module TakeLastOptions = {
  type t = {count: option(int)};
};

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external takeLast:
  TakeLastOptions.t =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('a)) =
  "takeLast";

let takeLast = (~count=?, obs) => (takeLast({count: count}))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external takeUntil:
  ObservableLike.t('any) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('b)) =
  "takeUntil";

let takeUntil = (other, obs) => (takeUntil(other))(. obs);

module TakeWhileOptions = {
  type t = {inclusive: option(bool)};
};

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external takeWhile:
  ([@bs.uncurry] ('a => bool), TakeWhileOptions.t) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('a)) =
  "takeWhile";

let takeWhile = (~inclusive=?, predicate, obs) =>
  (takeWhile(predicate, {inclusive: inclusive}))(. obs);

// FIXME: throttle
// FIXME: throwIfEmpty
// FIXME: throws

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external timeoutAfter:
  int => Function1.t(ObservableLike.t('a), ObservableLike.t('a)) =
  "timeout";

let timeoutAfter = (n, obs) => (timeoutAfter(n))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external toPromise:
  Scheduler.SchedulerLike.t =>
  Function1.t(ObservableLike.t('a), Js.Promise.t('a)) =
  "toPromise";

let toPromise = (scheduler, obs) => (toPromise(scheduler))(. obs);

module ToRunnableOptions = {
  type t = {
    schedulerFactory:
      option((. unit) => Scheduler.VirtualTimeSchedulerLike.t),
  };
};

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external toRunnable:
  ToRunnableOptions.t =>
  Function1.t(ObservableLike.t('a), Runnable.RunnableLike.t('a)) =
  "toRunnable";

let toRunnable =
    (
      ~schedulerFactory: option(unit => Scheduler.VirtualTimeSchedulerLike.t)=?,
      obs,
    ) =>
  switch (schedulerFactory) {
  | Some(f) => (toRunnable({schedulerFactory: Some((.) => f())}))(. obs)
  | _ => (toRunnable({schedulerFactory: None}))(. obs)
  };

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external withLatestFrom:
  (ObservableLike.t('b), [@bs.uncurry] (('a, 'b) => 'c)) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('c)) =
  "withLatestFrom";

let withLatestFrom = (other, selector, obs) =>
  (withLatestFrom(other, selector))(. obs);

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

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external zipLatestWith:
  ObservableLike.t('b) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t(('a, 'b))) =
  "zipLatestWith";

let zipLatestWith = (other, obs) => (zipLatestWith(other))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external zipWith:
  ObservableLike.t('b) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t(('a, 'b))) =
  "zipWith";

let zipWith = (other, obs) => (zipWith(other))(. obs);

[@bs.module "@reactive-js/core/observable"] [@bs.val]
external zipWithLatestFrom:
  (ObservableLike.t('b), [@bs.uncurry] (('a, 'b) => 'c)) =>
  Function1.t(ObservableLike.t('a), ObservableLike.t('c)) =
  "zipWithLatestFrom";

let zipWithLatestFrom = (other, f, obs) =>
  (zipWithLatestFrom(other, f))(. obs);