import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { isSome, pipe, unsafeCast } from "../../../functions.js";
import {
  EnumerableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import Observer_assertState from "../../../rx/Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../../rx/Observer/__internal__/Observer.mixin.js";
import Observer_sourceFrom from "../../../rx/Observer/__internal__/Observer.sourceFrom.js";
import {
  ContinuationLike,
  ContinuationLike_run,
  ContinuationLike_scheduler,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../../scheduling.js";
import { Continuation__getCurrentContinuation } from "../../../scheduling/Continuation/__internal__/Continuation.create.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
  QueueLike_count,
  QueueLike_push,
} from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import MutableEnumerator_mixin from "../../../util/Enumerator/__internal__/MutableEnumerator.mixin.js";
import IndexedQueue_fifoQueueMixin from "../../../util/PullableQueue/__internal__/IndexedQueue.fifoQueueMixin.js";
import {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
  PullableQueueLike,
  PullableQueueLike_pull,
} from "../../../util/__internal__/util.internal.js";

const Enumerable_enumerate: <T>() => (
  enumerable: EnumerableLike<T>,
) => EnumeratorLike<T> & DisposableLike = /*@__PURE__*/ (<T>() => {
  const typedMutableEnumeratorMixin = MutableEnumerator_mixin<T>();
  const typedObserverMixin = Observer_mixin<T>();

  type TEnumeratorSchedulerProperties = {
    [SchedulerLike_inContinuation]: boolean;
  };

  type EnumeratorScheduler = SchedulerLike &
    MutableEnumeratorLike<T> &
    ObserverLike<T> &
    DisposableLike;

  const createEnumeratorScheduler = createInstanceFactory(
    mix(
      include(
        Disposable_mixin,
        typedMutableEnumeratorMixin,
        IndexedQueue_fifoQueueMixin<ContinuationLike>(),
        typedObserverMixin,
      ),
      function EnumeratorScheduler(
        instance: Pick<
          EnumeratorScheduler,
          | typeof SchedulerLike_now
          | typeof SchedulerLike_requestYield
          | typeof SchedulerLike_schedule
          | typeof SchedulerLike_shouldYield
          | typeof EnumeratorLike_move
          | typeof ObserverLike_notify
        > &
          Mutable<TEnumeratorSchedulerProperties>,
      ): EnumeratorScheduler {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        init(IndexedQueue_fifoQueueMixin<ContinuationLike>(), instance);
        init(typedObserverMixin, instance, instance);

        return instance;
      },
      props<TEnumeratorSchedulerProperties>({
        [SchedulerLike_inContinuation]: false,
      }),
      {
        [SchedulerLike_now]: 0,
        get [SchedulerLike_shouldYield](): boolean {
          unsafeCast<SchedulerLike & EnumeratorLike>(this);

          const currentContinuation = Continuation__getCurrentContinuation();

          const currentContinuationHasChildren =
            currentContinuation?.[ContinuationLike_scheduler] === this &&
            (currentContinuation?.[QueueLike_count] ?? 0) > 0;

          return (
            this[SchedulerLike_inContinuation] &&
            (this[EnumeratorLike_hasCurrent] || currentContinuationHasChildren)
          );
        },
        [SchedulerLike_requestYield](): void {
          // No-Op: We yield whenever the continuation is running.
        },
        [EnumeratorLike_move](
          this: TEnumeratorSchedulerProperties &
            MutableEnumeratorLike<T> &
            PullableQueueLike<ContinuationLike> &
            DisposableLike,
        ) {
          this[MutableEnumeratorLike_reset]();

          while (!this[EnumeratorLike_hasCurrent]) {
            const continuation = this[PullableQueueLike_pull]();
            if (isSome(continuation)) {
              this[SchedulerLike_inContinuation] = true;
              continuation[ContinuationLike_run]();
              this[SchedulerLike_inContinuation] = false;
            } else {
              this[DisposableLike_dispose]();
              break;
            }
          }

          return this[EnumeratorLike_hasCurrent];
        },
        [SchedulerLike_schedule](
          this: TEnumeratorSchedulerProperties &
            DisposableLike &
            PullableQueueLike<ContinuationLike> &
            SchedulerLike,
          continuation: ContinuationLike,
          _?: { readonly delay?: number },
        ): void {
          pipe(this, Disposable_add(continuation));

          if (continuation[DisposableLike_isDisposed]) {
            return;
          }

          if (continuation[DisposableLike_isDisposed]) {
            return;
          }

          const currentContinuation = Continuation__getCurrentContinuation();

          if (
            isSome(currentContinuation) &&
            currentContinuation[ContinuationLike_scheduler] === this &&
            !currentContinuation[DisposableLike_isDisposed]
          ) {
            currentContinuation[QueueLike_push](continuation);
          } else {
            this[QueueLike_push](continuation);
          }
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

  return () =>
    (enumerable: EnumerableLike<T>): EnumeratorLike<T> & DisposableLike =>
      pipe(createEnumeratorScheduler(), Observer_sourceFrom(enumerable));
})();

export default Enumerable_enumerate;
