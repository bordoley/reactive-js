import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  HostScheduler_maxYieldInterval,
  HostScheduler_startTime,
} from "../../../__internal__/symbols.js";
import {
  Optional,
  isFunction,
  none,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import { SchedulerLike, SchedulerLike_now } from "../../../scheduling.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../util.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_create from "../../../util/Disposable/__internal__/Disposable.create.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import {
  ContinuationLike,
  ContinuationLike_continuationScheduler,
  ContinuationSchedulerLike_schedule,
  PrioritySchedulerImplementationLike,
  PrioritySchedulerImplementationLike_runContinuation,
  PrioritySchedulerImplementationLike_shouldYield,
  PriorityScheduler_mixin,
} from "../../PriorityScheduler/__internal__/PriorityScheduler.mixin.js";

declare const navigator: {
  scheduling: Optional<{
    isInputPending(): boolean;
  }>;
};

const supportsPerformanceNow = /*@__PURE__*/ (() =>
  typeof performance === "object" && isFunction(performance.now))();

const supportsSetImmediate = typeof setImmediate === "function";

const supportsProcessHRTime = /*@__PURE__*/ (() =>
  typeof process === "object" && isFunction(process.hrtime))();

const supportsIsInputPending = /*@__PURE__*/ (() =>
  typeof navigator === "object" &&
  navigator.scheduling !== none &&
  navigator.scheduling.isInputPending !== none)();

const isInputPending = (): boolean =>
  supportsIsInputPending && (navigator.scheduling?.isInputPending() ?? false);

const scheduleImmediateWithSetImmediate = (
  scheduler: TProperties & PrioritySchedulerImplementationLike,
  continuation: ContinuationLike,
) => {
  const disposable = pipe(
    Disposable_create(),
    Disposable_addTo(continuation),
    Disposable_onDisposed(() => clearImmediate(immmediate)),
  );
  const immmediate: ReturnType<typeof setImmediate> = setImmediate(
    runContinuation,
    scheduler,
    continuation,
    disposable,
  );
};

const scheduleDelayed = (
  scheduler: TProperties & PrioritySchedulerImplementationLike,
  continuation: ContinuationLike,
  delay: number,
) => {
  const disposable = pipe(
    Disposable_create(),
    Disposable_addTo(continuation),
    Disposable_onDisposed(_ => clearTimeout(timeout)),
  );

  const timeout: ReturnType<typeof setTimeout> = setTimeout(
    runContinuation,
    delay,
    scheduler,
    continuation,
    disposable,
  );
};

const scheduleImmediate = (
  scheduler: TProperties & PrioritySchedulerImplementationLike,
  continuation: ContinuationLike,
) => {
  if (supportsSetImmediate) {
    scheduleImmediateWithSetImmediate(scheduler, continuation);
  } else {
    scheduleDelayed(scheduler, continuation, 0);
  }
};

const runContinuation = (
  scheduler: TProperties & PrioritySchedulerImplementationLike,
  continuation: ContinuationLike,
  immmediateOrTimerDisposable: DisposableLike,
) => {
  // clear the immediateOrTimer disposable
  immmediateOrTimerDisposable[DisposableLike_dispose]();
  scheduler[HostScheduler_startTime] = scheduler[SchedulerLike_now];

  scheduler[PrioritySchedulerImplementationLike_runContinuation](continuation);
};

type TProperties = {
  [HostScheduler_startTime]: number;
  readonly [HostScheduler_maxYieldInterval]: number;
};

const createHostSchedulerInstance = /*@__PURE__*/ (() =>
  createInstanceFactory(
    mix(
      include(PriorityScheduler_mixin),
      function HostScheduler(
        instance: Pick<
          PrioritySchedulerImplementationLike,
          | typeof SchedulerLike_now
          | typeof PrioritySchedulerImplementationLike_shouldYield
          | typeof ContinuationSchedulerLike_schedule
        > &
          Mutable<TProperties>,
        maxYieldInterval: number,
      ): SchedulerLike {
        init(PriorityScheduler_mixin, instance);

        instance[HostScheduler_maxYieldInterval] = maxYieldInterval;

        return instance;
      },
      props<TProperties>({
        [HostScheduler_startTime]: 0,
        [HostScheduler_maxYieldInterval]: 0,
      }),
      {
        get [SchedulerLike_now](): number {
          if (supportsPerformanceNow) {
            return performance.now();
          } else if (supportsProcessHRTime) {
            const hr = process.hrtime();
            return hr[0] * 1000 + hr[1] / 1e6;
          } else {
            return Date.now();
          }
        },

        get [PrioritySchedulerImplementationLike_shouldYield](): boolean {
          unsafeCast<TProperties & SchedulerLike>(this);
          return (
            this[SchedulerLike_now] >
              this[HostScheduler_startTime] +
                this[HostScheduler_maxYieldInterval] || isInputPending()
          );
        },

        [ContinuationSchedulerLike_schedule](
          this: TProperties & PrioritySchedulerImplementationLike,
          continuation: ContinuationLike,
          delay: number,
        ) {
          pipe(this, Disposable_addIgnoringChildErrors(continuation));

          if (continuation[DisposableLike_isDisposed]) {
            return;
          }

          continuation[ContinuationLike_continuationScheduler] = this;

          if (delay > 0) {
            scheduleDelayed(this, continuation, delay);
          } else {
            scheduleImmediate(this, continuation);
          }
        },
      },
    ),
  ))();

const Scheduler_createHostScheduler = (
  options: {
    readonly maxYieldInterval?: number;
  } = {},
): SchedulerLike => {
  const { maxYieldInterval = 300 } = options;
  return createHostSchedulerInstance(maxYieldInterval);
};

export default Scheduler_createHostScheduler;
