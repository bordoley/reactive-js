import {
  ContainerLike,
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
  pipe,
  returns,
} from "./functions";
import {
  ObservableLike,
  ObservableOperator,
  StreamLike,
  concatAllT,
  concatT,
  createObservable,
  createSubject,
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
import { getDelay } from "./scheduler";
import { sinkInto } from "./source";
import { StreamableLike, createLiftedStreamable, stream } from "./streamable";

export type ConsumeContinue<T> = {
  readonly type: "continue";
  readonly data: T;
};
export type ConsumeDone<T> = {
  readonly type: "done";
  readonly data: T;
};

export interface AsyncEnumerableLike<T>
  extends StreamableLike<void, T, AsyncEnumeratorLike<T>>,
    ContainerLike {
  readonly T: unknown;
  readonly type: AsyncEnumerableLike<this["T"]>;
}
export interface AsyncEnumeratorLike<T> extends StreamLike<void, T> {}

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

    return createLiftedStreamable(
      scan(increment, returns(startIndex - 1)),
      concatMap({ ...mapT, ...concatAllT }, (i: number) =>
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
  createLiftedStreamable(
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
  ) as AsyncEnumerableLike<T>;

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
      const accFeedback = pipe(createSubject<TAcc>(), addTo(observer));

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

  return createLiftedStreamable(
    delay > 0
      ? scanAsync<void, T>(
          asyncGeneratorScanner(generator, options),
          initialValue,
        )
      : scan(generateScanner(generator), initialValue),
  ) as AsyncEnumerableLike<T>;
};
