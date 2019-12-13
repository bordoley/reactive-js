type t('a);

external asObservable: t('a) => Observable.t('a) = "%identity";
[@bs.get] external subscriberCount: t('a) => int = "subscriberCount";

[@bs.module "@reactive-js/observable"]
external share:
  (Scheduler.t, ~replayCount: int=?, unit) => Operator.t(Observable.t('a), t('a)) =
  "share";