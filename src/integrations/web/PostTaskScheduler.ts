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
import CurrentTimeSchedulerMixin from "../../concurrent/__mixins__/CurrentTimeSchedulerMixin.js";
import {
  SchedulerContinuationLike,
  SchedulerContinuationLike_dueTime,
  SchedulerContinuationLike_run,
  SchedulerMixinHostLike,
  SchedulerMixinHostLike_schedule,
  SchedulerMixinHostLike_shouldYield,
} from "../../concurrent/__mixins__/SchedulerMixin.js";
import {
  SchedulerLike,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
} from "../../concurrent.js";
import {
  bindMethod,
  ignore,
  newInstance,
  none,
  pipe,
} from "../../functions.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import { DisposableLike } from "../../utils.js";

declare var globalThis: {
  scheduler: {
    postTask(
      callback: () => void,
      options?: {
        delay?: number;
        priority?: "user-blocking" | "user-visible" | "background";
        signal?: AbortSignal;
      },
    ): Promise<unknown>;
  };
};

interface PostTaskSchedulerModule {
  get(
    priority?: "user-blocking" | "user-visible" | "background",
  ): SchedulerLike;
}

type Signature = PostTaskSchedulerModule;

const createPostTaskScheduler = /*@__PURE__*/ (() => {
  const postTaskScheduler = globalThis.scheduler;

  const PostTaskScheduler_priority = Symbol("PostTaskScheduler_priority");

  type TProperties = {
    [PostTaskScheduler_priority]:
      | "user-blocking"
      | "user-visible"
      | "background";
  };

  return mixInstanceFactory(
    include(CurrentTimeSchedulerMixin),
    function PostTaskScheduler(
      instance: Omit<SchedulerMixinHostLike, typeof SchedulerLike_now> &
        TProperties,
      priority: "user-blocking" | "user-visible" | "background",
    ): SchedulerLike & DisposableLike {
      init(CurrentTimeSchedulerMixin, instance);
      instance[PostTaskScheduler_priority] = priority;
      return instance;
    },
    props<TProperties>({
      [PostTaskScheduler_priority]: "user-visible",
    }),
    {
      [SchedulerLike_maxYieldInterval]: 5 as const,

      [SchedulerMixinHostLike_shouldYield]: false as const,

      [SchedulerMixinHostLike_schedule](
        this: SchedulerMixinHostLike & TProperties,
        continuation: SchedulerContinuationLike,
      ) {
        const now = this[SchedulerLike_now];
        const dueTime = continuation[SchedulerContinuationLike_dueTime];
        const delay = dueTime - now;

        const signal = pipe(continuation, DisposableContainer.toAbortSignal);

        postTaskScheduler
          .postTask(bindMethod(continuation, SchedulerContinuationLike_run), {
            delay: delay >= 15 ? 15 : none,
            priority: this[PostTaskScheduler_priority],
            signal,
          })
          .catch(ignore);
      },
    },
  );
})();

export const get: Signature["get"] = /*@__PURE__*/ (() => {
  const schedulerCache: Map<
    "user-blocking" | "user-visible" | "background",
    SchedulerLike
  > =
    newInstance<
      Map<"user-blocking" | "user-visible" | "background", SchedulerLike>
    >(Map);
  return (priority = "user-visible") =>
    schedulerCache[Map_get](priority) ??
    (() => {
      const scheduler = createPostTaskScheduler(priority);
      schedulerCache[Map_set](priority, scheduler);
      return pipe(
        scheduler,
        DisposableContainer.onDisposed(_ =>
          schedulerCache[Map_delete](priority),
        ),
      );
    })();
})();
