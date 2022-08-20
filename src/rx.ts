import { getDelay, hasDelay } from "./__internal__/__internal__optionParsing";
import {
  addTo,
  dispose,
  isDisposed,
} from "./__internal__/util/__internal__DisposableLike";
import {
  Mutable,
  createInstanceFactory,
  mixin,
  props,
} from "./__internal__/util/__internal__Objects";
import {
  Container,
  ContainerLike,
  ContainerLike_T,
  ContainerLike_type,
  ContainerOf,
  ContainerOperator,
  Defer,
  Empty,
  Generate,
  Never,
  StatefulContainerLike,
  StatefulContainerLike_state,
} from "./containers";
import {
  Factory,
  Function1,
  Function2,
  SideEffect1,
  Updater,
  ignore,
  none,
  pipe,
  pipeLazy,
} from "./functions";
import { ObserverLike } from "./scheduling";
import { getScheduler } from "./scheduling/ObserverLike";
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
  readonly [ContainerLike_type]?: RunnableLike<this[typeof ContainerLike_T]>;
  readonly [StatefulContainerLike_state]?: SinkLike<
    this[typeof ContainerLike_T]
  >;
}

/**  @ignore */
export const ObservableLike_isEnumerable = Symbol(
  "ObservableLike_isEnumerable",
);

/**  @ignore */
export const ObservableLike_isRunnable = Symbol("ObservableLike_isRunnable");

/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
export interface ObservableLike<T = unknown>
  extends ReactiveContainerLike<ObserverLike<T>> {
  readonly [StatefulContainerLike_state]?: ObserverLike<
    this[typeof ContainerLike_T]
  >;
  readonly [ContainerLike_type]?: ObservableLike<this[typeof ContainerLike_T]>;

  readonly [ObservableLike_isEnumerable]: boolean;
  readonly [ObservableLike_isRunnable]: boolean;
}

export interface RunnableObservableLike<T = unknown> extends ObservableLike<T> {
  readonly [ContainerLike_type]?: RunnableObservableLike<
    this[typeof ContainerLike_T]
  >;

  readonly [ObservableLike_isRunnable]: true;
}

export interface EnumerableObservableLike<T = unknown>
  extends RunnableObservableLike<T> {
  readonly [ContainerLike_type]?: EnumerableObservableLike<
    this[typeof ContainerLike_T]
  >;

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

export type AsyncReducer<C extends ObservableLike, T, TAcc> = Function2<
  TAcc,
  T,
  ContainerOf<C, TAcc>
>;

export type ScanAsync<
  C extends ContainerLike,
  CInner extends ObservableLike,
> = Container<C> & {
  scanAsync: <T, TAcc>(
    scanner: AsyncReducer<CInner, T, TAcc>,
    initialValue: Factory<TAcc>,
  ) => ContainerOperator<C, T, TAcc>;
};

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
) => ObservableLike<T> = /*@__PURE__*/ (() => {
  type TProperties = {
    readonly f: SideEffect1<ObserverLike>;
    readonly [ObservableLike_isEnumerable]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
  };

  return createInstanceFactory(
    mixin(
      function CreateObservable(
        instance: Pick<ObservableLike, typeof ReactiveContainerLike_sinkInto> &
          Mutable<TProperties>,
        f: SideEffect1<ObserverLike>,
        isEnumerable: boolean,
        isRunnable: boolean,
      ): ObservableLike {
        instance.f = f;
        instance[ObservableLike_isEnumerable] = isEnumerable;
        instance[ObservableLike_isRunnable] = isEnumerable || isRunnable;

        return instance;
      },
      props<TProperties>({
        f: none,
        [ObservableLike_isRunnable]: false,
        [ObservableLike_isEnumerable]: false,
      }),
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
})();

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
) => RunnableLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly run: SideEffect1<SinkLike<T>>;
  };
  return createInstanceFactory(
    mixin(
      function Runnable(
        instance: Pick<RunnableLike, typeof ReactiveContainerLike_sinkInto> &
          Mutable<TProperties>,
        run: SideEffect1<SinkLike<T>>,
      ): RunnableLike<T> {
        instance.run = run;
        return instance;
      },
      props<TProperties>({
        run: none,
      }),
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
  );
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
