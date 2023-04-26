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
  ObservableLike,
  PauseableObservableLike,
  PauseableObservableLike_isPaused,
} from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
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
  ReplayableLike_buffer,
} from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Observable_backpressureStrategy from "../../Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_distinctUntilChanged from "../../Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_mergeWith from "../../Observable/__internal__/Observable.mergeWith.js";
import Publisher_create from "../../Publisher/__internal__/Publisher.create.js";

const PauseableObservable_create: <T>(
  op: ContainerOperator<ObservableLike, boolean, T>,
  scheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly replay?: number;
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
        op: ContainerOperator<ObservableLike, boolean, T>,
        scheduler: SchedulerLike,
        multicastOptions?: {
          replay?: number;
          capacity?: number;
          backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        },
      ): PauseableObservableLike<T> & DisposableLike {
        const publisher = Publisher_create<boolean>({ replay: 1 });

        const liftedOp = compose(
          Observable_backpressureStrategy<
            ObservableLike,
            boolean | Updater<boolean>
          >(1, "drop-oldest"),
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

        instance[PauseableObservableLike_isPaused] = publisher;

        return instance;
      },
      props<TProperties>({
        [PauseableObservableLike_isPaused]: none,
      }),
      {
        get [PauseableLike_isPaused](): boolean {
          unsafeCast<TProperties>(this);
          return (
            this[PauseableObservableLike_isPaused][ReplayableLike_buffer][
              KeyedCollectionLike_get
            ](0) ?? true
          );
        },

        [PauseableLike_pause](
          this: PauseableObservableLike<T> & StreamLike<boolean, T>,
        ) {
          this[QueueableLike_enqueue](true);
        },
        [PauseableLike_resume](
          this: PauseableObservableLike<T> & StreamLike<boolean, T>,
        ) {
          this[QueueableLike_enqueue](false);
        },
      },
    ),
  );
})();

export default PauseableObservable_create;
