import { AsyncIteratorLike } from "@reactive-js/ix";
import { normalPriority } from "@reactive-js/react-scheduler";
import { subscribe, ErrorLike, ObservableLike } from "@reactive-js/rx";
import { observe, throttle, subscribeOn } from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { useCallback, useEffect, useState } from "react";

const subscribeObservable = <T>(
  observable: ObservableLike<T>,
  updateState: React.Dispatch<React.SetStateAction<T | undefined>>,
  updateError: React.Dispatch<React.SetStateAction<ErrorLike | undefined>>,
  scheduler: SchedulerLike,
) =>
  pipe(
    observable,
    throttle(8),
    subscribeOn(scheduler),
    observe({
      onNext: (data: T) => updateState(_ => data),
      onComplete: (error?: ErrorLike) => updateError(_ => error),
    }),
    subscribe(normalPriority),
  );

export const useObservable = <T>(
  observable: ObservableLike<T>,
  scheduler: SchedulerLike = normalPriority,
): T | undefined => {
  const [state, updateState] = useState<T | undefined>(undefined);
  const [error, updateError] = useState<ErrorLike | undefined>(undefined);

  useEffect(() => {
    const subscription = subscribeObservable(
      observable,
      updateState,
      updateError,
      scheduler,
    );
    return () => {
      subscription.dispose();
    };
  }, [observable, updateState, updateError, scheduler]);

  if (error !== undefined) {
    const { cause } = error;
    throw cause;
  }

  return state;
};

export const useAsyncIterator = <TReq, T>(
  iterator: AsyncIteratorLike<TReq, T>,
  scheduler?: SchedulerLike,
): [T | undefined, (req: TReq) => void] => {
  const dispatch = useCallback(req => iterator.dispatch(req), [iterator]);
  const value = useObservable(iterator, scheduler);
  return [value, dispatch];
};
