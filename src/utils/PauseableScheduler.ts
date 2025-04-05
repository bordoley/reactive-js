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
  CollectionEnumeratorLike_peek,
  DisposableContainerLike_add,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  PauseableSchedulerLike,
  QueueLike,
  QueueLike_enqueue,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  delayMs,
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
  const PauseableScheduler_hostSchedulerSubscription = Symbol(
    "PauseableScheduler_hostSchedulerSubscription",
  );

  type TProperties = {
    readonly [PauseableLike_isPaused]: WritableStoreLike<boolean>;
    readonly [PauseableScheduler_hostScheduler]: SchedulerLike;
    [PauseableScheduler_hostSchedulerContinuationDueTime]: number;
    [PauseableScheduler_pausedTime]: number;
    [PauseableScheduler_timeDrift]: number;
    [PauseableScheduler_activeContinuation]: Optional<SchedulerContinuationLike>;
    [PauseableScheduler_hostSchedulerSubscription]: DisposableLike;
  };

  const peek = (
    instance: TProperties &
      SchedulerMixinHostLike &
      QueueLike<SchedulerContinuationLike>,
  ): Optional<SchedulerContinuationLike> => {
    let continuation: Optional<SchedulerContinuationLike> = none;
    while (true) {
      continuation = instance[CollectionEnumeratorLike_peek];

      if (isNone(continuation) || !continuation[DisposableLike_isDisposed]) {
        break;
      }

      instance[EnumeratorLike_moveNext]();
    }

    return continuation;
  };

  const scheduleOnHost = (
    instance: TProperties &
      SchedulerMixinHostLike &
      SchedulerLike &
      QueueLike<SchedulerContinuationLike>,
  ) => {
    const hostScheduler = instance[PauseableScheduler_hostScheduler];

    const hostSchedulerContinuationIsScheduled =
      !instance[PauseableScheduler_hostSchedulerSubscription][
        DisposableLike_isDisposed
      ];
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

    instance[PauseableScheduler_hostSchedulerSubscription] = hostScheduler[
      SchedulerLike_schedule
    ](bind(hostSchedulerContinuation, instance), { delay });
  };

  function* hostSchedulerContinuation(
    this: SchedulerMixinHostLike &
      SchedulerLike &
      TProperties &
      QueueLike<SchedulerContinuationLike> &
      DisposableLike,
    scheduler: SchedulerLike,
  ) {
    const isPausedStore = this[PauseableLike_isPaused];
    while (
      !this[DisposableLike_isDisposed] &&
      !isPausedStore[StoreLike_value]
    ) {
      const nextContinuationToRun = peek(this);

      if (isNone(nextContinuationToRun)) {
        break;
      }

      const dueTime = nextContinuationToRun[SchedulerContinuationLike_dueTime];
      const now = this[SchedulerLike_now];
      const t = clampPositiveInteger(dueTime - now);

      if (t > 0) {
        this[PauseableScheduler_hostSchedulerContinuationDueTime] = dueTime;
      } else {
        this[EnumeratorLike_moveNext]();
        const continuation = this[EnumeratorLike_current];

        this[PauseableScheduler_activeContinuation] = continuation;
        continuation?.[SchedulerContinuationLike_run]();
        this[PauseableScheduler_activeContinuation] = none;
      }

      if (t > 0 || scheduler[SchedulerLike_shouldYield]) {
        yield delayMs(t);
      }
    }
  }

  return mixInstanceFactory(
    include(SchedulerMixin, QueueMixin()),
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
      [PauseableScheduler_hostSchedulerSubscription]: Disposable.disposed,
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
      [PauseableLike_pause](this: TProperties & SchedulerMixinHostLike) {
        const hostNow =
          this[PauseableScheduler_hostScheduler][SchedulerLike_now];
        this[PauseableScheduler_pausedTime] = hostNow;
        this[PauseableScheduler_hostSchedulerSubscription][
          DisposableLike_dispose
        ]();
        this[PauseableLike_isPaused][StoreLike_value] = true;
      },
      [PauseableLike_resume](
        this: TProperties &
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
          SchedulerMixinHostLike &
          SchedulerLike &
          QueueLike<SchedulerContinuationLike>,
        continuation: SchedulerContinuationLike,
      ) {
        this[QueueLike_enqueue](continuation);

        scheduleOnHost(this);
      },
    },
  );
})();
