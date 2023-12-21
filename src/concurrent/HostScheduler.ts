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
  ContinuationLike_run,
  ContinuationSchedulerImplementationLike,
  ContinuationSchedulerImplementationLike_scheduleContinuation,
  ContinuationSchedulerImplementationLike_shouldYield,
  ContinuationSchedulerLike,
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

const scheduleImmediateWithSetImmediate = (continuation: ContinuationLike) => {
  const disposable = pipe(
    Disposable.create(),
    Disposable.addTo(continuation),
    Disposable.onDisposed(() => clearImmediate(immmediate)),
  );
  const immmediate: ReturnType<typeof setImmediate> = setImmediate(
    runContinuation,
    continuation,
    disposable,
  );
};

const scheduleDelayed = (continuation: ContinuationLike, delay: number) => {
  const disposable = pipe(
    Disposable.create(),
    Disposable.addTo(continuation),
    Disposable.onDisposed(_ => clearTimeout(timeout)),
  );

  const timeout: ReturnType<typeof setTimeout> = setTimeout(
    runContinuation,
    delay,
    continuation,
    disposable,
  );
};

const scheduleImmediate = (continuation: ContinuationLike) => {
  if (supportsSetImmediate) {
    scheduleImmediateWithSetImmediate(continuation);
  } else {
    scheduleDelayed(continuation, 0);
  }
};

const runContinuation = (
  continuation: ContinuationLike,
  immmediateOrTimerDisposable: DisposableLike,
) => {
  // clear the immediateOrTimer disposable
  immmediateOrTimerDisposable[DisposableLike_dispose]();
  continuation[ContinuationLike_run]();
};

const createHostSchedulerInstance = /*@__PURE__*/ (() =>
  createInstanceFactory(
    mix(
      include(CurrentTimeSchedulerMixin, ContinuationSchedulerMixin),
      function HostScheduler(
        instance: Omit<
          ContinuationSchedulerImplementationLike,
          typeof SchedulerLike_now
        >,
        maxYieldInterval: number,
      ): SchedulerLike & DisposableLike {
        init(CurrentTimeSchedulerMixin, instance);
        init(ContinuationSchedulerMixin, instance, maxYieldInterval);

        return instance;
      },
      props({}),
      {
        get [ContinuationSchedulerImplementationLike_shouldYield](): boolean {
          return isInputPending();
        },

        [ContinuationSchedulerImplementationLike_scheduleContinuation](
          this: ContinuationSchedulerLike,
          continuation: ContinuationLike,
          delay: number,
        ) {
          if (delay > 0) {
            scheduleDelayed(continuation, delay);
          } else {
            scheduleImmediate(continuation);
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
