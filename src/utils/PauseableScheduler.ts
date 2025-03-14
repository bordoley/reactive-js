import { MAX_VALUE } from "../__internal__/constants.js";
import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
  unsafeCast,
} from "../__internal__/mixins.js";
import * as WritableStore from "../computations/WritableStore.js";
import { StoreLike_value, WritableStoreLike } from "../computations.js";
import { Optional, bind, isNone, isSome, none } from "../functions.js";
import { clampPositiveInteger } from "../math.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DisposableContainerLike_add,
  DisposableLike,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  PauseableSchedulerLike,
  QueueLike,
  QueueLike_dequeue,
  QueueLike_head,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../utils.js";
import * as Disposable from "./Disposable.js";
import QueueMixin from "./__mixins__/QueueMixin.js";
import SchedulerMixin, {
  SchedulerContinuation,
  SchedulerContinuationLike,
  SchedulerContinuationLike_dueTime,
  SchedulerContinuationLike_run,
  SchedulerMixinHostLike,
  SchedulerMixinHostLike_schedule,
  SchedulerMixinHostLike_shouldYield,
} from "./__mixins__/SchedulerMixin.js";
import SerialDisposableMixin from "./__mixins__/SerialDisposableMixin.js";

interface Signature {
  create(hostScheduler: SchedulerLike): PauseableSchedulerLike & DisposableLike;
}

