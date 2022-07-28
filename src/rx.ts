import {
  addIgnoringChildErrors,
  addTo,
  dispose,
  isDisposed,
  onDisposed,
} from "./__internal__/util/DisposableLikeInternal";
import { disposableMixin } from "./__internal__/util/DisposableLikeMixins";
import {
  Object_init,
  Object_properties,
  PropertyTypeOf,
  createObjectFactory,
  init,
  mixWith,
} from "./__internal__/util/Object";
import {
  Container,
  ContainerLike,
  ContainerOf,
  Defer,
  Empty,
  StatefulContainerLike,
  StatefulContainerStateOf,
  Using,
} from "./containers";
import {
  Factory,
  Function1,
  SideEffect1,
  forEach,
  getLength,
  ignore,
  max,
  newInstance,
  none,
  pipe,
} from "./functions";
import { ObserverLike } from "./scheduling";
import { dispatch } from "./scheduling/DispatcherLike";
import { getDispatcher, getScheduler } from "./scheduling/ObserverLike";
import { schedule } from "./scheduling/SchedulerLike";
import { DisposableLike, SinkLike } from "./util";

/** @ignore */
export const ReactiveContainerLike_sinkInto = Symbol(
  "ReactiveContainerLike_sinkInto",
);
export interface ReactiveContainerLike extends StatefulContainerLike {
  readonly TContainerOf?: ReactiveContainerLike;
  readonly TStatefulContainerState?: SinkLike;

  [ReactiveContainerLike_sinkInto](
    sink: StatefulContainerStateOf<ReactiveContainerLike, this["T"]>,
  ): void;
}

export interface RunnableLike<T = unknown> extends ReactiveContainerLike {
  readonly TContainerOf?: RunnableLike<this["T"]>;
  readonly TStatefulContainerState?: SinkLike<this["T"]>;

  [ReactiveContainerLike_sinkInto](sink: SinkLike<T>): void;
}

export const DefaultObservable = 0;
export const RunnableObservable = 1;
export const EnumerableObservable = 2;

/** @ignore */
export const ObservableLike_observableType = Symbol(
  "ObservableLike_observableType",
);
/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
export interface ObservableLike<T = unknown> extends ReactiveContainerLike {
  readonly TContainerOf?: ObservableLike<this["T"]>;
  readonly TStatefulContainerState?: ObserverLike<T>;

  readonly [ObservableLike_observableType]:
    | typeof EnumerableObservable
    | typeof RunnableObservable
    | typeof DefaultObservable;
}

export interface RunnableObservableLike<T = unknown> extends ObservableLike<T> {
  readonly [ObservableLike_observableType]:
    | typeof RunnableObservable
    | typeof EnumerableObservable;
}

