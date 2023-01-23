import {
  ComponentType,
  ReactElement,
  useEffect,
  useMemo,
  useState,
} from "react";
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
import {
  Factory,
  Optional,
  ignore,
  isSome,
  none,
  pipe,
  pipeLazy,
  raise,
  unsafeCast,
} from "../functions";
import { ObservableLike, SubjectLike } from "../rx";
import { distinctUntilChanged, forEach, subscribe } from "../rx/ObservableLike";
import { create as createSubject, publish } from "../rx/SubjectLike";
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
import { run } from "../scheduling/ContinuationLike";
import { toScheduler } from "../scheduling/PrioritySchedulerLike";
import { isInContinuation } from "../scheduling/SchedulerLike";
import { getDelay } from "../scheduling/__internal__/SchedulerLike.options";
import { DisposableLike } from "../util";
import {
  addIgnoringChildErrors,
  addTo,
  create as createDisposable,
  dispose,
  isDisposed,
  onDisposed,
  onError,
} from "../util/DisposableLike";
import DisposableLike__mixin from "../util/__internal__/DisposableLike/DisposableLike.mixin";
/**
 * Returns the current value, if defined, of `observable`.
 *
 * @param observable The `ObservableLike` to subscribe to.
 * @param scheduler An optional scheduler used when subscribing to `observable`. The default
 * is React's normal priority scheduler.
 */
export const useObservable = <T>(
  observable: ObservableLike<T>,
  options: { readonly scheduler?: SchedulerLike | Factory<SchedulerLike> } = {},
): Optional<T> => {
  const [state, updateState] = useState<Optional<T>>(none);
  const [error, updateError] = useState<Optional<Error>>(none);

  useEffect(() => {
    const { scheduler: schedulerOption } = options;

    const scheduler =
      isSome(schedulerOption) && schedulerOption instanceof Function
        ? schedulerOption()
        : schedulerOption ?? createReactNormalPriorityScheduler();

    const subscription = pipe(
      observable,
      forEach<T>(v => updateState(_ => v)),
      subscribe(scheduler),
      onError(updateError),
    );

    return pipeLazy(
      // If a scheduler is allocated, then dispose the new scheduler
      // which will also dispose all subscriptions. Otherwise
      // only dispose the subscription.
      scheduler === schedulerOption ? subscription : scheduler,
      dispose(),
      ignore,
    );
  }, [observable, updateState, updateError, options.scheduler]);

  return isSome(error) ? raise<T>(error) : state;
};

const createReplaySubject = <TProps>() => createSubject<TProps>({ replay: 1 });

export const createComponent = <TProps>(
  fn: (props: ObservableLike<TProps>) => ObservableLike<ReactElement>,
  options: { readonly scheduler?: SchedulerLike | Factory<SchedulerLike> } = {},
): ComponentType<TProps> => {
  const ObservableComponent = (props: TProps) => {
    const propsSubject = useMemo<SubjectLike<TProps>>(createReplaySubject, [
      createReplaySubject,
    ]);

    pipe(propsSubject, publish(props));

    const elementObservable = useMemo(
      () => pipe(propsSubject, distinctUntilChanged<TProps>(), fn),
      [propsSubject],
    );
    return useObservable(elementObservable, options) ?? null;
  };

  return ObservableComponent;
};

const createReactPriorityScheduler = /*@__PURE__*/ (() => {
  type TProperties = {
    [SchedulerLike_inContinuation]: boolean;
  };

  return createInstanceFactory(
    mix(
      include(DisposableLike__mixin),
      function ReactPriorityScheduler(
        instance: Omit<
          PrioritySchedulerLike,
          typeof SchedulerLike_inContinuation | keyof DisposableLike
        > &
          TProperties,
      ): PrioritySchedulerLike {
        init(DisposableLike__mixin, instance);
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

const createReactSchedulerFactory =
  (priority: number): Factory<SchedulerLike> =>
  () =>
    pipe(createReactPriorityScheduler(), toScheduler(priority));

export const createReactIdlePriorityScheduler =
  /*@__PURE__*/ createReactSchedulerFactory(unstable_IdlePriority);

export const createReactImmediatePriorityScheduler =
  /*@__PURE__*/ createReactSchedulerFactory(unstable_ImmediatePriority);

export const createReactNormalPriorityScheduler =
  /*@__PURE__*/ createReactSchedulerFactory(unstable_NormalPriority);

export const createReactLowPriorityScheduler =
  /*@__PURE__*/ createReactSchedulerFactory(unstable_LowPriority);

export const createReactUserBlockingPriorityScheduler =
  /*@__PURE__*/ createReactSchedulerFactory(unstable_UserBlockingPriority);
