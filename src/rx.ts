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
  Never,
  StatefulContainerLike,
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

import { sinkInto } from "./rx/ReactiveContainerLike";
import { ObserverLike } from "./scheduling";
import { dispatch } from "./scheduling/DispatcherLike";
import { getDispatcher, getScheduler } from "./scheduling/ObserverLike";
import { schedule } from "./scheduling/SchedulerLike";
import { DisposableLike, SinkLike } from "./util";
import {
  addIgnoringChildErrors,
  addTo,
  dispose,
  isDisposed,
  onDisposed,
} from "./util/DisposableLike";

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
export interface ObservableLike<T = unknown>
  extends ReactiveContainerLike<ObserverLike<T>> {
  readonly TContainerOf?: ObservableLike<this["T"]>;
  readonly TStatefulContainerState?: ObserverLike<this["T"]>;

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

type CreateReactiveContainer<
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<T>,
  T,
> = (onSink: SideEffect1<TSink>) => ContainerOf<C, T>;

const createEmpty = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<T>,
  T,
>(
  create: CreateReactiveContainer<C, TSink, T>,
) =>
  create((sink: TSink) => {
    pipe(sink, dispose());
  });

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

  return <T>(f: SideEffect1<ObserverLike<T>>): ObservableLike<T> =>
    newInstance(CreateObservable, f);
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

export const createSubject = /*@__PURE__*/ (() => {
  type TProperties = {
    [MulticastObservableLike_replay]: number;
    observers: Set<ObserverLike>;
    replayed: Array<unknown>;
  } & PropertyTypeOf<[typeof disposableMixin]>;

  const createSubjectInstance = pipe(
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

    return createSubjectInstance(replay);
  };
})();

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

export const deferRunnable: Defer<RunnableLike>["defer"] = f =>
  createRunnable(sink => {
    pipe(f(), sinkInto(sink));
  });
export const deferRunnableT: Defer<RunnableLike> = { defer: deferRunnable };

export const emptyRunnable: Empty<RunnableLike>["empty"] = <T>() =>
  createEmpty<RunnableLike, SinkLike<T>, T>(createRunnable);
export const emptyRunnableT: Empty<RunnableLike> = { empty: emptyRunnable };

export const neverObservable: Never<ObservableLike>["never"] = <T>() =>
  createNever<ObservableLike, ObserverLike<T>, T>(createObservable);
export const neverObservableT: Never<ObservableLike> = {
  never: neverObservable,
};
export const neverRunnable: Never<RunnableLike>["never"] = <T>() =>
  createNever<RunnableLike, SinkLike<T>, T>(createRunnable);
export const neverRunnableT: Never<RunnableLike> = {
  never: neverRunnable,
};
