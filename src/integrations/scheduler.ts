import {
  unstable_NormalPriority,
  unstable_cancelCallback,
  unstable_now,
  unstable_scheduleCallback,
  unstable_shouldYield,
} from "scheduler";
import * as Disposable from "../Disposable.js";
import {
  SchedulerImplementationLike,
  SchedulerImplementationLike_runContinuation,
  SchedulerImplementationLike_scheduleContinuation,
  SchedulerImplementationLike_shouldYield,
  SchedulerImplementation_mixin,
} from "../Scheduler/__internal__/SchedulerImplementation.mixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../__internal__/mixins.js";
import { ContinuationLike } from "../__internal__/types.js";
import { newInstance, none, pipe, pipeLazy } from "../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  SchedulerLike,
  SchedulerLike_now,
} from "../types.js";

const createReactScheduler = /*@__PURE__*/ (() => {
  type TProperties = {
    priority: 1 | 2 | 3 | 4 | 5;
  };

  return createInstanceFactory(
    mix(
      include(SchedulerImplementation_mixin),
      function ReactPriorityScheduler(
        instance: Pick<
          SchedulerImplementationLike,
          | typeof SchedulerLike_now
          | typeof SchedulerImplementationLike_shouldYield
          | typeof SchedulerImplementationLike_scheduleContinuation
        > &
          TProperties,
        priority: 1 | 2 | 3 | 4 | 5,
      ): SchedulerLike & DisposableLike {
        init(SchedulerImplementation_mixin, instance, 300);
        instance.priority = priority;
        return instance;
      },
      props<TProperties>({
        priority: 3,
      }),
      {
        get [SchedulerLike_now](): number {
          return unstable_now();
        },

        get [SchedulerImplementationLike_shouldYield](): boolean {
          return unstable_shouldYield();
        },

        [SchedulerImplementationLike_scheduleContinuation](
          this: SchedulerImplementationLike & TProperties,
          continuation: ContinuationLike,
          delay: number,
        ) {
          const callback = () => {
            callbackNodeDisposable[DisposableLike_dispose]();
            this[SchedulerImplementationLike_runContinuation](continuation);
          };

          const callbackNode = unstable_scheduleCallback(
            this.priority,
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

export const getScheduler: (options?: {
  priority?: 1 | 2 | 3 | 4 | 5;
}) => SchedulerLike = /*@__PURE__*/ (() => {
  const schedulerCache: Map<1 | 2 | 3 | 4 | 5, SchedulerLike> =
    newInstance<Map<1 | 2 | 3 | 4 | 5, SchedulerLike>>(Map);
  return (options = {}) => {
    const priority = options.priority ?? unstable_NormalPriority;
    return (
      schedulerCache.get(priority) ??
      (() => {
        const scheduler = createReactScheduler(priority);
        schedulerCache.set(priority, scheduler);
        return scheduler;
      })()
    );
  };
})();
