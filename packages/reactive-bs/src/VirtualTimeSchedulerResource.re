type t = {
  isDisposed: bool,
};

external asDisposable: t => Disposable.t = "%identity";
external asDisposableOrTeardown: t => Disposable.DisposableOrTeardown.t = "%identity";
external asScheduler: t => Scheduler.t = "%identity";

[@bs.send] external add: (t, Disposable.DisposableOrTeardown.t) => unit = "add";
[@bs.send] [@bs.variadic] external addAll: (t, array(Disposable.DisposableOrTeardown.t)) => unit = "add";
[@bs.send] external dispose: t => unit = "dispose";
[@bs.send] external remove: (t, Disposable.DisposableOrTeardown.t) => unit = "remove";
[@bs.send] [@bs.variadic] external removeAll: (t, array(Disposable.DisposableOrTeardown.t)) => unit = "remove";

[@bs.send] external run: t => unit = "run";

[@bs.module "@reactive-js/schedulers"]
external create: (~maxMicroTaskTicks: int=?, unit) => t = "createVirtualTimeSchedulerResource";
