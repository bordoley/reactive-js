import * as CurrentTime from "../../../__internal__/CurrentTime.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  ContinuationLike,
  SchedulerLike,
  SchedulerLike_now,
} from "../../../concurrent.js";
import { Optional, none, pipe } from "../../../functions.js";
import { DisposableLike, DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Scheduler from "../../Scheduler.js";
import ContinuationSchedulerMixin, {
  ContinuationSchedulerInstanceLike,
  ContinuationSchedulerInstanceLike_scheduleContinuation,
  ContinuationSchedulerInstanceLike_shouldYield,
  ContinuationSchedulerMixinLike,
  ContinuationSchedulerMixinLike_runContinuation,
} from "../../__mixins__/ContinuationSchedulerMixin.js";

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
  scheduler: ContinuationSchedulerMixinLike,
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
  scheduler: ContinuationSchedulerMixinLike,
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
  scheduler: ContinuationSchedulerMixinLike,
  continuation: ContinuationLike,
) => {
  if (supportsSetImmediate) {
    scheduleImmediateWithSetImmediate(scheduler, continuation);
  } else {
    scheduleDelayed(scheduler, continuation, 0);
  }
};

const runContinuation = (
  scheduler: ContinuationSchedulerMixinLike,
  continuation: ContinuationLike,
  immmediateOrTimerDisposable: DisposableLike,
) => {
  // clear the immediateOrTimer disposable
  immmediateOrTimerDisposable[DisposableLike_dispose]();
  scheduler[ContinuationSchedulerMixinLike_runContinuation](continuation);
};

const createHostSchedulerInstance = /*@__PURE__*/ (() =>
  createInstanceFactory(
    mix(
      include(ContinuationSchedulerMixin),
      function HostScheduler(
        instance: ContinuationSchedulerInstanceLike,
        maxYieldInterval: number,
      ): SchedulerLike & DisposableLike {
        init(ContinuationSchedulerMixin, instance, maxYieldInterval);

        return instance;
      },
      props({}),
      {
        get [SchedulerLike_now](): number {
          return CurrentTime.now();
        },

        get [ContinuationSchedulerInstanceLike_shouldYield](): boolean {
          return isInputPending();
        },

        [ContinuationSchedulerInstanceLike_scheduleContinuation](
          this: ContinuationSchedulerMixinLike,
          continuation: ContinuationLike,
          delay: number,
        ) {
          if (delay > 0) {
            scheduleDelayed(this, continuation, delay);
          } else {
            scheduleImmediate(this, continuation);
          }
        },
      },
    ),
  ))();

const Scheduler_createHostScheduler: Scheduler.Signature["createHostScheduler"] =
  (
    options: {
      readonly maxYieldInterval?: number;
    } = {},
  ) => {
    const { maxYieldInterval = 300 } = options;
    return createHostSchedulerInstance(maxYieldInterval);
  };

export default Scheduler_createHostScheduler;
