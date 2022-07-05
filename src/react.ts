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
import { getDelay } from "./__internal__.optionalArgs";
import {
  SchedulerImplementationLike,
  runContinuation,
} from "./__internal__.schedulerImplementation";
import {
  Disposable,
  Error,
  add,
  addTo,
  dispose,
  isDisposed,
  onDisposed,
  onError,
} from "./disposable";
import {
  Factory,
  compose,
  ignore,
  instanceFactory,
  newInstance,
  pipe,
  pipeLazy,
  returns,
} from "./functions";
import {
  ObservableLike,
  Subject,
  distinctUntilChanged,
  onNotify,
  publish,
  subscribe,
} from "./observable";
import { Option, isSome, none } from "./option";
import {
  PrioritySchedulerLike,
  SchedulerContinuationLike,
  SchedulerLike,
  isInContinuation,
  toSchedulerWithPriority,
} from "./scheduler";
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
  const [error, updateError] = useState<Option<Error>>(none);

  useEffect(() => {
    const { scheduler: schedulerOption } = options;

    const scheduler =
      isSome(schedulerOption) && schedulerOption instanceof Function
        ? schedulerOption()
        : schedulerOption ?? createReactNormalPriorityScheduler();

    const subscription = pipe(
      observable,
      onNotify(compose(returns, updateState)),
      subscribe(scheduler),
      onError(updateError),
    );

    return pipeLazy(
      // If a scheduler is allocated, then dispose the new scheduler
      // which will also dispose any subscriptions. Otherwise
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

const createReplaySubject = <TProps>() =>
  newInstance<Subject<TProps>, number>(Subject, 1);

export const createComponent = <TProps>(
  fn: (props: ObservableLike<TProps>) => ObservableLike<ReactElement>,
  options: { readonly scheduler?: SchedulerLike | Factory<SchedulerLike> } = {},
): ComponentType<TProps> => {
  const ObservableComponent = (props: TProps) => {
    const propsSubject = useMemo<Subject<TProps>>(createReplaySubject, [
      createReplaySubject,
    ]);

    pipe(propsSubject, publish(props));

    const elementObservable = useMemo(
      () => pipe(propsSubject, distinctUntilChanged(), fn),
      [propsSubject],
    );
    return useObservable(elementObservable, options) ?? null;
  };

  return ObservableComponent;
};

class ReactPriorityScheduler
  extends Disposable
  implements PrioritySchedulerLike, SchedulerImplementationLike
{
  inContinuation = false;

  get now(): number {
    return unstable_now();
  }

  get shouldYield(): boolean {
    return isInContinuation(this) && unstable_shouldYield();
  }

  requestYield() {
    unstable_requestPaint();
  }

  schedule(
    continuation: SchedulerContinuationLike,
    options: {
      priority: number;
      delay?: number;
    },
  ) {
    const delay = getDelay(options);

    const { priority } = options;

    pipe(this, add(continuation, true));

    if (isDisposed(continuation)) {
      return;
    }

    const callback = () => {
      pipe(callbackNodeDisposable, dispose());
      pipe(this, runContinuation(continuation));
    };

    const callbackNode = unstable_scheduleCallback(
      priority,
      callback,
      delay > 0 ? { delay } : none,
    );

    const callbackNodeDisposable = pipe(
      newInstance(Disposable),
      onDisposed(pipeLazy(callbackNode, unstable_cancelCallback)),
      addTo(continuation),
    );
  }
}

const createReactPriorityScheduler: Factory<PrioritySchedulerLike> =
  /*@__PURE__*/ instanceFactory(ReactPriorityScheduler);

const createReactSchedulerFactory =
  (priority: number): Factory<SchedulerLike> =>
  () =>
    pipe(createReactPriorityScheduler(), toSchedulerWithPriority(priority));

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
