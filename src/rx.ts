import { getDelay, hasDelay } from "./__internal__/optionalArgs";
import {
  addIgnoringChildErrors,
  addTo,
  dispose,
  isDisposed,
  onDisposed,
} from "./__internal__/util/DisposableLikeInternal";
import { disposableMixin } from "./__internal__/util/DisposableLikeMixins";
import {
  PropertyTypeOf,
  __extends,
  clazz,
  createInstanceFactory,
  init,
} from "./__internal__/util/Object";
import {
  Container,
  ContainerLike,
  ContainerOf,
  Defer,
  Empty,
  Generate,
  Never,
  StatefulContainerLike,
} from "./containers";
import {
  Factory,
  Function1,
  SideEffect1,
  Updater,
  getLength,
  ignore,
  max,
  newInstance,
  none,
  pipe,
  pipeLazy,
} from "./functions";
import { ObserverLike } from "./scheduling";
import { dispatch } from "./scheduling/DispatcherLike";
import { getDispatcher, getScheduler } from "./scheduling/ObserverLike";
import { __yield, schedule } from "./scheduling/SchedulerLike";
import { DisposableLike, SinkLike, SinkLike_notify } from "./util";

/** @ignore */
export const ReactiveContainerLike_sinkInto = Symbol(
  "ReactiveContainerLike_sinkInto",
);
export interface ReactiveContainerLike<TSink extends DisposableLike>
  extends StatefulContainerLike {
  [ReactiveContainerLike_sinkInto](sink: TSink): void;
}

export interface RunnableLike<T = unknown>
  extends ReactiveContainerLike<SinkLike<T>> {
  readonly TContainerOf?: RunnableLike<this["T"]>;
  readonly TStatefulContainerState?: SinkLike<this["T"]>;
}

// @ignore
export const ObservableLike_isEnumerable = Symbol(
  "ObservableLike_isEnumerable",
);

// @ignore
export const ObservableLike_isRunnable = Symbol("ObservableLike_isEnumerable");

/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
export interface ObservableLike<T = unknown>
  extends ReactiveContainerLike<ObserverLike<T>> {
  readonly TStatefulContainerState?: ObserverLike<this["T"]>;
  TContainerOf?: ObservableLike<this["T"]>;

  readonly [ObservableLike_isEnumerable]: boolean;
  readonly [ObservableLike_isRunnable]: boolean;
}

export interface RunnableObservableLike<T = unknown> extends ObservableLike<T> {
  TContainerOf?: RunnableObservableLike<this["T"]>;

  readonly [ObservableLike_isRunnable]: true;
}

export interface EnumerableObservableLike<T = unknown>
  extends RunnableObservableLike<T> {
  TContainerOf?: EnumerableObservableLike<this["T"]>;

  readonly [ObservableLike_isEnumerable]: true;
}

/** @ignore */
export const MulticastObservableLike_observerCount = Symbol(
  "MulticastObservableLike_observerCount",
);

/** @ignore */
export const MulticastObservableLike_replay = Symbol(
  "MulticastObservableLike_replay",
);

export interface MulticastObservableLike<T = unknown>
  extends ObservableLike<T>,
    DisposableLike {
  /**
   * The number of observers currently observing.
   */
  readonly [MulticastObservableLike_observerCount]: number;
  readonly [MulticastObservableLike_replay]: number;
}

/** @ignore */
export const SubjectLike_publish = Symbol("SubjectLike_publish");
export interface SubjectLike<T = unknown> extends MulticastObservableLike<T> {
  [SubjectLike_publish](next: T): void;
}

export type ToObservable<
  C extends ContainerLike,
  TOptions = never,
> = Container<C> & {
  toObservable: <T>(
    options?: TOptions,
  ) => Function1<ContainerOf<C, T>, ObservableLike<T>>;
};

export type ToRunnable<
  C extends ContainerLike,
  TOptions = never,
> = Container<C> & {
  toRunnable<T>(
    options?: TOptions,
  ): Function1<ContainerOf<C, T>, RunnableLike<T>>;
};

const createObservableImpl: <T>(
  f: SideEffect1<ObserverLike>,
  isEnumerable: boolean,
  isRunnable: boolean,
) => ObservableLike<T> = /*@__PURE__*/ createInstanceFactory(
  clazz(
    function CreateObservable(
      this: {
        f: SideEffect1<ObserverLike>;
        [ObservableLike_isEnumerable]: boolean;
        [ObservableLike_isRunnable]: boolean;
      } & ObservableLike,
      f: SideEffect1<ObserverLike>,
      isEnumerable: boolean,
      isRunnable: boolean,
    ) {
      this.f = f;
      this[ObservableLike_isEnumerable] = isEnumerable;
      this[ObservableLike_isRunnable] = isEnumerable || isRunnable;
      return this;
    },
    {
      f: none,
      [ObservableLike_isRunnable]: false,
      [ObservableLike_isEnumerable]: false,
    },
    {
      [ReactiveContainerLike_sinkInto](
        this: {
          f: SideEffect1<ObserverLike>;
        },
        observer: ObserverLike,
      ) {
        try {
          this.f(observer);
        } catch (cause) {
          pipe(observer, dispose({ cause }));
        }
      },
    },
  ),
);

