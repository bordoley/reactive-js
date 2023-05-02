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
  __PauseableScheduler_delayed,
  __PauseableScheduler_dueTime,
  __PauseableScheduler_eventPublisher,
  __PauseableScheduler_hostContinuation,
  __PauseableScheduler_hostScheduler,
  __PauseableScheduler_queue,
  __PauseableScheduler_taskIDCounter,
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
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  DisposableLike,
  DisposableLike_isDisposed,
  EventListenerLike,
  EventListenerLike_notify,
  EventPublisherLike,
  EventSourceLike_addEventListener,
  PauseableEventMap,
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
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import EventPublisher_create from "../../EventPublisher/__internal__/EventPublisher.create.js";
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
      [__PauseableScheduler_delayed]: delayed,
      [__PauseableScheduler_queue]: queue,
    } = instance;
    const now = instance[__PauseableScheduler_hostScheduler][SchedulerLike_now];

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
      instance[__PauseableScheduler_dueTime] <= task[SchedulerTaskLike_dueTime];

    if (
      isNone(task) ||
      continuationActive ||
      instance[PauseableLike_isPaused]
    ) {
      return;
    }

    const dueTime = task[SchedulerTaskLike_dueTime];
    const delay = clampPositiveInteger(
      dueTime - instance[__PauseableScheduler_hostScheduler][SchedulerLike_now],
    );
    instance[__PauseableScheduler_dueTime] = dueTime;

    const continuation =
      instance[__PauseableScheduler_hostContinuation] ??
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
              instance[__PauseableScheduler_hostScheduler][SchedulerLike_now],
          );

          if (delay > 0) {
            instance[__PauseableScheduler_dueTime] =
              instance[__PauseableScheduler_hostScheduler][SchedulerLike_now] +
              delay;
          } else {
            instance[EnumeratorLike_move]();

            instance[SchedulerImplementationLike_runContinuation](continuation);
          }
          scheduler[SchedulerLike_yield](delay);
        }
      });
    instance[__PauseableScheduler_hostContinuation] = continuation;

    instance[SerialDisposableLike_current] = instance[
      __PauseableScheduler_hostScheduler
    ][SchedulerLike_schedule](continuation, { delay });
  };

  type TProperties = {
    readonly [__PauseableScheduler_delayed]: QueueLike<SchedulerTaskLike>;
    [__PauseableScheduler_dueTime]: number;
    [__PauseableScheduler_eventPublisher]: Optional<
      EventPublisherLike<PauseableEventMap[keyof PauseableEventMap]>
    >;
    readonly [__PauseableScheduler_hostScheduler]: SchedulerLike;
    [__PauseableScheduler_hostContinuation]: Optional<
      SideEffect1<SchedulerLike>
    >;
    [PauseableLike_isPaused]: boolean;
    readonly [__PauseableScheduler_queue]: QueueLike<SchedulerTaskLike>;
    [__PauseableScheduler_taskIDCounter]: number;
  };

  return createInstanceFactory(
    mix(
      include(
        SchedulerImplementation_mixin,
        MutableEnumerator_mixin<SchedulerTaskLike>(),
        SerialDisposable_mixin(),
      ),
      function PauseableScheduler(
        instance: Pick<
          PauseableSchedulerLike & SchedulerImplementationLike,
          | typeof EventSourceLike_addEventListener
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

        instance[__PauseableScheduler_delayed] = Queue_createPriorityQueue(
          delayedComparator,
          MAX_SAFE_INTEGER,
          "overflow",
        );
        instance[__PauseableScheduler_queue] = Queue_createIndexedQueue(
          MAX_SAFE_INTEGER,
          "overflow",
        );
        instance[__PauseableScheduler_hostScheduler] = host;

        return instance;
      },
      props<TProperties>({
        [__PauseableScheduler_delayed]: none,
        [__PauseableScheduler_dueTime]: 0,
        [__PauseableScheduler_eventPublisher]: none,
        [__PauseableScheduler_hostScheduler]: none,
        [__PauseableScheduler_hostContinuation]: none,
        [PauseableLike_isPaused]: true,
        [__PauseableScheduler_queue]: none,
        [__PauseableScheduler_taskIDCounter]: 0,
      }),
      {
        get [SchedulerLike_now](): number {
          unsafeCast<TProperties>(this);
          return this[__PauseableScheduler_hostScheduler][SchedulerLike_now];
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
                this[__PauseableScheduler_hostScheduler][SchedulerLike_now]) ||
            this[__PauseableScheduler_hostScheduler][SchedulerLike_shouldYield]
          );
        },
        [EventSourceLike_addEventListener](
          this: TProperties & DisposableLike,
          listener: EventListenerLike<
            PauseableEventMap[keyof PauseableEventMap]
          >,
        ): void {
          const publisher =
            this[__PauseableScheduler_eventPublisher] ??
            (() => {
              const publisher = pipe(
                EventPublisher_create(),
                Disposable_addTo(this),
              );
              this[__PauseableScheduler_eventPublisher] = publisher;
              return publisher;
            })();

          publisher[EventSourceLike_addEventListener](listener);
        },
        [PauseableLike_pause](
          this: TProperties &
            SerialDisposableLike &
            EnumeratorLike &
            SchedulerImplementationLike,
        ) {
          this[PauseableLike_isPaused] = true;
          this[SerialDisposableLike_current] = Disposable_disposed;
          this[__PauseableScheduler_eventPublisher]?.[EventListenerLike_notify](
            { type: "paused" },
          );
        },
        [PauseableLike_resume](
          this: TProperties &
            SerialDisposableLike &
            EnumeratorLike &
            SchedulerImplementationLike,
        ) {
          this[PauseableLike_isPaused] = false;
          scheduleOnHost(this);
          this[__PauseableScheduler_eventPublisher]?.[EventListenerLike_notify](
            { type: "resumed" },
          );
        },
        [EnumeratorLike_move](
          this: TProperties & MutableEnumeratorLike<SchedulerTaskLike>,
        ): boolean {
          // First fast forward through disposed tasks.
          peek(this);

          const task = this[__PauseableScheduler_queue][QueueLike_dequeue]();

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
                    __PauseableScheduler_taskIDCounter
                  ]++,
                  [SchedulerTaskLike_continuation]: continuation,
                  [SchedulerTaskLike_dueTime]: dueTime,
                };

          const {
            [__PauseableScheduler_delayed]: delayed,
            [__PauseableScheduler_queue]: queue,
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
