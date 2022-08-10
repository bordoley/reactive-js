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
import { getDelay } from "../__internal__/__internal__optionParsing";
import { disposableMixin } from "../__internal__/util/__internal__Disposables";
import {
  __extends,
  clazz,
  createInstanceFactory,
  init,
} from "../__internal__/util/__internal__Objects";
import {
  Factory,
  Option,
  ignore,
  isSome,
  none,
  pipe,
  pipeLazy,
  unsafeCast,
} from "../functions";
import { ObservableLike, SubjectLike, createSubject } from "../rx";
import { distinctUntilChanged, forEach, subscribe } from "../rx/ObservableLike";
import { publish } from "../rx/SubjectLike";
import {
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../scheduling";
import { toScheduler } from "../scheduling/PrioritySchedulerLike";
import { isInContinuation } from "../scheduling/SchedulerLike";
import {
  ContinuationLike,
  DisposableLike,
  Exception,
  createDisposable,
} from "../util";
import { run } from "../util/ContinuationLike";
import {
  addIgnoringChildErrors,
  addTo,
  dispose,
  isDisposed,
  onDisposed,
  onError,
} from "../util/DisposableLike";
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
): Option<T> => {
  const [state, updateState] = useState<Option<T>>(none);
  const [error, updateError] = useState<Option<Exception>>(none);

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

  if (isSome(error)) {
    const { cause } = error;
    throw cause;
  }

  return state;
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

const createReactPriorityScheduler = /*@__PURE__*/ createInstanceFactory(
  clazz(
    __extends(disposableMixin),
    function ReactPriorityScheduler(
      instance: unknown,
    ): asserts instance is PrioritySchedulerLike {
      init(disposableMixin, instance);
    },
    {
      [SchedulerLike_inContinuation]: false,
    },
    {
      get [SchedulerLike_now](): number {
        return unstable_now();
      },

      get [SchedulerLike_shouldYield](): boolean {
        unsafeCast<{
          [SchedulerLike_inContinuation]: boolean;
        }>(this);
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
