[@bs.module "@reactive-js/react"]
external useAsyncIterator:
  (AsyncIterator.t('req, 'resp), ~scheduler: Scheduler.t=?, unit) =>
  (option('resp), 'req => unit) =
  "useAsyncIterator";

[@bs.module "@reactive-js/react"]
external useObservable:
  (Observable.t('a), ~scheduler: Scheduler.t=?, unit) => option('a) =
  "useObservable";
