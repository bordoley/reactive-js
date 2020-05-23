module Function1 = {
  type t('a, 't) = (. 'a) => 't;
};

module SchedulerLike = {
  type t;
};

module PrioritySchedulerLike = {
  type t;
};

module DispsosablePrioritySchedulerLike = {
  type t;

  external asDisposableLike: t => Disposable.DisposableLike.t = "%identity";
  external asPrioritySchedulerLike: t => PrioritySchedulerLike.t = "%identity";
};

module VirtualTimeSchedulerLike = {
  type t;

  external asDisposableLike: t => Disposable.DisposableLike.t = "%identity";
  external asSchedulerLike: t => SchedulerLike.t = "%identity";

  [@bs.send] external run: t => unit = "run";
};

module HostSchedulerOptions = {
  type t = {yieldInterval: option(int)};
};

[@bs.module "@reactive-js/core/scheduler"] [@bs.val]
external createHostScheduler: HostSchedulerOptions.t => SchedulerLike.t =
  "createHostScheduler";

let createHostScheduler = (~yieldInterval=?, ()) =>
  createHostScheduler({yieldInterval: yieldInterval});

module VirtualTimeSchedulerOptions = {
  type t = {maxMicroTaskTicks: option(int)};
};

[@bs.module "@reactive-js/core/scheduler"] [@bs.val]
external createVirtualTimeScheduler:
  VirtualTimeSchedulerOptions.t => VirtualTimeSchedulerLike.t =
  "createHostScheduler";

let createVirtualTimeScheduler = (~maxMicroTaskTicks=?, ()) =>
  createVirtualTimeScheduler({maxMicroTaskTicks: maxMicroTaskTicks});

// FIXME: run
// FIXME: schedule
// FIXME: toPausableScheduler

[@bs.module "@reactive-js/core/scheduler"] [@bs.val]
external toPriorityScheduler:
  SchedulerLike.t => DispsosablePrioritySchedulerLike.t =
  "toPriorityScheduler";

[@bs.module "@reactive-js/core/scheduler"] [@bs.val]
external toSchedulerWithPriority:
  int => Function1.t(PrioritySchedulerLike.t, SchedulerLike.t) =
  "toSchedulerWithPriority";

let toSchedulerWithPriority = (~priority, priorityScheduler) =>
  (toSchedulerWithPriority(priority))(. priorityScheduler);