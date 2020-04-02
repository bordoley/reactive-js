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

const consumeImpl = <TReq, T, TAcc>(
  withLatestFrom: (
    acc: ObservableLike<TAcc>,
  ) => ObservableOperatorLike<T, ReducerRequest<TReq, TAcc>>,
  initial: () => ReducerRequest<TReq, TAcc>,
): OperatorLike<AsyncEnumeratorLike<TReq, T>, ObservableLike<TAcc>> => {
  return enumerator =>
    using(
      scheduler => [
        pipe(
          identity<ContinueRequestLike<TReq, TAcc>>(),
          lift(
            onNotify(continueRequest => {
              enumerator.dispatch(continueRequest.req);
            }),
          ),
        ).enumerateAsync(scheduler),
        identity<ObservableLike<T>>().enumerateAsync(scheduler),
      ],
      (
        acc: AsyncEnumeratorLike<
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

        return pipe(
          merge(
            compute(initial),
            pipe(
              src,
              switchAll(),
              pipe(acc, mapReducerRequestToAcc, withLatestFrom),
            ),
          ),
          onNotify(next => {
            if (next.type === ReducerRequestType.Continue) {
              acc.dispatch(next);
            } else {
              src.dispatch(empty());
            }
          }),
          mapReducerRequestToAcc,
          takeLast(),
          onSubscribe(setupOnSubscribe),
        );
      },
    );
};

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
