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
} from "../../__internal__/mixins.js";
import {
  ContinuationLike,
  SchedulerLike,
  SchedulerLike_now,
} from "../../concurrent.js";
import ContinuationSchedulerMixin, {
  ContinuationSchedulerInstanceLike,
  ContinuationSchedulerInstanceLike_scheduleContinuation,
  ContinuationSchedulerInstanceLike_shouldYield,
  ContinuationSchedulerMixinLike,
  ContinuationSchedulerMixinLike_runContinuation,
} from "../../concurrent/__mixins__/ContinuationSchedulerMixin.js";
import { newInstance, none, pipe, pipeLazy } from "../../functions.js";
import { DisposableLike, DisposableLike_dispose } from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";

interface ReactSchedulerModule {
  get(priority?: 1 | 2 | 3 | 4 | 5): SchedulerLike;
}

type Signature = ReactSchedulerModule;

const createReactScheduler = /*@__PURE__*/ (() => {
  type TProperties = {
    priority: 1 | 2 | 3 | 4 | 5;
  };

  return createInstanceFactory(
    mix(
      include(ContinuationSchedulerMixin),
      function ReactPriorityScheduler(
        instance: ContinuationSchedulerInstanceLike & TProperties,
        priority: 1 | 2 | 3 | 4 | 5,
      ): SchedulerLike & DisposableLike {
        init(ContinuationSchedulerMixin, instance, 300);
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

        get [ContinuationSchedulerInstanceLike_shouldYield](): boolean {
          return unstable_shouldYield();
        },

        [ContinuationSchedulerInstanceLike_scheduleContinuation](
          this: ContinuationSchedulerMixinLike & TProperties,
          continuation: ContinuationLike,
          delay: number,
        ) {
          const callback = () => {
            callbackNodeDisposable[DisposableLike_dispose]();
            this[ContinuationSchedulerMixinLike_runContinuation](continuation);
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

export const get: Signature["get"] = /*@__PURE__*/ (() => {
  const schedulerCache: Map<1 | 2 | 3 | 4 | 5, SchedulerLike> =
    newInstance<Map<1 | 2 | 3 | 4 | 5, SchedulerLike>>(Map);
  return (priority = unstable_NormalPriority) =>
    schedulerCache.get(priority) ??
    (() => {
      const scheduler = createReactScheduler(priority);
      schedulerCache.set(priority, scheduler);
      return scheduler;
    })();
})();
