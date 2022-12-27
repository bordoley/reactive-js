import {
  Lift,
  TInteractive,
  createKeepOperator,
  createMapOperator,
  createScanOperator,
  createTakeWhileOperator,
  interactive,
} from "../__internal__/containers/StatefulContainerLike.internal";
import {
  Mixin1,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mixin,
  props,
} from "../__internal__/mixins";
import {
  getDelay,
  hasDelay,
} from "../__internal__/scheduling/SchedulerLike.options";
import {
  ContainerOperator,
  FromArrayOptions,
  Generate,
  Keep,
  Map,
  Scan,
  TakeWhile,
  ToReadonlyArray,
} from "../containers";
import { concatMap } from "../containers/ContainerLike";
import { toObservable as arrayToObservable } from "../containers/ReadonlyArrayLike";
import {
  Factory,
  Function1,
  Predicate,
  Reducer,
  Updater,
  compose,
  getLength,
  increment,
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
  SourceLike,
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
  SubjectLike,
  ToObservable,
} from "../rx";
import { getObserverCount, getReplay } from "../rx/MulticastObservableLike";
import {
  concatAllT as concatAllTObs,
  create as createObservable,
  forEach as forEachObs,
  keep as keepObs,
  map as mapObs,
  mapT as mapTObs,
  multicast,
  toReadonlyArray as obsToReadonlyArray,
  onSubscribe,
  scanAsync as scanAsyncObs,
  scan as scanObs,
  takeFirst as takeFirstObs,
  takeWhile as takeWhileObs,
} from "../rx/ObservableLike";
import { getScheduler as observerGetScheduler } from "../rx/ObserverLike";
import { sinkInto } from "../rx/ReactiveContainerLike";
import { create as createRunnableObservable } from "../rx/RunnableObservableLike";
import { create as createSubject, publish } from "../rx/SubjectLike";
import {
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  SchedulerLike,
} from "../scheduling";
import { dispatch, getScheduler } from "../scheduling/DispatcherLike";
import { StreamLike, StreamableLike_stream } from "../streaming";
import { stream } from "../streaming/StreamableLike";
import StreamLike__mixin from "../streaming/__internal__/StreamLike/StreamLike.mixin";
import { add, addTo } from "../util/DisposableLike";
import DisposableLike__delegatingMixin from "../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";
import DisposableLike__mixin from "../util/__internal__/DisposableLike/DisposableLike.mixin";
import { enumerate } from "./EnumerableLike";

export const createAsyncEnumerator = /*@__PURE__*/ (() => {
  const createAsyncEnumeratorInternal: <T>(
    op: ContainerOperator<ObservableLike, void, T>,
    scheduler: SchedulerLike,
    replay: number,
  ) => AsyncEnumeratorLike<T> = (<T>() => {
    const typedStreamMixin = StreamLike__mixin<void, T>();
    return createInstanceFactory(
      mixin(
        include(typedStreamMixin),
        function AsyncEnumerator(
          instance: Pick<SourceLike, typeof SourceLike_move>,
          op: ContainerOperator<ObservableLike, void, T>,
          scheduler: SchedulerLike,
          replay: number,
        ): AsyncEnumeratorLike<T> {
          init(typedStreamMixin, instance, op, scheduler, replay);

          return instance;
        },
        {},
        {
          [SourceLike_move](this: StreamLike<void, T>) {
            pipe(this, dispatch(none));
          },
        },
      ),
    );
  })();

  return <T>(
    op: ContainerOperator<ObservableLike, void, T>,
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): AsyncEnumeratorLike<T> => {
    const { replay = 0 } = options ?? {};
    return createAsyncEnumeratorInternal(
      op as ContainerOperator<ObservableLike, unknown, unknown>,
      scheduler,
      replay,
    );
  };
})();

