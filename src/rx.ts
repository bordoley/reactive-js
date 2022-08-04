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
  createObjectFactory,
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
  Using,
} from "./containers";
import {
  Factory,
  Function1,
  SideEffect1,
  Updater,
  forEach,
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
export type ObservableType = 0 | 1 | 2;
export const observableType: ObservableType = 0;
export const runnableObservableType: ObservableType = 1;
export const enumerableObservableType: ObservableType = 2;

/** @ignore */
export const ObservableLike_observableType = Symbol(
  "ObservableLike_observableType",
);
/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
export interface ObservableLike<T = unknown>
  extends ReactiveContainerLike<ObserverLike<T>> {
  readonly TStatefulContainerState?: ObserverLike<this["T"]>;
  TContainerOf?: ObservableLike<this["T"]>;

  // The observable type used by the runtime to switch implementations
  readonly [ObservableLike_observableType]: ObservableType;
}

export interface RunnableObservableLike<T = unknown> extends ObservableLike<T> {
  readonly TContainerOf?: RunnableObservableLike<this["T"]>;
  readonly [ObservableLike_observableType]: typeof runnableObservableType;
}

export interface EnumerableObservableLike<T = unknown>
  extends ObservableLike<T> {
  readonly TContainerOf?: EnumerableObservableLike<this["T"]>;
  readonly [ObservableLike_observableType]: typeof enumerableObservableType;
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

type CreateReactiveContainer<
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<T>,
  T,
> = (onSink: SideEffect1<TSink>) => ContainerOf<C, T>;

const createNever = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<T>,
  T,
>(
  create: CreateReactiveContainer<C, TSink, T>,
) => create(ignore);

const createUsing =
  <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(
    create: CreateReactiveContainer<C, TSink, T>,
  ) =>
  <TResource extends DisposableLike>(
    resourceFactory: Factory<TResource | readonly TResource[]>,
    sourceFactory: (...resources: readonly TResource[]) => C,
  ): ContainerOf<C, T> =>
    create((sink: TSink) => {
      pipe(
        resourceFactory(),
        resources => (Array.isArray(resources) ? resources : [resources]),
        forEach<TResource>(addTo(sink)),
        resources => sourceFactory(...resources),
        //sinkInto<C, TSink, T>(sink),
      )[ReactiveContainerLike_sinkInto](sink);
    });

class CreateObservable<T, TObservableType extends ObservableType>
  implements ObservableLike<T>
{
  public readonly [ObservableLike_observableType]: TObservableType;
  constructor(
    private readonly f: SideEffect1<ObserverLike<T>>,
    type: TObservableType,
  ) {
    this[ObservableLike_observableType] = type;
  }

  [ReactiveContainerLike_sinkInto](observer: ObserverLike<T>) {
    try {
      this.f(observer);
    } catch (cause) {
      pipe(observer, dispose({ cause }));
    }
  }
}

export const createEnumerableObservable = /*@__PURE__*/ (() => {
  return <T>(f: SideEffect1<ObserverLike<T>>): EnumerableObservableLike<T> =>
    newInstance(CreateObservable, f, enumerableObservableType);
})();

export const createObservable = /*@__PURE__*/ (() => {
  return <T>(f: SideEffect1<ObserverLike<T>>): ObservableLike<T> =>
    newInstance(CreateObservable, f, observableType);
})();

export const createRunnableObservable = /*@__PURE__*/ (() => {
  return <T>(f: SideEffect1<ObserverLike<T>>): RunnableObservableLike<T> =>
    newInstance(CreateObservable, f, runnableObservableType);
})();

export const createObservableUsing: Using<ObservableLike>["using"] =
  /*@__PURE__*/ createUsing(createObservable);
export const createObservableUsingT: Using<ObservableLike> = {
  using: createObservableUsing,
};

export const createRunnable = /*@__PURE__*/ (() => {
  class Runnable<T> implements RunnableLike<T> {
    constructor(private readonly _run: SideEffect1<SinkLike<T>>) {}

    [ReactiveContainerLike_sinkInto](sink: SinkLike<T>) {
      try {
        this._run(sink);
        pipe(sink, dispose());
      } catch (cause) {
        pipe(sink, dispose({ cause }));
      }
    }
  }

  return <T>(run: SideEffect1<SinkLike<T>>): RunnableLike<T> =>
    newInstance(Runnable, run);
})();

export const createRunnableUsing: Using<RunnableLike>["using"] =
  /*@__PURE__*/ createUsing(createRunnable);
export const createRunnableUsingT: Using<RunnableLike> = {
  using: createRunnableUsing,
};

export const createSubject: <T>(options?: {
  replay?: number;
}) => SubjectLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [MulticastObservableLike_replay]: number;
    observers: Set<ObserverLike<T>>;
    replayed: Array<T>;
  } & PropertyTypeOf<[typeof disposableMixin]>;

  const createSubjectInstance = pipe(
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
        [ObservableLike_observableType]: observableType,

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
    createObjectFactory<SubjectLike<T>, number>(),
  );

  return (options?: { replay?: number }): SubjectLike<T> => {
    const { replay: replayOption = 0 } = options ?? {};
    const replay = max(replayOption, 0);

    return createSubjectInstance(replay);
  };
})();

