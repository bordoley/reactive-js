[@bs.module "@reactive-js/core/react"] [@bs.val]
external idlePriority: Scheduler.SchedulerLike.t = "idlePriority";

[@bs.module "@reactive-js/core/react"] [@bs.val]
external immediatePriority: Scheduler.SchedulerLike.t = "immediatePriority";

[@bs.module "@reactive-js/core/react"] [@bs.val]
external lowPriority: Scheduler.SchedulerLike.t = "lowPriority";

[@bs.module "@reactive-js/core/react"] [@bs.val]
external normalPriority: Scheduler.SchedulerLike.t = "normalPriority";

[@bs.module "@reactive-js/core/react"] [@bs.val]
external userBlockingPriority: Scheduler.SchedulerLike.t =
  "userBlockingPriority";

module UseObservableOptions = {
  type t = {scheduler: option(Scheduler.SchedulerLike.t)};
};

[@bs.module "@reactive-js/core/react"] [@bs.val]
external useObservableInternal:
  (Observable.ObservableLike.t('a), UseObservableOptions.t) => option('a) =
  "useObservable";

let useObservable = (~scheduler=?, observable) =>
  useObservableInternal(observable, {scheduler: scheduler});

module UseStreamableOptions = {
  type t = {
    replay: option(int),
    scheduler: option(Scheduler.SchedulerLike.t),
    stateScheduler: option(Scheduler.SchedulerLike.t),
  };
};

[@bs.module "@reactive-js/core/react"] [@bs.val]
external useStreamableInternal:
  (Streamable.StreamableLike.t('req, 'resp), UseStreamableOptions.t) =>
  (option('resp), 'req => unit) =
  "useStreamable";

let useStreamable = (~replay=?, ~scheduler=?, ~stateScheduler=?, streamable) =>
  useStreamableInternal(streamable, {replay, scheduler, stateScheduler});