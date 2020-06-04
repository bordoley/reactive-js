module FlowMode: {
  type t;
  let pause: t;
  let resume: t;
};

module FlowableLike: {
  type t('a) = Streamable.StreamableLike.t(FlowMode.t, 'a);
};

[@bs.module "@reactive-js/core/flowable"] [@bs.val]
external empty: unit => FlowableLike.t('a) = "empty";

let fromArray:
  (~delay: int=?, ~startIndex: int=?, ~endIndex: int=?, array('a)) =>
  FlowableLike.t('a);

let fromObservable:
  (
    ~scheduler: Scheduler.SchedulerLike.t=?,
    Observable.ObservableLike.t('a)
  ) =>
  FlowableLike.t('a);

let fromValue: (~delay: int=?, 'a) => FlowableLike.t('a);