import { MAX_SAFE_INTEGER, __DEV__ } from "../../../__internal__/constants.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { __EnumerableEnumerator_continuationQueue } from "../../../__internal__/symbols.js";
import {
  IndexedQueueLike,
  QueueLike,
  QueueLike_dequeue,
} from "../../../__internal__/util.js";
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
import {
  isSome,
  none,
  pipe,
  raiseWithDebugMessage,
  returns,
  unsafeCast,
} from "../../../functions.js";
import {
  EnumerableLike,
  ObservableLike_isEnumerable,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import Observer_assertState from "../../../rx/Observer/__internal__/Observer.assertState.js";
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
} from "../../../scheduling/Scheduler/__internal__/Scheduler.mixin.js";
import {
  BufferLike_capacity,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Queue_createIndexedQueue from "../../../util/Queue/__internal__/Queue.createIndexedQueue.js";
import Observer_baseMixin from "../../Observer/__internal__/Observer.baseMixin.js";

const Enumerable_enumerate: <T>() => (
  enumerable: EnumerableLike<T>,
) => EnumeratorLike<T> & DisposableLike = /*@__PURE__*/ (<T>() => {
  type TEnumeratorSchedulerProperties = {
    readonly [__EnumerableEnumerator_continuationQueue]: IndexedQueueLike<ContinuationLike>;
  };

  interface EnumeratorScheduler<T> extends EnumeratorLike<T>, ObserverLike<T> {}

  const createEnumeratorScheduler = createInstanceFactory(
    mix(
      include(
        MutableEnumerator_mixin(),
        Observer_baseMixin(),
        PriorityScheduler_mixin,
      ),
      function EnumeratorScheduler(
        instance: Pick<
          EnumeratorScheduler<T>,
          | typeof SchedulerLike_now
          | typeof EnumeratorLike_move
          | typeof ObserverLike_notify
        > &
          Mutable<TEnumeratorSchedulerProperties>,
      ): EnumeratorScheduler<T> {
        init(MutableEnumerator_mixin(), instance);
        init(PriorityScheduler_mixin, instance, 0);
        init(Observer_baseMixin<T>(), instance, {
          [QueueableLike_backpressureStrategy]: "overflow",
          [BufferLike_capacity]: MAX_SAFE_INTEGER,
        });

        instance[__EnumerableEnumerator_continuationQueue] =
          Queue_createIndexedQueue(MAX_SAFE_INTEGER, "overflow");

        // FIXME: Cast needed to coalesce the type of[ContainerLike_type] field
        return instance as EnumeratorScheduler<T>;
      },
      props<TEnumeratorSchedulerProperties>({
        [__EnumerableEnumerator_continuationQueue]: none,
      }),
      {
        [SchedulerLike_now]: 0,
        get [PrioritySchedulerImplementationLike_shouldYield](): boolean {
          unsafeCast<EnumeratorLike>(this);
          return this[EnumeratorLike_hasCurrent];
        },
        [EnumeratorLike_move](
          this: TEnumeratorSchedulerProperties &
            MutableEnumeratorLike<T> &
            QueueLike<ContinuationLike> &
            PrioritySchedulerImplementationLike,
        ) {
          this[MutableEnumeratorLike_reset]();

          while (!this[EnumeratorLike_hasCurrent]) {
            const continuation =
              this[__EnumerableEnumerator_continuationQueue][
                QueueLike_dequeue
              ]();
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
            QueueLike<ContinuationLike> &
            PrioritySchedulerImplementationLike,
          continuation: ContinuationLike,
          delay: number,
        ): void {
          if (delay > 0) {
            raiseWithDebugMessage(
              "Enumerable scheduling continuation with delay",
            );
          }

          pipe(this, Disposable_add(continuation));

          if (continuation[DisposableLike_isDisposed]) {
            return;
          }

          continuation[ContinuationLike_continuationScheduler] = this;

          this[__EnumerableEnumerator_continuationQueue][QueueableLike_enqueue](
            continuation,
          );
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
    (enumerable: EnumerableLike<T>): EnumeratorLike<T> & DisposableLike => {
      if (__DEV__ && !enumerable[ObservableLike_isEnumerable]) {
        raiseWithDebugMessage(
          "Enumerable.enumerate() invoked with a non-enumerable ObservableLike",
        );
      }
      return pipe(createEnumeratorScheduler(), Observer_sourceFrom(enumerable));
    },
  );
})();

export default Enumerable_enumerate;
