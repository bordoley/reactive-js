import {
  Mixin1,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../__internal__/mixins";
import { getDelay } from "../__internal__/scheduling/SchedulerLike.options";
import {
  ContainerOperator,
  FromArray,
  Generate,
  Keep,
  Map,
  Scan,
  TakeWhile,
  ToReadonlyArray,
} from "../containers";
import { toObservable as arrayToObservable } from "../containers/ReadonlyArrayLike";
import ReadonlyArrayLike__toAsyncEnumerable from "../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toAsyncEnumerable";
import StatefulContainerLike__keep from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.keep";
import StatefulContainerLike__map from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.map";
import StatefulContainerLike__scan from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.scan";
import StatefulContainerLike__takeWhile from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeWhile";
import {
  Lift,
  TInteractive,
  interactive,
} from "../containers/__internal__/containers.internal";
import {
  Factory,
  Function1,
  Predicate,
  Reducer,
  Updater,
  newInstance,
  none,
  partial,
  pipe,
  pipeUnsafe,
  returns,
  unsafeCast,
} from "../functions";
import {
  AsyncEnumerableLike,
  AsyncEnumeratorLike,
  EnumerableLike,
  EnumeratorLike,
  InteractiveContainerLike_interact,
  SourceLike_move,
  ToAsyncEnumerable,
} from "../ix";
import { getCurrent, hasCurrent } from "../ix/EnumeratorLike";
import { move } from "../ix/SourceLike";
import {
  AsyncReducer,
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ReactiveContainerLike_sinkInto,
  ScanAsync,
  ToObservable,
} from "../rx";
import { getObserverCount, getReplay } from "../rx/MulticastObservableLike";
import {
  create as createObservable,
  forEach as forEachObs,
  keep as keepObs,
  map as mapObs,
  multicast,
  scanAsync as scanAsyncObs,
  scan as scanObs,
  takeWhile as takeWhileObs,
} from "../rx/ObservableLike";
import { sinkInto } from "../rx/ReactiveContainerLike";
import {
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  SchedulerLike,
} from "../scheduling";
import { dispatch, getScheduler } from "../scheduling/DispatcherLike";
import { StreamLike, StreamableLike_stream } from "../streaming";
import { stream } from "../streaming/StreamableLike";
import { add, addTo } from "../util/DisposableLike";
import DisposableLike__delegatingMixin from "../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";
import { enumerate } from "./EnumerableLike";
import AsyncEnumerableLike__toObservable from "./__internal__/AsyncEnumerableLike/AsyncEnumerable.toObservable";
import AsyncEnumerableLike__create from "./__internal__/AsyncEnumerableLike/AsyncEnumerableLike.create";
import AsyncEnumerableLike__toReadonlyArray from "./__internal__/AsyncEnumerableLike/AsyncEnumerableLike.toReadonlyArray";

export const fromArray: FromArray<AsyncEnumerableLike>["fromArray"] =
  ReadonlyArrayLike__toAsyncEnumerable;
export const fromArrayT: FromArray<AsyncEnumerableLike> = { fromArray };

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromEnumerable: ToAsyncEnumerable<EnumerableLike>["toAsyncEnumerable"] =
  /*@__PURE__*/ (<T>() =>
    returns(
      (enumerable: EnumerableLike<T>): AsyncEnumerableLike<T> =>
        AsyncEnumerableLike__create(observable =>
          createObservable(observer => {
            const enumerator = pipe(enumerable, enumerate(), addTo(observer));

            pipe(
              observable,
              mapObs(_ => move(enumerator)),
              takeWhileObs<EnumeratorLike<T>>(hasCurrent),
              mapObs(getCurrent),
              sinkInto(observer),
            );
          }),
        ),
    ))();

class LiftedAsyncEnumerable<T> implements AsyncEnumerableLike<T> {
  constructor(
    readonly src: AsyncEnumerableLike<any>,
    readonly operators: readonly Function1<
      AsyncEnumeratorLike<any>,
      AsyncEnumeratorLike<any>
    >[],
  ) {}

  [InteractiveContainerLike_interact](scheduler: SchedulerLike) {
    return pipe(this, stream(scheduler));
  }

  [StreamableLike_stream](
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): AsyncEnumeratorLike<T> {
    const src = pipe(this.src, stream(scheduler, options));
    return pipeUnsafe(src, ...this.operators) as AsyncEnumeratorLike<T>;
  }
}

/**
 * Generates an `AsyncEnumerableLike` sequence from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator The generator function.
 * @param initialValue Factory function to generate the initial accumulator.
 */
export const generate: Generate<
  AsyncEnumerableLike,
  { delay: number }
>["generate"] = /*@__PURE__*/ (() => {
  const generateScanner =
    <T>(generator: Updater<T>) =>
    (acc: T, _: unknown) =>
      generator(acc);

  const asyncGeneratorScanner = <T>(
    generator: Updater<T>,
    options?: { readonly delay?: number },
  ) => {
    const delay = getDelay(options);

    const fromArrayWithDelay =
      delay > 0 ? arrayToObservable<T>({ delay }) : arrayToObservable<T>();

    return (acc: T, _: unknown) =>
      pipe(acc, generator, x => [x], fromArrayWithDelay);
  };

  return <T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options?: { readonly delay?: number },
  ): AsyncEnumerableLike<T> => {
    const delay = getDelay(options);

    return AsyncEnumerableLike__create(
      delay > 0
        ? scanAsyncObs<void, T>(
            asyncGeneratorScanner(generator, options),
            initialValue,
          )
        : scanObs(generateScanner(generator), initialValue),
    );
  };
})();

