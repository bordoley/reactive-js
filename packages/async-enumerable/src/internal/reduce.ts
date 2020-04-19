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
  onDispose,
  empty,
  withLatestFrom,
  ObservableOperator,
  takeFirst,
} from "@reactive-js/observable";
import { compose, pipe, Operator } from "@reactive-js/pipe";
import { identity } from "./identity";
import { AsyncEnumerableLike, AsyncEnumeratorLike } from "./interfaces";
import { lift } from "./lift";
import { SchedulerLike } from "@reactive-js/scheduler";

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

const createAcc = <T, TAcc>(enumerator: AsyncEnumeratorLike<void, T>) => {
  const onNotifyDispatch = (_: ContinueRequest<TAcc>) => {
    enumerator.dispatch();
  };

  return pipe(
    identity<ContinueRequest<TAcc>>(),
    lift(onNotify(onNotifyDispatch)),
  );
};

const createResources = <T, TAcc>(enumerator: AsyncEnumeratorLike<void, T>) => (
  scheduler: SchedulerLike,
): [
  AsyncEnumeratorLike<ContinueRequest<TAcc>, ContinueRequest<TAcc>>,
  AsyncEnumeratorLike<ObservableLike<T>, ObservableLike<T>>,
] => [
  createAcc<T, TAcc>(enumerator).enumerateAsync(scheduler),
  identity<ObservableLike<T>>().enumerateAsync(scheduler),
];

const createFactory = <T, TAcc>(
  withLatestFrom: (
    acc: ObservableLike<TAcc>,
  ) => ObservableOperator<T, ReducerRequest<TAcc>>,
  initial: () => TAcc,
  enumerator: AsyncEnumeratorLike<void, T>,
) => (
  request: AsyncEnumeratorLike<ContinueRequest<TAcc>, ContinueRequest<TAcc>>,
  src: AsyncEnumeratorLike<ObservableLike<T>, ObservableLike<T>>,
): ObservableLike<TAcc> => {
  const mapReducerRequestToAcc: ObservableOperator<
    ReducerRequest<TAcc>,
    TAcc
  > = map(({ acc }) => acc);

  const doOnDispose = (_: unknown) => {
    src.dispose();
  };

  const setupOnSubscribe = () => {
    const next = pipe(enumerator, onDispose(doOnDispose));
    src.dispatch(next);
  };

  const notifySrc = (next: ReducerRequest<TAcc>) => {
    if (next.type === ReducerRequestType.Continue) {
      request.dispatch(next);
    } else {
      src.dispatch(empty());
    }
  };

  return pipe(
    merge(
      compute(() => ({
        type: ReducerRequestType.Continue,
        acc: initial(),
      })),
      pipe(src, switchAll(), withLatestFrom(mapReducerRequestToAcc(request))),
    ),
    onNotify(notifySrc),
    mapReducerRequestToAcc,
    takeLast(),
    onSubscribe(setupOnSubscribe),
  );
};

const consumeImpl = <T, TAcc>(
  withLatestFrom: (
    acc: ObservableLike<TAcc>,
  ) => ObservableOperator<T, ReducerRequest<TAcc>>,
  initial: () => TAcc,
): Operator<AsyncEnumeratorLike<void, T>, ObservableLike<TAcc>> => enumerator =>
  using(
    createResources(enumerator),
    createFactory<T, TAcc>(withLatestFrom, initial, enumerator),
  );

const consume = <T, TAcc>(
  reducer: (acc: TAcc, next: T) => ReducerRequest<TAcc>,
  initial: () => TAcc,
): Operator<AsyncEnumeratorLike<void, T>, ObservableLike<TAcc>> => {
  const withLatestSelector = (next: T, acc: TAcc) => reducer(acc, next);

  return consumeImpl(acc => withLatestFrom(acc, withLatestSelector), initial);
};

const consumeAsync = <T, TAcc>(
  reducer: (acc: TAcc, next: T) => ObservableLike<ReducerRequest<TAcc>>,
  initial: () => TAcc,
): Operator<AsyncEnumeratorLike<void, T>, ObservableLike<TAcc>> => {
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
): Operator<
  AsyncEnumerableLike<void, TSrc>,
  ObservableLike<TAcc>
> => enumerable =>
  using(
    scheduler => enumerable.enumerateAsync(scheduler),
    consume(reducer, initial),
  );

/**
 *
 *
 * @param reducer
 * @param initial
 */
export const reduceAsync = <TSrc, TAcc>(
  reducer: (acc: TAcc, next: TSrc) => ObservableLike<ReducerRequest<TAcc>>,
  initial: () => TAcc,
): Operator<
  AsyncEnumerableLike<void, TSrc>,
  ObservableLike<TAcc>
> => enumerable =>
  using(
    scheduler => enumerable.enumerateAsync(scheduler),
    consumeAsync(reducer, initial),
  );