export const create: Signature["create"] = /*@PURE__*/ (() => {
  const PauseableScheduler_hostScheduler = Symbol(
    "PauseableScheduler_hostScheduler",
  );

  const PauseableScheduler_hostSchedulerContinuationDueTime = Symbol(
    "PauseableScheduler_hostSchedulerContinuationDueTime",
  );

  const PauseableScheduler_pausedTime = Symbol("PauseableScheduler_pausedTime");
  const PauseableScheduler_timeDrift = Symbol("PauseableScheduler_timeDrift");
  const PauseableScheduler_activeContinuation = Symbol(
    "PauseableScheduler_activeContinuation",
  );

  type TProperties = {
    readonly [PauseableLike_isPaused]: WritableStoreLike<boolean>;
    readonly [PauseableScheduler_hostScheduler]: SchedulerLike;
    [PauseableScheduler_hostSchedulerContinuationDueTime]: number;
    [PauseableScheduler_pausedTime]: number;
    [PauseableScheduler_timeDrift]: number;
    [PauseableScheduler_activeContinuation]: Optional<SchedulerContinuationLike>;
  };

  const peek = (
    instance: TProperties &
      SchedulerMixinHostLike &
      QueueLike<SchedulerContinuationLike>,
  ): Optional<SchedulerContinuationLike> => {
    let continuation: Optional<SchedulerContinuationLike> = none;
    while (true) {
      continuation = instance[QueueLike_head];

      if (isNone(continuation) || !continuation[DisposableLike_isDisposed]) {
        break;
      }

      instance[QueueLike_dequeue]();
    }

    return continuation;
  };

  const scheduleOnHost = (
    instance: TProperties &
      SerialDisposableLike &
      SchedulerMixinHostLike &
      SchedulerLike &
      QueueLike<SchedulerContinuationLike>,
  ) => {
    const hostScheduler = instance[PauseableScheduler_hostScheduler];

    const hostSchedulerContinuationIsScheduled =
      !instance[SerialDisposableLike_current][DisposableLike_isDisposed];
    const hostSchedulerContinuationDueTime =
      instance[PauseableScheduler_hostSchedulerContinuationDueTime];
    const nextContinuation = peek(instance);
    const nextContinuationDueTime =
      nextContinuation?.[SchedulerContinuationLike_dueTime] ?? MAX_VALUE;
    const inContinuation = instance[SchedulerLike_inContinuation];
    const isPaused = instance[PauseableLike_isPaused][StoreLike_value];
    const hostContinuationAlreadyScheduled =
      hostSchedulerContinuationIsScheduled &&
      hostSchedulerContinuationDueTime <= nextContinuationDueTime;

    if (
      isNone(nextContinuation) ||
      inContinuation ||
      hostContinuationAlreadyScheduled ||
      isPaused
    ) {
      return;
    }

    const now = instance[SchedulerLike_now];
    const dueTime = nextContinuation[SchedulerContinuationLike_dueTime];
    const delay = clampPositiveInteger(dueTime - now);

    instance[PauseableScheduler_hostSchedulerContinuationDueTime] = dueTime;

    instance[SerialDisposableLike_current] = hostScheduler[
      SchedulerLike_schedule
    ](bind(hostSchedulerContinuation, instance), { delay });
  };

  function hostSchedulerContinuation(
    this: SchedulerMixinHostLike &
      TProperties &
      QueueLike<SchedulerContinuationLike> &
      DisposableLike,
    ctx: ContinuationContextLike,
  ) {
    while (!this[DisposableLike_isDisposed]) {
      const nextContinuationToRun = peek(this);

      if (isNone(nextContinuationToRun)) {
        break;
      }

      const dueTime = nextContinuationToRun[SchedulerContinuationLike_dueTime];
      const now = this[SchedulerLike_now];
      const delay = dueTime - now;

      if (delay > 0) {
        this[PauseableScheduler_hostSchedulerContinuationDueTime] = dueTime;
      } else {
        const continuation = this[QueueLike_dequeue]();

        this[PauseableScheduler_activeContinuation] = continuation;
        continuation?.[SchedulerContinuationLike_run]();
        this[PauseableScheduler_activeContinuation] = none;
      }

      ctx[ContinuationContextLike_yield](clampPositiveInteger(delay));
    }
  }

  return mixInstanceFactory(
    include(SchedulerMixin, SerialDisposableMixin(), QueueMixin()),
    function PauseableScheduler(
      this: Pick<
        PauseableSchedulerLike,
        typeof PauseableLike_pause | typeof PauseableLike_resume
      > &
        SchedulerMixinHostLike &
        Mutable<TProperties>,
      host: SchedulerLike,
    ): PauseableSchedulerLike & DisposableLike {
      init(SchedulerMixin, this);
      init(SerialDisposableMixin(), this, Disposable.disposed);
      init(QueueMixin<SchedulerContinuationLike>(), this, {
        comparator: SchedulerContinuation.compare,
      });

      this[PauseableScheduler_hostScheduler] = host;

      this[PauseableScheduler_pausedTime] = host[SchedulerLike_now];
      this[PauseableScheduler_timeDrift] = 0;

      this[PauseableLike_isPaused] = WritableStore.create(true);

      host[DisposableContainerLike_add](this);

      return this;
    },
    props<TProperties>({
      [PauseableLike_isPaused]: none,
      [PauseableScheduler_hostScheduler]: none,
      [PauseableScheduler_hostSchedulerContinuationDueTime]: 0,
      [PauseableScheduler_pausedTime]: 0,
      [PauseableScheduler_timeDrift]: 0,
      [PauseableScheduler_activeContinuation]: none,
    }),
    {
      get [SchedulerLike_maxYieldInterval](): number {
        unsafeCast<TProperties>(this);
        return this[PauseableScheduler_hostScheduler][
          SchedulerLike_maxYieldInterval
        ];
      },

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
      get [SchedulerMixinHostLike_shouldYield](): boolean {
        unsafeCast<
          TProperties &
            DisposableLike &
            SchedulerLike &
            QueueLike<SchedulerContinuationLike>
        >(this);

        const now = this[SchedulerLike_now];
        const nextContinuation = peek(this);

        const yieldToNextContinuation =
          isSome(nextContinuation) &&
          this[PauseableScheduler_activeContinuation] !== nextContinuation &&
          nextContinuation[SchedulerContinuationLike_dueTime] <= now;

        return (
          this[PauseableLike_isPaused][StoreLike_value] ||
          yieldToNextContinuation ||
          this[PauseableScheduler_hostScheduler][SchedulerLike_shouldYield]
        );
      },
      [PauseableLike_pause](
        this: TProperties & SerialDisposableLike & SchedulerMixinHostLike,
      ) {
        const hostNow =
          this[PauseableScheduler_hostScheduler][SchedulerLike_now];
        this[PauseableScheduler_pausedTime] = hostNow;
        this[SerialDisposableLike_current] = Disposable.disposed;
        this[PauseableLike_isPaused][StoreLike_value] = true;
      },
      [PauseableLike_resume](
        this: TProperties &
          SerialDisposableLike &
          SchedulerMixinHostLike &
          SchedulerLike &
          QueueLike<SchedulerContinuationLike>,
      ) {
        const hostNow =
          this[PauseableScheduler_hostScheduler][SchedulerLike_now];
        this[PauseableScheduler_timeDrift] +=
          hostNow - this[PauseableScheduler_pausedTime];
        this[PauseableLike_isPaused][StoreLike_value] = false;
        scheduleOnHost(this);
      },
      [SchedulerMixinHostLike_schedule](
        this: TProperties &
          SerialDisposableLike &
          SchedulerMixinHostLike &
          SchedulerLike &
          QueueLike<SchedulerContinuationLike>,
        continuation: SchedulerContinuationLike,
      ) {
        this[EventListenerLike_notify](continuation);

        scheduleOnHost(this);
      },
    },
  );
})();
