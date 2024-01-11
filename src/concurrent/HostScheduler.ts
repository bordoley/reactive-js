import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../__internal__/mixins.js";
import { SchedulerLike, SchedulerLike_now } from "../concurrent.js";
import { Optional, none, pipe } from "../functions.js";
import { DisposableLike, DisposableLike_dispose } from "../utils.js";
import * as Disposable from "../utils/Disposable.js";
import ContinuationSchedulerMixin, {
  ContinuationLike,
  ContinuationLike_dueTime,
  ContinuationLike_run,
  ContinuationSchedulerLike,
  ContinuationSchedulerLike_scheduleContinuation,
  ContinuationSchedulerLike_shouldYield,
} from "./__mixins__/ContinuationSchedulerMixin.js";
import CurrentTimeSchedulerMixin from "./__mixins__/CurrentTimeSchedulerMixin.js";

/**
 * @noInheritDoc
 */
interface Signature {
  create(options?: {
    readonly maxYieldInterval?: number;
  }): SchedulerLike & DisposableLike;
}

declare const navigator: {
  scheduling: Optional<{
    isInputPending(): boolean;
  }>;
};

const supportsSetImmediate = typeof setImmediate === "function";

const supportsIsInputPending = /*@__PURE__*/ (() =>
  typeof navigator === "object" &&
  navigator.scheduling !== none &&
  navigator.scheduling.isInputPending !== none)();

const isInputPending = (): boolean =>
  supportsIsInputPending && (navigator.scheduling?.isInputPending() ?? false);

const scheduleImmediateWithSetImmediate = (
  scheduler: ContinuationSchedulerLike,
  continuation: ContinuationLike,
) => {
  const disposable = pipe(
    Disposable.create(),
    Disposable.addTo(continuation),
    Disposable.onDisposed(() => clearImmediate(immmediate)),
  );
  const immmediate: ReturnType<typeof setImmediate> = setImmediate(
    runContinuation,
    scheduler,
    continuation,
    disposable,
  );
};

const scheduleDelayed = (
  scheduler: ContinuationSchedulerLike,
  continuation: ContinuationLike,
  delay: number,
) => {
  const disposable = pipe(
    Disposable.create(),
    Disposable.addTo(continuation),
    Disposable.onDisposed(_ => clearTimeout(timeout)),
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
  scheduler: ContinuationSchedulerLike,
  continuation: ContinuationLike,
) => {
  if (supportsSetImmediate) {
    scheduleImmediateWithSetImmediate(scheduler, continuation);
  } else {
    scheduleDelayed(scheduler, continuation, 0);
  }
};

const runContinuation = (
  scheduler: ContinuationSchedulerLike,
  continuation: ContinuationLike,
  immmediateOrTimerDisposable: DisposableLike,
) => {
  // clear the immediateOrTimer disposable
  immmediateOrTimerDisposable[DisposableLike_dispose]();
  const dueTime = continuation[ContinuationLike_dueTime];
  const now = scheduler[SchedulerLike_now];

  // Occasionally the setTimeout will run delayed continuations early,
  // so reschedule in this case.
  if (now >= dueTime) {
    continuation[ContinuationLike_run]();
  } else {
    scheduler[ContinuationSchedulerLike_scheduleContinuation](continuation);
  }
};

const createHostSchedulerInstance = /*@__PURE__*/ (() =>
  createInstanceFactory(
    mix(
      include(CurrentTimeSchedulerMixin, ContinuationSchedulerMixin),
      function HostScheduler(
        instance: Omit<ContinuationSchedulerLike, typeof SchedulerLike_now>,
        maxYieldInterval: number,
      ): SchedulerLike & DisposableLike {
        init(CurrentTimeSchedulerMixin, instance);
        init(ContinuationSchedulerMixin, instance, maxYieldInterval);

        return instance;
      },
      props(),
      {
        get [ContinuationSchedulerLike_shouldYield](): boolean {
          return isInputPending();
        },

        [ContinuationSchedulerLike_scheduleContinuation](
          this: ContinuationSchedulerLike,
          continuation: ContinuationLike,
        ) {
          const now = this[SchedulerLike_now];
          const dueTime = continuation[ContinuationLike_dueTime];
          const delay = dueTime - now;

          // setTimeout has min delay of 4 ms. So don't bother scheduling 
          // delayed continuations is the intended delay is less than a 1 ms.
          if (delay > 1) {
            scheduleDelayed(this, continuation, delay);
          } else {
            scheduleImmediate(this, continuation);
          }
        },
      },
    ),
  ))();

export const create: Signature["create"] = (
  options: {
    readonly maxYieldInterval?: number;
  } = {},
) => {
  const { maxYieldInterval = 300 } = options;
  return createHostSchedulerInstance(maxYieldInterval);
};
