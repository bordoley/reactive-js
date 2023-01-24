import { Factory, pipe } from "../../../functions";
import { ObservableLike, ToRunnable } from "../../../rx";
import { VirtualTimeSchedulerLike } from "../../../scheduling";
import ContinuationLike__run from "../../../scheduling/__internal__/ContinuationLike/ContinuationLike.run";
import VirtualTimeSchedulerLike__create from "../../../scheduling/__internal__/VirtualTimeSchedulerLike/VirtualTimeSchedulerLike.create";
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import RunnableLike__create from "../RunnableLike/RunnableLike.create";
import RunnableLike__empty from "../RunnableLike/RunnableLike.empty";
import SinkLike__notifySink from "../SinkLike/SinkLike.notifySink";
import ObservableLike__forEach from "./ObservableLike.forEach";
import ObservableLike__isRunnable from "./ObservableLike.isRunnable";
import ObservableLike__subscribe from "./ObservableLike.subscribe";

const ObservableLike__toRunnable: ToRunnable<
  ObservableLike,
  {
    readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
  }
>["toRunnable"] =
  (options?: {
    readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
  }) =>
  observable => {
    if (ObservableLike__isRunnable(observable)) {
      return RunnableLike__create(sink => {
        const { schedulerFactory = VirtualTimeSchedulerLike__create } =
          options ?? {};
        const scheduler = schedulerFactory();
        pipe(
          observable,
          ObservableLike__forEach(SinkLike__notifySink(sink)),
          ObservableLike__subscribe(scheduler),
          DisposableLike__addTo(sink),
        );

        pipe(
          scheduler,
          DisposableLike__addTo(sink),
          ContinuationLike__run,
          DisposableLike__dispose(),
        );
      });
    } else {
      return RunnableLike__empty();
    }
  };

export default ObservableLike__toRunnable;
