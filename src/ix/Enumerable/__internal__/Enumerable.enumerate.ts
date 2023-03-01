import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { isSome, none, pipe, unsafeCast } from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../../ix.js";
import { ObserverLike, ObserverLike_notify } from "../../../rx.js";
import Observer_assertState from "../../../rx/Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../../rx/Observer/__internal__/Observer.mixin.js";
import Observer_sourceFrom from "../../../rx/Observer/__internal__/Observer.sourceFrom.js";
import {
  ContinuationLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../../scheduling.js";
import Continuation_run from "../../../scheduling/Continuation/__internal__/Continuation.run.js";
import Scheduler_isInContinuation from "../../../scheduling/Scheduler/__internal__/Scheduler.isInContinuation.js";
import { DisposableLike, QueueLike_push } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import IndexedQueue_fifoQueueMixin from "../../../util/PullableQueue/__internal__/IndexedQueue.fifoQueueMixin.js";
import {
  PullableQueueLike,
  PullableQueueLike_pull,
} from "../../../util/__internal__/util.internal.js";
import MutableEnumerator_mixin from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
import { MutableEnumeratorLike } from "../../__internal__/ix.internal.js";

const Enumerable_enumerate: <T>() => (
  enumerable: EnumerableLike<T>,
) => EnumeratorLike<T> = /*@__PURE__*/ (<T>() => {
  // FIXMe: Can we merge these into a single mixin
  const typedMutableEnumeratorMixin = MutableEnumerator_mixin<T>();
  const typedObserverMixin = Observer_mixin<T>();

  type TEnumeratorSchedulerProperties = {
    [SchedulerLike_inContinuation]: boolean;
  };

  type EnumeratorScheduler = SchedulerLike & MutableEnumeratorLike<T>;

  const createEnumeratorScheduler = createInstanceFactory(
    mix(
      include(
        Disposable_mixin,
        typedMutableEnumeratorMixin,
        IndexedQueue_fifoQueueMixin<ContinuationLike>(),
      ),
      function EnumeratorScheduler(
        instance: Pick<
          SchedulerLike & EnumeratorLike,
          | typeof SchedulerLike_now
          | typeof SchedulerLike_requestYield
          | typeof SchedulerLike_schedule
          | typeof SchedulerLike_shouldYield
          | typeof EnumeratorLike_move
        > &
          Mutable<TEnumeratorSchedulerProperties>,
      ): EnumeratorScheduler {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        init(IndexedQueue_fifoQueueMixin<ContinuationLike>(), instance);

        return instance;
      },
      props<TEnumeratorSchedulerProperties>({
        [SchedulerLike_inContinuation]: false,
      }),
      {
        [SchedulerLike_now]: 0,
        get [SchedulerLike_shouldYield](): boolean {
          unsafeCast<SchedulerLike>(this);
          return Scheduler_isInContinuation(this);
        },
        [SchedulerLike_requestYield](): void {
          // No-Op: We yield whenever the continuation is running.
        },
        [EnumeratorLike_move](
          this: TEnumeratorSchedulerProperties &
            MutableEnumeratorLike<T> &
            PullableQueueLike<ContinuationLike>,
        ) {
          if (!Disposable_isDisposed(this)) {
            const continuation = this[PullableQueueLike_pull]();
            if (isSome(continuation)) {
              this[SchedulerLike_inContinuation] = true;
              Continuation_run(continuation);
              this[SchedulerLike_inContinuation] = false;
            } else {
              pipe(this, Disposable_dispose());
            }
          }
        },
        [SchedulerLike_schedule](
          this: TEnumeratorSchedulerProperties &
            DisposableLike &
            PullableQueueLike<ContinuationLike>,
          continuation: ContinuationLike,
          _?: { readonly delay?: number },
        ): void {
          pipe(this, Disposable_add(continuation));

          if (!Disposable_isDisposed(continuation)) {
            this[QueueLike_push](continuation);
          }
        },
      },
    ),
  );

  type TEnumeratorObserverProperties = {
    readonly enumerator: EnumeratorScheduler;
  };

  const createEnumeratorObserver = createInstanceFactory(
    mix(
      include(Disposable_mixin, typedObserverMixin),
      function EnumeratorObserver(
        instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
          Mutable<TEnumeratorObserverProperties>,
        enumerator: EnumeratorScheduler,
      ): ObserverLike<T> {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, enumerator);

        instance.enumerator = enumerator;

        return instance;
      },
      props<TEnumeratorObserverProperties>({
        enumerator: none,
      }),
      {
        [ObserverLike_notify](
          this: TEnumeratorObserverProperties & ObserverLike,
          next: T,
        ) {
          Observer_assertState(this);
          this.enumerator[EnumeratorLike_current] = next;
        },
      },
    ),
  );

  return () =>
    (enumerable: EnumerableLike<T>): EnumeratorLike<T> => {
      const scheduler = createEnumeratorScheduler();

      pipe(
        createEnumeratorObserver(scheduler),
        Disposable_addTo(scheduler),
        Observer_sourceFrom(enumerable),
      );

      return scheduler;
    };
})();

export default Enumerable_enumerate;
