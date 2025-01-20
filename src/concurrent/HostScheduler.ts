import { MAX_VALUE, globalObject } from "../__internal__/constants.js";
import { clampPositiveInteger } from "../__internal__/math.js";
import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
  unsafeCast,
} from "../__internal__/mixins.js";
import {
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
} from "../concurrent.js";
import {
  Optional,
  isNone,
  isSome,
  newInstance,
  none,
  pipe,
  pipeLazy,
} from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import QueueMixin from "../utils/__mixins__/QueueMixin.js";
import SerialDisposableMixin from "../utils/__mixins__/SerialDisposableMixin.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueLike,
  QueueLike_dequeue,
  QueueLike_head,
  QueueableLike_enqueue,
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../utils.js";
import CurrentTimeSchedulerMixin from "./__mixins__/CurrentTimeSchedulerMixin.js";
import SchedulerMixin, {
  SchedulerContinuation,
  SchedulerContinuationLike,
  SchedulerContinuationLike_dueTime,
  SchedulerContinuationLike_run,
  SchedulerMixinBaseLike,
  SchedulerMixinBaseLike_schedule,
  SchedulerMixinBaseLike_shouldYield,
} from "./__mixins__/SchedulerMixin.js";

interface Signature {
  create(): SchedulerLike & DisposableLike;

  get(): SchedulerLike;

  setMaxYieldInterval(maxYieldInterval: number): void;
}

