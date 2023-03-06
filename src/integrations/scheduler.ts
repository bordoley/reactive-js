import {
  unstable_IdlePriority,
  unstable_ImmediatePriority,
  unstable_LowPriority,
  unstable_NormalPriority,
  unstable_UserBlockingPriority,
  unstable_cancelCallback,
  unstable_now,
  // @ts-ignore-next-line
  unstable_requestPaint,
  unstable_scheduleCallback,
  unstable_shouldYield,
} from "scheduler";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../__internal__/mixins.js";
import { Factory, none, pipe, pipeLazy, unsafeCast } from "../functions.js";
import {
  ContinuationLike,
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../scheduling.js";
import * as Continuation from "../scheduling/Continuation.js";
import * as PriorityScheduler from "../scheduling/PriorityScheduler.js";
import { getDelay } from "../scheduling/__internal__/Scheduler.options.js";
import { DisposableLike, DisposableLike_isDisposed } from "../util.js";
import * as Disposable from "../util/Disposable.js";
import Disposable_mixin from "../util/Disposable/__internal__/Disposable.mixin.js";

const createPriorityScheduler = /*@__PURE__*/ (() => {
  type TProperties = {
    [SchedulerLike_inContinuation]: boolean;
  };

  return createInstanceFactory(
    mix(
      include(Disposable_mixin),
      function ReactPriorityScheduler(
        instance: Omit<
          PrioritySchedulerLike,
          typeof SchedulerLike_inContinuation | keyof DisposableLike
        > &
          TProperties,
      ): PrioritySchedulerLike {
        init(Disposable_mixin, instance);
        return instance;
      },
      props<TProperties>({
        [SchedulerLike_inContinuation]: false,
      }),
      {
        get [SchedulerLike_now](): number {
          return unstable_now();
        },

        get [SchedulerLike_shouldYield](): boolean {
          unsafeCast<TProperties & SchedulerLike>(this);
          return this[SchedulerLike_inContinuation] && unstable_shouldYield();
        },

        [SchedulerLike_requestYield]() {
          unstable_requestPaint();
        },

        [SchedulerLike_schedule](
          this: DisposableLike & {
            [SchedulerLike_inContinuation]: boolean;
          },
          continuation: ContinuationLike,
          options?: {
            priority?: number;
            delay?: number;
          },
        ) {
          const delay = getDelay(options);

          const { priority = unstable_NormalPriority } = options ?? {};

          pipe(this, Disposable.addIgnoringChildErrors(continuation));

          if (continuation[DisposableLike_isDisposed]) {
            return;
          }

          const callback = () => {
            pipe(callbackNodeDisposable, Disposable.dispose());

            this[SchedulerLike_inContinuation] = true;
            Continuation.run(continuation);
            this[SchedulerLike_inContinuation] = false;
          };

          const callbackNode = unstable_scheduleCallback(
            priority,
            callback,
            delay > 0 ? { delay } : none,
          );

          const callbackNodeDisposable = pipe(
            Disposable.create(),
            Disposable.onDisposed(
              pipeLazy(callbackNode, unstable_cancelCallback),
            ),
            Disposable.addTo(continuation),
          );
        },
      },
    ),
  );
})();

const createSchedulerFactory =
  (priority: number): Factory<SchedulerLike> =>
  () =>
    pipe(createPriorityScheduler(), PriorityScheduler.toScheduler(priority));

export const createSchedulerWithIdlePriority =
  /*@__PURE__*/ createSchedulerFactory(unstable_IdlePriority);

export const createSchedulerWithImmediatePriority =
  /*@__PURE__*/ createSchedulerFactory(unstable_ImmediatePriority);

export const createSchedulerWithNormalPriority =
  /*@__PURE__*/ createSchedulerFactory(unstable_NormalPriority);

export const createSchedulerWithLowPriority =
  /*@__PURE__*/ createSchedulerFactory(unstable_LowPriority);

export const createSchedulerWithUserBlockingPriority =
  /*@__PURE__*/ createSchedulerFactory(unstable_UserBlockingPriority);
