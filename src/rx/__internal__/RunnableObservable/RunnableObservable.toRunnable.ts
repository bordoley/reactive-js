import { Factory, pipe } from "../../../functions";
import { RunnableObservableLike, ToRunnable } from "../../../rx";
import { VirtualTimeSchedulerLike } from "../../../scheduling";
import Continuation_run from "../../../scheduling/__internal__/Continuation/Continuation.run";
import VirtualTimeScheduler_create from "../../../scheduling/__internal__/VirtualTimeScheduler/VirtualTimeScheduler.create";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Observable_forEach from "../Observable/Observable.forEach";
import Observable_subscribe from "../Observable/Observable.subscribe";
import Runnable_create from "../Runnable/Runnable.create";
import Sink_notifySink from "../Sink/Sink.notifySink";

const RunnableObservable_toRunnable: ToRunnable<
  RunnableObservableLike,
  {
    readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
  }
>["toRunnable"] =
  (options?: {
    readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
  }) =>
  observable =>
    Runnable_create(sink => {
      const { schedulerFactory = VirtualTimeScheduler_create } = options ?? {};
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

export default RunnableObservable_toRunnable;
