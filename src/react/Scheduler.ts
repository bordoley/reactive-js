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
} from "../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../__internal__/mixins.js";
import { bindMethod, newInstance, none, pipe } from "../functions.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import SchedulerMixin, {
  SchedulerContinuationLike,
  SchedulerContinuationLike_dueTime,
  SchedulerContinuationLike_run,
  SchedulerMixinHostLike,
  SchedulerMixinHostLike_schedule,
  SchedulerMixinHostLike_shouldYield,
} from "../utils/__mixins__/SchedulerMixin.js";
import {
  DisposableLike,
  SchedulerLike,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
} from "../utils.js";

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
      this: SchedulerMixinHostLike & TProperties,
      priority: 1 | 2 | 3 | 4 | 5,
    ): SchedulerLike & DisposableLike {
      init(SchedulerMixin, this);
      this[ReactScheduler_priority] = priority;
      return this;
    },
    props<TProperties>({
      [ReactScheduler_priority]: 3,
    }),
    {
      [SchedulerLike_maxYieldInterval]: 300,

      get [SchedulerLike_now](): number {
        return unstable_now();
      },

      get [SchedulerMixinHostLike_shouldYield](): boolean {
        return unstable_shouldYield();
      },

      [SchedulerMixinHostLike_schedule](
        this: SchedulerMixinHostLike & TProperties,
        continuation: SchedulerContinuationLike,
      ) {
        const now = this[SchedulerLike_now];
        const dueTime = continuation[SchedulerContinuationLike_dueTime];
        const delay = dueTime - now;

        unstable_scheduleCallback(
          this[ReactScheduler_priority],
          bindMethod(continuation, SchedulerContinuationLike_run),
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
