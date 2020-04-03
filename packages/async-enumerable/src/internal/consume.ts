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
  ObservableOperatorLike,
} from "@reactive-js/observable";
import { compose, pipe, OperatorLike } from "@reactive-js/pipe";
import { identity } from "./identity";
import { AsyncEnumeratorLike } from "./interfaces";
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
export interface ContinueRequestLike<TReq, TAcc> {
  /**
   *
   */
  readonly type: ReducerRequestType.Continue;

  /**
   *
   */
  readonly req: TReq;

  /**
   *
   */
  readonly acc: TAcc;
}

/**
 *
 */
export interface DoneRequestLike<TAcc> {
  /**
   *
   */
  readonly type: ReducerRequestType.Done;

  /**
   *
   */
  readonly acc: TAcc;
}

/**
 *
 */
export type ReducerRequest<TReq, TAcc> =
  | ContinueRequestLike<TReq, TAcc>
  | DoneRequestLike<TAcc>;

const createAcc = <TReq, T, TAcc>(enumerator: AsyncEnumeratorLike<TReq, T>) => {
  const onNotifyDispatch = (
    continueRequest: ContinueRequestLike<TReq, TAcc>,
  ) => {
    enumerator.dispatch(continueRequest.req);
  };

  return pipe(
    identity<ContinueRequestLike<TReq, TAcc>>(),
    lift(onNotify(onNotifyDispatch)),
  );
};

const createResources = <TReq, T, TAcc>(
  enumerator: AsyncEnumeratorLike<TReq, T>,
) => (
  scheduler: SchedulerLike,
): [
  AsyncEnumeratorLike<
    ContinueRequestLike<TReq, TAcc>,
    ContinueRequestLike<TReq, TAcc>
  >,
  AsyncEnumeratorLike<ObservableLike<T>, ObservableLike<T>>,
] => [
  createAcc<TReq, T, TAcc>(enumerator).enumerateAsync(scheduler),
  identity<ObservableLike<T>>().enumerateAsync(scheduler),
];

const createFactory = <TReq, T, TAcc>(
  withLatestFrom: (
    acc: ObservableLike<TAcc>,
  ) => ObservableOperatorLike<T, ReducerRequest<TReq, TAcc>>,
  initial: () => ReducerRequest<TReq, TAcc>,
  enumerator: AsyncEnumeratorLike<TReq, T>,
) => (
  request: AsyncEnumeratorLike<
    ContinueRequestLike<TReq, TAcc>,
    ContinueRequestLike<TReq, TAcc>
  >,
  src: AsyncEnumeratorLike<ObservableLike<T>, ObservableLike<T>>,
): ObservableLike<TAcc> => {
  const mapReducerRequestToAcc: ObservableOperatorLike<
    ReducerRequest<TReq, TAcc>,
    TAcc
  > = map(({ acc }) => acc);

  const doOnDispose = (_: unknown) => {
    src.dispose();
  };

  const setupOnSubscribe = () => {
    const next = pipe(enumerator, onDispose(doOnDispose));
    src.dispatch(next);
  };

  const notifySrc = (next: ReducerRequest<TReq, TAcc>) => {
    if (next.type === ReducerRequestType.Continue) {
      request.dispatch(next);
    } else {
      src.dispatch(empty());
    }
  };

  return pipe(
    merge(
      compute(initial),
      pipe(src, switchAll(), withLatestFrom(mapReducerRequestToAcc(request))),
    ),
    onNotify(notifySrc),
    mapReducerRequestToAcc,
    takeLast(),
    onSubscribe(setupOnSubscribe),
  );
};

const consumeImpl = <TReq, T, TAcc>(
  withLatestFrom: (
    acc: ObservableLike<TAcc>,
  ) => ObservableOperatorLike<T, ReducerRequest<TReq, TAcc>>,
  initial: () => ReducerRequest<TReq, TAcc>,
): OperatorLike<
  AsyncEnumeratorLike<TReq, T>,
  ObservableLike<TAcc>
> => enumerator =>
  using(
    createResources(enumerator),
    createFactory<TReq, T, TAcc>(withLatestFrom, initial, enumerator),
  );

export const consume = <TReq, T, TAcc>(
  reducer: (acc: TAcc, next: T) => ReducerRequest<TReq, TAcc>,
  initial: () => ReducerRequest<TReq, TAcc>,
): OperatorLike<AsyncEnumeratorLike<TReq, T>, ObservableLike<TAcc>> => {
  const withLatestSelector = (next: T, acc: TAcc) => reducer(acc, next);

  return consumeImpl(acc => withLatestFrom(acc, withLatestSelector), initial);
};

export const consumeAsync = <TReq, T, TAcc>(
  reducer: (acc: TAcc, next: T) => ObservableLike<ReducerRequest<TReq, TAcc>>,
  initial: () => ReducerRequest<TReq, TAcc>,
): OperatorLike<AsyncEnumeratorLike<TReq, T>, ObservableLike<TAcc>> => {
  const withLatestSelector = (next: T, acc: TAcc) => reducer(acc, next);

  return consumeImpl(
    acc => compose(withLatestFrom(acc, withLatestSelector), switchAll()),
    initial,
  );
};
