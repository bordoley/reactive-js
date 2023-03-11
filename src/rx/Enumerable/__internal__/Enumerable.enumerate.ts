import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  PullableQueueLike,
  PullableQueueLike_pull,
} from "../../../__internal__/util.internal.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../../containers.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "../../../containers/Enumerator/__internal__/MutableEnumerator.mixin.js";
import { isSome, pipe, returns, unsafeCast } from "../../../functions.js";
import {
  EnumerableEnumeratorLike,
  EnumerableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import Observer_assertState from "../../../rx/Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../../rx/Observer/__internal__/Observer.mixin.js";
import Observer_sourceFrom from "../../../rx/Observer/__internal__/Observer.sourceFrom.js";
import { SchedulerLike_now } from "../../../scheduling.js";
import {
  ContinuationLike,
  ContinuationLike_continuationScheduler,
  ContinuationSchedulerLike_schedule,
  PrioritySchedulerImplementationLike,
  PrioritySchedulerImplementationLike_runContinuation,
  PrioritySchedulerImplementationLike_shouldYield,
  PriorityScheduler_mixin,
} from "../../../scheduling/PriorityScheduler/__internal__/PriorityScheduler.mixin.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike_push,
} from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import IndexedQueue_fifoQueueMixin from "../../../util/Queue/__internal__/IndexedQueue.fifoQueueMixin.js";

const Enumerable_enumerate: <T>() => (
  enumerable: EnumerableLike<T>,
) => EnumerableEnumeratorLike<T> = /*@__PURE__*/ (<T>() => {
  const typedMutableEnumeratorMixin = MutableEnumerator_mixin<T>();
  const typedObserverMixin = Observer_mixin<T>();

  type TEnumeratorSchedulerProperties = unknown;

  interface EnumeratorScheduler<T>
    extends EnumerableEnumeratorLike<T>,
      PrioritySchedulerImplementationLike,
      ObserverLike<T> {}

  const createEnumeratorScheduler = createInstanceFactory(
    mix(
      include(
        Disposable_mixin,
        typedMutableEnumeratorMixin,
        IndexedQueue_fifoQueueMixin<ContinuationLike>(),
        typedObserverMixin,
        PriorityScheduler_mixin,
      ),
      function EnumeratorScheduler(
        instance: Pick<
          EnumeratorScheduler<T>,
          | typeof SchedulerLike_now
          | typeof PrioritySchedulerImplementationLike_shouldYield
          | typeof ContinuationSchedulerLike_schedule
          | typeof EnumeratorLike_move
          | typeof ObserverLike_notify
        > &
          Mutable<TEnumeratorSchedulerProperties>,
      ): EnumeratorScheduler<T> {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        init(IndexedQueue_fifoQueueMixin<ContinuationLike>(), instance);
        init(PriorityScheduler_mixin, instance);
        init(typedObserverMixin, instance, instance);

        // FIXME: Cast needed to coalesce the type of[ContainerLike_type] field
        return instance as EnumeratorScheduler<T>;
      },
      props<TEnumeratorSchedulerProperties>({}),
      {
        [SchedulerLike_now]: 0,
        get [PrioritySchedulerImplementationLike_shouldYield](): boolean {
          unsafeCast<EnumeratorLike>(this);
          return this[EnumeratorLike_hasCurrent];
        },
        [EnumeratorLike_move](
          this: TEnumeratorSchedulerProperties &
            MutableEnumeratorLike<T> &
            PullableQueueLike<ContinuationLike> &
            PrioritySchedulerImplementationLike,
        ) {
          this[MutableEnumeratorLike_reset]();

          while (!this[EnumeratorLike_hasCurrent]) {
            const continuation = this[PullableQueueLike_pull]();
            if (isSome(continuation)) {
              this[PrioritySchedulerImplementationLike_runContinuation](
                continuation,
              );
            } else {
              this[DisposableLike_dispose]();
              break;
            }
          }

          return this[EnumeratorLike_hasCurrent];
        },
        [ContinuationSchedulerLike_schedule](
          this: TEnumeratorSchedulerProperties &
            DisposableLike &
            PullableQueueLike<ContinuationLike> &
            PrioritySchedulerImplementationLike,
          continuation: ContinuationLike,
          _delay: number,
        ): void {
          pipe(this, Disposable_add(continuation));

          if (continuation[DisposableLike_isDisposed]) {
            return;
          }

          continuation[ContinuationLike_continuationScheduler] = this;

          this[QueueableLike_push](continuation);
        },
        [ObserverLike_notify](
          this: MutableEnumeratorLike<T> & ObserverLike,
          next: T,
        ) {
          Observer_assertState(this);
          this[EnumeratorLike_current] = next;
        },
      },
    ),
  );

  return returns(
    (enumerable: EnumerableLike<T>): EnumerableEnumeratorLike<T> =>
      pipe(createEnumeratorScheduler(), Observer_sourceFrom(enumerable)),
  );
})();

export default Enumerable_enumerate;
