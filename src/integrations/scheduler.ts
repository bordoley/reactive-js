import {
  unstable_IdlePriority,
  unstable_ImmediatePriority,
  unstable_LowPriority,
  unstable_NormalPriority,
  unstable_UserBlockingPriority,
  unstable_cancelCallback,
  unstable_now,
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
import { Factory, none, pipe, pipeLazy } from "../functions.js";
import {
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_now,
} from "../scheduling.js";
import * as PriorityScheduler from "../scheduling/PriorityScheduler.js";
import {
  ContinuationLike,
  ContinuationLike_continuationScheduler,
  ContinuationLike_priority,
  ContinuationSchedulerLike_schedule,
  PrioritySchedulerImplementationLike,
  PrioritySchedulerImplementationLike_runContinuation,
  PrioritySchedulerImplementationLike_shouldYield,
  PriorityScheduler_mixin,
} from "../scheduling/PriorityScheduler/__internal__/PriorityScheduler.mixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed } from "../util.js";
import * as Disposable from "../util/Disposable.js";

const createPriorityScheduler = /*@__PURE__*/ (() => {
  type TProperties = unknown;

  return createInstanceFactory(
    mix(
      include(PriorityScheduler_mixin),
      function ReactPriorityScheduler(
        instance: Pick<
          PrioritySchedulerImplementationLike,
          | typeof SchedulerLike_now
          | typeof PrioritySchedulerImplementationLike_shouldYield
          | typeof ContinuationSchedulerLike_schedule
        >,
      ): PrioritySchedulerLike {
        init(PriorityScheduler_mixin, instance);
        return instance;
      },
      props<TProperties>({}),
      {
        get [SchedulerLike_now](): number {
          return unstable_now();
        },

        get [PrioritySchedulerImplementationLike_shouldYield](): boolean {
          return unstable_shouldYield();
        },

        [ContinuationSchedulerLike_schedule](
          this: PrioritySchedulerImplementationLike,
          continuation: ContinuationLike,
          delay: number,
        ) {
          const priority = continuation[ContinuationLike_priority];

          pipe(this, Disposable.addIgnoringChildErrors(continuation));

          if (continuation[DisposableLike_isDisposed]) {
            return;
          }

          continuation[ContinuationLike_continuationScheduler] = this;

          const callback = () => {
            callbackNodeDisposable[DisposableLike_dispose]();
            this[PrioritySchedulerImplementationLike_runContinuation](
              continuation,
            );
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
