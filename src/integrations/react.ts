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
  isFunction,
  isSome,
  none,
  pipe,
  raiseError,
} from "../functions.js";
import { ObservableLike, SubjectLike, SubjectLike_publish } from "../rx.js";
import * as Observable from "../rx/Observable.js";
import * as Subject from "../rx/Subject.js";
import { SchedulerLike } from "../scheduling.js";
import { DisposableLike_dispose } from "../util.js";
import * as Disposable from "../util/Disposable.js";
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

  const { scheduler: schedulerOption } = options;

  useEffect(() => {
    const scheduler = isFunction(schedulerOption)
      ? schedulerOption()
      : schedulerOption ?? createSchedulerWithNormalPriority();

    const subscription = pipe(
      observable,
      Observable.forEach<T>(v => updateState(_ => v)),
      Observable.subscribe(scheduler),
      Disposable.onError(updateError),
    );

    const disposable = scheduler === schedulerOption ? subscription : scheduler;

    return () => {
      disposable[DisposableLike_dispose]();
    };
  }, [observable, updateState, updateError, schedulerOption]);

  return isSome(error) ? raiseError<T>(error) : state;
};

const createReplaySubject = <TProps>() => Subject.create<TProps>({ replay: 1 });

export const createComponent = <TProps>(
  fn: (props: ObservableLike<TProps>) => ObservableLike<ReactElement>,
  options: { readonly scheduler?: SchedulerLike | Factory<SchedulerLike> } = {},
): ComponentType<TProps> => {
  const ObservableComponent = (props: TProps) => {
    const propsSubject = useMemo<SubjectLike<TProps>>(createReplaySubject, [
      createReplaySubject,
    ]);

    propsSubject[SubjectLike_publish](props);

    const elementObservable = useMemo(
      () => pipe(propsSubject, Observable.distinctUntilChanged<TProps>(), fn),
      [propsSubject],
    );
    return useObservable(elementObservable, options) ?? null;
  };

  return ObservableComponent;
};
