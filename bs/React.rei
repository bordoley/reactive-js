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

let useObservable:
  (
    ~scheduler: Scheduler.SchedulerLike.t=?,
    Observable.ObservableLike.t('a)
  ) =>
  option('a);

let useStreamable:
  (
    ~scheduler: Scheduler.SchedulerLike.t=?,
    Streamable.StreamableLike.t('req, 'resp)
  ) =>
  (option('resp), 'req => unit);