import { dispose } from "./__internal__/util/__internal__DisposableLike";
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
  StatefulContainerLike,
  StatefulContainerLike_state,
} from "./containers";
import {
  Factory,
  Function1,
  Function2,
  SideEffect1,
  none,
  pipe,
} from "./functions";
import { ObserverLike } from "./scheduling";
import { __yield } from "./scheduling/SchedulerLike";
import { DisposableLike, SinkLike } from "./util";

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