export const generateT: Generate<AsyncEnumerableLike, { delay: number }> = {
  generate,
};

const lift =
  <TA, TB>(
    operator: Function1<AsyncEnumeratorLike<TA>, AsyncEnumeratorLike<TB>>,
  ): ContainerOperator<AsyncEnumerableLike, TA, TB> =>
  enumerable => {
    const src =
      enumerable instanceof LiftedAsyncEnumerable ? enumerable.src : enumerable;

    const allFunctions =
      enumerable instanceof LiftedAsyncEnumerable
        ? [...enumerable.operators, operator]
        : [operator];

    return newInstance<
      LiftedAsyncEnumerable<TB>,
      AsyncEnumerableLike<any>,
      readonly Function1<AsyncEnumeratorLike<any>, AsyncEnumeratorLike<any>>[]
    >(LiftedAsyncEnumerable, src, allFunctions);
  };

const liftT: Lift<AsyncEnumerableLike, TInteractive> = {
  lift,
  variance: interactive,
};

const delegatingAsyncEnumerator: <T>() => Mixin1<
  Pick<
    AsyncEnumeratorLike<T>,
    | typeof DispatcherLike_dispatch
    | typeof DispatcherLike_scheduler
    | typeof SourceLike_move
    | typeof ObservableLike_isEnumerable
    | typeof ObservableLike_isRunnable
  >,
  AsyncEnumeratorLike<T>
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly delegate: AsyncEnumeratorLike<T>;
  };

  type TReturn = Pick<
    AsyncEnumeratorLike<T>,
    | typeof DispatcherLike_dispatch
    | typeof DispatcherLike_scheduler
    | typeof SourceLike_move
    | typeof ObservableLike_isEnumerable
    | typeof ObservableLike_isRunnable
  >;

  return pipe(
    mix(
      function DelegatingAsyncEnumerator(
        instance: Mutable<TProperties> & TReturn,
        delegate: AsyncEnumeratorLike<T>,
      ): TReturn {
        instance.delegate = delegate;

        return instance;
      },
      props<TProperties>({
        delegate: none,
      }),
      {
        [DispatcherLike_dispatch](this: TProperties, _: void) {
          pipe(this.delegate, dispatch(none));
        },
        get [DispatcherLike_scheduler]() {
          unsafeCast<TProperties>(this);
          return getScheduler(this.delegate);
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [SourceLike_move](this: StreamLike<void, T>) {
          pipe(this, dispatch(none));
        },
      },
    ),
    returns,
  );
})();

export const keep: Keep<AsyncEnumerableLike>["keep"] = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly obs: MulticastObservableLike<T>;
  };

  const createKeepAsyncEnumerator = createInstanceFactory(
    mix(
      include(DisposableLike__delegatingMixin, delegatingAsyncEnumerator()),
      function KeepAsyncEnumerator(
        instance: Pick<
          AsyncEnumeratorLike<T>,
          | typeof ReactiveContainerLike_sinkInto
          | typeof MulticastObservableLike_observerCount
          | typeof MulticastObservableLike_replay
        > &
          Mutable<TProperties>,
        delegate: AsyncEnumeratorLike<T>,
        predicate: Predicate<T>,
      ): AsyncEnumeratorLike<T> {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(delegatingAsyncEnumerator(), instance, delegate);

        instance.obs = pipe(
          delegate,
          forEachObs(x => {
            if (!predicate(x)) {
              pipe(delegate, dispatch(none));
            }
          }),
          keepObs(predicate),
          multicast(getScheduler(delegate)),
        );
        return instance;
      },
      props<TProperties>({
        obs: none,
      }),
      {
        get [MulticastObservableLike_observerCount]() {
          unsafeCast<TProperties>(this);
          return getObserverCount(this.obs);
        },
        get [MulticastObservableLike_replay]() {
          unsafeCast<TProperties>(this);
          return getReplay(this.obs);
        },
        [ReactiveContainerLike_sinkInto](
          this: TProperties,
          observer: ObserverLike<T>,
        ): void {
          pipe(this.obs, sinkInto(observer));
        },
      },
    ),
  );

  return pipe(
    createKeepAsyncEnumerator,
    StatefulContainerLike__keep<AsyncEnumerableLike, T, TInteractive>(liftT),
  );
})();