export const createEnumerableObservable = <T>(
  f: SideEffect1<ObserverLike<T>>,
): EnumerableObservableLike<T> =>
  createObservableImpl(f, true, true) as EnumerableObservableLike<T>;

export const createObservable = <T>(
  f: SideEffect1<ObserverLike<T>>,
): ObservableLike<T> => createObservableImpl(f, false, false);

export const createRunnableObservable = <T>(
  f: SideEffect1<ObserverLike<T>>,
): RunnableObservableLike<T> =>
  createObservableImpl(f, false, true) as RunnableObservableLike<T>;

export const createRunnable: <T>(
  run: SideEffect1<SinkLike<T>>,
) => RunnableLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    clazz(
      function Runnable(
        this: {
          run: SideEffect1<SinkLike<T>>;
        } & RunnableLike<T>,
        run: SideEffect1<SinkLike<T>>,
      ) {
        this.run = run;
        return this;
      },
      {
        run: none,
      },
      {
        [ReactiveContainerLike_sinkInto](
          this: {
            run: SideEffect1<SinkLike<T>>;
          },
          sink: SinkLike<T>,
        ) {
          try {
            this.run(sink);
            pipe(sink, dispose());
          } catch (cause) {
            pipe(sink, dispose({ cause }));
          }
        },
      },
    ),
  ))();

export const createSubject: <T>(options?: {
  replay?: number;
}) => SubjectLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [MulticastObservableLike_replay]: number;
    observers: Set<ObserverLike<T>>;
    replayed: Array<T>;
  } & PropertyTypeOf<[typeof disposableMixin]>;

  const createSubjectInstance = createInstanceFactory(
    clazz(
      __extends(disposableMixin),
      function Subject(this: TProperties & SubjectLike<T>, replay: number) {
        init(disposableMixin, this);
        this[MulticastObservableLike_replay] = replay;
        this.observers = newInstance<Set<ObserverLike>>(Set);
        this.replayed = [];

        return this;
      },
      {
        [MulticastObservableLike_replay]: 0,
        observers: none,
        replayed: none,
      },
      {
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,

        get [MulticastObservableLike_observerCount]() {
          const self = this as unknown as TProperties;
          return self.observers.size;
        },

        [SubjectLike_publish](this: TProperties, next: T) {
          if (!isDisposed(this)) {
            const { replayed } = this;

            const replay = this[MulticastObservableLike_replay];

            if (replay > 0) {
              replayed.push(next);
              if (getLength(replayed) > replay) {
                replayed.shift();
              }
            }

            for (const observer of this.observers) {
              pipe(observer, getDispatcher, dispatch(next));
            }
          }
        },

        [ReactiveContainerLike_sinkInto](
          this: TProperties & SubjectLike,
          observer: ObserverLike<T>,
        ) {
          if (!isDisposed(this)) {
            const { observers } = this;
            observers.add(observer);

            pipe(
              observer,
              onDisposed(_ => {
                observers.delete(observer);
              }),
            );
          }

          const dispatcher = getDispatcher(observer);

          // The idea here is that an onSubscribe function may
          // call next from unscheduled sources such as event handlers.
          // So we marshall those events back to the scheduler.
          for (const next of this.replayed) {
            pipe(dispatcher, dispatch(next));
          }

          pipe(this, addIgnoringChildErrors(dispatcher));
        },
      },
    ),
  );

  return (options?: { replay?: number }): SubjectLike<T> => {
    const { replay: replayOption = 0 } = options ?? {};
    const replay = max(replayOption, 0);

    return createSubjectInstance(replay);
  };
})();

const deferObservableImpl = <T>(
  factory: Factory<ObservableLike<T>>,
  isEnumerable: boolean,
  isRunnable: boolean,
): ObservableLike<T> =>
  createObservableImpl(
    observer => {
      factory()[ReactiveContainerLike_sinkInto](observer);
    },
    isEnumerable,
    isRunnable,
  );

export const deferEnumerableObservable: Defer<EnumerableObservableLike>["defer"] =
  (f =>
    deferObservableImpl(
      f,
      true,
      true,
    )) as Defer<EnumerableObservableLike>["defer"];
export const deferEnumerableObservableT: Defer<EnumerableObservableLike> = {
  defer: deferEnumerableObservable,
};

