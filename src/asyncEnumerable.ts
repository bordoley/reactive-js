import { AbstractDelegatingAsyncEnumerator } from "./__internal__.asyncEnumerator";
import { createFromArray } from "./__internal__.container";
import {
  createKeepLiftOperator,
  createMapLiftOperator,
  createScanLiftOperator,
  createTakeWhileLiftOperator,
  getDelegate,
} from "./__internal__.liftable";
import { getDelay } from "./__internal__.optionalArgs";
import { AbstractAsyncEnumerable, lift, liftT } from "./asyncEnumerable/lift";
import { AsyncEnumerator } from "./asyncEnumerator";
import {
  FromArray,
  Generate,
  Keep,
  Map,
  Scan,
  TakeWhile,
  concatMap,
  concatWith,
  fromValue,
} from "./container";
import { dispatch } from "./dispatcher";
import { add, addTo, bindTo } from "./disposable";
import {
  EnumerableLike,
  FromEnumerable,
  enumerate,
  fromIterable as fromIterableEnumerable,
} from "./enumerable";
import { Enumerator, getCurrent, move } from "./enumerator";
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
  newInstanceWith,
  pipe,
  pipeLazy,
  returns,
} from "./functions";
import { InteractiveContainerLike } from "./interactive";
import { FromIterable } from "./liftable";
import {
  AsyncReducer,
  MulticastObservableLike,
  ObservableLike,
  ObservableOperator,
  ScanAsync,
  Subject,
  ToObservable,
  concatAllT,
  concatT,
  createObservable,
  fromArrayT as fromArrayTObs,
  getObserverCount,
  getReplay,
  keep as keepObs,
  map as mapObs,
  mapT as mapTObs,
  multicast,
  never,
  onNotify,
  onSubscribe,
  publish,
  scanAsync as scanAsyncObs,
  scan as scanObs,
  takeFirst,
  takeWhile as takeWhileObs,
  using,
  withLatestFrom,
} from "./observable";
import { Observer, getScheduler } from "./observer";
import { none } from "./option";
import { sinkInto } from "./reactive";
import { SchedulerLike } from "./scheduler";
import { StreamableLike, stream } from "./streamable";

export interface AsyncEnumerableLike<T>
  extends StreamableLike<void, T, AsyncEnumerator<T>>,
    InteractiveContainerLike<SchedulerLike> {
  readonly T: unknown;
  readonly TContainerOf: AsyncEnumerableLike<this["T"]>;
  readonly TLiftableState: AsyncEnumerator<this["T"]>;
}

export type AsyncEnumerableOperator<TA, TB> = Function1<
  AsyncEnumerableLike<TA>,
  AsyncEnumerableLike<TB>
>;

class CreateAsyncEnumerable<T> extends AbstractAsyncEnumerable<T> {
  constructor(
    readonly stream: (
      scheduler: SchedulerLike,
      options?: { readonly replay?: number },
    ) => AsyncEnumerator<T>,
  ) {
    super();
  }

  source(scheduler: SchedulerLike): AsyncEnumerator<T> {
    return pipe(this, stream(scheduler));
  }
}

const createAsyncEnumerable = <T>(
  stream: (
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ) => AsyncEnumerator<T>,
): AsyncEnumerableLike<T> => newInstance(CreateAsyncEnumerable, stream);

class LiftedAsyncEnumerator<T> extends AsyncEnumerator<T> {
  private readonly subject: Subject<void>;
  private readonly observable: MulticastObservableLike<T>;

  constructor(
    //FIXME: Needs to tag ObservableOperator so only operators that are unary
    // maybe provided as an argument.
    readonly op: ObservableOperator<void, T>,
    readonly scheduler: SchedulerLike,
    replay: number,
  ) {
    super();

    const subject = newInstance<Subject<void>>(Subject);
    const observable = pipe(subject, op, multicast<T>(scheduler, { replay }));

    this.subject = subject;
    this.observable = observable;

    return pipe(this, add(subject), addTo(this.observable));
  }

  get observerCount(): number {
    return getObserverCount(this.observable);
  }

