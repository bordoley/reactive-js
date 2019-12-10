type t('req, 'resp) = {
  isDisposed: bool,
};

external asAsyncIterator: t('req, 'resp) => AsyncIterator.t('req, 'resp) = "%identity";
external asDisposable: t('req, 'resp) => Disposable.t = "%identity";
external asDisposableOrTeardown: t('req, 'resp) => Disposable.DisposableOrTeardown.t = "%identity";
external asObservable: t('req, 'resp) => Observable.t('resp) = "%identity";
external asObservableResource: t('req, 'resp) => ObservableResource.t('resp) = "%identity";

[@bs.send] external add: (t('req, 'resp), Disposable.DisposableOrTeardown.t) => unit = "add";
[@bs.send] [@bs.variadic] external addAll: (t('req, 'resp), array(Disposable.DisposableOrTeardown.t)) => unit = "add";
[@bs.send] external dispose: t('req, 'resp) => unit = "dispose";
[@bs.send] external remove: (t('req, 'resp), Disposable.DisposableOrTeardown.t) => unit = "remove";
[@bs.send] [@bs.variadic] external removeAll: (t('req, 'resp), array(Disposable.DisposableOrTeardown.t)) => unit = "remove";

[@bs.send] external dispatch: (t('req, 'resp), 'resp') => unit = "dispatch";

[@bs.module "@reactive-js/ix"]
external createEventEmitter:  unit => t('event, 'event) = "createEventEmitter";

[@bs.module "@reactive-js/ix"]
external createPersistentStateStore: (
    ~persistentStore: t('state, 'state),
    ~initialState: 'state,
    ~scheduler: Scheduler.t,
    ~equals:('state, 'state)=>bool=?,
    unit,
) => t('state => 'state, 'state) = "createPersistentStateStore";

[@bs.module "@reactive-js/ix"]
external createReducerStore: (
  ~initialState: 'state,
  ~reducer: ('state, 'action) => 'state,
  ~scheduler: Scheduler.t,
  ~equals:('state, 'state)=>bool=?,
  unit,
) => t('action, 'state) = "createReducerStore";

[@bs.module "@reactive-js/ix"]
external createStateStore: (
  ~initialState: 'state,
  ~scheduler: Scheduler.t,
  ~equals:('state, 'state)=>bool=?,
  unit,
) => t('state => 'state, 'state) = "createStateStore";

module AsyncIteratorResourceOperator = {
  type asyncIteratorResource('req, 'resp) = t('req, 'resp);
  type t('reqA, 'respA, 'reqB, 'respB) = Operator.t(asyncIteratorResource('reqA, 'respA), asyncIteratorResource('reqB, 'respB));
};

[@bs.module "@reactive-js/observable-resource"]
external concatAll:
  (~maxBufferSize: int=?, unit) => AsyncIteratorResourceOperator.t('req, Observable.t('a), 'req, 'a) =
  "concatAll";

[@bs.module "@reactive-js/observable-resource"]
external distinctUntilChanged:
  (~equals: ('a, 'a) => bool=?, unit) => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) =
  "distinctUntilChanged";

[@bs.module "@reactive-js/observable-resource"] [@bs.variadic]
external endWith: ('a, array('a)) => AsyncIteratorResourceOperator.t('req, 'a,'req,  'a) =
  "endWith";

[@bs.module "@reactive-js/observable-resource"]
external exhaust: unit => AsyncIteratorResourceOperator.t('req, Observable.t('a),'req,  'a) = "exhaust";

[@bs.module "@reactive-js/observable-resource"]
external ignoreElements: unit => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'b) =
  "ignoreElements";

