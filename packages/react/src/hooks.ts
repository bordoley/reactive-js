import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import {
  StreamableLike,
  mapReq,
  map,
} from "@reactive-js/core/dist/js/streamable";
import { Exception } from "@reactive-js/core/dist/js/disposable";
import {
  ObservableLike,
  onNotify,
  StreamLike,
  subscribe,
  subscribeOn,
  throttle,
  never,
} from "@reactive-js/core/dist/js/observable";
import { none, Option, isSome } from "@reactive-js/core/dist/js/option";
import { pipe, compose, returns } from "@reactive-js/core/dist/js/functions";
import { normalPriority } from "./scheduler";
import { SchedulerLike } from "@reactive-js/core/dist/js/scheduler";
import {
  StateStoreLike,
  StateUpdater,
} from "@reactive-js/core/dist/js/stateStore";

const subscribeObservable = <T>(
  observable: ObservableLike<T>,
  updateState: React.Dispatch<React.SetStateAction<Option<T>>>,
  updateError: React.Dispatch<React.SetStateAction<Option<Exception>>>,
  scheduler: SchedulerLike,
) =>
  pipe(
    observable,
    throttle(8),
    subscribeOn(scheduler),
    onNotify(compose(returns, updateState)),
    subscribe(normalPriority),
  ).add(compose(returns, updateError));

/**
 * Returns the current value, if defined, of `observable`.
 *
 * @param observable The `ObservableLike` to subscribe to.
 * @param scheduler An optional scheduler used when subscribing to `observable`. The default
 * is React's normal priority scheduler.
 */
export const useObservable = <T>(
  observable: ObservableLike<T>,
  scheduler: SchedulerLike = normalPriority,
): Option<T> => {
  const [state, updateState] = useState<Option<T>>(none);
  const [error, updateError] = useState<Option<Exception>>(none);

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

  if (isSome(error)) {
    const { cause } = error;
    throw cause;
  }

  return state;
};

export const useStreamable = <TReq, T>(
  streamable: StreamableLike<TReq, T>,
  config: {
    scheduler?: SchedulerLike;
    replay?: number;
    stateScheduler?: SchedulerLike;
  } = {},
): [Option<T>, (req: TReq) => void] => {
  const scheduler = config.scheduler ?? normalPriority;
  const stateScheduler = config.stateScheduler ?? scheduler;
  const replay = config.replay ?? 0;

  const [stream, updateStream] = useState<Option<StreamLike<TReq, T>>>(none);
  const streamRef = useRef<Option<StreamLike<TReq, T>>>(none);

  useEffect(() => {
    const stream = streamable.stream(scheduler, replay);
    streamRef.current = stream;

    pipe(stream, returns, updateStream);

    return () => {
      streamRef.current = none;
      stream.dispose();
    };
  }, [streamable, scheduler, replay, updateStream]);

  const dispatch = useCallback(
    req => {
      const stream = streamRef.current;
      if (isSome(stream)) {
        stream.dispatch(req);
      }
    },
    [streamRef],
  );

  const value = useObservable(stream ?? never<T>(), stateScheduler);
  return [value, dispatch];
};

const requestMapper = <TSerialized, TState>(
  parse: (serialized: TSerialized) => TState,
  serialize: (state: TState) => TSerialized,
) => (
  stateUpdater: StateUpdater<TState>,
): StateUpdater<TSerialized> => oldStateString => {
  const oldState = parse(oldStateString);
  const newState = stateUpdater(oldState);

  return oldState === newState ? oldStateString : serialize(newState);
};

export const useSerializedState = <TSerialized, TState>(
  store: StateStoreLike<TSerialized>,
  parse: (serialized: TSerialized) => TState,
  serialize: (state: TState) => TSerialized,
): [Option<TState>, (updater: StateUpdater<TState>) => void] => {
  const mappedStore = useMemo(
    () => pipe(store, mapReq(requestMapper(parse, serialize)), map(parse)),
    [store, parse, serialize],
  );

  return useStreamable(mappedStore, { replay: 1 });
};
