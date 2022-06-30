import { AsyncEnumerator } from "./asyncEnumerator";
import {
  FromArray,
  concatMap,
  concatWith,
  createFromArray,
  fromValue,
} from "./container";
import { dispatch } from "./dispatcher";
import { addTo } from "./disposable";
import {
  EnumerableLike,
  enumerate,
  fromIterable as fromIterableEnumerable,
} from "./enumerable";
import { Enumerator, current, hasCurrent, move } from "./enumerator";
import {
  Factory,
  Function1,
  Function2,
  Updater,
  compose,
  flip,
  increment,
  length,
  newInstance,
  pipe,
  returns,
} from "./functions";
import { AbstractLiftable, LiftableLike } from "./liftable";
import {
  ObservableLike,
  ObservableOperator,
  Subject,
  concatAllT,
  concatT,
  createObservable,
  fromArrayT as fromArrayTObs,
  map,
  mapT,
  never,
  onNotify,
  onSubscribe,
  scan,
  scanAsync,
  switchAll,
  takeFirst,
  takeWhile,
  using,
  withLatestFrom,
  zipWithLatestFrom,
} from "./observable";
import { scheduler } from "./observer";
import { none } from "./option";
import { SchedulerLike, getDelay } from "./scheduler";
import { sinkInto } from "./source";
import { StreamableLike, stream } from "./streamable";

export type ConsumeContinue<T> = {
  readonly type: "continue";
  readonly data: T;
};
export type ConsumeDone<T> = {
  readonly type: "done";
  readonly data: T;
};

export interface AsyncEnumerableLike<T>
  extends StreamableLike<void, T, AsyncEnumerator<T>>,
    LiftableLike {
  readonly T: unknown;
  readonly type: AsyncEnumerableLike<this["T"]>;
  readonly liftableStateType: AsyncEnumerator<this["T"]>;
}

class CreateAsyncEnumerable<T>
  extends AbstractLiftable<AsyncEnumerator<T>>
  implements AsyncEnumerableLike<T>
{
  constructor(
    readonly stream: (
      scheduler: SchedulerLike,
      options?: { readonly replay?: number },
    ) => AsyncEnumerator<T>,
  ) {
    super();
  }
}

export const createAsyncEnumerable = <T>(
  stream: (
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ) => AsyncEnumerator<T>,
): AsyncEnumerableLike<T> => newInstance(CreateAsyncEnumerable, stream);

