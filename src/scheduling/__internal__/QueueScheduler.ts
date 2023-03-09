import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { max } from "../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../containers.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
} from "../../containers/Enumerator/__internal__/MutableEnumerator.mixin.js";
import {
  Function1,
  Optional,
  SideEffect,
  Updater,
  isNone,
  isSome,
  none,
  pipe,
  unsafeCast,
} from "../../functions.js";
import {
  PauseableSchedulerLike,
  PauseableSchedulerLike_isPaused,
  PauseableState,
  PauseableState_paused,
  PauseableState_running,
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../scheduling.js";
import {
  DisposableLike,
  DisposableLike_isDisposed,
  QueueLike_count,
  QueueLike_push,
} from "../../util.js";
import Disposable_addIgnoringChildErrors from "../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_disposed from "../../util/Disposable/__internal__/Disposable.disposed.js";
import DisposableRef_mixin from "../../util/DisposableRef/__internal__/DisposableRef.mixin.js";
import PullableQueue_createPriorityQueue from "../../util/PullableQueue/__internal__/PullableQueue.createPriorityQueue.js";
import {
  DisposableRefLike,
  MutableRefLike_current,
  PullableQueueLike,
  PullableQueueLike_head,
  PullableQueueLike_pull,
} from "../../util/__internal__/util.internal.js";
import {
  ContinuationLike,
  ContinuationLike_continuationScheduler,
  ContinuationLike_priority,
  ContinuationSchedulerLike_schedule,
  Continuation__yield,
  PrioritySchedulerImplementationLike,
  PrioritySchedulerImplementationLike_runContinuation,
  PrioritySchedulerImplementationLike_shouldYield,
  PriorityScheduler_mixin,
} from "../Scheduler/__internal__/Scheduler.mixin.js";
import { getDelay } from "./Scheduler.options.js";

export type QueueSchedulerOptions = {
  readonly priority?: number;
  readonly delay?: number;
};

export interface QueueSchedulerLike
  extends DisposableLike,
    PauseableSchedulerLike,
    PrioritySchedulerLike {
  [SchedulerLike_schedule](
    effect: SideEffect,
    options?: QueueSchedulerOptions,
  ): DisposableLike;
}

export const create: Function1<SchedulerLike, QueueSchedulerLike> =
  /*@__PURE__*/ (() => {
    const QueueTask_continuation = Symbol("QueueTask_continuation");
    const QueueTask_dueTime = Symbol("QueueTask_dueTime");
    const QueueTask_priority = Symbol("QueueTask_priority");
    const QueueTask_taskID = Symbol("QueueTask_taskID");

    type QueueTask = {
      readonly [QueueTask_continuation]: ContinuationLike;
      [QueueTask_dueTime]: number;
      readonly [QueueTask_priority]: number;
      [QueueTask_taskID]: number;
    };

    const delayedComparator = (a: QueueTask, b: QueueTask) => {
      let diff = 0;
      diff = diff !== 0 ? diff : a[QueueTask_dueTime] - b[QueueTask_dueTime];
      diff = diff !== 0 ? diff : a[QueueTask_taskID] - b[QueueTask_taskID];
      return diff;
    };

    const taskComparator = (a: QueueTask, b: QueueTask) => {
      let diff = 0;
      diff = diff !== 0 ? diff : a[QueueTask_priority] - b[QueueTask_priority];
      diff = diff !== 0 ? diff : a[QueueTask_taskID] - b[QueueTask_taskID];
      return diff;
    };

    const peek = (instance: TProperties): Optional<QueueTask> => {
      const {
        [QueueScheduler_delayed]: delayed,
        [QueueScheduler_queue]: queue,
      } = instance;
      const now = instance[QueueScheduler_hostScheduler][SchedulerLike_now];

      while (true) {
        const task = delayed[PullableQueueLike_head];

        if (isNone(task)) {
          break;
        }

        const taskIsDispose =
          task[QueueTask_continuation][DisposableLike_isDisposed];
        if (task[QueueTask_dueTime] > now && !taskIsDispose) {
          break;
        }

        delayed[PullableQueueLike_pull]();

        if (!taskIsDispose) {
          queue[QueueLike_push](task);
        }
      }

      let task: Optional<QueueTask> = none;
      while (true) {
        task = queue[PullableQueueLike_head];

        if (isNone(task)) {
          break;
        }

        if (!task[QueueTask_continuation][DisposableLike_isDisposed]) {
          break;
        }

        queue[PullableQueueLike_pull]();
      }

      return task ?? delayed[PullableQueueLike_head];
    };

    const priorityShouldYield = (
      instance: TProperties & EnumeratorLike<QueueTask>,
      next: QueueTask,
    ): boolean => {
      const { [EnumeratorLike_current]: current } = instance;

      return (
        current !== next &&
        next[QueueTask_dueTime] <=
          instance[QueueScheduler_hostScheduler][SchedulerLike_now] &&
        next[QueueTask_priority] > current[QueueTask_priority]
      );
    };

    const scheduleOnHost = (
      instance: TProperties &
        DisposableRefLike &
        EnumeratorLike &
        PrioritySchedulerImplementationLike,
    ) => {
      const task = peek(instance);

      const continuationActive =
        !instance[MutableRefLike_current][DisposableLike_isDisposed] &&
        isSome(task) &&
        instance[QueueScheduler_dueTime] <= task[QueueTask_dueTime];

      if (
        isNone(task) ||
        continuationActive ||
        instance[PauseableSchedulerLike_isPaused]
      ) {
        return;
      }

      const dueTime = task[QueueTask_dueTime];
      const delay = max(
        dueTime - instance[QueueScheduler_hostScheduler][SchedulerLike_now],
        0,
      );
      instance[QueueScheduler_dueTime] = dueTime;

      const continuation =
        instance[QueueScheduler_hostContinuation] ??
        (() => {
          for (
            let task = peek(instance);
            isSome(task) && !instance[DisposableLike_isDisposed];
            task = peek(instance)
          ) {
            const {
              [QueueTask_continuation]: continuation,
              [QueueTask_dueTime]: dueTime,
            } = task;
            const delay = max(
              dueTime -
                instance[QueueScheduler_hostScheduler][SchedulerLike_now],
              0,
            );

            if (delay === 0) {
              instance[EnumeratorLike_move]();

              instance[PrioritySchedulerImplementationLike_runContinuation](
                continuation,
              );
            } else {
              instance[QueueScheduler_dueTime] =
                instance[QueueScheduler_hostScheduler][SchedulerLike_now] +
                delay;
            }
            Continuation__yield(delay);
          }
        });
      instance[QueueScheduler_hostContinuation] = continuation;

      instance[MutableRefLike_current] = instance[QueueScheduler_hostScheduler][
        SchedulerLike_schedule
      ](continuation, { delay });
    };

    const typedDisposableRefMixin = DisposableRef_mixin();
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin<QueueTask>();

    const QueueScheduler_delayed = Symbol("QueueScheduler_delayed");
    const QueueScheduler_dueTime = Symbol("QueueScheduler_dueTime");
    const QueueScheduler_hostContinuation = Symbol(
      "QueueScheduler_hostContinuation",
    );
    const QueueScheduler_hostScheduler = Symbol("QueueScheduler_hostScheduler");
    const QueueScheduler_queue = Symbol("QueueScheduler_queue");
    const QueueScheduler_taskIDCounter = Symbol("QueueScheduler_taskIDCounter");

    type TProperties = {
      readonly [QueueScheduler_delayed]: PullableQueueLike<QueueTask>;
      [QueueScheduler_dueTime]: number;
      readonly [QueueScheduler_hostScheduler]: SchedulerLike;
      [QueueScheduler_hostContinuation]: Optional<SideEffect>;
      [PauseableSchedulerLike_isPaused]: boolean;
      readonly [QueueScheduler_queue]: PullableQueueLike<QueueTask>;
      [QueueScheduler_taskIDCounter]: number;
    };

    return createInstanceFactory(
      mix(
        include(
          PriorityScheduler_mixin,
          typedMutableEnumeratorMixin,
          typedDisposableRefMixin,
        ),
        function QueueScheduler(
          instance: Pick<
            QueueSchedulerLike & PrioritySchedulerImplementationLike,
            | typeof SchedulerLike_now
            | typeof PrioritySchedulerImplementationLike_shouldYield
            | typeof ContinuationSchedulerLike_schedule
            | typeof QueueLike_push
            | typeof QueueLike_count
          > &
            Mutable<TProperties>,
          host: SchedulerLike,
        ): QueueSchedulerLike {
          init(PriorityScheduler_mixin, instance);
          init(typedMutableEnumeratorMixin, instance);
          init(typedDisposableRefMixin, instance, Disposable_disposed);

          instance[QueueScheduler_delayed] =
            PullableQueue_createPriorityQueue(delayedComparator);
          instance[QueueScheduler_queue] =
            PullableQueue_createPriorityQueue(taskComparator);
          instance[QueueScheduler_hostScheduler] = host;

          return instance;
        },
        props<TProperties>({
          [QueueScheduler_delayed]: none,
          [QueueScheduler_dueTime]: 0,
          [QueueScheduler_hostScheduler]: none,
          [QueueScheduler_hostContinuation]: none,
          [PauseableSchedulerLike_isPaused]: false,
          [QueueScheduler_queue]: none,
          [QueueScheduler_taskIDCounter]: 0,
        }),
        {
          get [SchedulerLike_now](): number {
            unsafeCast<TProperties>(this);
            return this[QueueScheduler_hostScheduler][SchedulerLike_now];
          },
          get [PrioritySchedulerImplementationLike_shouldYield](): boolean {
            unsafeCast<
              TProperties & EnumeratorLike<QueueTask> & DisposableLike
            >(this);

            const next = peek(this);

            return (
              this[DisposableLike_isDisposed] ||
              !this[EnumeratorLike_hasCurrent] ||
              this[PauseableSchedulerLike_isPaused] ||
              (isSome(next) ? priorityShouldYield(this, next) : false) ||
              this[QueueScheduler_hostScheduler][SchedulerLike_shouldYield]
            );
          },
          get [QueueLike_count](): number {
            unsafeCast<TProperties>(this);

            // Intentional. This is a little wierd because though the QueueScheduler
            // technically implements the QueuableLike interface, it doesn't ever
            // actually queue up the actions. It's somewhat of a weird API glitch
            // that enables a uniform Pausable interface between PausableScheduler
            // and Flowable (which does queue and dispatch its pause events).
            return 0;
          },
          [QueueLike_push](
            this: TProperties &
              DisposableRefLike &
              EnumeratorLike &
              PrioritySchedulerImplementationLike,
            req: Updater<PauseableState>,
          ): void {
            const nextState = req(
              this[PauseableSchedulerLike_isPaused]
                ? PauseableState_paused
                : PauseableState_running,
            );
            if (nextState === PauseableState_paused) {
              this[PauseableSchedulerLike_isPaused] = true;
              this[MutableRefLike_current] = Disposable_disposed;
            } else {
              this[PauseableSchedulerLike_isPaused] = false;
              scheduleOnHost(this);
            }
          },
          [EnumeratorLike_move](
            this: TProperties & MutableEnumeratorLike<QueueTask>,
          ): boolean {
            // First fast forward through disposed tasks.
            peek(this);

            const task = this[QueueScheduler_queue][PullableQueueLike_pull]();

            if (isSome(task)) {
              this[EnumeratorLike_current] = task;
            }

            return this[EnumeratorLike_hasCurrent];
          },
          [ContinuationSchedulerLike_schedule](
            this: TProperties &
              DisposableRefLike &
              EnumeratorLike<QueueTask> &
              PrioritySchedulerImplementationLike,
            continuation: ContinuationLike,
            options?: { delay?: number },
          ) {
            const delay = getDelay(options);
            const priority = continuation[ContinuationLike_priority];

            pipe(this, Disposable_addIgnoringChildErrors(continuation));

            if (continuation[DisposableLike_isDisposed]) {
              return;
            }

            continuation[ContinuationLike_continuationScheduler] = this;

            const now = this[QueueScheduler_hostScheduler][SchedulerLike_now];
            const dueTime = max(now + delay, now);

            const task =
              this[SchedulerLike_inContinuation] &&
              this[EnumeratorLike_hasCurrent] &&
              this[EnumeratorLike_current][QueueTask_continuation] ===
                continuation &&
              delay <= 0
                ? this[EnumeratorLike_current]
                : {
                    [QueueTask_taskID]: this[QueueScheduler_taskIDCounter]++,
                    [QueueTask_continuation]: continuation,
                    [QueueTask_dueTime]: dueTime,
                    [QueueTask_priority]: isSome(priority)
                      ? max(priority, 0)
                      : MAX_SAFE_INTEGER,
                  };

            const {
              [QueueScheduler_delayed]: delayed,
              [QueueScheduler_queue]: queue,
            } = this;
            const targetQueue = dueTime > now ? delayed : queue;
            targetQueue[QueueLike_push](task);

            scheduleOnHost(this);
          },
        },
      ),
    );
  })();
