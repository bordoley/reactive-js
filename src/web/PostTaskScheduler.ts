import * as DisposableContainer from "..//utils/DisposableContainer.js";
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
import { bindMethod, ignore, newInstance, pipe } from "../functions.js";
import SchedulerMixin, {
  SchedulerContinuationLike,
  SchedulerContinuationLike_dueTime,
  SchedulerContinuationLike_run,
  SchedulerMixinHostLike,
  SchedulerMixinHostLike_schedule,
  SchedulerMixinHostLike_shouldYield,
} from "../utils/__mixins__/SchedulerMixin.js";
import {
  ClockLike_now,
  DisposableLike,
  SchedulerLike,
  SchedulerLike_maxYieldInterval,
} from "../utils.js";

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
    include(SchedulerMixin),
    function PostTaskScheduler(
      this: Omit<SchedulerMixinHostLike, typeof ClockLike_now> & TProperties,
      priority: "user-blocking" | "user-visible" | "background",
    ): SchedulerLike & DisposableLike {
      init(SchedulerMixin, this);
      this[PostTaskScheduler_priority] = priority;
      return this;
    },
    props<TProperties>({
      [PostTaskScheduler_priority]: "user-visible",
    }),
    {
      [SchedulerLike_maxYieldInterval]: 5 as const,

      [SchedulerMixinHostLike_shouldYield]: false as const,

      [SchedulerMixinHostLike_schedule](
        this: SchedulerLike & SchedulerMixinHostLike & TProperties,
        continuation: SchedulerContinuationLike,
      ) {
        const now = this[ClockLike_now];
        const dueTime = continuation[SchedulerContinuationLike_dueTime];
        const delay = dueTime - now;

        const signal = pipe(continuation, DisposableContainer.toAbortSignal);

        postTaskScheduler
          .postTask(bindMethod(continuation, SchedulerContinuationLike_run), {
            delay,
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
