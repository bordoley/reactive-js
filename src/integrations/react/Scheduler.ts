import {
  unstable_NormalPriority,
  unstable_now,
  unstable_scheduleCallback,
  unstable_shouldYield,
} from "scheduler";
import {
  Map,
  Map_delete,
  Map_get,
  Map_set,
} from "../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../__internal__/mixins.js";
import {
  ContinuationLike,
  ContinuationLike_dueTime,
  ContinuationLike_run,
} from "../../concurrent/__internal__/Continuation.js";
import SchedulerMixin, {
  SchedulerMixinBaseLike,
  SchedulerMixinBaseLike_schedule,
  SchedulerMixinBaseLike_shouldYield,
} from "../../concurrent/__mixins__/SchedulerMixin.js";
import {
  SchedulerLike,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
} from "../../concurrent.js";
import { bindMethod, newInstance, none, pipe } from "../../functions.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import { DisposableLike } from "../../utils.js";

interface ReactSchedulerModule {
  get(priority?: 1 | 2 | 3 | 4 | 5): SchedulerLike;
}

type Signature = ReactSchedulerModule;

const createReactScheduler = /*@__PURE__*/ (() => {
  const ReactScheduler_priority = Symbol("ReactScheduler_priority");

  type TProperties = {
    [ReactScheduler_priority]: 1 | 2 | 3 | 4 | 5;
  };

  return mixInstanceFactory(
    include(SchedulerMixin),
    function ReactPriorityScheduler(
      instance: SchedulerMixinBaseLike & TProperties,
      priority: 1 | 2 | 3 | 4 | 5,
    ): SchedulerLike & DisposableLike {
      init(SchedulerMixin, instance);
      instance[ReactScheduler_priority] = priority;
      return instance;
    },
    props<TProperties>({
      [ReactScheduler_priority]: 3,
    }),
    {
      [SchedulerLike_maxYieldInterval]: 300,

      get [SchedulerLike_now](): number {
        return unstable_now();
      },

      get [SchedulerMixinBaseLike_shouldYield](): boolean {
        return unstable_shouldYield();
      },

      [SchedulerMixinBaseLike_schedule](
        this: SchedulerMixinBaseLike & TProperties,
        continuation: ContinuationLike,
      ) {
        const now = this[SchedulerLike_now];
        const dueTime = continuation[ContinuationLike_dueTime];
        const delay = dueTime - now;

        unstable_scheduleCallback(
          this[ReactScheduler_priority],
          bindMethod(continuation, ContinuationLike_run),
          delay > 0 ? { delay } : none,
        );
      },
    },
  );
})();

export const get: Signature["get"] = /*@__PURE__*/ (() => {
  const schedulerCache: Map<1 | 2 | 3 | 4 | 5, SchedulerLike> =
    newInstance<Map<1 | 2 | 3 | 4 | 5, SchedulerLike>>(Map);
  return (priority = unstable_NormalPriority) =>
    schedulerCache[Map_get](priority) ??
    (() => {
      const scheduler = createReactScheduler(priority);
      schedulerCache[Map_set](priority, scheduler);
      return pipe(
        scheduler,
        DisposableContainer.onDisposed(_ =>
          schedulerCache[Map_delete](priority),
        ),
      );
    })();
})();