const createAsyncEnumerable: <T>(
  f: (
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ) => AsyncEnumeratorLike<T>,
) => AsyncEnumerableLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly [StreamableLike_stream]: (
      scheduler: SchedulerLike,
      options?: { readonly replay?: number },
    ) => AsyncEnumeratorLike<T>;
  };

  return createInstanceFactory(
    mixin(
      function AsyncEnumerable(
        instance: Pick<
          AsyncEnumerableLike<T>,
          | typeof StreamableLike_stream
          | typeof InteractiveContainerLike_interact
        > &
          Mutable<TProperties>,
        stream: (
          scheduler: SchedulerLike,
          options?: { readonly replay?: number },
        ) => AsyncEnumeratorLike<T>,
      ): AsyncEnumerableLike<T> {
        instance[StreamableLike_stream] = stream;

        return instance;
      },
      props<TProperties>({
        [StreamableLike_stream]: none,
      }),
      {
        [StreamableLike_stream](
          this: TProperties,
          scheduler: SchedulerLike,
          options?: { readonly replay?: number },
        ) {
          return this[StreamableLike_stream](scheduler, options);
        },
        [InteractiveContainerLike_interact](
          ctx: SchedulerLike,
        ): AsyncEnumeratorLike<T> {
          return pipe(this, stream(ctx));
        },
      },
    ),
  );
})();

const createLiftedAsyncEnumerator = (<T>() => {
  type TProperties = {
    readonly observable: MulticastObservableLike<T>;
    readonly op: ContainerOperator<ObservableLike, void, T>;
    readonly [DispatcherLike_scheduler]: SchedulerLike;
    readonly subject: SubjectLike<void>;
  };

  return createInstanceFactory(
    mixin(
      include(DisposableLike__mixin),
      function LiftedAsyncEnumerator(
        instance: Pick<
          AsyncEnumeratorLike<T>,
          | typeof MulticastObservableLike_observerCount
          | typeof MulticastObservableLike_replay
          | typeof DispatcherLike_dispatch
          | typeof ReactiveContainerLike_sinkInto
          | typeof SourceLike_move
          | typeof ObservableLike_isEnumerable
          | typeof ObservableLike_isRunnable
        > &
          Mutable<TProperties>,
        op: ContainerOperator<ObservableLike, void, T>,
        scheduler: SchedulerLike,
        replay: number,
      ): AsyncEnumeratorLike<T> {
        init(DisposableLike__mixin, instance);

        instance.op = op;
        instance[DispatcherLike_scheduler] = scheduler;

        const subject = createSubject();
        const observable = pipe(subject, op, multicast(scheduler, { replay }));

        instance.subject = subject;
        instance.observable = observable;

        return pipe(instance, add(subject), addTo(observable));
      },
      props<TProperties>({
        [DispatcherLike_scheduler]: none,
        observable: none,
        op: none,
        subject: none,
      }),
      {
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,

        get [MulticastObservableLike_observerCount](): number {
          unsafeCast<TProperties>(this);
          return getObserverCount(this.observable);
        },

        get [MulticastObservableLike_replay](): number {
          unsafeCast<TProperties>(this);
          return getReplay(this.observable);
        },

        [DispatcherLike_dispatch](this: TProperties, req: void) {
          pipe(this.subject, publish(req));
        },

        [ReactiveContainerLike_sinkInto](
          this: TProperties,
          observer: ObserverLike<T>,
        ) {
          pipe(this.observable, sinkInto(observer));
        },

        [SourceLike_move](this: StreamLike<void, T>) {
          pipe(this, dispatch(none));
        },
      },
    ),
  );
})();

interface CreateLiftedAsyncEnumerable {
  <A>(op1: ContainerOperator<ObservableLike, void, A>): AsyncEnumerableLike<A>;
  <A, B>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
  ): AsyncEnumerableLike<B>;
  <A, B, C>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
  ): AsyncEnumerableLike<C>;
  <A, B, C, D>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
  ): AsyncEnumerableLike<D>;
  <A, B, C, D, E>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
  ): AsyncEnumerableLike<E>;
  <A, B, C, D, E, F>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
  ): AsyncEnumerableLike<F>;
  <A, B, C, D, E, F, G>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
  ): AsyncEnumerableLike<G>;
  <A, B, C, D, E, F, G, H>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
  ): AsyncEnumerableLike<H>;
  <A, B, C, D, E, F, G, H, I>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
    op9: ContainerOperator<ObservableLike, H, I>,
  ): AsyncEnumerableLike<I>;
  <A, B, C, D, E, F, G, H, I, J>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
    op9: ContainerOperator<ObservableLike, H, I>,
    op10: ContainerOperator<ObservableLike, I, J>,
  ): AsyncEnumerableLike<J>;
  <A, B, C, D, E, F, G, H, I, J, K>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
    op9: ContainerOperator<ObservableLike, H, I>,
    op10: ContainerOperator<ObservableLike, I, J>,
    op11: ContainerOperator<ObservableLike, J, K>,
  ): AsyncEnumerableLike<K>;
  <A, B, C, D, E, F, G, H, I, J, K, L>(
    op1: ContainerOperator<ObservableLike, void, A>,
    op2: ContainerOperator<ObservableLike, A, B>,
    op3: ContainerOperator<ObservableLike, B, C>,
    op4: ContainerOperator<ObservableLike, C, D>,
    op5: ContainerOperator<ObservableLike, D, E>,
    op6: ContainerOperator<ObservableLike, E, F>,
    op7: ContainerOperator<ObservableLike, F, G>,
    op8: ContainerOperator<ObservableLike, G, H>,
    op9: ContainerOperator<ObservableLike, H, I>,
    op10: ContainerOperator<ObservableLike, I, J>,
    op11: ContainerOperator<ObservableLike, J, K>,
    op12: ContainerOperator<ObservableLike, K, L>,
  ): AsyncEnumerableLike<L>;
}
const createLiftedAsyncEnumerable: CreateLiftedAsyncEnumerable = (
  ...ops: readonly ContainerOperator<ObservableLike, unknown, unknown>[]
): AsyncEnumerableLike => {
  const op = getLength(ops) > 1 ? (compose as any)(...ops) : ops[0];

  return createAsyncEnumerable((scheduler, options) => {
    const replay = options?.replay ?? 0;
    return createLiftedAsyncEnumerator(op, scheduler, replay);
  });
};

