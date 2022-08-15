import { getDelay } from "../__internal__/__internal__optionParsing";
import { disposableMixin } from "../__internal__/util/__internal__Disposables";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mixin,
  props,
} from "../__internal__/util/__internal__Objects";
import { Function1, none, partial, pipe, unsafeCast } from "../functions";
import {
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../scheduling";
import { ContinuationLike, DisposableLike } from "../util";
import { addIgnoringChildErrors, isDisposed } from "../util/DisposableLike";
import {
  getCurrentTime,
  isInContinuation,
  requestYield,
  shouldYield,
} from "./SchedulerLike";

/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
export const toScheduler = /*@__PURE__*/ (() => {
  type TProperties = {
    readonly priorityScheduler: PrioritySchedulerLike;
    readonly priority: number;
  };

  const createSchedulerInstance = createInstanceFactory(
    mixin(
      include(disposableMixin),
      function PrioritySchedulerDelegatingScheduler(
        instance: Pick<
          SchedulerLike,
          | typeof SchedulerLike_inContinuation
          | typeof SchedulerLike_now
          | typeof SchedulerLike_shouldYield
          | typeof SchedulerLike_requestYield
          | typeof SchedulerLike_schedule
        > &
          Mutable<TProperties>,
        scheduler: PrioritySchedulerLike,
        priority: number,
      ): SchedulerLike {
        init(disposableMixin, instance);

        instance.priorityScheduler = scheduler;
        instance.priority = priority;

        return instance;
      },
      props<TProperties>({
        priorityScheduler: none,
        priority: 0,
      }),
      {
        get [SchedulerLike_inContinuation]() {
          unsafeCast<TProperties>(this);
          return isInContinuation(this.priorityScheduler);
        },
        get [SchedulerLike_now]() {
          unsafeCast<TProperties>(this);
          return getCurrentTime(this.priorityScheduler);
        },
        get [SchedulerLike_shouldYield]() {
          unsafeCast<TProperties>(this);
          return shouldYield(this.priorityScheduler);
        },
        [SchedulerLike_requestYield](this: TProperties): void {
          requestYield(this.priorityScheduler);
        },
        [SchedulerLike_schedule](
          this: TProperties & DisposableLike,
          continuation: ContinuationLike,
          options?: { readonly delay?: number },
        ) {
          const delay = getDelay(options);

          pipe(this, addIgnoringChildErrors(continuation));

          if (!isDisposed(continuation)) {
            this.priorityScheduler[SchedulerLike_schedule](continuation, {
              priority: this.priority,
              delay,
            });
          }
        },
      },
    ),
  );

  return (priority: number): Function1<PrioritySchedulerLike, SchedulerLike> =>
    pipe(createSchedulerInstance, partial(priority));
})();
