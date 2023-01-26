import { Factory, pipe } from "../../../functions";
import { ObservableLike, ToRunnable } from "../../../rx";
import { VirtualTimeSchedulerLike } from "../../../scheduling";
import Continuation$run from "../../../scheduling/__internal__/Continuation/Continuation.run";
import VirtualTimeScheduler$create from "../../../scheduling/__internal__/VirtualTimeScheduler/VirtualTimeScheduler.create";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Runnable$create from "../Runnable/Runnable.create";
import Runnable$empty from "../Runnable/Runnable.empty";
import Sink$notifySink from "../Sink/Sink.notifySink";
import Observable$forEach from "./Observable.forEach";
import Observable$isRunnable from "./Observable.isRunnable";
import Observable$subscribe from "./Observable.subscribe";

const Observable$toRunnable: ToRunnable<
  ObservableLike,
  {
    readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
  }
>["toRunnable"] =
  (options?: {
    readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
  }) =>
  observable => {
    if (Observable$isRunnable(observable)) {
      return Runnable$create(sink => {
        const { schedulerFactory = VirtualTimeScheduler$create } =
          options ?? {};
        const scheduler = schedulerFactory();
        pipe(
          observable,
          Observable$forEach(Sink$notifySink(sink)),
          Observable$subscribe(scheduler),
          Disposable$addTo(sink),
        );

        pipe(
          scheduler,
          Disposable$addTo(sink),
          Continuation$run,
          Disposable$dispose(),
        );
      });
    } else {
      return Runnable$empty();
    }
  };

export default Observable$toRunnable;
