import { pipe } from "../../../functions";
import { RunnableObservableLike, ToRunnable } from "../../../rx";
import Continuation_run from "../../../scheduling/Continuation/__internal__/Continuation.run";
import VirtualTimeScheduler_create from "../../../scheduling/VirtualTimeScheduler/__internal__/VirtualTimeScheduler.create";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe";
import Runnable_create from "../../Runnable/__internal__/Runnable.create";
import Sink_notifySink from "../../Sink/__internal__/Sink.notifySink";

const RunnableObservable_toRunnable: ToRunnable<RunnableObservableLike>["toRunnable"] =
  () => observable =>
    Runnable_create(sink => {
      const scheduler = VirtualTimeScheduler_create();

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
