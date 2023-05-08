import * as CurrentTime from "../../../__internal__/CurrentTime.js";
import { ContinuationLike } from "../../../__internal__/core.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  SchedulerLike,
  SchedulerLike_now,
} from "../../../core.js";
import Disposable_addTo from "../../../core/Disposable/__internal__/Disposable.addTo.js";
import Disposable_create from "../../../core/Disposable/__internal__/Disposable.create.js";
import Disposable_onDisposed from "../../../core/Disposable/__internal__/Disposable.onDisposed.js";
import { Optional, none, pipe } from "../../../functions.js";
import {
  SchedulerImplementationLike,
  SchedulerImplementationLike_runContinuation,
  SchedulerImplementationLike_scheduleContinuation,
  SchedulerImplementationLike_shouldYield,
  SchedulerImplementation_mixin,
} from "./SchedulerImplementation.mixin.js";

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
  scheduler: SchedulerImplementationLike,
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
  scheduler: SchedulerImplementationLike,
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
  scheduler: SchedulerImplementationLike,
  continuation: ContinuationLike,
) => {
  if (supportsSetImmediate) {
    scheduleImmediateWithSetImmediate(scheduler, continuation);
  } else {
    scheduleDelayed(scheduler, continuation, 0);
  }
};

const runContinuation = (
  scheduler: SchedulerImplementationLike,
  continuation: ContinuationLike,
  immmediateOrTimerDisposable: DisposableLike,
) => {
  // clear the immediateOrTimer disposable
  immmediateOrTimerDisposable[DisposableLike_dispose]();
  scheduler[SchedulerImplementationLike_runContinuation](continuation);
};

const createHostSchedulerInstance = /*@__PURE__*/ (() =>
  createInstanceFactory(
    mix(
      include(SchedulerImplementation_mixin),
      function HostScheduler(
        instance: Pick<
          SchedulerImplementationLike,
          | typeof SchedulerLike_now
          | typeof SchedulerImplementationLike_shouldYield
          | typeof SchedulerImplementationLike_scheduleContinuation
        >,
        maxYieldInterval: number,
      ): SchedulerLike & DisposableLike {
        init(SchedulerImplementation_mixin, instance, maxYieldInterval);

        return instance;
      },
      props({}),
      {
        get [SchedulerLike_now](): number {
          return CurrentTime.now();
        },

        get [SchedulerImplementationLike_shouldYield](): boolean {
          return isInputPending();
        },

        [SchedulerImplementationLike_scheduleContinuation](
          this: SchedulerImplementationLike,
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

const Scheduler_createHostScheduler = (
  options: {
    readonly maxYieldInterval?: number;
  } = {},
): SchedulerLike & DisposableLike => {
  const { maxYieldInterval = 300 } = options;
  return createHostSchedulerInstance(maxYieldInterval);
};

export default Scheduler_createHostScheduler;
