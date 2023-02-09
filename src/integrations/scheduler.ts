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
} from "../__internal__/mixins";
import { Factory, none, pipe, pipeLazy, unsafeCast } from "../functions";
import {
  ContinuationLike,
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../scheduling";
import { run } from "../scheduling/Continuation";
import { toScheduler } from "../scheduling/PriorityScheduler";
import { isInContinuation } from "../scheduling/Scheduler";
import { getDelay } from "../scheduling/__internal__/Scheduler.options";
import { DisposableLike } from "../util";
import {
  addIgnoringChildErrors,
  addTo,
  create as createDisposable,
  dispose,
  isDisposed,
  onDisposed,
} from "../util/Disposable";
import Disposable_mixin from "../util/__internal__/Disposable/Disposable.mixin";

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
          unsafeCast<TProperties>(this);
          return isInContinuation(this) && unstable_shouldYield();
        },

        [SchedulerLike_requestYield]() {
          unstable_requestPaint();
        },

        [SchedulerLike_schedule](
          this: DisposableLike & {
            [SchedulerLike_inContinuation]: boolean;
          },
          continuation: ContinuationLike,
          options: {
            priority: number;
            delay?: number;
          },
        ) {
          const delay = getDelay(options);

          const { priority } = options;

          pipe(this, addIgnoringChildErrors(continuation));

          if (isDisposed(continuation)) {
            return;
          }

          const callback = () => {
            pipe(callbackNodeDisposable, dispose());

            this[SchedulerLike_inContinuation] = true;
            run(continuation);
            this[SchedulerLike_inContinuation] = false;
          };

          const callbackNode = unstable_scheduleCallback(
            priority,
            callback,
            delay > 0 ? { delay } : none,
          );

          const callbackNodeDisposable = pipe(
            createDisposable(),
            onDisposed(pipeLazy(callbackNode, unstable_cancelCallback)),
            addTo(continuation),
          );
        },
      },
    ),
  );
})();

const createSchedulerFactory =
  (priority: number): Factory<SchedulerLike> =>
  () =>
    pipe(createPriorityScheduler(), toScheduler(priority));

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
