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
import EnumeratorLike__getCurrent from "../../ix/__internal__/EnumeratorLike/EnumeratorLike.getCurrent";
import EnumeratorLike__hasCurrent from "../../ix/__internal__/EnumeratorLike/EnumeratorLike.hasCurrent";
import MutableEnumeratorLike__mixin from "../../ix/__internal__/MutableEnumeratorLike/MutableEnumeratorLike.mixin";
import SourceLike__move from "../../ix/__internal__/SourceLike/SourceLike.move";
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
import DisposableLike__addIgnoringChildErrors from "../../util/__internal__/DisposableLike/DisposableLike.addIgnoringChildErrors";
import DisposableLike__disposed from "../../util/__internal__/DisposableLike/DisposableLike.disposed";
import DisposableLike__isDisposed from "../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DisposableLike__mixin from "../../util/__internal__/DisposableLike/DisposableLike.mixin";
import DisposableRefLike__mixin from "../../util/__internal__/DisposableRefLike/DisposableRefLike.mixin";
import QueueLike__create from "../../util/__internal__/QueueLike/QueueLike.create";
import QueueLike__peek from "../../util/__internal__/QueueLike/QueueLike.peek";
import QueueLike__pop from "../../util/__internal__/QueueLike/QueueLike.pop";
import QueueLike__push from "../../util/__internal__/QueueLike/QueueLike.push";
import {
  DisposableRefLike,
  MutableRefLike_current,
  QueueLike,
} from "../../util/__internal__/util.internal";
import ContinuationLike__run from "./ContinuationLike/ContinuationLike.run";
import yield_ from "./ContinuationLike/ContinuationLike.yield";
import { getDelay } from "./SchedulerLike.options";
import getCurrentTime from "./SchedulerLike/SchedulerLike.getCurrentTime";
import isInContinuation from "./SchedulerLike/SchedulerLike.isInContinuation";
import schedule from "./SchedulerLike/SchedulerLike.schedule";
import shouldYield from "./SchedulerLike/SchedulerLike.shouldYield";

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
        const task = QueueLike__peek(delayed);

        if (isNone(task)) {
          break;
        }

        const taskIsDispose = DisposableLike__isDisposed(task.continuation);
        if (task.dueTime > now && !taskIsDispose) {
          break;
        }

        QueueLike__pop(delayed);

        if (!taskIsDispose) {
          QueueLike__push(queue, task);
        }
      }

      let task: Optional<QueueTask> = none;
      while (true) {
        task = QueueLike__peek(queue);

        if (isNone(task)) {
          break;
        }

        if (!DisposableLike__isDisposed(task.continuation)) {
          break;
        }

        QueueLike__pop(queue);
      }

      return task ?? QueueLike__peek(delayed);
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
        !DisposableLike__isDisposed(instance[MutableRefLike_current]) &&
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
            isSome(task) && !DisposableLike__isDisposed(instance);
            task = peek(instance)
          ) {
            const { continuation, dueTime } = task;
            const delay = max(dueTime - getCurrentTime(instance.host), 0);

            if (delay === 0) {
              SourceLike__move(instance);
              instance[SchedulerLike_inContinuation] = true;
              ContinuationLike__run(continuation);
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

    const typedDisposableRefMixin = DisposableRefLike__mixin();
    const typedMutableEnumeratorMixin =
      MutableEnumeratorLike__mixin<QueueTask>();

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
          DisposableLike__mixin,
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
          init(DisposableLike__mixin, instance);
          init(typedMutableEnumeratorMixin, instance);
          init(typedDisposableRefMixin, instance, DisposableLike__disposed);

          instance.delayed = QueueLike__create(delayedComparator);
          instance.queue = QueueLike__create(taskComparator);
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
                DisposableLike__isDisposed(this) ||
                !EnumeratorLike__hasCurrent(this) ||
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
            const task = QueueLike__pop(this.queue);

            if (isSome(task)) {
              this[EnumeratorLike_current] = task;
            }
          },
          [SchedulerLike_requestYield](this: TProperties): void {
            this.yieldRequested = true;
          },
          [PauseableLike_pause](this: TProperties & DisposableRefLike) {
            this.isPaused = true;
            this[MutableRefLike_current] = DisposableLike__disposed;
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
            pipe(this, DisposableLike__addIgnoringChildErrors(continuation));

            if (!DisposableLike__isDisposed(continuation)) {
              const now = getCurrentTime(this.host);
              const dueTime = max(now + delay, now);

              const task =
                isInContinuation(this) &&
                EnumeratorLike__hasCurrent(this) &&
                EnumeratorLike__getCurrent(this).continuation ===
                  continuation &&
                delay <= 0
                  ? EnumeratorLike__getCurrent(this)
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
              QueueLike__push(targetQueue, task);

              scheduleOnHost(this);
            }
          },
        },
      ),
    );
  })();