export const deferObservable: Defer<ObservableLike>["defer"] = f =>
  deferObservableImpl(f, false, false);
export const deferObservableT: Defer<ObservableLike> = {
  defer: deferObservable,
};

export const deferRunnableObservable: Defer<
  RunnableObservableLike,
  { delay: number }
>["defer"] = (f =>
  deferObservableImpl(
    f,
    false,
    true,
  )) as Defer<RunnableObservableLike>["defer"];
export const deferRunnableObservableT: Defer<RunnableObservableLike> = {
  defer: deferRunnableObservable,
};

export const deferRunnable: Defer<RunnableLike>["defer"] = f =>
  createRunnable(sink => {
    f()[ReactiveContainerLike_sinkInto](sink);
  });
export const deferRunnableT: Defer<RunnableLike> = { defer: deferRunnable };

interface EmptyObservable {
  <T>(): EnumerableObservableLike<T>;
  <T>(options: { delay: number }): RunnableObservableLike<T>;
}
export const emptyObservable: EmptyObservable = (<T>(options?: {
  delay: number;
}) => {
  const delay = getDelay(options);
  return delay > 0
    ? createRunnableObservable<T>(sink => {
        pipe(
          sink,
          getScheduler,
          schedule(pipeLazy(sink, dispose()), { delay }),
        );
      })
    : createEnumerableObservable<T>(sink => {
        pipe(sink, dispose());
      });
}) as EmptyObservable;
export const emptyEnumerableObservableT: Empty<EnumerableObservableLike> = {
  empty: emptyObservable,
};
export const emptyObservableT: Empty<ObservableLike, { delay: number }> = {
  empty: emptyObservable,
};
export const emptyRunnableObservableT: Empty<
  RunnableObservableLike,
  { delay: number }
> = {
  empty: emptyObservable,
};

export const emptyRunnable: Empty<RunnableLike>["empty"] = <T>() =>
  createRunnable<T>(sink => {
    pipe(sink, dispose());
  });
export const emptyRunnableT: Empty<RunnableLike> = { empty: emptyRunnable };

interface GenerateObservable {
  <T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
  ): EnumerableObservableLike<T>;

  <T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options: {
      readonly delay: number;
      readonly delayStart?: boolean;
    },
  ): RunnableObservableLike<T>;
}

/**
 * Generates an `ObservableLike` sequence from a generator function
 * that is applied to an accumulator value with a specified `delay`
 * between emitted items.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 * @param delay The requested delay between emitted items by the observable.
 */
export const generateObservable: GenerateObservable = (<T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options?: { readonly delay?: number; readonly delayStart?: boolean },
): ObservableLike<T> => {
  const delay = getDelay(options);
  const { delayStart = false } = options ?? {};

  const onSink = (observer: ObserverLike<T>) => {
    let acc = initialValue();

    const continuation = () => {
      while (!isDisposed(observer)) {
        acc = generator(acc);
        observer[SinkLike_notify](acc);
        __yield(options);
      }
    };

    pipe(
      observer,
      getScheduler,
      schedule(continuation, delayStart && hasDelay(options) ? options : none),
      addTo(observer),
    );
  };

  return delay > 0
    ? createRunnableObservable(onSink)
    : createEnumerableObservable(onSink);
}) as GenerateObservable;
export const generateEnumerableObservableT: Generate<EnumerableObservableLike> =
  { generate: generateObservable };
export const generateObservableT: Generate<
  ObservableLike,
  { readonly delay: number; readonly delayStart: boolean }
> = { generate: generateObservable };
export const generateRunnableObservableT: Generate<
  RunnableObservableLike,
  { readonly delay: number; readonly delayStart: boolean }
> = { generate: generateObservable };

export const generateRunnable: Generate<RunnableLike>["generate"] = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
) =>
  createRunnable((sink: SinkLike<T>) => {
    let acc = initialValue();
    while (!isDisposed(sink)) {
      acc = generator(acc);
      sink[SinkLike_notify](acc);
    }
  });
export const generateRunnableT: Generate<RunnableLike> = {
  generate: generateRunnable,
};

export const neverObservable: Never<EnumerableObservableLike>["never"] = () =>
  createEnumerableObservable(ignore);

export const neverEnumerableObservableT: Never<EnumerableObservableLike> = {
  never: neverObservable,
};
export const neverObservableT: Never<ObservableLike> = {
  never: neverObservable,
};
export const neverRunnableObservableT: Never<RunnableObservableLike> = {
  never: neverObservable,
};

export const neverRunnable: Never<RunnableLike>["never"] = () =>
  createRunnable(ignore);
export const neverRunnableT: Never<RunnableLike> = {
  never: neverRunnable,
};
