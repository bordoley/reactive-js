import {
  unstable_NormalPriority,
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
import {
  ContinuationLike,
  ContinuationLike_priority,
} from "../__internal__/scheduling.js";
import { newInstance, none, pipe, pipeLazy } from "../functions.js";
import {
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_now,
} from "../scheduling.js";
import * as PriorityScheduler from "../scheduling/PriorityScheduler.js";
import * as Scheduler from "../scheduling/Scheduler.js";
import {
  PrioritySchedulerImplementationLike,
  PrioritySchedulerImplementationLike_runContinuation,
  PrioritySchedulerImplementationLike_scheduleContinuation,
  PrioritySchedulerImplementationLike_shouldYield,
  PriorityScheduler_mixin,
} from "../scheduling/Scheduler/__internal__/Scheduler.mixin.js";
import { DisposableLike, DisposableLike_dispose } from "../util.js";
import * as Disposable from "../util/Disposable.js";

const createSchedulerWithPriority = /*@__PURE__*/ (() => {
  type TProperties = unknown;

  const createPriorityScheduler = createInstanceFactory(
    mix(
      include(PriorityScheduler_mixin),
      function ReactPriorityScheduler(
        instance: Pick<
          PrioritySchedulerImplementationLike,
          | typeof SchedulerLike_now
          | typeof PrioritySchedulerImplementationLike_shouldYield
          | typeof PrioritySchedulerImplementationLike_scheduleContinuation
        >,
      ): PrioritySchedulerLike & DisposableLike {
        init(PriorityScheduler_mixin, instance, 300);
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

        [PrioritySchedulerImplementationLike_scheduleContinuation](
          this: PrioritySchedulerImplementationLike,
          continuation: ContinuationLike,
          delay: number,
        ) {
          const priority = continuation[ContinuationLike_priority];

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

  return (priority: number): SchedulerLike & DisposableLike => {
    const priorityScheduler = createPriorityScheduler();
    return pipe(
      priorityScheduler,
      PriorityScheduler.toScheduler(priority),
      Disposable.bindTo(priorityScheduler),
    );
  };
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
        const scheduler = createSchedulerWithPriority(priority);
        schedulerCache.set(priority, scheduler);
        return scheduler;
      })()
    );
  };
})();

export const getAnimationFrameScheduler: (options?: {
  priority?: 1 | 2 | 3 | 4 | 5;
}) => SchedulerLike = /*@__PURE__*/ (() => {
  const schedulerCache: Map<1 | 2 | 3 | 4 | 5, SchedulerLike> =
    newInstance<Map<1 | 2 | 3 | 4 | 5, SchedulerLike>>(Map);

  return (options = {}) => {
    const priority = options.priority ?? unstable_NormalPriority;

    return (
      schedulerCache.get(priority) ??
      (() => {
        const hostScheduler = getScheduler(options);
        const animationScheduler =
          Scheduler.createAnimationFrameScheduler(hostScheduler);
        schedulerCache.set(priority, animationScheduler);
        return animationScheduler;
      })()
    );
  };
})();
