import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import { compose, none } from "../../../functions.js";
import {
  InteractiveObservableLike,
  InteractiveObservableLike_move,
  ObservableLike,
} from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
import Stream_mixin from "../../../streaming/Stream/__internal__/Stream.mixin.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../../../util.js";
import Observable_backpressureStrategy from "../../Observable/__internal__/Observable.backpressureStrategy.js";

const InteractiveObservable_create: <T>(
  op: ContainerOperator<ObservableLike, void, T>,
  scheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly replay?: number;
    readonly capacity?: number;
  },
) => InteractiveObservableLike<T> & DisposableLike = /*@__PURE__*/ (<T>() => {
  return createInstanceFactory(
    mix(
      include(Stream_mixin<void, T>()),
      function InteractiveObservable(
        instance: Pick<
          InteractiveObservableLike<T>,
          typeof InteractiveObservableLike_move
        >,
        op: ContainerOperator<ObservableLike, void, T>,
        scheduler: SchedulerLike,
        multicastOptions?: {
          replay?: number;
          capacity?: number;
          backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        },
      ): InteractiveObservableLike<T> & DisposableLike {
        const liftedOp = compose(
          Observable_backpressureStrategy<ObservableLike, void>(
            1,
            "drop-oldest",
          ),
          op,
        );

        init(
          Stream_mixin<void, T>(),
          instance,
          liftedOp,
          scheduler,
          multicastOptions,
        );

        return instance;
      },
      props({}),
      {
        [InteractiveObservableLike_move](
          this: InteractiveObservableLike<T> & StreamLike<void, T>,
        ) {
          this[QueueableLike_enqueue](none);
        },
      },
    ),
  );
})();

export default InteractiveObservable_create;
