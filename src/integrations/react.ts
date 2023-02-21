import {
  ComponentType,
  ReactElement,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Factory,
  Optional,
  ignore,
  isFunction,
  isSome,
  none,
  pipe,
  pipeLazy,
  raiseError,
} from "../functions.js";
import { ObservableLike, SubjectLike } from "../rx.js";
import { distinctUntilChanged, forEach, subscribe } from "../rx/Observable.js";
import { create as createSubject, publish } from "../rx/Subject.js";
import { SchedulerLike } from "../scheduling.js";
import { dispose, onError } from "../util/Disposable.js";
import { createSchedulerWithNormalPriority } from "./scheduler.js";

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

    const scheduler = isFunction(schedulerOption)
      ? schedulerOption()
      : schedulerOption ?? createSchedulerWithNormalPriority();

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

  return isSome(error) ? raiseError<T>(error) : state;
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
