import {
  fromIterable as fromIterableEnumerable,
  EnumeratorLike,
} from "./enumerable.ts";
import { compose, pipe, Operator, returns } from "./functions.ts";
import {
  compute,
  map,
  merge,
  ObservableLike,
  onNotify,
  switchAll,
  takeLast,
  using,
  onSubscribe,
  empty,
  withLatestFrom,
  ObservableOperator,
  takeFirst,
  scan,
  StreamLike,
  takeWhile,
} from "./observable.ts";
import { SchedulerLike } from "./scheduler.ts";
import {
  onNotify as onNotifyStream,
  StreamableLike,
  identity,
  createStreamable,
} from "./streamable.ts";

export interface AsyncEnumerableLike<T> extends StreamableLike<void, T> {}

/**
 *
 */
export const enum ReducerRequestType {
  /**
   *
   */
  Continue = 1,

  /**
   *
   */
  Done = 2,
}

/**
 *
 */
export type ContinueRequest<TAcc> = {
  /**
   *
   */
  readonly type: ReducerRequestType.Continue;

  /**
   *
   */
  readonly acc: TAcc;
};

/**
 *
 */
export type DoneRequest<TAcc> = {
  /**
   *
   */
  readonly type: ReducerRequestType.Done;

  /**
   *
   */
  readonly acc: TAcc;
};

/**
 *
 */
export type ReducerRequest<TAcc> = ContinueRequest<TAcc> | DoneRequest<TAcc>;

const createAcc = <T, TAcc>(enumerator: StreamLike<void, T>) => {
  const onNotifyDispatch = (_: ContinueRequest<TAcc>) => {
    enumerator.dispatch();
  };

  return pipe(
    identity<ContinueRequest<TAcc>>(),
    onNotifyStream(onNotifyDispatch),
  );
};

const createResources = <T, TAcc>(enumerator: StreamLike<void, T>) => (
  scheduler: SchedulerLike,
): [
  StreamLike<ContinueRequest<TAcc>, ContinueRequest<TAcc>>,
  StreamLike<ObservableLike<T>, ObservableLike<T>>,
] => [
  createAcc<T, TAcc>(enumerator).stream(scheduler),
  identity<ObservableLike<T>>().stream(scheduler),
];

const createFactory = <T, TAcc>(
  withLatestFrom: (
    acc: ObservableLike<TAcc>,
  ) => ObservableOperator<T, ReducerRequest<TAcc>>,
  initial: () => TAcc,
  enumerator: StreamLike<void, T>,
) => (
  request: StreamLike<ContinueRequest<TAcc>, ContinueRequest<TAcc>>,
  src: StreamLike<ObservableLike<T>, ObservableLike<T>>,
): ObservableLike<TAcc> => {
  const mapReducerRequestToAcc: ObservableOperator<
    ReducerRequest<TAcc>,
    TAcc
  > = map(({ acc }) => acc);

  enumerator.add(_ => {
    src.dispose();
  });

  const notifySrc = (next: ReducerRequest<TAcc>) => {
    if (next.type === ReducerRequestType.Continue) {
      request.dispatch(next);
    } else {
      src.dispatch(empty());
    }
  };

  return pipe(
    merge(
      compute()(() => ({
        type: ReducerRequestType.Continue,
        acc: initial(),
      })),
      pipe(src, switchAll(), withLatestFrom(mapReducerRequestToAcc(request))),
    ),
    onNotify(notifySrc),
    mapReducerRequestToAcc,
    takeLast(),
    onSubscribe(() => {
      src.dispatch(enumerator);
    }),
  );
};

const consumeImpl = <T, TAcc>(
  withLatestFrom: (
    acc: ObservableLike<TAcc>,
  ) => ObservableOperator<T, ReducerRequest<TAcc>>,
  initial: () => TAcc,
): Operator<StreamLike<void, T>, ObservableLike<TAcc>> => enumerator =>
  using(
    createResources(enumerator),
    createFactory<T, TAcc>(withLatestFrom, initial, enumerator),
  );

const consume = <T, TAcc>(
  reducer: (acc: TAcc, next: T) => ReducerRequest<TAcc>,
  initial: () => TAcc,
): Operator<StreamLike<void, T>, ObservableLike<TAcc>> => {
  const withLatestSelector = (next: T, acc: TAcc) => reducer(acc, next);

  return consumeImpl(acc => withLatestFrom(acc, withLatestSelector), initial);
};

const consumeAsync = <T, TAcc>(
  reducer: (acc: TAcc, next: T) => ObservableLike<ReducerRequest<TAcc>>,
  initial: () => TAcc,
): Operator<StreamLike<void, T>, ObservableLike<TAcc>> => {
  const withLatestSelector = (next: T, acc: TAcc) =>
    pipe(reducer(acc, next), takeFirst());

  return consumeImpl(
    acc => compose(withLatestFrom(acc, withLatestSelector), switchAll()),
    initial,
  );
};

/**
 *
 *
 * @param reducer
 * @param initial
 */
export const reduce = <TSrc, TAcc>(
  reducer: (acc: TAcc, next: TSrc) => ReducerRequest<TAcc>,
  initial: () => TAcc,
): Operator<AsyncEnumerableLike<TSrc>, ObservableLike<TAcc>> => enumerable =>
  using(scheduler => enumerable.stream(scheduler), consume(reducer, initial));

/**
 *
 *
 * @param reducer
 * @param initial
 */
export const reduceAsync = <TSrc, TAcc>(
  reducer: (acc: TAcc, next: TSrc) => ObservableLike<ReducerRequest<TAcc>>,
  initial: () => TAcc,
): Operator<AsyncEnumerableLike<TSrc>, ObservableLike<TAcc>> => enumerable =>
  using(
    scheduler => enumerable.stream(scheduler),
    consumeAsync(reducer, initial),
  );

const fromArrayScanner = (acc: number, _: void): number => acc + 1;

/**
 * Returns an `AsyncEnumerableLike` from the provided array.
 *
 * @param values The array.
 */
export const fromArray = <T>(values: readonly T[]): AsyncEnumerableLike<T> => {
  const operator: ObservableOperator<void, T> = compose(
    scan(fromArrayScanner, returns(-1)),
    map((i: number) => values[i]),
    takeFirst(values.length),
  );

  return createStreamable(operator);
};

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromIterable = <T>(
  iterable: Iterable<T>,
): AsyncEnumerableLike<T> => {
  const enumerable = fromIterableEnumerable(iterable);
  const operator = (obs: ObservableLike<void>) => {
    return pipe(
      obs,
      withLatestFrom(
        compute<EnumeratorLike<T>>()(() => enumerable.enumerate()),
        (_, enumerator) => enumerator,
      ),
      onNotify(enumerator => enumerator.move()),
      takeWhile(enumerator => enumerator.hasCurrent),
      map(enumerator => enumerator.current),
    );
  };

  return createStreamable(operator);
};

const generateScanner = <T>(generator: (acc: T) => T) => (acc: T, _: unknown) =>
  generator(acc);

/**
 * Generates an `AsyncEnumerableLike` sequence from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator The generator function.
 * @param initialValue Factory function to generate the initial accumulator.
 */
export const generate = <T>(
  generator: (acc: T) => T,
  initialValue: () => T,
): AsyncEnumerableLike<T> =>
  createStreamable(scan(generateScanner(generator), initialValue));
