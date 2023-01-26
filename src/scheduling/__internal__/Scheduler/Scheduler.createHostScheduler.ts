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
import Disposable$addIgnoringChildErrors from "../../../util/__internal__/Disposable/Disposable.addIgnoringChildErrors";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable$create from "../../../util/__internal__/Disposable/Disposable.create";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable$onDisposed from "../../../util/__internal__/Disposable/Disposable.onDisposed";
import Continuation$run from "../Continuation/Continuation.run";
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
    Disposable$create(),
    Disposable$addTo(continuation),
    Disposable$onDisposed(() => clearImmediate(immmediate)),
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
    Disposable$create(),
    Disposable$addTo(continuation),
    Disposable$onDisposed(_ => clearTimeout(timeout)),
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
  pipe(immmediateOrTimerDisposable, Disposable$dispose());
  scheduler.startTime = getCurrentTime(scheduler);
  scheduler[SchedulerLike_inContinuation] = true;
  Continuation$run(continuation);
  scheduler[SchedulerLike_inContinuation] = false;
};

type TProperties = {
  [SchedulerLike_inContinuation]: boolean;
  startTime: number;
  readonly yieldInterval: number;
  yieldRequested: boolean;
};

const createHostSchedulerInstance = /*@__PURE__*/ createInstanceFactory(
  mix(
    include(Disposable$mixin),
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
      init(Disposable$mixin, instance);

      instance.yieldInterval = yieldInterval;

      return instance;
    },
    props<TProperties>({
      [SchedulerLike_inContinuation]: false,
      startTime: 0,
      yieldInterval: 0,
      yieldRequested: false,
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
        const { yieldRequested } = this;

        if (inContinuation) {
          this.yieldRequested = false;
        }

        return (
          inContinuation &&
          (yieldRequested ||
            getCurrentTime(this) > this.startTime + this.yieldInterval ||
            isInputPending())
        );
      },

      [SchedulerLike_requestYield](this: TProperties): void {
        this.yieldRequested = true;
      },

      [SchedulerLike_schedule](
        this: TProperties & SchedulerLike,
        continuation: ContinuationLike,
        options?: { readonly delay?: number },
      ) {
        const delay = getDelay(options);

        pipe(this, Disposable$addIgnoringChildErrors(continuation));

        const continuationIsDisposed = Disposable$isDisposed(continuation);
        if (!continuationIsDisposed && delay > 0) {
          scheduleDelayed(this, continuation, delay);
        } else if (!continuationIsDisposed) {
          scheduleImmediate(this, continuation);
        }
      },
    },
  ),
);

const Scheduler$createHostScheduler = (
  options: {
    readonly yieldInterval?: number;
  } = {},
): SchedulerLike => {
  const { yieldInterval = 5 } = options;
  return createHostSchedulerInstance(yieldInterval);
};

export default Scheduler$createHostScheduler;
