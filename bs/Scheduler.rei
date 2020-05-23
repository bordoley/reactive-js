module SchedulerLike: {type t;};

module PrioritySchedulerLike: {type t;};

module DispsosablePrioritySchedulerLike: {
  type t;

  external asDisposableLike: t => Disposable.DisposableLike.t = "%identity";
  external asPrioritySchedulerLike: t => PrioritySchedulerLike.t = "%identity";
};

module VirtualTimeSchedulerLike: {
  type t;

  external asDisposableLike: t => Disposable.DisposableLike.t = "%identity";
  external asSchedulerLike: t => SchedulerLike.t = "%identity";

  [@bs.send] external run: t => unit = "run";
};

let createHostScheduler: (~yieldInterval: int=?, unit) => SchedulerLike.t;

let createVirtualTimeScheduler:
  (~maxMicroTaskTicks: int=?, unit) => VirtualTimeSchedulerLike.t;

[@bs.module "@reactive-js/core/scheduler"] [@bs.val]
external toPriorityScheduler:
  SchedulerLike.t => DispsosablePrioritySchedulerLike.t =
  "toPriorityScheduler";

let toSchedulerWithPriority:
  (~priority: int, PrioritySchedulerLike.t) => SchedulerLike.t;