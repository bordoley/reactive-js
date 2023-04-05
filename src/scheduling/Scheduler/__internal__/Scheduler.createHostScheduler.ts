import {
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
import { SchedulerLike, SchedulerLike_now } from "../../../scheduling.js";
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
import {
  ContinuationLike,
  ContinuationLike_continuationScheduler,
  ContinuationSchedulerLike_schedule,
  PrioritySchedulerImplementationLike,
  PrioritySchedulerImplementationLike_runContinuation,
  PrioritySchedulerImplementationLike_shouldYield,
  PriorityScheduler_mixin,
} from "./Scheduler.mixin.js";

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
  scheduler: PrioritySchedulerImplementationLike,
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
  scheduler: PrioritySchedulerImplementationLike,
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
  scheduler: PrioritySchedulerImplementationLike,
  continuation: ContinuationLike,
) => {
  if (supportsSetImmediate) {
    scheduleImmediateWithSetImmediate(scheduler, continuation);
  } else {
    scheduleDelayed(scheduler, continuation, 0);
  }
};

const runContinuation = (
  scheduler: PrioritySchedulerImplementationLike,
  continuation: ContinuationLike,
  immmediateOrTimerDisposable: DisposableLike,
) => {
  // clear the immediateOrTimer disposable
  immmediateOrTimerDisposable[DisposableLike_dispose]();
  scheduler[PrioritySchedulerImplementationLike_runContinuation](continuation);
};

const createHostSchedulerInstance = /*@__PURE__*/ (() =>
  createInstanceFactory(
    mix(
      include(Disposable_mixin, PriorityScheduler_mixin),
      function HostScheduler(
        instance: Pick<
          PrioritySchedulerImplementationLike,
          | typeof SchedulerLike_now
          | typeof PrioritySchedulerImplementationLike_shouldYield
          | typeof ContinuationSchedulerLike_schedule
        >,
        maxYieldInterval: number,
      ): SchedulerLike {
        init(Disposable_mixin, instance);
        init(PriorityScheduler_mixin, instance, maxYieldInterval);

        return instance;
      },
      props({}),
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
          unsafeCast<SchedulerLike>(this);
          return isInputPending();
        },

        [ContinuationSchedulerLike_schedule](
          this: PrioritySchedulerImplementationLike,
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
