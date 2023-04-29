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
  __QueueScheduler_delayed,
  __QueueScheduler_dueTime,
  __QueueScheduler_hostContinuation,
  __QueueScheduler_hostScheduler,
  __QueueScheduler_queue,
  __QueueScheduler_taskIDCounter,
} from "../../../__internal__/symbols.js";
import {
  ContinuationLike,
  QueueLike,
  QueueLike_dequeue,
  QueueLike_head,
  SchedulerTaskLike,
  SchedulerTaskLike_continuation,
  SchedulerTaskLike_dueTime,
  SchedulerTaskLike_id,
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../../../__internal__/util.js";
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
  Function1,
  Optional,
  SideEffect1,
  isNone,
  isSome,
  none,
  unsafeCast,
} from "../../../functions.js";
import {
  DisposableLike,
  DisposableLike_isDisposed,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  PauseableSchedulerLike,
  QueueableLike_enqueue,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SchedulerLike_yield,
} from "../../../util.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import SerialDisposable_mixin from "../../../util/Disposable/__internal__/SerialDisposable.mixin.js";
import Queue_createIndexedQueue from "../../../util/Queue/__internal__/Queue.createIndexedQueue.js";
import Queue_createPriorityQueue from "../../../util/Queue/__internal__/Queue.createPriorityQueue.js";
import {
  SchedulerImplementationLike,
  SchedulerImplementationLike_runContinuation,
  SchedulerImplementationLike_scheduleContinuation,
  SchedulerImplementationLike_shouldYield,
  SchedulerImplementation_mixin,
} from "./SchedulerImplementation.mixin.js";

const Scheduler_toPauseableScheduler: Function1<
  SchedulerLike,
  PauseableSchedulerLike & DisposableLike
