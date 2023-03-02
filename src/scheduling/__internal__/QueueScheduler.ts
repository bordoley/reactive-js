import { max } from "../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { MAX_SAFE_INTEGER } from "../../constants.js";
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
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../rx.js";
import Enumerator_getCurrent from "../../rx/Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_hasCurrent from "../../rx/Enumerator/__internal__/Enumerator.hasCurrent.js";
import Enumerator_move from "../../rx/Enumerator/__internal__/Enumerator.move.js";
import MutableEnumerator_mixin from "../../rx/Enumerator/__internal__/MutableEnumerator.mixin.js";
import { MutableEnumeratorLike } from "../../rx/__internal__/rx.internal.js";
import {
  ContinuationLike,
  PauseableSchedulerLike,
  PauseableSchedulerLike_isPaused,
  PauseableState,
  PauseableState_paused,
  PauseableState_running,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../scheduling.js";
import { DisposableLike, QueueLike_count, QueueLike_push } from "../../util.js";
import Disposable_addIgnoringChildErrors from "../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_disposed from "../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_isDisposed from "../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../util/Disposable/__internal__/Disposable.mixin.js";
import DisposableRef_mixin from "../../util/DisposableRef/__internal__/DisposableRef.mixin.js";
import PullableQueue_createPriorityQueue from "../../util/PullableQueue/__internal__/PullableQueue.createPriorityQueue.js";
import PullableQueue_peek from "../../util/PullableQueue/__internal__/PullableQueue.peek.js";
import PullableQueue_pull from "../../util/PullableQueue/__internal__/PullableQueue.pull.js";
import {
  DisposableRefLike,
  MutableRefLike_current,
  PullableQueueLike,
} from "../../util/__internal__/util.internal.js";
import { Continuation__yield } from "../Continuation/__internal__/Continuation.create.js";
import Continuation_run from "../Continuation/__internal__/Continuation.run.js";
import getCurrentTime from "../Scheduler/__internal__/Scheduler.getCurrentTime.js";
import isInContinuation from "../Scheduler/__internal__/Scheduler.isInContinuation.js";
import schedule from "../Scheduler/__internal__/Scheduler.schedule.js";
import shouldYield from "../Scheduler/__internal__/Scheduler.shouldYield.js";
import { getDelay } from "./Scheduler.options.js";

export type QueueSchedulerOptions = {
  readonly priority?: number;
  readonly delay?: number;
};

export interface QueueSchedulerLike
  extends DisposableLike,
    PauseableSchedulerLike {
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
      const now = getCurrentTime(instance[QueueScheduler_hostScheduler]);

      while (true) {
        const task = PullableQueue_peek(delayed);

        if (isNone(task)) {
          break;
        }

        const taskIsDispose = Disposable_isDisposed(
          task[QueueTask_continuation],
        );
        if (task[QueueTask_dueTime] > now && !taskIsDispose) {
          break;
        }

        PullableQueue_pull(delayed);

        if (!taskIsDispose) {
          queue[QueueLike_push](task);
        }
      }

      let task: Optional<QueueTask> = none;
      while (true) {
        task = PullableQueue_peek(queue);

        if (isNone(task)) {
          break;
        }

        if (!Disposable_isDisposed(task[QueueTask_continuation])) {
          break;
        }

        PullableQueue_pull(queue);
      }

      return task ?? PullableQueue_peek(delayed);
    };

    const priorityShouldYield = (
      instance: TProperties & EnumeratorLike<QueueTask>,
      next: QueueTask,
    ): boolean => {
      const { [EnumeratorLike_current]: current } = instance;

      return (
        current !== next &&
        next[QueueTask_dueTime] <=
          getCurrentTime(instance[QueueScheduler_hostScheduler]) &&
        next[QueueTask_priority] > current[QueueTask_priority]
      );
    };

    const scheduleOnHost = (
      instance: TProperties & DisposableRefLike & EnumeratorLike,
    ) => {
      const task = peek(instance);

      const continuationActive =
        !Disposable_isDisposed(instance[MutableRefLike_current]) &&
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
        dueTime - getCurrentTime(instance[QueueScheduler_hostScheduler]),
        0,
      );
      instance[QueueScheduler_dueTime] = dueTime;

      const continuation =
        instance[QueueScheduler_hostContinuation] ??
        (() => {
          for (
            let task = peek(instance);
            isSome(task) && !Disposable_isDisposed(instance);
            task = peek(instance)
          ) {
            const {
              [QueueTask_continuation]: continuation,
              [QueueTask_dueTime]: dueTime,
            } = task;
            const delay = max(
              dueTime - getCurrentTime(instance[QueueScheduler_hostScheduler]),
              0,
            );

            if (delay === 0) {
              Enumerator_move(instance);
              instance[SchedulerLike_inContinuation] = true;
              Continuation_run(continuation);
              instance[SchedulerLike_inContinuation] = false;
            } else {
              instance[QueueScheduler_dueTime] =
                getCurrentTime(instance[QueueScheduler_hostScheduler]) + delay;
            }
            Continuation__yield(delay);
          }
        });
      instance[QueueScheduler_hostContinuation] = continuation;

      instance[MutableRefLike_current] = pipe(
        instance[QueueScheduler_hostScheduler],
        schedule(continuation, { delay }),
      );
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
    const QueueScheduler_yieldRequested = Symbol(
      "QueueScheduler_yieldRequested",
    );

    type TProperties = {
      [SchedulerLike_inContinuation]: boolean;
      readonly [QueueScheduler_delayed]: PullableQueueLike<QueueTask>;
      [QueueScheduler_dueTime]: number;
      readonly [QueueScheduler_hostScheduler]: SchedulerLike;
      [QueueScheduler_hostContinuation]: Optional<SideEffect>;
      [PauseableSchedulerLike_isPaused]: boolean;
      readonly [QueueScheduler_queue]: PullableQueueLike<QueueTask>;
      [QueueScheduler_taskIDCounter]: number;
      [QueueScheduler_yieldRequested]: boolean;
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
            | typeof SchedulerLike_schedule
            | typeof QueueLike_push
            | typeof QueueLike_count
          > &
            Mutable<TProperties>,
          host: SchedulerLike,
        ): QueueSchedulerLike {
          init(Disposable_mixin, instance);
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
          [SchedulerLike_inContinuation]: false,
          [QueueScheduler_delayed]: none,
          [QueueScheduler_dueTime]: 0,
          [QueueScheduler_hostScheduler]: none,
          [QueueScheduler_hostContinuation]: none,
          [PauseableSchedulerLike_isPaused]: false,
          [QueueScheduler_queue]: none,
          [QueueScheduler_taskIDCounter]: 0,
          [QueueScheduler_yieldRequested]: false,
        }),
        {
          get [SchedulerLike_now](): number {
            unsafeCast<TProperties>(this);
            return getCurrentTime(this[QueueScheduler_hostScheduler]);
          },
          get [SchedulerLike_shouldYield](): boolean {
            unsafeCast<TProperties & EnumeratorLike<QueueTask>>(this);

            const {
              [SchedulerLike_inContinuation]: inContinuation,
              [QueueScheduler_yieldRequested]: yieldRequested,
            } = this;

            if (inContinuation) {
              this[QueueScheduler_yieldRequested] = false;
            }

            const next = peek(this);

            return (
              inContinuation &&
              (yieldRequested ||
                Disposable_isDisposed(this) ||
                !Enumerator_hasCurrent(this) ||
                this[PauseableSchedulerLike_isPaused] ||
                (isSome(next) ? priorityShouldYield(this, next) : false) ||
                shouldYield(this[QueueScheduler_hostScheduler]))
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
            this: TProperties & DisposableRefLike & EnumeratorLike,
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
          ): void {
            // First fast forward through disposed tasks.
            peek(this);
            const task = PullableQueue_pull(this[QueueScheduler_queue]);

            if (isSome(task)) {
              this[EnumeratorLike_current] = task;
            }
          },
          [SchedulerLike_requestYield](this: TProperties): void {
            this[QueueScheduler_yieldRequested] = true;
          },
          [SchedulerLike_schedule](
            this: TProperties &
              DisposableRefLike &
              EnumeratorLike<QueueTask> &
              SchedulerLike,
            continuation: ContinuationLike,
            options?: QueueSchedulerOptions,
          ) {
            const delay = getDelay(options);
            const { priority } = options ?? {};
            pipe(this, Disposable_addIgnoringChildErrors(continuation));

            if (!Disposable_isDisposed(continuation)) {
              const now = getCurrentTime(this[QueueScheduler_hostScheduler]);
              const dueTime = max(now + delay, now);

              const task =
                isInContinuation(this) &&
                Enumerator_hasCurrent(this) &&
                Enumerator_getCurrent(this)[QueueTask_continuation] ===
                  continuation &&
                delay <= 0
                  ? Enumerator_getCurrent(this)
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
            }
          },
        },
      ),
    );
  })();