interface DeferObservable<C extends ObservableLike> {
  <T>(
    factory: Factory<SideEffect1<ObserverLike<T>>>,
    options?: { readonly delay?: number },
  ): ContainerOf<C, T>;
  <T>(factory: Factory<ContainerOf<C, T>>): ContainerOf<C, T>;
}
export const deferObservable: DeferObservable<ObservableLike> = <T>(
  factory: Factory<ObservableLike<T> | SideEffect1<ObserverLike<T>>>,
  options?: { readonly delay?: number },
): ObservableLike<T> =>
  createObservable(observer => {
    const sideEffect = factory();
    if (typeof sideEffect === "function") {
      const callback = () => sideEffect(observer);
      pipe(
        observer,
        getScheduler,
        schedule(callback, options),
        addTo(observer),
      );
    } else {
      sideEffect[ReactiveContainerLike_sinkInto](observer);
    }
  });
export const deferObservableT: Defer<ObservableLike> = {
  defer: deferObservable,
};

export const deferEnumerableObservable: DeferObservable<
  EnumerableObservableLike
> = <T>(
  factory: Factory<ObservableLike<T> | SideEffect1<ObserverLike<T>>>,
  options?: { readonly delay?: number },
): EnumerableObservableLike<T> =>
  createEnumerableObservable(observer => {
    const sideEffect = factory();
    if (typeof sideEffect === "function") {
      const callback = () => sideEffect(observer);
      pipe(
        observer,
        getScheduler,
        schedule(callback, options),
        addTo(observer),
      );
    } else {
      sideEffect[ReactiveContainerLike_sinkInto](observer);
    }
  });
export const deferEnumerableObservableT: Defer<EnumerableObservableLike> = {
  defer: deferEnumerableObservable,
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
}): ObservableLike<T> => {
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

export const emptyRunnable: Empty<RunnableLike>["empty"] = <T>() =>
  createRunnable<T>(sink => {
    pipe(sink, dispose());
  });
export const emptyRunnableT: Empty<RunnableLike> = { empty: emptyRunnable };

/**
 * Generates an `ObservableLike` sequence from a generator function
 * that is applied to an accumulator value with a specified `delay`
 * between emitted items.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 * @param delay The requested delay between emitted items by the observable.
 */
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

export const neverEnumerableObservable: Never<EnumerableObservableLike>["never"] =
  <T>() =>
    createNever<EnumerableObservableLike, ObserverLike<T>, T>(
      createEnumerableObservable,
    );
export const neverEnumerableObservableT: Never<EnumerableObservableLike> = {
  never: neverEnumerableObservable,
};
export const neverRunnable: Never<RunnableLike>["never"] = <T>() =>
  createNever<RunnableLike, SinkLike<T>, T>(createRunnable);
export const neverRunnableT: Never<RunnableLike> = {
  never: neverRunnable,
};