export const fromArray = /*@__PURE__*/ (() => {
  const fromArrayInternal = <T>(
    values: readonly T[],
    start: number,
    count: number,
    options?: {
      readonly delay?: number;
    },
  ): AsyncEnumerableLike<T> => {
    const delay = getDelay(options);

    const fromArrayWithDelay = hasDelay(options)
      ? arrayToObservable<T>({ delay })
      : arrayToObservable<T>();

    return createLiftedAsyncEnumerable(
      scanObs(increment, returns(start - 1)),
      concatMap<ObservableLike, number, T>(
        { ...mapTObs, ...concatAllTObs },
        (i: number) => pipe([values[i]], fromArrayWithDelay),
      ),
      takeFirstObs({ count }),
    );
  };

  return <T>(
      _?: Partial<FromArrayOptions>,
    ): Function1<readonly T[], AsyncEnumerableLike<T>> =>
    values =>
      fromArrayInternal(values, 0, values.length);
})();

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromEnumerable: ToAsyncEnumerable<EnumerableLike>["toAsyncEnumerable"] =
  /*@__PURE__*/ (<T>() =>
    returns(
      (enumerable: EnumerableLike<T>): AsyncEnumerableLike<T> =>
        createLiftedAsyncEnumerable(observable =>
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

    return createLiftedAsyncEnumerable(
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
    mixin(
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
    mixin(
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
    createKeepOperator<AsyncEnumerableLike, T, TInteractive>(liftT),
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
    mixin(
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
    createMapOperator<AsyncEnumerableLike, TA, TB, TInteractive>(liftT),
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
    mixin(
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
    createScanOperator<AsyncEnumerableLike, T, TAcc, TInteractive>(liftT),
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
    mixin(
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
      mixin(
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
      createTakeWhileOperator<AsyncEnumerableLike, T, TInteractive>(liftT),
    );
  })();

export const takeWhileT: TakeWhile<AsyncEnumerableLike> = {
  takeWhile,
};

export const toObservable: ToObservable<AsyncEnumerableLike>["toObservable"] =
  () => enumerable =>
    createRunnableObservable(observer => {
      const enumerator = pipe(
        enumerable,
        stream(observerGetScheduler(observer)),
        addTo(observer),
      );

      pipe(
        enumerator,
        forEachObs(_ => {
          pipe(enumerator, dispatch(none));
        }),
        onSubscribe(() => {
          pipe(enumerator, dispatch(none));
        }),
        sinkInto(observer),
      );
    });

export const toObservableT: ToObservable<AsyncEnumerableLike> = {
  toObservable,
};

export const toReadonlyArray: ToReadonlyArray<AsyncEnumerableLike>["toReadonlyArray"] =

    <T>() =>
    (asyncEnumerable: AsyncEnumerableLike<T>) =>
      pipe(asyncEnumerable, toObservable(), obsToReadonlyArray());

export const toReadonlyArrayT: ToReadonlyArray<AsyncEnumerableLike> = {
  toReadonlyArray,
};
