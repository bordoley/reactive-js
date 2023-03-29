import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  QueueScheduler_delayed,
  QueueScheduler_dueTime,
  QueueScheduler_hostContinuation,
  QueueScheduler_hostScheduler,
  QueueScheduler_queue,
  QueueScheduler_taskIDCounter,
  QueueTask_continuation,
  QueueTask_dueTime,
  QueueTask_priority,
  QueueTask_taskID,
} from "../../../__internal__/symbols.js";
import {
  QueueLike,
  QueueLike_dequeue,
  QueueLike_head,
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../../../__internal__/util.internal.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../../containers.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
} from "../../../containers/Enumerator/__internal__/MutableEnumerator.mixin.js";
import {
  Factory,
  Function2,
  Optional,
  SideEffect1,
  isNone,
  isSome,
  none,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  PauseableSchedulerLike,
  PauseableSchedulerLike_isPaused,
  PauseableSchedulerLike_pause,
  PauseableSchedulerLike_resume,
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../../scheduling.js";
import {
  DisposableLike,
  DisposableLike_isDisposed,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import SerialDisposable_mixin from "../../../util/Disposable/__internal__/SerialDisposable.mixin.js";
import Queue_createPriorityQueue from "../../../util/Queue/__internal__/Queue.createPriorityQueue.js";
import {
  ContinuationLike,
  ContinuationLike_continuationScheduler,
  ContinuationLike_priority,
  ContinuationSchedulerLike_schedule,
  PrioritySchedulerImplementationLike,
  PrioritySchedulerImplementationLike_runContinuation,
  PrioritySchedulerImplementationLike_shouldYield,
  PriorityScheduler_mixin,
} from "./Scheduler.mixin.js";

export type QueueTask = {
  readonly [QueueTask_continuation]: ContinuationLike;
  [QueueTask_dueTime]: number;
  readonly [QueueTask_priority]: number;
  [QueueTask_taskID]: number;
};

const Scheduler_createQueueScheduler: Function2<
  SchedulerLike,
  () => QueueLike<QueueTask>,
  PauseableSchedulerLike & PrioritySchedulerLike
> = /*@__PURE__*/ (() => {
  const delayedComparator = (a: QueueTask, b: QueueTask) => {
    let diff = 0;
    diff = diff !== 0 ? diff : a[QueueTask_dueTime] - b[QueueTask_dueTime];
    diff = diff !== 0 ? diff : b[QueueTask_taskID] - a[QueueTask_taskID];
    return diff;
  };

  const peek = (instance: TProperties): Optional<QueueTask> => {
    const { [QueueScheduler_delayed]: delayed, [QueueScheduler_queue]: queue } =
      instance;
    const now = instance[QueueScheduler_hostScheduler][SchedulerLike_now];

    while (true) {
      const task = delayed[QueueLike_head];

      if (isNone(task)) {
        break;
      }

      const taskIsDispose =
        task[QueueTask_continuation][DisposableLike_isDisposed];
      if (task[QueueTask_dueTime] > now && !taskIsDispose) {
        break;
      }

      delayed[QueueLike_dequeue]();

      if (!taskIsDispose) {
        queue[QueueableLike_enqueue](task);
      }
    }

    let task: Optional<QueueTask> = none;
    while (true) {
      task = queue[QueueLike_head];

      if (isNone(task)) {
        break;
      }

      if (!task[QueueTask_continuation][DisposableLike_isDisposed]) {
        break;
      }

      queue[QueueLike_dequeue]();
    }

    return task ?? delayed[QueueLike_head];
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
      SerialDisposableLike &
      EnumeratorLike &
      PrioritySchedulerImplementationLike,
  ) => {
    const task = peek(instance);

    const continuationActive =
      !instance[SerialDisposableLike_current][DisposableLike_isDisposed] &&
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
    const delay = clampPositiveInteger(
      dueTime - instance[QueueScheduler_hostScheduler][SchedulerLike_now],
    );
    instance[QueueScheduler_dueTime] = dueTime;

    const continuation =
      instance[QueueScheduler_hostContinuation] ??
      ((ctx: ContinuationContextLike) => {
        for (
          let task = peek(instance);
          isSome(task) && !instance[DisposableLike_isDisposed];
          task = peek(instance)
        ) {
          const {
            [QueueTask_continuation]: continuation,
            [QueueTask_dueTime]: dueTime,
          } = task;
          const delay = clampPositiveInteger(
            dueTime - instance[QueueScheduler_hostScheduler][SchedulerLike_now],
          );

          if (delay > 0) {
            instance[QueueScheduler_dueTime] =
              instance[QueueScheduler_hostScheduler][SchedulerLike_now] + delay;
          } else {
            instance[EnumeratorLike_move]();

            instance[PrioritySchedulerImplementationLike_runContinuation](
              continuation,
            );
          }
          ctx[ContinuationContextLike_yield](delay);
        }
      });
    instance[QueueScheduler_hostContinuation] = continuation;

    instance[SerialDisposableLike_current] = instance[
      QueueScheduler_hostScheduler
    ][SchedulerLike_schedule](continuation, { delay });
  };

  const typedSerialDisposableMixin = SerialDisposable_mixin();
  const typedMutableEnumeratorMixin = MutableEnumerator_mixin<QueueTask>();

  type TProperties = {
    readonly [QueueScheduler_delayed]: QueueLike<QueueTask>;
    [QueueScheduler_dueTime]: number;
    readonly [QueueScheduler_hostScheduler]: SchedulerLike;
    [QueueScheduler_hostContinuation]: Optional<
      SideEffect1<ContinuationContextLike>
    >;
    [PauseableSchedulerLike_isPaused]: boolean;
    readonly [QueueScheduler_queue]: QueueLike<QueueTask>;
    [QueueScheduler_taskIDCounter]: number;
  };

  return createInstanceFactory(
    mix(
      include(
        PriorityScheduler_mixin,
        typedMutableEnumeratorMixin,
        typedSerialDisposableMixin,
      ),
      function QueueScheduler(
        instance: Pick<
          PauseableSchedulerLike &
            PrioritySchedulerLike &
            PrioritySchedulerImplementationLike,
          | typeof SchedulerLike_now
          | typeof PrioritySchedulerImplementationLike_shouldYield
          | typeof ContinuationSchedulerLike_schedule
          | typeof PauseableSchedulerLike_pause
          | typeof PauseableSchedulerLike_resume
        > &
          Mutable<TProperties>,
        host: SchedulerLike,
        createImmediateQueue: Factory<QueueLike<QueueTask>>,
      ): PauseableSchedulerLike & PrioritySchedulerLike {
        init(
          PriorityScheduler_mixin,
          instance,
          host[SchedulerLike_maxYieldInterval],
        );
        init(typedMutableEnumeratorMixin, instance);
        init(typedSerialDisposableMixin, instance, Disposable_disposed);

        instance[QueueScheduler_delayed] = Queue_createPriorityQueue(
          delayedComparator,
          MAX_SAFE_INTEGER,
          "overflow",
        );
        (instance[QueueScheduler_queue] = createImmediateQueue()),
          (instance[QueueScheduler_hostScheduler] = host);

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
          unsafeCast<TProperties & EnumeratorLike<QueueTask> & DisposableLike>(
            this,
          );

          const next = peek(this);

          return (
            !this[EnumeratorLike_hasCurrent] ||
            this[PauseableSchedulerLike_isPaused] ||
            (isSome(next) ? priorityShouldYield(this, next) : false) ||
            this[QueueScheduler_hostScheduler][SchedulerLike_shouldYield]
          );
        },
        [PauseableSchedulerLike_pause](
          this: TProperties &
            SerialDisposableLike &
            EnumeratorLike &
            PrioritySchedulerImplementationLike,
        ) {
          this[PauseableSchedulerLike_isPaused] = true;
          this[SerialDisposableLike_current] = Disposable_disposed;
        },
        [PauseableSchedulerLike_resume](
          this: TProperties &
            SerialDisposableLike &
            EnumeratorLike &
            PrioritySchedulerImplementationLike,
        ) {
          this[PauseableSchedulerLike_isPaused] = false;
          scheduleOnHost(this);
        },
        [EnumeratorLike_move](
          this: TProperties & MutableEnumeratorLike<QueueTask>,
        ): boolean {
          // First fast forward through disposed tasks.
          peek(this);

          const task = this[QueueScheduler_queue][QueueLike_dequeue]();

          if (isSome(task)) {
            this[EnumeratorLike_current] = task;
          }

          return this[EnumeratorLike_hasCurrent];
        },
        [ContinuationSchedulerLike_schedule](
          this: TProperties &
            SerialDisposableLike &
            EnumeratorLike<QueueTask> &
            PrioritySchedulerImplementationLike,
          continuation: ContinuationLike,
          delay: number,
        ) {
          const priority = continuation[ContinuationLike_priority];

          pipe(this, Disposable_addIgnoringChildErrors(continuation));

          if (continuation[DisposableLike_isDisposed]) {
            return;
          }

          continuation[ContinuationLike_continuationScheduler] = this;

          const now = this[SchedulerLike_now];
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
                  [QueueTask_priority]: clampPositiveInteger(
                    priority ?? MAX_SAFE_INTEGER,
                  ),
                };

          const {
            [QueueScheduler_delayed]: delayed,
            [QueueScheduler_queue]: queue,
          } = this;
          const targetQueue = dueTime > now ? delayed : queue;
          targetQueue[QueueableLike_enqueue](task);

          scheduleOnHost(this);
        },
      },
    ),
  );
})();

export default Scheduler_createQueueScheduler;
