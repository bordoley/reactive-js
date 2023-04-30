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
  none,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  MulticastObservableLike,
  MulticastObservableLike_buffer,
  ObservableContainerLike,
  PauseableObservableLike,
  PauseableObservableLike_isPaused,
} from "../../../rx.js";
import { StreamLike } from "../../../streaming.js";
import Stream_mixin from "../../../streaming/Stream/__internal__/Stream.mixin.js";
import {
  DisposableLike,
  EventListenerLike_notify,
  KeyedCollectionLike_get,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
  SchedulerLike,
} from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Observable_backpressureStrategy from "../../Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_distinctUntilChanged from "../../Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_mergeWith from "../../Observable/__internal__/Observable.mergeWith.js";
import Publisher_create from "../../Publisher/__internal__/Publisher.create.js";

const PauseableObservable_create: <T>(
  op: ContainerOperator<ObservableContainerLike, boolean, T>,
  scheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  },
) => PauseableObservableLike<T> & DisposableLike = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [PauseableObservableLike_isPaused]: MulticastObservableLike<boolean>;
  };

  return createInstanceFactory(
    mix(
      include(Stream_mixin<boolean, T>()),
      function PauseableObservable(
        instance: TProperties &
          Pick<
            PauseableObservableLike<T>,
            | typeof PauseableLike_isPaused
            | typeof PauseableLike_pause
            | typeof PauseableLike_resume
          >,
        op: ContainerOperator<ObservableContainerLike, boolean, T>,
        scheduler: SchedulerLike,
        multicastOptions?: {
          capacity?: number;
          backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        },
      ): PauseableObservableLike<T> & DisposableLike {
        const publisher = Publisher_create<boolean>({ replay: 1 });

        const liftedOp = compose(
          Observable_backpressureStrategy<
            ObservableContainerLike,
            boolean | Updater<boolean>
          >(1, "drop-oldest"),
          Observable_mergeWith<ObservableContainerLike, boolean>(
            // Initialize to paused state
            pipe(true, Optional_toObservable()),
          ),
          Observable_distinctUntilChanged<ObservableContainerLike, boolean>(),
          Observable_forEach<ObservableContainerLike, boolean>(
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

        instance[PauseableObservableLike_isPaused] = publisher;

        return instance as PauseableObservableLike<T> & DisposableLike;
      },
      props<TProperties>({
        [PauseableObservableLike_isPaused]: none,
      }),
      {
        get [PauseableLike_isPaused](): boolean {
          unsafeCast<TProperties>(this);
          return (
            this[PauseableObservableLike_isPaused][
              MulticastObservableLike_buffer
            ][KeyedCollectionLike_get](0) ?? true
          );
        },

        [PauseableLike_pause](this: StreamLike<boolean, T>) {
          this[QueueableLike_enqueue](true);
        },
        [PauseableLike_resume](this: StreamLike<boolean, T>) {
          this[QueueableLike_enqueue](false);
        },
      },
    ),
  );
})();

export default PauseableObservable_create;