  get replay(): number {
    return getReplay(this.observable);
  }

  dispatch(req: void) {
    pipe(this.subject, publish(req));
  }

  sink(observer: Observer<T>) {
    pipe(this.observable, sinkInto(observer));
  }
}

function createLiftedAsyncEnumerable<A>(
  op1: ObservableOperator<void, A>,
): AsyncEnumerableLike<A>;
function createLiftedAsyncEnumerable<A, B>(
  op1: ObservableOperator<void, A>,
  op2: ObservableOperator<A, B>,
): AsyncEnumerableLike<B>;
function createLiftedAsyncEnumerable<A, B, C>(
  op1: ObservableOperator<void, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
): AsyncEnumerableLike<C>;
function createLiftedAsyncEnumerable<A, B, C, D>(
  op1: ObservableOperator<void, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
): AsyncEnumerableLike<D>;
function createLiftedAsyncEnumerable<A, B, C, D, E>(
  op1: ObservableOperator<void, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
): AsyncEnumerableLike<E>;
function createLiftedAsyncEnumerable<A, B, C, D, E, F>(
  op1: ObservableOperator<void, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
): AsyncEnumerableLike<F>;
function createLiftedAsyncEnumerable<A, B, C, D, E, F, G>(
  op1: ObservableOperator<void, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
): AsyncEnumerableLike<G>;
function createLiftedAsyncEnumerable<A, B, C, D, E, F, G, H>(
  op1: ObservableOperator<void, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
  op8: ObservableOperator<G, H>,
): AsyncEnumerableLike<H>;
function createLiftedAsyncEnumerable<A, B, C, D, E, F, G, H, I>(
  op1: ObservableOperator<void, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
  op8: ObservableOperator<G, H>,
  op9: ObservableOperator<H, I>,
): AsyncEnumerableLike<I>;
function createLiftedAsyncEnumerable<A, B, C, D, E, F, G, H, I, J>(
  op1: ObservableOperator<void, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
  op8: ObservableOperator<G, H>,
  op9: ObservableOperator<H, I>,
  op10: ObservableOperator<I, J>,
): AsyncEnumerableLike<J>;
function createLiftedAsyncEnumerable<A, B, C, D, E, F, G, H, I, J, K>(
  op1: ObservableOperator<void, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
  op8: ObservableOperator<G, H>,
  op9: ObservableOperator<H, I>,
  op10: ObservableOperator<I, J>,
  op11: ObservableOperator<J, K>,
): AsyncEnumerableLike<K>;
function createLiftedAsyncEnumerable<A, B, C, D, E, F, G, H, I, J, K, L>(
  op1: ObservableOperator<void, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
  op8: ObservableOperator<G, H>,
  op9: ObservableOperator<H, I>,
  op10: ObservableOperator<I, J>,
  op11: ObservableOperator<J, K>,
  op12: ObservableOperator<K, L>,
): AsyncEnumerableLike<L>;
function createLiftedAsyncEnumerable(
  ...ops: readonly ObservableOperator<unknown, unknown>[]
): AsyncEnumerableLike<unknown> {
  const op = getLength(ops) > 1 ? (compose as any)(...ops) : ops[0];

  return createAsyncEnumerable((scheduler, options) => {
    const replay = options?.replay ?? 0;
    return newInstance(LiftedAsyncEnumerator, op, scheduler, replay);
  });
}

/**
 * Returns an `AsyncEnumerableLike` from the provided array.
 *
 * @param values The array.
 */

export const fromArray = /*@__PURE__*/ createFromArray<
  AsyncEnumerableLike<unknown>,
  {
    readonly delay: number;
    readonly startIndex: number;
    readonly endIndex: number;
  }
>(
  <T>(
    values: readonly T[],
    startIndex: number,
    endIndex: number,
    options?: {
      readonly delay?: number;
    },
  ) => {
    const fromValueWithDelay = fromValue(fromArrayTObs, options);

    return createLiftedAsyncEnumerable(
      scanObs(increment, returns(startIndex - 1)),
      concatMap({ ...mapTObs, ...concatAllT }, (i: number) =>
        fromValueWithDelay(values[i]),
      ),
      takeFirst({ count: endIndex - startIndex }),
    ) as AsyncEnumerableLike<T>;
  },
);

