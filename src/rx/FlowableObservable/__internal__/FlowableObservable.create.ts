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
import {
  FlowableObservableLike,
  FlowableObservableLike_isPaused,
  FlowableObservableLike_pause,
  FlowableObservableLike_resume,
  MulticastObservableLike,
  ObservableLike,
  StreamLike,
} from "../../../rx.js";
import Stream_mixin from "../../../rx/Stream/__internal__/Stream.mixin.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  DisposableLike,
  EventListenerLike_notify,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Observable_backpressureStrategy from "../../Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_distinctUntilChanged from "../../Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_mergeWith from "../../Observable/__internal__/Observable.mergeWith.js";
import Observable_scan from "../../Observable/__internal__/Observable.scan.js";
import Publisher_create from "../../Publisher/__internal__/Publisher.create.js";

const FlowableObservable_create: <T>(
  op: ContainerOperator<ObservableLike, boolean, T>,
  scheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly replay?: number;
    readonly capacity?: number;
  },
) => FlowableObservableLike<T> & DisposableLike = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [FlowableObservableLike_isPaused]: MulticastObservableLike<boolean>;
  };

  return createInstanceFactory(
    mix(
      include(Stream_mixin<boolean, T>()),
      function FlowableObservable(
        instance: TProperties &
          Pick<
            FlowableObservableLike<T>,
            | typeof FlowableObservableLike_pause
            | typeof FlowableObservableLike_resume
          >,
        op: ContainerOperator<ObservableLike, boolean, T>,
        scheduler: SchedulerLike,
        multicastOptions?: {
          replay?: number;
          capacity?: number;
          backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        },
      ): FlowableObservableLike<T> & DisposableLike {
        const publisher = Publisher_create<boolean>({ replay: 1 });

        const liftedOp = compose(
          Observable_backpressureStrategy<
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
            bindMethod(publisher, EventListenerLike_notify),
          ),
          op,
        );

        init(
          Stream_mixin<boolean, T>(),
          instance,
          liftedOp,
          scheduler,
          multicastOptions,
        );

        pipe(instance, Disposable_add(publisher));

        instance[FlowableObservableLike_isPaused] = publisher;

        return instance;
      },
      props<TProperties>({
        [FlowableObservableLike_isPaused]: none,
      }),
      {
        [FlowableObservableLike_pause](
          this: FlowableObservableLike<T> & StreamLike<boolean, T>,
        ) {
          this[QueueableLike_enqueue](true);
        },
        [FlowableObservableLike_resume](
          this: FlowableObservableLike<T> & StreamLike<boolean, T>,
        ) {
          this[QueueableLike_enqueue](false);
        },
      },
    ),
  );
})();

export default FlowableObservable_create;
