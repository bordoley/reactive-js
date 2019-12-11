type t('a) = {
  subscriberCount: int,
};

external asObservable: t('a) => Observable.t('a) = "%identity";

[@bs.module "@reactive-js/observable"]
external share:
  (Scheduler.t, ~replayCount: int=?, unit) => Operator.t(Observable.t('a), t('a)) =
  "share";