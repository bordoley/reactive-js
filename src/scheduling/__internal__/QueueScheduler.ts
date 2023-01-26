import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins";
import { MAX_SAFE_INTEGER } from "../../constants";
import {
  Function1,
  Optional,
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
import Enumerator_getCurrent from "../../ix/__internal__/Enumerator/Enumerator.getCurrent";
import Enumerator_hasCurrent from "../../ix/__internal__/Enumerator/Enumerator.hasCurrent";
import MutableEnumerator_mixin from "../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin";
import Source_move from "../../ix/__internal__/Source/Source.move";
import { MutableEnumeratorLike } from "../../ix/__internal__/ix.internal";
import {
  ContinuationLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../scheduling";
import {
  DisposableLike,
  PauseableLike,
  PauseableLike_pause,
  PauseableLike_resume,
} from "../../util";
import Disposable_addIgnoringChildErrors from "../../util/__internal__/Disposable/Disposable.addIgnoringChildErrors";
import Disposable_disposed from "../../util/__internal__/Disposable/Disposable.disposed";
import Disposable_isDisposed from "../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable_mixin from "../../util/__internal__/Disposable/Disposable.mixin";
import DisposableRef_mixin from "../../util/__internal__/DisposableRef/DisposableRef.mixin";
import Queue_create from "../../util/__internal__/Queue/Queue.create";
import Queue_peek from "../../util/__internal__/Queue/Queue.peek";
import Queue_pop from "../../util/__internal__/Queue/Queue.pop";
import Queue_push from "../../util/__internal__/Queue/Queue.push";
import {
  DisposableRefLike,
  MutableRefLike_current,
  QueueLike,
} from "../../util/__internal__/util.internal";
import Continuation_run from "./Continuation/Continuation.run";
import yield_ from "./Continuation/Continuation.yield";
import { getDelay } from "./Scheduler.options";
import getCurrentTime from "./Scheduler/Scheduler.getCurrentTime";
import isInContinuation from "./Scheduler/Scheduler.isInContinuation";
import schedule from "./Scheduler/Scheduler.schedule";
import shouldYield from "./Scheduler/Scheduler.shouldYield";

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

    const peek = (instance: TProperties): Optional<QueueTask> => {
      const { delayed, queue } = instance;
      const now = getCurrentTime(instance.host);

      while (true) {
        const task = Queue_peek(delayed);

        if (isNone(task)) {
          break;
        }

        const taskIsDispose = Disposable_isDisposed(task.continuation);
        if (task.dueTime > now && !taskIsDispose) {
          break;
        }

        Queue_pop(delayed);

        if (!taskIsDispose) {
          Queue_push(queue, task);
        }
      }

      let task: Optional<QueueTask> = none;
      while (true) {
        task = Queue_peek(queue);

        if (isNone(task)) {
          break;
        }

        if (!Disposable_isDisposed(task.continuation)) {
          break;
        }

        Queue_pop(queue);
      }

      return task ?? Queue_peek(delayed);
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
        !Disposable_isDisposed(instance[MutableRefLike_current]) &&
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
            isSome(task) && !Disposable_isDisposed(instance);
            task = peek(instance)
          ) {
            const { continuation, dueTime } = task;
            const delay = max(dueTime - getCurrentTime(instance.host), 0);

            if (delay === 0) {
              Source_move(instance);
              instance[SchedulerLike_inContinuation] = true;
              Continuation_run(continuation);
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

    const typedDisposableRefMixin = DisposableRef_mixin();
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin<QueueTask>();

    type TProperties = {
      [SchedulerLike_inContinuation]: boolean;
      readonly delayed: QueueLike<QueueTask>;
      dueTime: number;
      readonly host: SchedulerLike;
      hostContinuation: Optional<SideEffect>;
      isPaused: boolean;
      readonly queue: QueueLike<QueueTask>;
      taskIDCounter: number;
      yieldRequested: boolean;
    };

    return createInstanceFactory(
      mix(
        include(
          Disposable_mixin,
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
          init(Disposable_mixin, instance);
          init(typedMutableEnumeratorMixin, instance);
          init(typedDisposableRefMixin, instance, Disposable_disposed);

          instance.delayed = Queue_create(delayedComparator);
          instance.queue = Queue_create(taskComparator);
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
                Disposable_isDisposed(this) ||
                !Enumerator_hasCurrent(this) ||
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
            const task = Queue_pop(this.queue);

            if (isSome(task)) {
              this[EnumeratorLike_current] = task;
            }
          },
          [SchedulerLike_requestYield](this: TProperties): void {
            this.yieldRequested = true;
          },
          [PauseableLike_pause](this: TProperties & DisposableRefLike) {
            this.isPaused = true;
            this[MutableRefLike_current] = Disposable_disposed;
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
            pipe(this, Disposable_addIgnoringChildErrors(continuation));

            if (!Disposable_isDisposed(continuation)) {
              const now = getCurrentTime(this.host);
              const dueTime = max(now + delay, now);

              const task =
                isInContinuation(this) &&
                Enumerator_hasCurrent(this) &&
                Enumerator_getCurrent(this).continuation === continuation &&
                delay <= 0
                  ? Enumerator_getCurrent(this)
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
              Queue_push(targetQueue, task);

              scheduleOnHost(this);
            }
          },
        },
      ),
    );
  })();
