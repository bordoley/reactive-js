import { MAX_VALUE } from "../__internal__/constants.js";
import { clampPositiveInteger } from "../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../__internal__/mixins.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  PauseableSchedulerLike,
  SchedulerLike,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../concurrent.js";
import { StoreLike_value, WritableStoreLike } from "../events.js";
import * as WritableStore from "../events/WritableStore.js";
import { Optional, SideEffect1, isNone, isSome, none } from "../functions.js";
import {
  DisposableLike,
  DisposableLike_isDisposed,
  QueueLike,
  QueueLike_dequeue,
  QueueLike_head,
  QueueableLike_enqueue,
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../utils.js";
import * as Disposable from "../utils/Disposable.js";
import * as IndexedQueue from "../utils/IndexedQueue.js";
import * as PriorityQueue from "../utils/PriorityQueue.js";
import SerialDisposableMixin from "../utils/__mixins__/SerialDisposableMixin.js";
import ContinuationSchedulerMixin, {
  ContinuationLike,
  ContinuationLike_comparator,
  ContinuationLike_dueTime,
  ContinuationLike_run,
  ContinuationSchedulerLike,
  ContinuationSchedulerLike_scheduleContinuation,
  ContinuationSchedulerLike_shouldYield,
} from "./__mixins__/ContinuationSchedulerMixin.js";

interface Signature {
  create(hostScheduler: SchedulerLike): PauseableSchedulerLike;
}

export const create: Signature["create"] = /*@PURE__*/ (() => {
  const PauseableScheduler_hostScheduler = Symbol(
    "PauseableScheduler_hostScheduler",
  );
  const PauseableScheduler_hostSchedulerContinuation = Symbol(
    "PauseableScheduler_hostSchedulerContinuation",
  );
  const PauseableScheduler_hostSchedulerContinuationDueTime = Symbol(
    "PauseableScheduler_hostSchedulerContinuationDueTime",
  );
  const PauseableScheduler_delayedQueue = Symbol(
    "PauseableScheduler_delayedQueue",
  );
  const PauseableScheduler_immediateQueue = Symbol(
    "PauseableScheduler_immediateQueue",
  );

  const PauseableScheduler_pausedTime = Symbol("PauseableScheduler_pausedTime");
  const PauseableScheduler_timeDrift = Symbol("PauseableScheduler_timeDrift");
  const PauseableScheduler_activeContinuation = Symbol(
    "PauseableScheduler_activeContinuation",
  );

  type TProperties = {
    readonly [PauseableLike_isPaused]: WritableStoreLike<boolean>;
    readonly [PauseableScheduler_hostScheduler]: SchedulerLike;
    readonly [PauseableScheduler_hostSchedulerContinuation]: SideEffect1<ContinuationContextLike>;
    [PauseableScheduler_hostSchedulerContinuationDueTime]: number;
    readonly [PauseableScheduler_delayedQueue]: QueueLike<ContinuationLike>;
    readonly [PauseableScheduler_immediateQueue]: QueueLike<ContinuationLike>;
    [PauseableScheduler_pausedTime]: number;
    [PauseableScheduler_timeDrift]: number;
    [PauseableScheduler_activeContinuation]: Optional<ContinuationLike>;
  };

  const peek = (
    instance: TProperties & ContinuationSchedulerLike,
    now: number,
  ): Optional<ContinuationLike> => {
    const delayedQueue = instance[PauseableScheduler_delayedQueue];
    const immediateQueue = instance[PauseableScheduler_immediateQueue];

    let continuation: Optional<ContinuationLike> = none;
    while (true) {
      continuation = delayedQueue[QueueLike_head];

      if (isNone(continuation)) {
        break;
      }

      const continuationIsDispose = continuation[DisposableLike_isDisposed];
      const continuationDueTime = continuation[ContinuationLike_dueTime];

      if (continuationDueTime > now && !continuationIsDispose) {
        break;
      }

      delayedQueue[QueueLike_dequeue]();

      if (!continuationIsDispose) {
        immediateQueue[QueueableLike_enqueue](continuation);
      }
    }

    while (true) {
      continuation = immediateQueue[QueueLike_head];

      if (isNone(continuation)) {
        break;
      }

      const continuationIsDispose = continuation[DisposableLike_isDisposed];

      if (!continuationIsDispose) {
        break;
      }

      immediateQueue[QueueLike_dequeue]();
    }

    return continuation ?? delayedQueue[QueueLike_head];
  };

  const scheduleOnHost = (
    instance: TProperties & SerialDisposableLike & ContinuationSchedulerLike,
  ) => {
    const now = instance[SchedulerLike_now];
    const hostScheduler = instance[PauseableScheduler_hostScheduler];
    const hostSchedulerContinuation =
      instance[PauseableScheduler_hostSchedulerContinuation];
    const hostSchedulerContinuationIsScheduled =
      !instance[SerialDisposableLike_current][DisposableLike_isDisposed];
    const hostSchedulerContinuationDueTime =
      instance[PauseableScheduler_hostSchedulerContinuationDueTime];
    const nextContinuation = peek(instance, now);
    const nextContinuationDueTime =
      nextContinuation?.[ContinuationLike_dueTime] ?? MAX_VALUE;
    const hasActiveContinuation = isSome(
      instance[PauseableScheduler_activeContinuation],
    );
    const isPaused = instance[PauseableLike_isPaused][StoreLike_value];
    const hostContinuationAlreadyScheduled =
      hostSchedulerContinuationIsScheduled &&
      hostSchedulerContinuationDueTime <= nextContinuationDueTime;

    if (
      isNone(nextContinuation) ||
      hasActiveContinuation ||
      hostContinuationAlreadyScheduled ||
      isPaused
    ) {
      return;
    }

    const dueTime = nextContinuation[ContinuationLike_dueTime];
    const delay = clampPositiveInteger(dueTime - now);

    instance[PauseableScheduler_hostSchedulerContinuationDueTime] = dueTime;

    instance[SerialDisposableLike_current] = hostScheduler[
      SchedulerLike_schedule
    ](hostSchedulerContinuation, { delay });
  };

  return createInstanceFactory(
    mix(
      include(ContinuationSchedulerMixin, SerialDisposableMixin()),
      function PauseableScheduler(
        instance: Pick<
          PauseableSchedulerLike,
          typeof PauseableLike_pause | typeof PauseableLike_resume
        > &
          ContinuationSchedulerLike &
          Mutable<TProperties>,
        host: SchedulerLike,
      ): PauseableSchedulerLike {
        init(
          ContinuationSchedulerMixin,
          instance,
          host[SchedulerLike_maxYieldInterval],
        );
        init(SerialDisposableMixin(), instance, Disposable.disposed);

        instance[PauseableScheduler_delayedQueue] = PriorityQueue.create(
          ContinuationLike_comparator,
        );
        instance[PauseableScheduler_immediateQueue] = IndexedQueue.create();
        instance[PauseableScheduler_hostScheduler] = host;

        instance[PauseableScheduler_pausedTime] = host[SchedulerLike_now];
        instance[PauseableScheduler_timeDrift] = 0;

        instance[PauseableLike_isPaused] = WritableStore.create(true);

        instance[PauseableScheduler_hostSchedulerContinuation] = (
          ctx: ContinuationContextLike,
        ) => {
          while (!instance[DisposableLike_isDisposed]) {
            const now = instance[SchedulerLike_now];

            const nextContinuationToRun = peek(instance, now);

            if (isNone(nextContinuationToRun)) {
              break;
            }

            const dueTime = nextContinuationToRun[ContinuationLike_dueTime];
            const delay = dueTime - now;

            if (delay > 0) {
              instance[PauseableScheduler_hostSchedulerContinuationDueTime] =
                now + delay;
            } else {
              const continuation =
                instance[PauseableScheduler_immediateQueue][
                  QueueLike_dequeue
                ]();

              instance[PauseableScheduler_activeContinuation] = continuation;
              continuation?.[ContinuationLike_run]();
              instance[PauseableScheduler_activeContinuation] = none;
            }

            ctx[ContinuationContextLike_yield](clampPositiveInteger(delay));
          }
        };

        return instance;
      },
      props<TProperties>({
        [PauseableLike_isPaused]: none,
        [PauseableScheduler_hostScheduler]: none,
        [PauseableScheduler_hostSchedulerContinuation]: none,
        [PauseableScheduler_hostSchedulerContinuationDueTime]: 0,
        [PauseableScheduler_delayedQueue]: none,
        [PauseableScheduler_immediateQueue]: none,
        [PauseableScheduler_pausedTime]: 0,
        [PauseableScheduler_timeDrift]: 0,
        [PauseableScheduler_activeContinuation]: none,
      }),
      {
        get [SchedulerLike_now](): number {
          unsafeCast<TProperties>(this);
          const hostNow =
            this[PauseableScheduler_hostScheduler][SchedulerLike_now];
          const isPaused = this[PauseableLike_isPaused][StoreLike_value];
          const pausedTime =
            this[PauseableScheduler_pausedTime] -
            this[PauseableScheduler_timeDrift];
          const activeTime = hostNow - this[PauseableScheduler_timeDrift];

          return isPaused ? pausedTime : activeTime;
        },
        get [ContinuationSchedulerLike_shouldYield](): boolean {
          unsafeCast<TProperties & DisposableLike & SchedulerLike>(this);

          const now = this[SchedulerLike_now];
          const nextContinuation = peek(this, now);

          return (
            !isSome(this[PauseableScheduler_activeContinuation]) ||
            this[PauseableLike_isPaused][StoreLike_value] ||
            (isSome(nextContinuation) &&
              this[PauseableScheduler_activeContinuation] !==
                nextContinuation &&
              nextContinuation[ContinuationLike_dueTime] <= now) ||
            this[PauseableScheduler_hostScheduler][SchedulerLike_shouldYield]
          );
        },
        [PauseableLike_pause](
          this: TProperties & SerialDisposableLike & ContinuationSchedulerLike,
        ) {
          const hostNow =
            this[PauseableScheduler_hostScheduler][SchedulerLike_now];
          this[PauseableScheduler_pausedTime] = hostNow;
          this[SerialDisposableLike_current] = Disposable.disposed;
          this[PauseableLike_isPaused][StoreLike_value] = true;
        },
        [PauseableLike_resume](
          this: TProperties & SerialDisposableLike & ContinuationSchedulerLike,
        ) {
          const hostNow =
            this[PauseableScheduler_hostScheduler][SchedulerLike_now];
          this[PauseableScheduler_timeDrift] +=
            hostNow - this[PauseableScheduler_pausedTime];
          this[PauseableLike_isPaused][StoreLike_value] = false;
          scheduleOnHost(this);
        },
        [ContinuationSchedulerLike_scheduleContinuation](
          this: TProperties &
            SerialDisposableLike &
            ContinuationSchedulerLike &
            SchedulerLike,
          continuation: ContinuationLike,
        ) {
          const now = this[SchedulerLike_now];
          const dueTime = continuation[ContinuationLike_dueTime];

          const {
            [PauseableScheduler_delayedQueue]: delayed,
            [PauseableScheduler_immediateQueue]: queue,
          } = this;
          const targetQueue = dueTime > now ? delayed : queue;
          targetQueue[QueueableLike_enqueue](continuation);

          scheduleOnHost(this);
        },
      },
    ),
  );
})();
