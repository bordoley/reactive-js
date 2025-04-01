import { useEffect, useMemo, useState } from "react";
import {
  EventSourceLike,
  EventSourceLike_subscribe,
  StoreLike,
  StoreLike_value,
  StreamOf,
  StreamableLike,
  StreamableLike_stream,
} from "./computations.js";
import {
  Factory,
  Optional,
  bindMethod,
  isFunction,
  isNone,
  isSome,
  none,
  pipe,
  raiseError,
} from "./functions.js";
import * as ReactScheduler from "./react/Scheduler.js";
import * as DisposableContainer from "./utils/DisposableContainer.js";
import * as Observer from "./utils/__internal__/Observer.js";
import {
  BackpressureStrategy,
  DisposableLike,
  DisposableLike_dispose,
} from "./utils.js";

interface ReactModule {
  /**
   */
  useDisposable<TDisposable extends DisposableLike>(
    factory: () => Optional<TDisposable>,
    deps: readonly unknown[],
  ): Optional<TDisposable>;

  /**
   */
  useEventSource<T>(
    observable: Optional<EventSourceLike<T>>,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
    },
  ): Optional<T>;
  useEventSource<T>(
    factory: Factory<Optional<EventSourceLike<T>>>,
    deps: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
    },
  ): Optional<T>;

  /**
   */
  useStreamable<TStreamable extends StreamableLike>(
    streamable: TStreamable,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
    },
  ): Optional<StreamOf<TStreamable>>;
  useStreamable<TStreamable extends StreamableLike>(
    factory: Factory<TStreamable>,
    dep: readonly unknown[],
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
    },
  ): Optional<StreamOf<TStreamable>>;
}

type Signature = ReactModule;

export const useDisposable: Signature["useDisposable"] = <
  TDisposable extends DisposableLike,
>(
  factory: () => Optional<TDisposable>,
  deps: readonly unknown[],
) => {
  const [disposable, setDisposable] = useState<Optional<TDisposable>>(none);
  const [error, setError] = useState<Optional<Error>>(none);

  useEffect(() => {
    const disposable = factory();

    if (isNone(disposable)) {
      return;
    }

    pipe(disposable, DisposableContainer.onError(setError));

    setDisposable(disposable);
    return bindMethod(disposable, DisposableLike_dispose);
  }, [...deps, setDisposable]);

  return isSome(error) ? raiseError(error) : disposable;
};

export const useEventSource: Signature["useEventSource"] = <T>(
  sourceOrFactory:
    | Optional<EventSourceLike<T>>
    | Factory<Optional<EventSourceLike<T>>>,
  optionsOrDeps:
    | Optional<{
        readonly priority?: 1 | 2 | 3 | 4 | 5;
      }>
    | readonly unknown[],
  optionsOrNone?: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
  },
) => {
  const [state, updateState] = useState<Optional<T>>(none);
  const [error, updateError] = useState<Optional<Error>>(none);

  const source = isFunction(sourceOrFactory)
    ? useMemo(sourceOrFactory, optionsOrDeps as readonly unknown[])
    : sourceOrFactory;

  const { priority } =
    (isFunction(sourceOrFactory)
      ? optionsOrNone
      : (optionsOrDeps as Optional<{
          readonly priority?: 1 | 2 | 3 | 4 | 5;
        }>)) ?? {};

  useDisposable(() => {
    const scheduler = ReactScheduler.get(priority);
    const onNext = (v: T) => updateState(_ => v);
    const observer = pipe(
      Observer.create(onNext, scheduler),
      DisposableContainer.onError(updateError),
    );

    source?.[EventSourceLike_subscribe](observer);
    return observer;
  }, [source, updateState, updateError, priority]);

  // Special case for StoreLikes to return the current value always if defined.
  const storeCurrentValue = (source as unknown as Optional<StoreLike<T>>)?.[
    StoreLike_value
  ];

  return isSome(error) ? raiseError<T>(error) : (state ?? storeCurrentValue);
};

export const useStreamable: Signature["useStreamable"] = <
  TStreamable extends StreamableLike,
>(
  streamableOrFactory: TStreamable | Factory<TStreamable>,
  optionsOrDeps:
    | Optional<{
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
      }>
    | readonly unknown[],
  optionsOrNone?: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
  },
) => {
  const streamable = isFunction(streamableOrFactory)
    ? useMemo(streamableOrFactory, optionsOrDeps as readonly unknown[])
    : streamableOrFactory;

  const { backpressureStrategy, capacity, priority } =
    (isFunction(streamableOrFactory)
      ? optionsOrNone
      : (optionsOrDeps as Optional<{
          readonly priority?: 1 | 2 | 3 | 4 | 5;
          readonly backpressureStrategy?: BackpressureStrategy;
          readonly capacity?: number;
        }>)) ?? {};

  const stream = useDisposable(
    () =>
      streamable[StreamableLike_stream](ReactScheduler.get(priority), {
        backpressureStrategy,
        capacity,
      }),
    [streamable, priority, backpressureStrategy, capacity],
  );

  return stream;
};