export const fromArrayT: FromArray<AsyncEnumerableLike<unknown>> = {
  fromArray,
};

const _fromEnumerable = <T>(
  enumerable: EnumerableLike<T>,
): AsyncEnumerableLike<T> =>
  createLiftedAsyncEnumerable(
    withLatestFrom<void, Enumerator<T>, Enumerator<T>>(
      using(
        pipeLazy(enumerable, enumerate),
        compose(fromValue(fromArrayTObs), concatWith(concatT, never())),
      ),
      (_, enumerator) => enumerator,
    ),
    takeWhileObs(move),
    mapObs(getCurrent),
  );

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromEnumerable = <T>(): Function1<
  EnumerableLike<T>,
  AsyncEnumerableLike<T>
> => _fromEnumerable;

export const fromEnumerableT: FromEnumerable<AsyncEnumerableLike<unknown>> = {
  fromEnumerable,
};

const _fromIterable = <T>(iterable: Iterable<T>): AsyncEnumerableLike<T> =>
  pipe(iterable, fromIterableEnumerable(), fromEnumerable());

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromIterable = <T>(): Function1<
  Iterable<T>,
  AsyncEnumerableLike<T>
> => _fromIterable;

export const fromIterableT: FromIterable<AsyncEnumerableLike<unknown>> = {
  fromIterable,
};

const generateScanner =
  <T>(generator: Updater<T>) =>
  (acc: T, _: unknown) =>
    generator(acc);

const asyncGeneratorScanner = <T>(
  generator: Updater<T>,
  options?: { readonly delay?: number },
) => {
  const fromValueWithDelay = fromValue(fromArrayTObs, options);
  return (acc: T, _: unknown) => pipe(acc, generator, fromValueWithDelay);
};

/**
 * Generates an `AsyncEnumerableLike` sequence from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator The generator function.
 * @param initialValue Factory function to generate the initial accumulator.
 */