export const keepT: Keep<AsyncEnumerableLike> = {
  keep,
};

export const map: Map<AsyncEnumerableLike>["map"] = /*@__PURE__*/ (<
  TA,
  TB,
>() => {
  type TProperties = {
    readonly op: ContainerOperator<ObservableLike, TA, TB>;
    readonly delegate: AsyncEnumeratorLike<TA>;
  };

  const createMapAsyncEnumerator = createInstanceFactory(
    mix(
      include(DisposableLike__delegatingMixin, delegatingAsyncEnumerator()),
      function MapAsyncEnumerator(
        instance: Pick<
          AsyncEnumeratorLike<TB>,
          | typeof ReactiveContainerLike_sinkInto
          | typeof MulticastObservableLike_observerCount
          | typeof MulticastObservableLike_replay
        > &
          Mutable<TProperties>,
        delegate: AsyncEnumeratorLike<TA>,
        mapper: Function1<TA, TB>,
      ): AsyncEnumeratorLike<TB> {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(delegatingAsyncEnumerator(), instance, delegate);

        instance.delegate = delegate;
        instance.op = mapObs(mapper);
        return instance;
      },
      props<TProperties>({
        op: none,
        delegate: none,
      }),
      {
        get [MulticastObservableLike_observerCount]() {
          unsafeCast<TProperties>(this);
          return getObserverCount(this.delegate);
        },
        get [MulticastObservableLike_replay]() {
          unsafeCast<TProperties>(this);
          return getReplay(this.delegate);
        },
        [ReactiveContainerLike_sinkInto](
          this: TProperties,
          observer: ObserverLike<TB>,
        ): void {
          pipe(this.delegate, this.op, sinkInto(observer));
        },
      },
    ),
  );

  return pipe(
    createMapAsyncEnumerator,
    StatefulContainerLike__map<AsyncEnumerableLike, TA, TB, TInteractive>(
      liftT,
    ),
  );
})();

export const mapT: Map<AsyncEnumerableLike> = {
  map,
};

export const scan: Scan<AsyncEnumerableLike>["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  type TProperties = {
    readonly op: ContainerOperator<ObservableLike, T, TAcc>;
    readonly delegate: AsyncEnumeratorLike<T>;
  };

  const createScanAsyncEnumerator = createInstanceFactory(
    mix(
      include(DisposableLike__delegatingMixin, delegatingAsyncEnumerator()),
      function ScanAsyncEnumerator(
        instance: Pick<
          AsyncEnumeratorLike<TAcc>,
          | typeof ReactiveContainerLike_sinkInto
          | typeof MulticastObservableLike_observerCount
          | typeof MulticastObservableLike_replay
        > &
          Mutable<TProperties>,
        delegate: AsyncEnumeratorLike<T>,
        reducer: Reducer<T, TAcc>,
        acc: Factory<TAcc>,
      ): AsyncEnumeratorLike<TAcc> {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(delegatingAsyncEnumerator(), instance, delegate);

        instance.delegate = delegate;
        instance.op = scanObs(reducer, acc);
        return instance;
      },
      props<TProperties>({
        op: none,
        delegate: none,
      }),
      {
        get [MulticastObservableLike_observerCount]() {
          unsafeCast<TProperties>(this);
          return getObserverCount(this.delegate);
        },
        get [MulticastObservableLike_replay]() {
          unsafeCast<TProperties>(this);
          return getReplay(this.delegate);
        },
        [ReactiveContainerLike_sinkInto](
          this: TProperties,
          observer: ObserverLike<TAcc>,
        ): void {
          pipe(this.delegate, this.op, sinkInto(observer));
        },
      },
    ),
  );

  return pipe(
    createScanAsyncEnumerator,
    StatefulContainerLike__scan<AsyncEnumerableLike, T, TAcc, TInteractive>(
      liftT,
    ),
  );
})();

