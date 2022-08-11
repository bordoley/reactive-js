import { getDelay } from "../__internal__/__internal__optionParsing";
import {
  Lift,
  TInteractive,
  createKeepOperator,
  createMapOperator,
  interactive,
} from "../__internal__/containers/__internal__StatefulContainerLike";
import {
  delegatingDisposableMixin,
  disposableMixin,
} from "../__internal__/util/__internal__Disposables";
import {
  Mixin1,
  __extends,
  clazz,
  createInstanceFactory,
  init,
} from "../__internal__/util/__internal__Objects";
import {
  ContainerOperator,
  FromArrayOptions,
  Keep,
  Map,
  ToReadonlyArray,
} from "../containers";
import { concatMap } from "../containers/ContainerLike";
import { toObservable as arrayToObservable } from "../containers/ReadonlyArrayLike";
import {
  Function1,
  Predicate,
  compose,
  getLength,
  increment,
  newInstance,
  none,
  pipe,
  pipeUnsafe,
  returns,
  unsafeCast,
} from "../functions";
import { AsyncEnumerableLike, InteractiveContainerLike_interact } from "../ix";
import {
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ReactiveContainerLike_sinkInto,
  SubjectLike,
  ToObservable,
  createRunnableObservable,
  createSubject,
} from "../rx";
import { getObserverCount, getReplay } from "../rx/MulticastObservableLike";
import {
  concatAllT as concatAllTObs,
  forEach as forEachObs,
  keep as keepObs,
  map as mapObs,
  mapT as mapTObs,
  multicast,
  toReadonlyArray as obsToReadonlyArray,
  onSubscribe,
  scan as scanObs,
  takeFirst as takeFirstObs,
} from "../rx/ObservableLike";
import { sinkInto } from "../rx/ReactiveContainerLike";
import { publish } from "../rx/SubjectLike";
import {
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  ObserverLike,
  SchedulerLike,
} from "../scheduling";
import { dispatch, getScheduler } from "../scheduling/DispatcherLike";
import { getScheduler as observerGetScheduler } from "../scheduling/ObserverLike";
import {
  AsyncEnumeratorLike,
  StreamLike,
  StreamableLike_stream,
} from "../streaming";
import { stream } from "../streaming/StreamableLike";
import { SourceLike_move } from "../util";
import { add, addTo } from "../util/DisposableLike";