> = /*@__PURE__*/ (() => {
  const delayedComparator = (a: SchedulerTaskLike, b: SchedulerTaskLike) => {
    let diff = 0;
    diff =
      diff !== 0
        ? diff
        : a[SchedulerTaskLike_dueTime] - b[SchedulerTaskLike_dueTime];
    diff =
      diff !== 0 ? diff : b[SchedulerTaskLike_id] - a[SchedulerTaskLike_id];
    return diff;
  };

  const peek = (instance: TProperties): Optional<SchedulerTaskLike> => {
    const {
      [__QueueScheduler_delayed]: delayed,
      [__QueueScheduler_queue]: queue,
    } = instance;
    const now = instance[__QueueScheduler_hostScheduler][SchedulerLike_now];

    while (true) {
      const task = delayed[QueueLike_head];

      if (isNone(task)) {
        break;
      }

      const taskIsDispose =
        task[SchedulerTaskLike_continuation][DisposableLike_isDisposed];
      if (task[SchedulerTaskLike_dueTime] > now && !taskIsDispose) {
        break;
      }

      delayed[QueueLike_dequeue]();

      if (!taskIsDispose) {
        queue[QueueableLike_enqueue](task);
      }
    }

    let task: Optional<SchedulerTaskLike> = none;
    while (true) {
      task = queue[QueueLike_head];

      if (isNone(task)) {
        break;
      }

      if (!task[SchedulerTaskLike_continuation][DisposableLike_isDisposed]) {
        break;
      }

      queue[QueueLike_dequeue]();
    }

    return task ?? delayed[QueueLike_head];
  };

  const scheduleOnHost = (
    instance: TProperties &
      SerialDisposableLike &
      EnumeratorLike &
      SchedulerImplementationLike,
  ) => {
    const task = peek(instance);

    const continuationActive =
      !instance[SerialDisposableLike_current][DisposableLike_isDisposed] &&
      isSome(task) &&
      instance[__QueueScheduler_dueTime] <= task[SchedulerTaskLike_dueTime];

    if (
      isNone(task) ||
      continuationActive ||
      instance[PauseableLike_isPaused]
    ) {
      return;
    }

    const dueTime = task[SchedulerTaskLike_dueTime];
    const delay = clampPositiveInteger(
      dueTime - instance[__QueueScheduler_hostScheduler][SchedulerLike_now],
    );
    instance[__QueueScheduler_dueTime] = dueTime;

    const continuation =
      instance[__QueueScheduler_hostContinuation] ??
      ((scheduler: SchedulerLike) => {
        for (
          let task = peek(instance);
          isSome(task) && !instance[DisposableLike_isDisposed];
          task = peek(instance)
        ) {
          const {
            [SchedulerTaskLike_continuation]: continuation,
            [SchedulerTaskLike_dueTime]: dueTime,
          } = task;
          const delay = clampPositiveInteger(
            dueTime -
              instance[__QueueScheduler_hostScheduler][SchedulerLike_now],
          );

          if (delay > 0) {
            instance[__QueueScheduler_dueTime] =
              instance[__QueueScheduler_hostScheduler][SchedulerLike_now] +
              delay;
          } else {
            instance[EnumeratorLike_move]();

            instance[SchedulerImplementationLike_runContinuation](continuation);
          }
          scheduler[SchedulerLike_yield](delay);
        }
      });
    instance[__QueueScheduler_hostContinuation] = continuation;

    instance[SerialDisposableLike_current] = instance[
      __QueueScheduler_hostScheduler
    ][SchedulerLike_schedule](continuation, { delay });
  };

  type TProperties = {
    readonly [__QueueScheduler_delayed]: QueueLike<SchedulerTaskLike>;
    [__QueueScheduler_dueTime]: number;
    readonly [__QueueScheduler_hostScheduler]: SchedulerLike;
    [__QueueScheduler_hostContinuation]: Optional<SideEffect1<SchedulerLike>>;
    [PauseableLike_isPaused]: boolean;
    readonly [__QueueScheduler_queue]: QueueLike<SchedulerTaskLike>;
    [__QueueScheduler_taskIDCounter]: number;
  };

  return createInstanceFactory(
    mix(
      include(
        SchedulerImplementation_mixin,
        MutableEnumerator_mixin<SchedulerTaskLike>(),
        SerialDisposable_mixin(),
      ),
      function QueueScheduler(
        instance: Pick<
          PauseableSchedulerLike & SchedulerImplementationLike,
          | typeof SchedulerLike_now
          | typeof SchedulerImplementationLike_shouldYield
          | typeof SchedulerImplementationLike_scheduleContinuation
          | typeof PauseableLike_pause
          | typeof PauseableLike_resume
        > &
          Mutable<TProperties>,
        host: SchedulerLike,
      ): PauseableSchedulerLike & DisposableLike {
        init(
          SchedulerImplementation_mixin,
          instance,
          host[SchedulerLike_maxYieldInterval],
        );
        init(MutableEnumerator_mixin<SchedulerTaskLike>(), instance);
        init(SerialDisposable_mixin(), instance, Disposable_disposed);

        instance[__QueueScheduler_delayed] = Queue_createPriorityQueue(
          delayedComparator,
          MAX_SAFE_INTEGER,
          "overflow",
        );
        instance[__QueueScheduler_queue] = Queue_createIndexedQueue(
          MAX_SAFE_INTEGER,
          "overflow",
        );
        instance[__QueueScheduler_hostScheduler] = host;

        return instance;
      },
      props<TProperties>({
        [__QueueScheduler_delayed]: none,
        [__QueueScheduler_dueTime]: 0,
        [__QueueScheduler_hostScheduler]: none,
        [__QueueScheduler_hostContinuation]: none,
        [PauseableLike_isPaused]: true,
        [__QueueScheduler_queue]: none,
        [__QueueScheduler_taskIDCounter]: 0,
      }),
      {
        get [SchedulerLike_now](): number {
          unsafeCast<TProperties>(this);
          return this[__QueueScheduler_hostScheduler][SchedulerLike_now];
        },
        get [SchedulerImplementationLike_shouldYield](): boolean {
          unsafeCast<
            TProperties & EnumeratorLike<SchedulerTaskLike> & DisposableLike
          >(this);

          const next = peek(this);

          return (
            !this[EnumeratorLike_hasCurrent] ||
            this[PauseableLike_isPaused] ||
            (isSome(next) &&
              this[EnumeratorLike_current] !== next &&
              next[SchedulerTaskLike_dueTime] <=
                this[__QueueScheduler_hostScheduler][SchedulerLike_now]) ||
            this[__QueueScheduler_hostScheduler][SchedulerLike_shouldYield]
          );
        },
        [PauseableLike_pause](
          this: TProperties &
            SerialDisposableLike &
            EnumeratorLike &
            SchedulerImplementationLike,
        ) {
          this[PauseableLike_isPaused] = true;
          this[SerialDisposableLike_current] = Disposable_disposed;
        },
        [PauseableLike_resume](
          this: TProperties &
            SerialDisposableLike &
            EnumeratorLike &
            SchedulerImplementationLike,
        ) {
          this[PauseableLike_isPaused] = false;
          scheduleOnHost(this);
        },
        [EnumeratorLike_move](
          this: TProperties & MutableEnumeratorLike<SchedulerTaskLike>,
        ): boolean {
          // First fast forward through disposed tasks.
          peek(this);

          const task = this[__QueueScheduler_queue][QueueLike_dequeue]();

          if (isSome(task)) {
            this[EnumeratorLike_current] = task;
          }

          return this[EnumeratorLike_hasCurrent];
        },
        [SchedulerImplementationLike_scheduleContinuation](
          this: TProperties &
            SerialDisposableLike &
            EnumeratorLike<SchedulerTaskLike> &
            SchedulerImplementationLike,
          continuation: ContinuationLike,
          delay: number,
        ) {
          const now = this[SchedulerLike_now];
          const dueTime = max(now + delay, now);

          const task =
            this[SchedulerLike_inContinuation] &&
            this[EnumeratorLike_hasCurrent] &&
            this[EnumeratorLike_current][SchedulerTaskLike_continuation] ===
              continuation &&
            delay <= 0
              ? this[EnumeratorLike_current]
              : {
                  [SchedulerTaskLike_id]: this[
                    __QueueScheduler_taskIDCounter
                  ]++,
                  [SchedulerTaskLike_continuation]: continuation,
                  [SchedulerTaskLike_dueTime]: dueTime,
                };

          const {
            [__QueueScheduler_delayed]: delayed,
            [__QueueScheduler_queue]: queue,
          } = this;
          const targetQueue = dueTime > now ? delayed : queue;
          targetQueue[QueueableLike_enqueue](task);

          scheduleOnHost(this);
        },
      },
    ),
  );
})();

export default Scheduler_toPauseableScheduler;