export const scanT: Scan<AsyncEnumerableLike> = {
  scan,
};

export const scanAsync: ScanAsync<
  AsyncEnumerableLike,
  ObservableLike
>["scanAsync"] = /*@__PURE__*/ (<T, TAcc>() => {
  type TProperties = {
    readonly obs: MulticastObservableLike<TAcc>;
  };

  const creatScanAsyncAsyncEnumerator = createInstanceFactory(
    mix(
      include(DisposableLike__delegatingMixin, delegatingAsyncEnumerator()),
      function ScanAsyncAsyncEnumerator(
        instance: Pick<
          AsyncEnumeratorLike<TAcc>,
          | typeof ReactiveContainerLike_sinkInto
          | typeof MulticastObservableLike_observerCount
          | typeof MulticastObservableLike_replay
        > &
          Mutable<TProperties>,
        delegate: AsyncEnumeratorLike<T>,
        reducer: AsyncReducer<ObservableLike, T, TAcc>,
        initialValue: Factory<TAcc>,
      ): AsyncEnumeratorLike<TAcc> {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(delegatingAsyncEnumerator(), instance, delegate);

        instance.obs = pipe(
          delegate,
          scanAsyncObs(reducer, initialValue),
          multicast(getScheduler(delegate)),
        );
        return instance;
      },
      props<TProperties>({
        obs: none,
      }),
      {
        get [MulticastObservableLike_observerCount]() {
          unsafeCast<TProperties>(this);
          return getObserverCount(this.obs);
        },
        get [MulticastObservableLike_replay]() {
          unsafeCast<TProperties>(this);
          return getReplay(this.obs);
        },
        [ReactiveContainerLike_sinkInto](
          this: TProperties,
          observer: ObserverLike<TAcc>,
        ): void {
          pipe(this.obs, sinkInto(observer));
        },
      },
    ),
  );

  return (
    reducer: AsyncReducer<ObservableLike, T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<AsyncEnumerableLike, T, TAcc> =>
    pipe(creatScanAsyncAsyncEnumerator, partial(reducer, initialValue), lift);
})();

export const scanAsyncT: ScanAsync<AsyncEnumerableLike, ObservableLike> = {
  scanAsync,
};

export const takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      readonly obs: MulticastObservableLike<T>;
    };

    const createTakeWhileAsyncEnumerator = createInstanceFactory(
      mix(
        include(DisposableLike__delegatingMixin, delegatingAsyncEnumerator()),
        function TakeWhileAsyncEnumerator(
          instance: Pick<
            AsyncEnumeratorLike<T>,
            | typeof ReactiveContainerLike_sinkInto
            | typeof MulticastObservableLike_observerCount
            | typeof MulticastObservableLike_replay
          > &
            Mutable<TProperties>,
          delegate: AsyncEnumeratorLike<T>,
          predicate: Predicate<T>,
          inclusive: boolean,
        ): AsyncEnumeratorLike<T> {
          init(DisposableLike__delegatingMixin, instance, delegate);
          init(delegatingAsyncEnumerator(), instance, delegate);

          instance.obs = pipe(
            delegate,
            takeWhileObs(predicate, { inclusive }),
            multicast(getScheduler(delegate)),
            add(instance),
          );
          return instance;
        },
        props<TProperties>({
          obs: none,
        }),
        {
          get [MulticastObservableLike_observerCount]() {
            unsafeCast<TProperties>(this);
            return getObserverCount(this.obs);
          },
          get [MulticastObservableLike_replay]() {
            unsafeCast<TProperties>(this);
            return getReplay(this.obs);
          },
          [ReactiveContainerLike_sinkInto](
            this: TProperties,
            observer: ObserverLike<T>,
          ): void {
            pipe(this.obs, sinkInto(observer));
          },
        },
      ),
    );

    return pipe(
      createTakeWhileAsyncEnumerator,
      StatefulContainerLike__takeWhile<AsyncEnumerableLike, T, TInteractive>(
        liftT,
      ),
    );
  })();

export const takeWhileT: TakeWhile<AsyncEnumerableLike> = {
  takeWhile,
};

export const toObservable: ToObservable<AsyncEnumerableLike>["toObservable"] =
  AsyncEnumerableLike__toObservable;
export const toObservableT: ToObservable<AsyncEnumerableLike> = {
  toObservable,
};

export const toReadonlyArray: ToReadonlyArray<AsyncEnumerableLike>["toReadonlyArray"] =
  AsyncEnumerableLike__toReadonlyArray;
export const toReadonlyArrayT: ToReadonlyArray<AsyncEnumerableLike> = {
  toReadonlyArray,
};