export function createLiftedAsyncEnumerable<A>(
  op1: ObservableOperator<void, A>,
): AsyncEnumerableLike<A>;
export function createLiftedAsyncEnumerable<A, B>(
  op1: ObservableOperator<void, A>,
  op2: ObservableOperator<A, B>,
): AsyncEnumerableLike<B>;
export function createLiftedAsyncEnumerable<A, B, C>(
  op1: ObservableOperator<void, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
): AsyncEnumerableLike<C>;
export function createLiftedAsyncEnumerable<A, B, C, D>(
  op1: ObservableOperator<void, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
): AsyncEnumerableLike<D>;
export function createLiftedAsyncEnumerable<A, B, C, D, E>(
  op1: ObservableOperator<void, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
): AsyncEnumerableLike<E>;
export function createLiftedAsyncEnumerable<A, B, C, D, E, F>(
  op1: ObservableOperator<void, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
): AsyncEnumerableLike<F>;
export function createLiftedAsyncEnumerable<A, B, C, D, E, F, G>(
  op1: ObservableOperator<void, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
): AsyncEnumerableLike<G>;
export function createLiftedAsyncEnumerable<A, B, C, D, E, F, G, H>(
  op1: ObservableOperator<void, A>,
  op2: ObservableOperator<A, B>,
  op3: ObservableOperator<B, C>,
  op4: ObservableOperator<C, D>,
  op5: ObservableOperator<D, E>,
  op6: ObservableOperator<E, F>,
  op7: ObservableOperator<F, G>,
  op8: ObservableOperator<G, H>,
): AsyncEnumerableLike<H>;
export function createLiftedAsyncEnumerable<A, B, C, D, E, F, G, H, I>(
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
export function createLiftedAsyncEnumerable<A, B, C, D, E, F, G, H, I, J>(
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
export function createLiftedAsyncEnumerable<A, B, C, D, E, F, G, H, I, J, K>(
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
export function createLiftedAsyncEnumerable<A, B, C, D, E, F, G, H, I, J, K, L>(
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
export function createLiftedAsyncEnumerable<T>(
  ...ops: readonly ObservableOperator<unknown, unknown>[]
): AsyncEnumerableLike<T> {
  const op = length(ops) > 1 ? (compose as any)(...ops) : ops[0];

  return createAsyncEnumerable((scheduler, options) => {
    const replay = options?.replay ?? 0;
    return newInstance(AsyncEnumerator, op, scheduler, replay);
  });
}

/**
 * Returns an `AsyncEnumerableLike` from the provided array.
 *
 * @param values The array.
 */

export const fromArray = createFromArray<
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
      scan(increment, returns(startIndex - 1)),
      concatMap({ ...mapT, ...concatAllT }, (i: number) =>
        fromValueWithDelay(values[i]),
      ),
      takeFirst({ count: endIndex - startIndex }),
    );
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
        () => enumerate(enumerable),
        compose(fromValue(fromArrayTObs), concatWith(concatT, never())),
      ),
      (_, enumerator) => enumerator,
    ),
    onNotify(move),
    takeWhile(hasCurrent),
    map(current),
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

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
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

export const consumeContinue = <T>(data: T): ConsumeContinue<T> => ({
  type: "continue",
  data,
});

export const consumeDone = <T>(data: T): ConsumeDone<T> => ({
  type: "done",
  data,
});

const consumeImpl =
  <TSrc, TAcc>(
    consumer: (
      acc: ObservableLike<TAcc>,
    ) => ObservableOperator<TSrc, ConsumeContinue<TAcc> | ConsumeDone<TAcc>>,
    initial: Factory<TAcc>,
  ): Function1<AsyncEnumerableLike<TSrc>, ObservableLike<TAcc>> =>
  enumerable =>
    createObservable(observer => {
      const enumerator = pipe(
        enumerable,
        stream(scheduler(observer)),
        addTo(observer),
      );
      const accFeedback = pipe(newInstance(Subject), addTo(observer));

      pipe(
        enumerator,
        consumer(accFeedback),
        onNotify(ev => {
          switch (ev.type) {
            case "continue":
              pipe(accFeedback, dispatch(ev.data));
              pipe(enumerator, dispatch(none));
              break;
          }
        }),
        map(ev => ev.data),
        onSubscribe(() => {
          pipe(accFeedback, dispatch(initial()));
          pipe(enumerator, dispatch(none));
        }),
        sinkInto(observer),
      );
    });

export const consume = <T, TAcc>(
  consumer: Function2<TAcc, T, ConsumeContinue<TAcc> | ConsumeDone<TAcc>>,
  initial: Factory<TAcc>,
): Function1<AsyncEnumerableLike<T>, ObservableLike<TAcc>> =>
  consumeImpl(accObs => zipWithLatestFrom(accObs, flip(consumer)), initial);

export const consumeAsync = <T, TAcc>(
  consumer: Function2<
    TAcc,
    T,
    ObservableLike<ConsumeContinue<TAcc> | ConsumeDone<TAcc>>
  >,
  initial: Factory<TAcc>,
): Function1<AsyncEnumerableLike<T>, ObservableLike<TAcc>> =>
  consumeImpl(
    accObs =>
      compose(
        zipWithLatestFrom(accObs, (next, acc) =>
          pipe(consumer(acc, next), takeFirst()),
        ),
        switchAll(),
      ),
    initial,
  );

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
      ? scanAsync<void, T>(
          asyncGeneratorScanner(generator, options),
          initialValue,
        )
      : scan(generateScanner(generator), initialValue),
  );
};
