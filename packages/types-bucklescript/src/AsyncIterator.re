type t('req, 'resp);

external asObservable: t('req, 'resp) => Observable.t('resp) = "%identity";

[@bs.send] external dispatch: (t('req, 'resp), 'resp') => unit = "dispatch";

module AsyncIteratorOperator = {
  type asyncIteratorResource('req, 'resp) = t('req, 'resp);
  type t('reqA, 'respA, 'reqB, 'respB) = Operator.t(asyncIteratorResource('reqA, 'respA), asyncIteratorResource('reqB, 'respB));
};

[@bs.module "@reactive-js/observable-resource"]
external concatAll:
  (~maxBufferSize: int=?, unit) => AsyncIteratorOperator.t('req, Observable.t('a), 'req, 'a) =
  "concatAll";

[@bs.module "@reactive-js/observable-resource"]
external distinctUntilChanged:
  (~equals: ('a, 'a) => bool=?, unit) => AsyncIteratorOperator.t('req, 'a, 'req, 'a) =
  "distinctUntilChanged";

[@bs.module "@reactive-js/observable-resource"] [@bs.variadic]
external endWith: ('a, array('a)) => AsyncIteratorOperator.t('req, 'a,'req,  'a) =
  "endWith";

[@bs.module "@reactive-js/observable-resource"]
external exhaust: unit => AsyncIteratorOperator.t('req, Observable.t('a),'req,  'a) = "exhaust";

[@bs.module "@reactive-js/observable-resource"]
external ignoreElements: unit => AsyncIteratorOperator.t('req, 'a, 'req, 'b) =
  "ignoreElements";

[@bs.module "@reactive-js/observable-resource"]
external keep: ([@bs.uncurry] ('a => bool)) => AsyncIteratorOperator.t('req, 'a, 'req, 'a) =
  "keep";

[@bs.module "@reactive-js/observable-resource"]
external map: ('a => 'b) => AsyncIteratorOperator.t('req, 'a, 'req,  'b) = "map";

[@bs.module "@reactive-js/observable-resource"]
external mergeAll: Observable.MergeAllConfig.t => AsyncIteratorOperator.t('req, Observable.t('a), 'req, 'a) =
  "mergeAll";

[@bs.module "@reactive-js/observable-resource"]
external observe: Observer.t('a) => AsyncIteratorOperator.t('req,'a, 'req,'a) = "observe";

[@bs.module "@reactive-js/observable-resource"]
external onComplete:
  ([@bs.uncurry] (option(Error.t) => unit)) => AsyncIteratorOperator.t('req, 'a, 'req, 'a) =
  "onComplete";

[@bs.module "@reactive-js/observable-resource"]
external onError:
  ([@bs.uncurry] (Error.JsError.t => unit)) => AsyncIteratorOperator.t('req, 'a, 'req, 'a) =
  "onError";

[@bs.module "@reactive-js/observable-resource"]
external onNext: ([@bs.uncurry] ('a => unit)) => AsyncIteratorOperator.t('req, 'a, 'req, 'a) =
  "onNext";

[@bs.module "@reactive-js/observable-resource"]
external reduce:
  (
    [@bs.uncurry] (('acc, 'a) => 'acc),
    ~initialValue: [@bs.uncurry] (unit => 'acc),
    unit
  ) =>
  AsyncIteratorOperator.t('req, 'a, 'req, 'acc) =
  "reduce";

[@bs.module "@reactive-js/observable-resource"]
external repeat:
  (~predicate: [@bs.uncurry] (int => bool)=?, unit) =>
  AsyncIteratorOperator.t('req, 'a, 'req, 'a) =
  "repeat";

[@bs.module "@reactive-js/observable-resource"]
external repeatCount: (int, unit) => AsyncIteratorOperator.t('req, 'a, 'req, 'a) = "repeat";

[@bs.module "@reactive-js/observable-resource"]
external retry:
  (~predicate: [@bs.uncurry] ((int, Error.JsError.t) => bool)=?, unit) =>
  AsyncIteratorOperator.t('req, 'a, 'req, 'a) =
  "retry";

[@bs.module "@reactive-js/observable-resource"]
external scan:
  (
    [@bs.uncurry] (('acc, 'a) => 'acc),
    ~initialValue: [@bs.uncurry] (unit => 'acc),
    unit
  ) =>
  AsyncIteratorOperator.t('req, 'a, 'req, 'acc) =
  "scan";

[@bs.module "@reactive-js/observable-resource"]
external share:
  (Scheduler.t, ~replayCount: int=?, unit) => AsyncIteratorOperator.t('req, 'a, 'req, 'a) =
  "share";

[@bs.module "@reactive-js/observable-resource"] [@bs.variadic]
external startWith: ('a, array('a)) => AsyncIteratorOperator.t('req, 'a, 'req, 'a) =
  "startWith";

[@bs.module "@reactive-js/observable-resource"]
external subscribeOn: Scheduler.t => AsyncIteratorOperator.t('req, 'a, 'req, 'a) =
  "subscribeOn";

[@bs.module "@reactive-js/observable-resource"]
external switchAll: unit => AsyncIteratorOperator.t('req,Observable.t('a),'req, 'a) = "switchAll";

[@bs.module "@reactive-js/observable-resource"]
external take: int => AsyncIteratorOperator.t('req, 'a, 'req, 'a) = "take";

[@bs.module "@reactive-js/observable-resource"]
external takeLast: int => AsyncIteratorOperator.t('req, 'a, 'req, 'a) = "takeLast";

[@bs.module "@reactive-js/observable-resource"]
external takeWhile:
  ([@bs.uncurry] ('a => bool)) => AsyncIteratorOperator.t('req, 'a, 'req, 'a) =
  "takeWhile";

[@bs.module "@reactive-js/observable-resource"]
external throttle:
  ([@bs.uncurry] ('a => Observable.t('any))) => AsyncIteratorOperator.t('req, 'a, 'req, 'a) =
  "throttle";

[@bs.module "@reactive-js/observable-resource"]
external throttleFirst:
  ([@bs.uncurry] ('a => Observable.t('any))) => AsyncIteratorOperator.t('req, 'a, 'req, 'a) =
  "throttleFirst";

[@bs.module "@reactive-js/observable-resource"]
external throttleFirstTime: int => AsyncIteratorOperator.t('req, 'a, 'req, 'a) =
  "throttleFirstTime";

[@bs.module "@reactive-js/observable-resource"]
external throttleLast:
  ([@bs.uncurry] ('a => Observable.t('any))) => AsyncIteratorOperator.t('req, 'a, 'req, 'a) =
  "throttleLast";

[@bs.module "@reactive-js/observable-resource"]
external throttleLastTime: int => AsyncIteratorOperator.t('req, 'a, 'req, 'a) =
  "throttleLastTime";

[@bs.module "@reactive-js/observable-resource"]
external throttleTime: int => AsyncIteratorOperator.t('req, 'a, 'req, 'a) = "throttleTime";

[@bs.module "@reactive-js/observable-resource"]
external timeout: int => AsyncIteratorOperator.t('req, 'a, 'req, 'a) = "timeout";

[@bs.module "@reactive-js/observable-resource"]
external withLatestFrom:
  (Observable.t('b), ~selector: ('a, 'b) => 'c, unit) => AsyncIteratorOperator.t('req, 'a, 'req, 'c) =
  "withLatestFrom";
