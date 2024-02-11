import { globalObject } from "../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../__internal__/mixins.js";
import { SchedulerLike, SchedulerLike_now } from "../concurrent.js";
import { isSome, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import { DisposableLike, DisposableLike_dispose } from "../utils.js";
import {
  ContinuationLike,
  ContinuationLike_dueTime,
  ContinuationLike_run,
} from "./__internal__/Continuation.js";
import {
  ContinuationSchedulerLike,
  ContinuationSchedulerLike_schedule,
  ContinuationSchedulerLike_shouldYield,
} from "./__internal__/ContinuationScheduler.js";
import CurrentTimeSchedulerMixin from "./__mixins__/CurrentTimeSchedulerMixin.js";

/**
 * @noInheritDoc
 */
interface Signature {
  create(options?: {
    readonly maxYieldInterval?: number;
  }): SchedulerLike & DisposableLike;
}

const scheduleDelayed = (
  scheduler: ContinuationSchedulerLike,
  continuation: ContinuationLike,
  delay: number,
) => {
  const disposable = pipe(
    Disposable.create(),
    Disposable.addTo(continuation),
    Disposable.onDisposed(_ => globalObject.clearTimeout(timeout)),
  );

  const timeout: ReturnType<typeof setTimeout> = globalObject.setTimeout(
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
  const { setImmediate } = globalObject;
  if (isSome(setImmediate)) {
    const disposable = pipe(
      Disposable.create(),
      Disposable.addTo(continuation),
      Disposable.onDisposed(() => globalObject.clearImmediate(immmediate)),
    );
    const immmediate: ReturnType<typeof setImmediate> = setImmediate(
      runContinuation,
      scheduler,
      continuation,
      disposable,
    );
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
    scheduler[ContinuationSchedulerLike_schedule](continuation);
  }
};

const createHostSchedulerInstance = /*@__PURE__*/ (() =>
  mixInstanceFactory(
    include(CurrentTimeSchedulerMixin),
    function HostScheduler(
      instance: Omit<ContinuationSchedulerLike, typeof SchedulerLike_now>,
      maxYieldInterval: number,
    ): SchedulerLike & DisposableLike {
      init(CurrentTimeSchedulerMixin, instance, maxYieldInterval);

      return instance;
    },
    props(),
    {
      get [ContinuationSchedulerLike_shouldYield](): boolean {
        return globalObject?.navigator?.scheduling?.isInputPending?.() ?? false;
      },

      [ContinuationSchedulerLike_schedule](
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
  ))();

export const create: Signature["create"] = (
  options: {
    readonly maxYieldInterval?: number;
  } = {},
) => {
  const { maxYieldInterval = 300 } = options;
  return createHostSchedulerInstance(maxYieldInterval);
};
