import { MAX_SAFE_INTEGER } from "../../__internal__/constants";
import {
  MutableEnumeratorLike,
  mutableEnumeratorMixin,
} from "../../__internal__/ix/EnumeratorLike.mutable";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mixin,
  props,
} from "../../__internal__/mixins";
import {
  QueueLike,
  createPriorityQueue,
} from "../../__internal__/scheduling/QueueLike";
import { getDelay } from "../../__internal__/scheduling/SchedulerLike.options";
import { disposableMixin } from "../../__internal__/util/DisposableLike.mixins";
import {
  DisposableRefLike,
  disposableRefMixin,
} from "../../__internal__/util/DisposableRefLike";
import { MutableRefLike_current } from "../../__internal__/util/MutableRefLike";
import {
  Function1,
  Option,
  SideEffect,
  isNone,
  isSome,
  max,
  none,
  pipe,
  unsafeCast,
} from "../../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../../ix";
import { getCurrent, hasCurrent } from "../../ix/EnumeratorLike";
import { move } from "../../ix/SourceLike";
import {
  ContinuationLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../scheduling";
import { run } from "../../scheduling/ContinuationLike";
import {
  DisposableLike,
  PauseableLike,
  PauseableLike_pause,
  PauseableLike_resume,
} from "../../util";
import {
  addIgnoringChildErrors,
  disposed,
  isDisposed,
} from "../../util/DisposableLike";
import { yield_ } from "./ContinuationLike/ContinuationLike.yield";
import { getCurrentTime } from "./SchedulerLike/SchedulerLike.getCurrentTime";
import { isInContinuation } from "./SchedulerLike/SchedulerLike.isInContinuation";
import { schedule } from "./SchedulerLike/SchedulerLike.schedule";
import { shouldYield } from "./SchedulerLike/SchedulerLike.shouldYield";

export type QueueSchedulerOptions = {
  readonly priority?: number;
  readonly delay?: number;
};

export interface QueueSchedulerLike extends DisposableLike, PauseableLike {
  readonly [SchedulerLike_inContinuation]: boolean;
  readonly [SchedulerLike_now]: number;
  readonly [SchedulerLike_shouldYield]: boolean;

  [SchedulerLike_requestYield](): void;

  [SchedulerLike_schedule](
    continuation: ContinuationLike,
    options?: QueueSchedulerOptions,
  ): void;
}

export const create: Function1<SchedulerLike, QueueSchedulerLike> =
  /*@__PURE__*/ (() => {
    type QueueTask = {
      readonly continuation: ContinuationLike;
      dueTime: number;
      readonly priority: number;
      taskID: number;
    };

    const delayedComparator = (a: QueueTask, b: QueueTask) => {
      let diff = 0;
      diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
      diff = diff !== 0 ? diff : a.taskID - b.taskID;
      return diff;
    };

    const taskComparator = (a: QueueTask, b: QueueTask) => {
      let diff = 0;
      diff = diff !== 0 ? diff : a.priority - b.priority;
      diff = diff !== 0 ? diff : a.taskID - b.taskID;
      return diff;
    };

    const peek = (instance: TProperties): Option<QueueTask> => {
      const { delayed, queue } = instance;
      const now = getCurrentTime(instance.host);

      while (true) {
        const task = delayed.peek();

        if (isNone(task)) {
          break;
        }

        const taskIsDispose = isDisposed(task.continuation);
        if (task.dueTime > now && !taskIsDispose) {
          break;
        }

        delayed.pop();

        if (!taskIsDispose) {
          queue.push(task);
        }
      }

      let task: Option<QueueTask> = none;
      while (true) {
        task = queue.peek();

        if (isNone(task)) {
          break;
        }

        if (!isDisposed(task.continuation)) {
          break;
        }

        queue.pop();
      }

      return task ?? delayed.peek();
    };

    const priorityShouldYield = (
      instance: TProperties & EnumeratorLike<QueueTask>,
      next: QueueTask,
    ): boolean => {
      const { [EnumeratorLike_current]: current } = instance;

      return (
        current !== next &&
        next.dueTime <= getCurrentTime(instance.host) &&
        next.priority > current.priority
      );
    };

    const scheduleOnHost = (
      instance: TProperties & DisposableRefLike & EnumeratorLike,
    ) => {
      const task = peek(instance);

      const continuationActive =
        !isDisposed(instance[MutableRefLike_current]) &&
        isSome(task) &&
        instance.dueTime <= task.dueTime;

      if (isNone(task) || continuationActive || instance.isPaused) {
        return;
      }

      const dueTime = task.dueTime;
      const delay = max(dueTime - getCurrentTime(instance.host), 0);
      instance.dueTime = dueTime;

      const continuation =
        instance.hostContinuation ??
        (() => {
          for (
            let task = peek(instance);
            isSome(task) && !isDisposed(instance);
            task = peek(instance)
          ) {
            const { continuation, dueTime } = task;
            const delay = max(dueTime - getCurrentTime(instance.host), 0);

            if (delay === 0) {
              move(instance);
              instance[SchedulerLike_inContinuation] = true;
              run(continuation);
              instance[SchedulerLike_inContinuation] = false;
            } else {
              instance.dueTime = getCurrentTime(instance.host) + delay;
            }
            yield_({ delay });
          }
        });
      instance.hostContinuation = continuation;

      instance[MutableRefLike_current] = pipe(
        instance.host,
        schedule(continuation, { delay }),
      );
    };

    const typedDisposableRefMixin = disposableRefMixin();
    const typedMutableEnumeratorMixin = mutableEnumeratorMixin<QueueTask>();

    type TProperties = {
      [SchedulerLike_inContinuation]: boolean;
      readonly delayed: QueueLike<QueueTask>;
      dueTime: number;
      readonly host: SchedulerLike;
      hostContinuation: Option<SideEffect>;
      isPaused: boolean;
      readonly queue: QueueLike<QueueTask>;
      taskIDCounter: number;
      yieldRequested: boolean;
    };

    return createInstanceFactory(
      mixin(
        include(
          disposableMixin,
          typedMutableEnumeratorMixin,
          typedDisposableRefMixin,
        ),
        function QueueScheduler(
          instance: Pick<
            QueueSchedulerLike,
            | typeof SchedulerLike_now
            | typeof SchedulerLike_shouldYield
            | typeof SchedulerLike_requestYield
            | typeof PauseableLike_pause
            | typeof PauseableLike_resume
            | typeof SchedulerLike_schedule
          > &
            Mutable<TProperties>,
          host: SchedulerLike,
        ): QueueSchedulerLike {
          init(disposableMixin, instance);
          init(typedMutableEnumeratorMixin, instance);
          init(typedDisposableRefMixin, instance, disposed);

          instance.delayed = createPriorityQueue(delayedComparator);
          instance.queue = createPriorityQueue(taskComparator);
          instance.host = host;

          return instance;
        },
        props<TProperties>({
          [SchedulerLike_inContinuation]: false,
          delayed: none,
          dueTime: 0,
          host: none,
          hostContinuation: none,
          isPaused: false,
          queue: none,
          taskIDCounter: 0,
          yieldRequested: false,
        }),
        {
          get [SchedulerLike_now](): number {
            unsafeCast<TProperties>(this);
            return getCurrentTime(this.host);
          },
          get [SchedulerLike_shouldYield](): boolean {
            unsafeCast<TProperties & EnumeratorLike<QueueTask>>(this);

            const {
              [SchedulerLike_inContinuation]: inContinuation,
              yieldRequested,
            } = this;

            if (inContinuation) {
              this.yieldRequested = false;
            }

            const next = peek(this);

            return (
              inContinuation &&
              (yieldRequested ||
                isDisposed(this) ||
                !hasCurrent(this) ||
                this.isPaused ||
                (isSome(next) ? priorityShouldYield(this, next) : false) ||
                shouldYield(this.host))
            );
          },
          [SourceLike_move](
            this: TProperties & MutableEnumeratorLike<QueueTask>,
          ): void {
            // First fast forward through disposed tasks.
            peek(this);
            const task = this.queue.pop();

            if (isSome(task)) {
              this[EnumeratorLike_current] = task;
            }
          },
          [SchedulerLike_requestYield](this: TProperties): void {
            this.yieldRequested = true;
          },
          [PauseableLike_pause](this: TProperties & DisposableRefLike) {
            this.isPaused = true;
            this[MutableRefLike_current] = disposed;
          },
          [PauseableLike_resume](
            this: TProperties & DisposableRefLike & EnumeratorLike,
          ) {
            this.isPaused = false;
            scheduleOnHost(this);
          },
          [SchedulerLike_schedule](
            this: TProperties & DisposableRefLike & EnumeratorLike<QueueTask>,
            continuation: ContinuationLike,
            options?: QueueSchedulerOptions,
          ) {
            const delay = getDelay(options);
            const { priority } = options ?? {};
            pipe(this, addIgnoringChildErrors(continuation));

            if (!isDisposed(continuation)) {
              const now = getCurrentTime(this.host);
              const dueTime = max(now + delay, now);

              const task =
                isInContinuation(this) &&
                hasCurrent(this) &&
                getCurrent(this).continuation === continuation &&
                delay <= 0
                  ? getCurrent(this)
                  : {
                      taskID: this.taskIDCounter++,
                      continuation,
                      dueTime,
                      priority: isSome(priority)
                        ? max(priority, 0)
                        : MAX_SAFE_INTEGER,
                    };

              const { delayed, queue } = this;
              const targetQueue = dueTime > now ? delayed : queue;
              targetQueue.push(task);

              scheduleOnHost(this);
            }
          },
        },
      ),
    );
  })();
