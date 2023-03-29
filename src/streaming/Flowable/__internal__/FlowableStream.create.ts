import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import {
  Updater,
  bindMethod,
  compose,
  isFunction,
  none,
  pipe,
  returns,
} from "../../../functions.js";
import { ObservableLike, PublisherLike_publish } from "../../../rx.js";
import Observable_distinctUntilChanged from "../../../rx/Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_mergeWith from "../../../rx/Observable/__internal__/Observable.mergeWith.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import Observable_withBackpressureStrategy from "../../../rx/Observable/__internal__/Observable.withBackpressureStrategy.js";
import Publisher_create from "../../../rx/Publisher/__internal__/Publisher.create.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  FlowableStreamLike,
  FlowableStreamLike_isPaused,
  FlowableStreamLike_pause,
  FlowableStreamLike_resume,
} from "../../../streaming.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Stream_mixin from "../../Stream/__internal__/Stream.mixin.js";

const FlowableStream_create = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [FlowableStreamLike_isPaused]: ObservableLike<boolean>;
  };

  const createStreamInternal: (
    op: ContainerOperator<ObservableLike, boolean, T>,
    scheduler: SchedulerLike,
    replay: number,
    capacity: number,
    backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
  ) => FlowableStreamLike<T> = createInstanceFactory(
    mix(
      include(Stream_mixin<boolean, T>()),
      function FlowableStream(
        instance: TProperties &
          Pick<
            FlowableStreamLike<T>,
            typeof FlowableStreamLike_pause | typeof FlowableStreamLike_resume
          >,
        op: ContainerOperator<ObservableLike, boolean, T>,
        scheduler: SchedulerLike,
        replay: number,
        capacity: number,
        backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
      ): FlowableStreamLike<T> {
        const publisher = Publisher_create({ replay: 1 });

        const liftedOp = compose(
          Observable_withBackpressureStrategy<
            ObservableLike,
            boolean | Updater<boolean>
          >(1, "drop-oldest"),
          Observable_scan<ObservableLike, boolean | Updater<boolean>, boolean>(
            (acc, next) => (isFunction(next) ? next(acc) : next),
            returns(true),
          ),
          Observable_mergeWith<ObservableLike, boolean>(
            // Initialize to paused state
            pipe(true, Optional_toObservable()),
          ),
          Observable_distinctUntilChanged<ObservableLike, boolean>(),
          Observable_forEach<ObservableLike, boolean>(
            bindMethod(publisher, PublisherLike_publish),
          ),
          op,
        );

        init(
          Stream_mixin<boolean, T>(),
          instance,
          liftedOp,
          scheduler,
          replay,
          capacity,
          backpressureStrategy,
        );

        pipe(instance, Disposable_add(publisher));

        instance[FlowableStreamLike_isPaused] = publisher;

        return instance;
      },
      props<TProperties>({
        [FlowableStreamLike_isPaused]: none,
      }),
      {
        [FlowableStreamLike_pause](this: FlowableStreamLike<T>) {
          this[QueueableLike_enqueue](true);
        },
        [FlowableStreamLike_resume](this: FlowableStreamLike<T>) {
          this[QueueableLike_enqueue](false);
        },
      },
    ),
  );

  return (
    op: ContainerOperator<ObservableLike, boolean, T>,
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly replay?: number;
      readonly capacity?: number;
    },
  ): FlowableStreamLike<T> => {
    const {
      backpressureStrategy = "overflow",
      capacity = MAX_SAFE_INTEGER,
      replay = 0,
    } = options ?? {};
    return createStreamInternal(
      op,
      scheduler,
      replay,
      capacity,
      backpressureStrategy,
    );
  };
})();

export default FlowableStream_create;