export const generate = <T>(
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

export const generateT: Generate<AsyncEnumerableLike<unknown>> = {
  generate,
};

export const keep: <T>(
  predicate: Predicate<T>,
) => AsyncEnumerableOperator<T, T> = /*@__PURE__*/ createKeepLiftOperator(
  liftT,
  class KeepAsyncEnumerator<T> extends AbstractDelegatingAsyncEnumerator<T, T> {
    readonly obs: MulticastObservableLike<T>;

    constructor(delegate: AsyncEnumerator<T>, predicate: Predicate<T>) {
      super(delegate);

      this.obs = pipe(
        delegate,
        onNotify(x => {
          if (!predicate(x)) {
            pipe(this, getDelegate, dispatch(none));
          }
        }),
        keepObs(predicate),
        multicast(delegate.scheduler),
      );
    }

    get observerCount() {
      return getObserverCount(this.obs);
    }

    get replay(): number {
      return getReplay(this.obs);
    }

    sink(observer: Observer<T>): void {
      pipe(this.obs, sinkInto(observer));
    }
  },
);

export const keepT: Keep<AsyncEnumerableLike<unknown>> = {
  keep,
};

export const map: <TA, TB>(
  mapper: Function1<TA, TB>,
) => AsyncEnumerableOperator<TA, TB> = /*@__PURE__*/ createMapLiftOperator(
  liftT,
  class MapAsyncEnumerator<TA, TB> extends AbstractDelegatingAsyncEnumerator<
    TA,
    TB
  > {
    readonly op: ObservableOperator<TA, TB>;

    constructor(
      delegate: AsyncEnumerator<TA>,
      readonly mapper: Function1<TA, TB>,
    ) {
      super(delegate);
      this.op = mapObs(this.mapper);
    }

    sink(observer: Observer<TB>): void {
      pipe(this, getDelegate, this.op, sinkInto(observer));
    }
  },
);

export const mapT: Map<AsyncEnumerableLike<unknown>> = {
  map,
};

export const scan: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => AsyncEnumerableOperator<T, TAcc> = /*@__PURE__*/ createScanLiftOperator(
  liftT,
  class ScanAsyncEnumerator<T, TAcc> extends AbstractDelegatingAsyncEnumerator<
    T,
    TAcc
  > {
    readonly op: ObservableOperator<T, TAcc>;

    constructor(
      delegate: AsyncEnumerator<T>,
      reducer: Reducer<T, TAcc>,
      acc: TAcc,
    ) {
      super(delegate);
      this.op = scanObs(reducer, returns(acc));
    }

    sink(observer: Observer<TAcc>): void {
      pipe(this, getDelegate, this.op, sinkInto(observer));
    }
  },
);

export const scanT: Scan<AsyncEnumerableLike<unknown>> = {
  scan,
};

class ScanAsyncAsyncEnumerator<
  T,
  TAcc,
> extends AbstractDelegatingAsyncEnumerator<T, TAcc> {
  readonly obs: MulticastObservableLike<TAcc>;

  constructor(
    delegate: AsyncEnumerator<T>,
    reducer: AsyncReducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ) {
    super(delegate);

    this.obs = pipe(
      delegate,
      scanAsyncObs(reducer, initialValue),
      multicast(delegate.scheduler),
    );
  }

  get observerCount() {
    return getObserverCount(this.obs);
  }

  get replay(): number {
    return getReplay(this.obs);
  }

  sink(observer: Observer<TAcc>): void {
    pipe(this.obs, sinkInto(observer));
  }
}

export const scanAsync = <T, TAcc>(
  reducer: AsyncReducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): AsyncEnumerableOperator<T, TAcc> =>
  pipe(
    (delegate: AsyncEnumerator<T>) =>
      pipe(
        ScanAsyncAsyncEnumerator,
        newInstanceWith<
          ScanAsyncAsyncEnumerator<T, TAcc>,
          AsyncEnumerator<T>,
          AsyncReducer<T, TAcc>,
          Factory<TAcc>
        >(delegate, reducer, initialValue),
        bindTo(delegate),
      ),
    lift,
  );

export const scanAsyncT: ScanAsync<AsyncEnumerableLike<unknown>> = {
  scanAsync,
};

export const takeWhile: <T>(
  predicate: Predicate<T>,
  options?: { readonly inclusive?: boolean },
) => AsyncEnumerableOperator<T, T> = /*@__PURE__*/ createTakeWhileLiftOperator(
  liftT,
  class TakeWhileAsyncEnumerator<T> extends AbstractDelegatingAsyncEnumerator<
    T,
    T
  > {
    readonly obs: MulticastObservableLike<T>;

    constructor(
      delegate: AsyncEnumerator<T>,
      predicate: Predicate<T>,
      inclusive: boolean,
    ) {
      super(delegate);

      this.obs = pipe(
        delegate,
        takeWhileObs(predicate, { inclusive }),
        multicast(delegate.scheduler),
        add(this),
      );
    }

    get observerCount() {
      return getObserverCount(this.obs);
    }

    get replay(): number {
      return getReplay(this.obs);
    }

    sink(observer: Observer<T>): void {
      pipe(this.obs, sinkInto(observer));
    }
  },
);

export const takeWhileT: TakeWhile<AsyncEnumerableLike<unknown>> = {
  takeWhile,
};

export const toObservable =
  <T>(): Function1<AsyncEnumerableLike<T>, ObservableLike<T>> =>
  enumerable =>
    createObservable(observer => {
      const enumerator = pipe(
        enumerable,
        stream(getScheduler(observer)),
        addTo(observer),
      );

      pipe(
        enumerator,
        onNotify(_ => {
          pipe(enumerator, dispatch(none));
        }),
        onSubscribe(() => {
          pipe(enumerator, dispatch(none));
        }),
        sinkInto(observer),
      );
    });

export const toObservableT: ToObservable<AsyncEnumerableLike<unknown>> = {
  toObservable,
};

export const TContainerOf: AsyncEnumerableLike<unknown> = undefined as any;