[@bs.module "@reactive-js/observable-resource"]
external keep: ([@bs.uncurry] ('a => bool)) => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) =
  "keep";

[@bs.module "@reactive-js/observable-resource"]
external map: ('a => 'b) => AsyncIteratorResourceOperator.t('req, 'a, 'req,  'b) = "map";

[@bs.module "@reactive-js/observable-resource"]
external mergeAll: Observable.MergeAllConfig.t => AsyncIteratorResourceOperator.t('req, Observable.t('a), 'req, 'a) =
  "mergeAll";

[@bs.module "@reactive-js/observable-resource"]
external observe: Observer.t('a) => AsyncIteratorResourceOperator.t('req,'a, 'req,'a) = "observe";

[@bs.module "@reactive-js/observable-resource"]
external onComplete:
  ([@bs.uncurry] (option(Error.t) => unit)) => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) =
  "onComplete";

[@bs.module "@reactive-js/observable-resource"]
external onError:
  ([@bs.uncurry] (Error.JsError.t => unit)) => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) =
  "onError";

[@bs.module "@reactive-js/observable-resource"]
external onNext: ([@bs.uncurry] ('a => unit)) => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) =
  "onNext";

[@bs.module "@reactive-js/observable-resource"]
external reduce:
  (
    [@bs.uncurry] (('acc, 'a) => 'acc),
    ~initialValue: [@bs.uncurry] (unit => 'acc),
    unit
  ) =>
  AsyncIteratorResourceOperator.t('req, 'a, 'req, 'acc) =
  "reduce";

[@bs.module "@reactive-js/observable-resource"]
external repeat:
  (~predicate: [@bs.uncurry] (int => bool)=?, unit) =>
  AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) =
  "repeat";

[@bs.module "@reactive-js/observable-resource"]
external repeatCount: (int, unit) => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) = "repeat";

[@bs.module "@reactive-js/observable-resource"]
external retry:
  (~predicate: [@bs.uncurry] ((int, Error.JsError.t) => bool)=?, unit) =>
  AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) =
  "retry";

[@bs.module "@reactive-js/observable-resource"]
external scan:
  (
    [@bs.uncurry] (('acc, 'a) => 'acc),
    ~initialValue: [@bs.uncurry] (unit => 'acc),
    unit
  ) =>
  AsyncIteratorResourceOperator.t('req, 'a, 'req, 'acc) =
  "scan";

[@bs.module "@reactive-js/observable-resource"]
external share:
  (Scheduler.t, ~replayCount: int=?, unit) => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) =
  "share";

[@bs.module "@reactive-js/observable-resource"] [@bs.variadic]
external startWith: ('a, array('a)) => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) =
  "startWith";

[@bs.module "@reactive-js/observable-resource"]
external subscribeOn: Scheduler.t => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) =
  "subscribeOn";

[@bs.module "@reactive-js/observable-resource"]
external switchAll: unit => AsyncIteratorResourceOperator.t('req,Observable.t('a),'req, 'a) = "switchAll";

[@bs.module "@reactive-js/observable-resource"]
external take: int => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) = "take";

[@bs.module "@reactive-js/observable-resource"]
external takeLast: int => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) = "takeLast";

[@bs.module "@reactive-js/observable-resource"]
external takeWhile:
  ([@bs.uncurry] ('a => bool)) => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) =
  "takeWhile";

[@bs.module "@reactive-js/observable-resource"]
external throttle:
  ([@bs.uncurry] ('a => Observable.t('any))) => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) =
  "throttle";

[@bs.module "@reactive-js/observable-resource"]
external throttleFirst:
  ([@bs.uncurry] ('a => Observable.t('any))) => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) =
  "throttleFirst";

[@bs.module "@reactive-js/observable-resource"]
external throttleFirstTime: int => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) =
  "throttleFirstTime";

[@bs.module "@reactive-js/observable-resource"]
external throttleLast:
  ([@bs.uncurry] ('a => Observable.t('any))) => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) =
  "throttleLast";

[@bs.module "@reactive-js/observable-resource"]
external throttleLastTime: int => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) =
  "throttleLastTime";

[@bs.module "@reactive-js/observable-resource"]
external throttleTime: int => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) = "throttleTime";

[@bs.module "@reactive-js/observable-resource"]
external timeout: int => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'a) = "timeout";

[@bs.module "@reactive-js/observable-resource"]
external withLatestFrom:
  (Observable.t('b), ~selector: ('a, 'b) => 'c, unit) => AsyncIteratorResourceOperator.t('req, 'a, 'req, 'c) =
  "withLatestFrom";
