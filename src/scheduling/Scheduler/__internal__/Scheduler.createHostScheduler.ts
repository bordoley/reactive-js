import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  Optional,
  isFunction,
  none,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  ContinuationLike,
  ContinuationLike_run,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../../scheduling.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../util.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_create from "../../../util/Disposable/__internal__/Disposable.create.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import { getDelay } from "../../__internal__/Scheduler.options.js";

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
  scheduler: TProperties & SchedulerLike,
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
  scheduler: TProperties & SchedulerLike,
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
  scheduler: TProperties & SchedulerLike,
  continuation: ContinuationLike,
) => {
  if (supportsSetImmediate) {
    scheduleImmediateWithSetImmediate(scheduler, continuation);
  } else {
    scheduleDelayed(scheduler, continuation, 0);
  }
};

const runContinuation = (
  scheduler: TProperties & SchedulerLike,
  continuation: ContinuationLike,
  immmediateOrTimerDisposable: DisposableLike,
) => {
  // clear the immediateOrTimer disposable
  immmediateOrTimerDisposable[DisposableLike_dispose]();
  scheduler[HostScheduler_startTime] = scheduler[SchedulerLike_now];
  scheduler[SchedulerLike_inContinuation] = true;
  continuation[ContinuationLike_run]();
  scheduler[SchedulerLike_inContinuation] = false;
};

const HostScheduler_startTime = Symbol("HostScheduler_startTime");
const HostScheduler_maxYieldInterval = Symbol("HostScheduler_maxYieldInterval");
const HostScheduler_yieldRequested = Symbol("HostScheduler_yieldRequested");

type TProperties = {
  [SchedulerLike_inContinuation]: boolean;
  [HostScheduler_startTime]: number;
  readonly [HostScheduler_maxYieldInterval]: number;
  [HostScheduler_yieldRequested]: boolean;
};

const createHostSchedulerInstance = /*@__PURE__*/ (() =>
  createInstanceFactory(
    mix(
      include(Disposable_mixin),
      function HostScheduler(
        instance: Pick<
          SchedulerLike,
          | typeof SchedulerLike_now
          | typeof SchedulerLike_shouldYield
          | typeof SchedulerLike_requestYield
          | typeof SchedulerLike_schedule
        > &
          Mutable<TProperties>,
        maxYieldInterval: number,
      ): SchedulerLike {
        init(Disposable_mixin, instance);

        instance[HostScheduler_maxYieldInterval] = maxYieldInterval;

        return instance;
      },
      props<TProperties>({
        [SchedulerLike_inContinuation]: false,
        [HostScheduler_startTime]: 0,
        [HostScheduler_maxYieldInterval]: 0,
        [HostScheduler_yieldRequested]: false,
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

        get [SchedulerLike_shouldYield](): boolean {
          unsafeCast<TProperties & SchedulerLike>(this);

          const inContinuation = this[SchedulerLike_inContinuation];
          const { [HostScheduler_yieldRequested]: yieldRequested } = this;

          if (inContinuation) {
            this[HostScheduler_yieldRequested] = false;
          }

          return (
            inContinuation &&
            (yieldRequested ||
              this[SchedulerLike_now] >
                this[HostScheduler_startTime] +
                  this[HostScheduler_maxYieldInterval] ||
              isInputPending())
          );
        },

        [SchedulerLike_requestYield](this: TProperties): void {
          this[HostScheduler_yieldRequested] = true;
        },

        [SchedulerLike_schedule](
          this: TProperties & SchedulerLike,
          continuation: ContinuationLike,
          options?: { readonly delay?: number },
        ) {
          const delay = getDelay(options);

          pipe(this, Disposable_addIgnoringChildErrors(continuation));

          const continuationIsDisposed =
            continuation[DisposableLike_isDisposed];
          if (!continuationIsDisposed && delay > 0) {
            scheduleDelayed(this, continuation, delay);
          } else if (!continuationIsDisposed) {
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