export const create: Signature["create"] = /*@PURE__*/ (() => {
  const HostScheduler_hostSchedulerContinuationDueTime = Symbol(
    "HostScheduler_hostSchedulerContinuationDueTime",
  );

  const HostScheduler_activeContinuation = Symbol(
    "HostScheduler_activeContinuation",
  );

  const HostScheduler_messageChannel = Symbol(
    "MessageChannelScheduler_messageChannel",
  );

  type TProperties = {
    [SchedulerLike_maxYieldInterval]: number;
    [HostScheduler_hostSchedulerContinuationDueTime]: number;
    [HostScheduler_activeContinuation]: Optional<SchedulerContinuationLike>;
    [HostScheduler_messageChannel]: Optional<MessageChannel>;
  };

  const peek = (
    instance: TProperties &
      SchedulerMixinBaseLike &
      QueueLike<SchedulerContinuationLike>,
  ): Optional<SchedulerContinuationLike> => {
    let continuation: Optional<SchedulerContinuationLike> = none;
    while (true) {
      continuation = instance[QueueLike_head];

      if (isNone(continuation) || !continuation[DisposableLike_isDisposed]) {
        break;
      }

      instance[QueueLike_dequeue]();
    }

    return continuation;
  };

  const hostSchedulerContinuation = (
    instance: TProperties &
      SerialDisposableLike &
      SchedulerMixinBaseLike &
      SchedulerLike &
      QueueLike<SchedulerContinuationLike>,
    immmediateOrTimerDisposable: DisposableLike,
  ) => {
    immmediateOrTimerDisposable[DisposableLike_dispose]();

    const startTime = instance[SchedulerLike_now];

    while (!instance[DisposableLike_isDisposed]) {
      const nextContinuationToRun = peek(instance);

      if (isNone(nextContinuationToRun)) {
        break;
      }

      const dueTime = nextContinuationToRun[SchedulerContinuationLike_dueTime];
      const now = instance[SchedulerLike_now];
      const delay = dueTime - now;

      if (delay > 0) {
        scheduleOnHost(instance);
        break;
      }

      const continuation = instance[QueueLike_dequeue]();

      instance[HostScheduler_activeContinuation] = continuation;
      continuation?.[SchedulerContinuationLike_run]();
      instance[HostScheduler_activeContinuation] = none;

      const elapsed = instance[SchedulerLike_now] - startTime;
      const shouldYield = elapsed > instance[SchedulerLike_maxYieldInterval];

      if (shouldYield) {
        scheduleOnHost(instance);
        break;
      }
    }
  };

  const scheduleOnHost = (
    instance: TProperties &
      SerialDisposableLike &
      SchedulerMixinBaseLike &
      SchedulerLike &
      QueueLike<SchedulerContinuationLike>,
  ) => {
    const now = instance[SchedulerLike_now];
    const hostSchedulerContinuationIsScheduled =
      !instance[SerialDisposableLike_current][DisposableLike_isDisposed];
    const hostSchedulerContinuationDueTime =
      instance[HostScheduler_hostSchedulerContinuationDueTime];
    const nextContinuation = peek(instance);
    const nextContinuationDueTime =
      nextContinuation?.[SchedulerContinuationLike_dueTime] ?? MAX_VALUE;
    const inContinuation = instance[SchedulerLike_inContinuation];
    const hostContinuationAlreadyScheduled =
      hostSchedulerContinuationIsScheduled &&
      hostSchedulerContinuationDueTime <= nextContinuationDueTime;

    if (
      isNone(nextContinuation) ||
      inContinuation ||
      hostContinuationAlreadyScheduled
    ) {
      return;
    }

    const dueTime = nextContinuation[SchedulerContinuationLike_dueTime];
    const delay = clampPositiveInteger(dueTime - now);

    instance[HostScheduler_hostSchedulerContinuationDueTime] = dueTime;

    const { setImmediate, setTimeout, clearImmediate, clearTimeout } =
      globalObject;

    const hostMessageChannel = instance[HostScheduler_messageChannel];

    if (delay <= 4 && isSome(hostMessageChannel)) {
      hostMessageChannel.port2.postMessage(null);
    } else {
      const disposable = Disposable.create();

      const cleanup =
        delay > 4 || isNone(setImmediate)
          ? pipeLazy(
              setTimeout(
                hostSchedulerContinuation,
                delay,
                instance,
                disposable,
              ),
              clearTimeout,
            )
          : pipeLazy(
              setImmediate(hostSchedulerContinuation, instance, disposable),
              clearImmediate,
            );

      pipe(
        disposable,
        Disposable.addTo(instance),
        DisposableContainer.onDisposed(cleanup),
      );
    }
  };

  const createHostSchedulerInstance = mixInstanceFactory(
    include(
      CurrentTimeSchedulerMixin,
      SchedulerMixin,
      SerialDisposableMixin(),
      QueueMixin(),
    ),
    function HostScheduler(
      instance: Omit<SchedulerMixinBaseLike, typeof SchedulerLike_now> &
        Mutable<TProperties>,
      maxYieldInterval: number,
    ): SchedulerLike & DisposableLike {
      instance[SchedulerLike_maxYieldInterval] = maxYieldInterval;

      init(CurrentTimeSchedulerMixin, instance);
      init(SerialDisposableMixin(), instance, Disposable.disposed);
      init(QueueMixin<SchedulerContinuationLike>(), instance, {
        comparator: SchedulerContinuation.compare,
      });

      const MessageChannel = globalObject.MessageChannel;
      const setImmediate = globalObject.setImmediate;

      if (isSome(MessageChannel) && isNone(setImmediate)) {
        const channel = newInstance(MessageChannel);
        instance[HostScheduler_messageChannel] = channel;
        channel.port1.onmessage = () =>
          hostSchedulerContinuation(instance, Disposable.disposed);

        pipe(
          instance,
          DisposableContainer.onDisposed(_ => {
            channel.port1.close();
            channel.port2.close();
          }),
        );
      }

      return instance;
    },
    props<TProperties>({
      [SchedulerLike_maxYieldInterval]: 300,
      [HostScheduler_hostSchedulerContinuationDueTime]: 0,
      [HostScheduler_activeContinuation]: none,
      [HostScheduler_messageChannel]: none,
    }),
    {
      get [SchedulerMixinBaseLike_shouldYield](): boolean {
        unsafeCast<
          TProperties &
            DisposableLike &
            SchedulerLike &
            QueueLike<SchedulerContinuationLike>
        >(this);

        const now = this[SchedulerLike_now];
        const nextContinuation = peek(this);

        const yieldToNextContinuation =
          isSome(nextContinuation) &&
          this[HostScheduler_activeContinuation] !== nextContinuation &&
          nextContinuation[SchedulerContinuationLike_dueTime] <= now;

        return yieldToNextContinuation;
      },
      [SchedulerMixinBaseLike_schedule](
        this: TProperties &
          SerialDisposableLike &
          SchedulerMixinBaseLike &
          SchedulerLike &
          QueueLike<SchedulerContinuationLike>,
        continuation: SchedulerContinuationLike,
      ) {
        this[QueueableLike_enqueue](continuation);

        scheduleOnHost(this);
      },
    },
  );

  return (
    options: {
      readonly maxYieldInterval?: number;
    } = {},
  ) => {
    const { maxYieldInterval = 300 } = options;
    return createHostSchedulerInstance(clampPositiveInteger(maxYieldInterval));
  };
})();

let globalHostScheduler: Optional<SchedulerLike & DisposableLike> = none;

export const get: Signature["get"] = () => {
  if (isNone(globalHostScheduler)) {
    const scheduler = create();
    globalHostScheduler = scheduler;
  }

  return globalHostScheduler;
};

export const setMaxYieldInterval: Signature["setMaxYieldInterval"] = (
  maxYieldInterval: number,
) => {
  const scheduler = get();
  (scheduler as Mutable<SchedulerLike>)[SchedulerLike_maxYieldInterval] =
    clampPositiveInteger(maxYieldInterval);
};
