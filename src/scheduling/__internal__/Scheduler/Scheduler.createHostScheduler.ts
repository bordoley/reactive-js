import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Optional, isFunction, pipe, unsafeCast } from "../../../functions";
import {
  ContinuationLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../../scheduling";
import { DisposableLike } from "../../../util";
import Disposable_addIgnoringChildErrors from "../../../util/__internal__/Disposable/Disposable.addIgnoringChildErrors";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_create from "../../../util/__internal__/Disposable/Disposable.create";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable_onDisposed from "../../../util/__internal__/Disposable/Disposable.onDisposed";
import Continuation_run from "../Continuation/Continuation.run";
import { getDelay } from "../Scheduler.options";
import getCurrentTime from "./Scheduler.getCurrentTime";
import isInContinuation from "./Scheduler.isInContinuation";

declare const navigator: {
  scheduling: Optional<{
    isInputPending(): boolean;
  }>;
};

const supportsPerformanceNow =
  typeof performance === "object" && /*@__PURE__*/ isFunction(performance.now);

const supportsSetImmediate = typeof setImmediate === "function";

const supportsProcessHRTime =
  typeof process === "object" && /*@__PURE__*/ isFunction(process.hrtime);

const supportsIsInputPending =
  typeof navigator === "object" &&
  navigator.scheduling !== undefined &&
  navigator.scheduling.isInputPending !== undefined;

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
  scheduler: TProperties & { [SchedulerLike_now]: number },
  continuation: ContinuationLike,
  immmediateOrTimerDisposable: DisposableLike,
) => {
  // clear the immediateOrTimer disposable
  pipe(immmediateOrTimerDisposable, Disposable_dispose());
  scheduler[HostScheduler_startTime] = getCurrentTime(scheduler);
  scheduler[SchedulerLike_inContinuation] = true;
  Continuation_run(continuation);
  scheduler[SchedulerLike_inContinuation] = false;
};

const HostScheduler_startTime = Symbol("HostScheduler_startTime");
const HostScheduler_yieldInterval = Symbol("HostScheduler_yieldInterval");
const HostScheduler_yieldRequested = Symbol("HostScheduler_yieldRequested");

type TProperties = {
  [SchedulerLike_inContinuation]: boolean;
  [HostScheduler_startTime]: number;
  readonly [HostScheduler_yieldInterval]: number;
  [HostScheduler_yieldRequested]: boolean;
};

const createHostSchedulerInstance = /*@__PURE__*/ createInstanceFactory(
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
      yieldInterval: number,
    ): SchedulerLike {
      init(Disposable_mixin, instance);

      instance[HostScheduler_yieldInterval] = yieldInterval;

      return instance;
    },
    props<TProperties>({
      [SchedulerLike_inContinuation]: false,
      [HostScheduler_startTime]: 0,
      [HostScheduler_yieldInterval]: 0,
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

        const inContinuation = isInContinuation(this);
        const { [HostScheduler_yieldRequested]: yieldRequested } = this;

        if (inContinuation) {
          this[HostScheduler_yieldRequested] = false;
        }

        return (
          inContinuation &&
          (yieldRequested ||
            getCurrentTime(this) >
              this[HostScheduler_startTime] +
                this[HostScheduler_yieldInterval] ||
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

        const continuationIsDisposed = Disposable_isDisposed(continuation);
        if (!continuationIsDisposed && delay > 0) {
          scheduleDelayed(this, continuation, delay);
        } else if (!continuationIsDisposed) {
          scheduleImmediate(this, continuation);
        }
      },
    },
  ),
);

const Scheduler_createHostScheduler = (
  options: {
    readonly yieldInterval?: number;
  } = {},
): SchedulerLike => {
  const { yieldInterval = 5 } = options;
  return createHostSchedulerInstance(yieldInterval);
};

export default Scheduler_createHostScheduler;
