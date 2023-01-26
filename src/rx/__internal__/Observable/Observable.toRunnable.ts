import { Factory, pipe } from "../../../functions";
import { ObservableLike, ToRunnable } from "../../../rx";
import { VirtualTimeSchedulerLike } from "../../../scheduling";
import Continuation_run from "../../../scheduling/__internal__/Continuation/Continuation.run";
import VirtualTimeScheduler_create from "../../../scheduling/__internal__/VirtualTimeScheduler/VirtualTimeScheduler.create";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Runnable_create from "../Runnable/Runnable.create";
import Runnable_empty from "../Runnable/Runnable.empty";
import Sink_notifySink from "../Sink/Sink.notifySink";
import Observable_forEach from "./Observable.forEach";
import Observable_isRunnable from "./Observable.isRunnable";
import Observable_subscribe from "./Observable.subscribe";

const Observable_toRunnable: ToRunnable<
  ObservableLike,
  {
    readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
  }
>["toRunnable"] =
  (options?: {
    readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
  }) =>
  observable => {
    if (Observable_isRunnable(observable)) {
      return Runnable_create(sink => {
        const { schedulerFactory = VirtualTimeScheduler_create } =
          options ?? {};
        const scheduler = schedulerFactory();
        pipe(
          observable,
          Observable_forEach(Sink_notifySink(sink)),
          Observable_subscribe(scheduler),
          Disposable_addTo(sink),
        );

        pipe(
          scheduler,
          Disposable_addTo(sink),
          Continuation_run,
          Disposable_dispose(),
        );
      });
    } else {
      return Runnable_empty();
    }
  };

export default Observable_toRunnable;