export interface EnumerableObservableLike<T = unknown>
  extends RunnableObservableLike<T> {
  readonly [ObservableLike_observableType]: typeof EnumerableObservable;
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

export type Never<C extends ReactiveContainerLike> = Container<C> & {
  never<T>(): ContainerOf<C, T>;
};

export type ToObservable<
  C extends ContainerLike,
  TOptions = never,
> = Container<C> & {
  toObservable: <T>(
    options?: TOptions,
  ) => Function1<ContainerOf<C, T>, ObservableLike<T>>;
};

export type ToRunnableObservable<
  C extends ContainerLike,
  TOptions = never,
> = Container<C> & {
  toRunnableObservable: <T>(
    options?: TOptions,
  ) => Function1<ContainerOf<C, T>, RunnableObservableLike<T>>;
};

export type ToEnumerableObservable<
  C extends ContainerLike,
  TOptions = never,
> = Container<C> & {
  toEnumerableObservable: <T>(
    options?: TOptions,
  ) => Function1<ContainerOf<C, T>, EnumerableObservableLike<T>>;
};

export type ToRunnable<
  C extends ContainerLike,
  TOptions = never,
> = Container<C> & {
  toRunnable<T>(
    options?: TOptions,
  ): Function1<ContainerOf<C, T>, RunnableLike<T>>;
};

export const createObservable = /*@__PURE__*/ (() => {
  class CreateObservable<T> implements ObservableLike<T> {
    constructor(private readonly f: SideEffect1<ObserverLike<T>>) {}

    get [ObservableLike_observableType](): typeof DefaultObservable {
      return 0;
    }

    [ReactiveContainerLike_sinkInto](observer: ObserverLike<T>) {
      try {
        this.f(observer);
      } catch (cause) {
        pipe(observer, dispose({ cause }));
      }
    }
  }

  return <T>(f: SideEffect1<ObserverLike<T>>) =>
    newInstance(CreateObservable, f) as any;
})();

const createObservableT: CreateReactiveContainer<ObservableLike> = {
  create: createObservable,
};

export const createSubject = /*@__PURE__*/ (() => {
  type TProperties = {
    [MulticastObservableLike_replay]: number;
    observers: Set<ObserverLike>;
    replayed: Array<unknown>;
  } & PropertyTypeOf<[typeof disposableMixin]>;

  const createInstance = pipe(
    {
      [Object_properties]: {
        [MulticastObservableLike_replay]: 0,
        observers: none,
        replayed: none,
      },
      [Object_init](this: TProperties, replay: number) {
        init(disposableMixin, this);
        this[MulticastObservableLike_replay] = replay;
        this.observers = newInstance<Set<ObserverLike>>(Set);
        this.replayed = [];
      },

      [ObservableLike_observableType]: 0 as typeof DefaultObservable,

      get [MulticastObservableLike_observerCount]() {
        const self = this as unknown as TProperties;
        return self.observers.size;
      },

      [SubjectLike_publish](this: TProperties, next: unknown) {
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
        observer: ObserverLike<any>,
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
    mixWith(disposableMixin),
    createObjectFactory<SubjectLike<any>, TProperties, number>(),
  );

  return <T>(options?: { replay?: number }): SubjectLike<T> => {
    const { replay: replayOption = 0 } = options ?? {};
    const replay = max(replayOption, 0);

    return createInstance(replay);
  };
})();

type CreateReactiveContainer<C extends ReactiveContainerLike> = Container<C> & {
  create<T>(
    onSink: SideEffect1<StatefulContainerStateOf<C, T>>,
  ): ContainerOf<C, T>;
};

const create =
  <C extends ReactiveContainerLike, T>(m: CreateReactiveContainer<C>) =>
  (onSink: (sink: StatefulContainerStateOf<C, T>) => void): ContainerOf<C, T> =>
    m.create(onSink);

const createEmpty =
  <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) =>
  <T>(): ContainerOf<C, T> =>
    pipe((sink: SinkLike<T>) => {
      pipe(sink, dispose());
    }, create(m));

const createUsing =
  <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) =>
  <TResource extends DisposableLike, T>(
    resourceFactory: Factory<TResource | readonly TResource[]>,
    sourceFactory: (...resources: readonly TResource[]) => ContainerOf<C, T>,
  ): ContainerOf<C, T> =>
    pipe((sink: StatefulContainerStateOf<C, T>) => {
      pipe(
        resourceFactory(),
        resources => (Array.isArray(resources) ? resources : [resources]),
        forEach<TResource>(addTo(sink)),
        resources => sourceFactory(...resources),
      )[ReactiveContainerLike_sinkInto](sink);
    }, create(m));

const createNever = <C extends ReactiveContainerLike>(
  m: CreateReactiveContainer<C>,
) => {
  const neverInstance: ContainerOf<C, any> = pipe(ignore, create(m));
  return <T>(): ContainerOf<C, T> => neverInstance;
};

export const createObservableUsing: Using<ObservableLike>["using"] =
  /*@__PURE__*/ createUsing(createObservableT);

export const createObservableUsingT: Using<ObservableLike> = {
  using: createObservableUsing,
};

interface DeferObservable {
  <T>(
    factory: Factory<SideEffect1<ObserverLike<T>>>,
    options?: { readonly delay?: number },
  ): ObservableLike<T>;
  <T>(factory: Factory<ObservableLike<T>>): ObservableLike<T>;
}

export const deferObservable: DeferObservable = <T>(
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

export const neverObservable = /*@__PURE__*/ createNever(createObservableT);
export const neverObservableT: Never<ObservableLike> = {
  never: neverObservable,
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

const createRunnableT: CreateReactiveContainer<RunnableLike> = {
  create: createRunnable,
};

export const createRunnableUsing: Using<RunnableLike>["using"] =
  /*@__PURE__*/ createUsing(createRunnableT);

export const createRunnableUsingT: Using<RunnableLike> = {
  using: createRunnableUsing,
};

export const emptyRunnable: Empty<RunnableLike>["empty"] =
  /*@__PURE__*/ createEmpty(createRunnableT);
export const emptyRunnableT: Empty<RunnableLike> = { empty: emptyRunnable };

export const neverRunnable: Never<RunnableLike>["never"] =
  /*@__PURE__*/ createNever(createRunnableT);
export const neverRunnableT: Never<RunnableLike> = {
  never: neverRunnable,
};