const createAsyncEnumerable: <T>(
  f: (
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ) => AsyncEnumeratorLike<T>,
) => AsyncEnumerableLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [StreamableLike_stream](
      scheduler: SchedulerLike,
      options?: { readonly replay?: number },
    ): AsyncEnumeratorLike<T>;
  };

  return createInstanceFactory(
    clazz(
      function AsyncEnumerable(
        instance: Pick<
          AsyncEnumerableLike<T>,
          | typeof StreamableLike_stream
          | typeof InteractiveContainerLike_interact
        >,
        stream: (
          scheduler: SchedulerLike,
          options?: { readonly replay?: number },
        ) => AsyncEnumeratorLike<T>,
      ): AsyncEnumerableLike<T> {
        unsafeCast<TProperties>(instance);
        instance[StreamableLike_stream] = stream;

        return instance;
      },
      {},
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
    observable: MulticastObservableLike<T>;
    op: ContainerOperator<ObservableLike, void, T>;
    [DispatcherLike_scheduler]: SchedulerLike;
    subject: SubjectLike<void>;
  };

  return createInstanceFactory(
    clazz(
      __extends(disposableMixin),
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
        >,
        op: ContainerOperator<ObservableLike, void, T>,
        scheduler: SchedulerLike,
        replay: number,
      ): AsyncEnumeratorLike<T> {
        init(disposableMixin, instance);
        unsafeCast<TProperties>(instance);

        instance.op = op;
        instance[DispatcherLike_scheduler] = scheduler;

        const subject = createSubject();
        const observable = pipe(subject, op, multicast(scheduler, { replay }));

        instance.subject = subject;
        instance.observable = observable;

        return pipe(instance, add(subject), addTo(observable));
      },
      {
        observable: none,
        op: none,
        scheduler: none,
        subject: none,
      },
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

        [DispatcherLike_dispatch](req: void) {
          unsafeCast<TProperties>(this);
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

const fromArrayInternal = <T>(
  values: readonly T[],
  start: number,
  count: number,
  options?: {
    readonly delay?: number;
  },
): AsyncEnumerableLike<T> => {
  const delay = getDelay(options);

  const fromArrayWithDelay =
    delay > 0 ? arrayToObservable<T>({ delay }) : arrayToObservable<T>();

  return createLiftedAsyncEnumerable(
    scanObs(increment, returns(start - 1)),
    concatMap<ObservableLike, number, T>(
      { ...mapTObs, ...concatAllTObs },
      (i: number) => pipe([values[i]], fromArrayWithDelay),
    ),
    takeFirstObs({ count }),
  );
};

export const fromArray =
  <T>(
    _?: Partial<FromArrayOptions>,
  ): Function1<readonly T[], AsyncEnumerableLike<T>> =>
  values =>
    fromArrayInternal(values, 0, values.length);

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
    delegate: AsyncEnumeratorLike<T>;
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
    clazz(
      function DelegatingAsyncEnumerator(
        instance: TReturn,
        delegate: AsyncEnumeratorLike<T>,
      ): TReturn {
        unsafeCast<TProperties>(instance);
        instance.delegate = delegate;

        return instance;
      },
      {
        delegate: none,
      },
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
    obs: MulticastObservableLike<T>;
    delegate: AsyncEnumeratorLike<T>;
  };

  const createKeepAsyncEnumerator = createInstanceFactory(
    clazz(
      __extends(delegatingDisposableMixin, delegatingAsyncEnumerator()),
      function KeepAsyncEnumerator(
        instance: Pick<
          AsyncEnumeratorLike<T>,
          | typeof ReactiveContainerLike_sinkInto
          | typeof MulticastObservableLike_observerCount
          | typeof MulticastObservableLike_replay
        >,
        delegate: AsyncEnumeratorLike<T>,
        predicate: Predicate<T>,
      ): AsyncEnumeratorLike<T> {
        init(delegatingDisposableMixin, instance, delegate);
        init(delegatingAsyncEnumerator(), instance, delegate);
        unsafeCast<TProperties>(instance);

        instance.delegate = delegate;
        instance.obs = pipe(
          delegate,
          forEachObs(x => {
            if (!predicate(x)) {
              pipe(instance.delegate, dispatch(none));
            }
          }),
          keepObs(predicate),
          multicast(getScheduler(delegate)),
        );
        return instance;
      },
      {
        obs: none,
        delegate: none,
      },
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
    op: ContainerOperator<ObservableLike, TA, TB>;
    delegate: AsyncEnumeratorLike<TA>;
  };

  const createMapAsyncEnumerator = createInstanceFactory(
    clazz(
      __extends(delegatingDisposableMixin, delegatingAsyncEnumerator()),
      function MapAsyncEnumerator(
        instance: Pick<
          AsyncEnumeratorLike<TB>,
          | typeof ReactiveContainerLike_sinkInto
          | typeof MulticastObservableLike_observerCount
          | typeof MulticastObservableLike_replay
        >,
        delegate: AsyncEnumeratorLike<TA>,
        mapper: Function1<TA, TB>,
      ): AsyncEnumeratorLike<TB> {
        init(delegatingDisposableMixin, instance, delegate);
        init(delegatingAsyncEnumerator(), instance, delegate);
        unsafeCast<TProperties>(instance);

        instance.delegate = delegate;
        instance.op = mapObs(mapper);
        return instance;
      },
      {
        op: none,
        delegate: none,
      },
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
