module Function1 = {
  type t('a, 't) = (. 'a) => 't;
};

module FlowMode: {
  type t;
  let pause: t;
  let resume: t;
} = {
  type t = int;

  let pause: t = 2;
  let resume: t = 1;
};

module FlowableLike = {
  type t('a) = Streamable.StreamableLike.t(FlowMode.t, 'a);
};

[@bs.module "@reactive-js/core/flowable"] [@bs.val]
external empty: unit => FlowableLike.t('a) = "empty";

module FromArrayOptions = {
  type t = {
    delay: option(int),
    startIndex: option(int),
    endIndex: option(int),
  };
};

[@bs.module "@reactive-js/core/flowable"] [@bs.val]
external fromArray:
  FromArrayOptions.t => Function1.t(array('a), FlowableLike.t('a)) =
  "fromArray";

let fromArray = (~delay=?, ~startIndex=?, ~endIndex=?, arr) =>
  (fromArray({delay, startIndex, endIndex}))(. arr);

module FromObservableOptions = {
  type t = {scheduler: option(Scheduler.SchedulerLike.t)};
};

[@bs.module "@reactive-js/core/flowable"] [@bs.val]
external fromObservable:
  FromObservableOptions.t =>
  Function1.t(Observable.ObservableLike.t('a), FlowableLike.t('a)) =
  "fromObservable";

let fromObservable = (~scheduler=?, obs) =>
  (fromObservable({scheduler: scheduler}))(. obs);

module FromValueOptions = {
  type t = {delay: option(int)};
};

[@bs.module "@reactive-js/core/flowable"] [@bs.val]
external fromValue: FromValueOptions.t => Function1.t('a, FlowableLike.t('a)) =
  "fromValue";

let fromValue = (~delay=?, v) => (fromValue({delay: delay}))(. v);