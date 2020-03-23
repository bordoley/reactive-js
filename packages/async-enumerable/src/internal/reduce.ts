import { AsyncEnumerableLike } from "./interfaces";
import {
  enumerate,
  map as mapObs,
  merge,
  ObservableLike,
  ofValue,
  onNotify,
  SubscriberLike,
  takeLast,
  withLatestFrom,
} from "@reactive-js/observable";
import { pipe, OperatorLike } from "@reactive-js/pipe";
import { identity } from "./identity";
import { lift } from "./lift";
import { map } from "./map";

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

class ReduceObservable<TReq, TSrc, TAcc> implements ObservableLike<TAcc> {
  readonly enumerate = enumerate;
  readonly isSynchronous = false;

  constructor(
    private readonly enumerable: AsyncEnumerableLike<TReq, TSrc>,
    private readonly withLatestSelector: (
      next: TSrc,
      acc: TAcc,
    ) => ReducerRequest<TReq, TAcc>,
    private readonly initial: () => ReducerRequest<TReq, TAcc>,
  ) {}

  subscribe(subscriber: SubscriberLike<TAcc>) {
    const enumerator = this.enumerable.enumerateAsync(subscriber);

    const eventEmitter = pipe(
      identity<ContinueRequestLike<TReq, TAcc>>(),
      lift(
        onNotify(continueRequest => {
          enumerator.dispatch(continueRequest.req);
        }),
      ),
      map(({ acc }) => acc),
    ).enumerateAsync(subscriber);

    subscriber.add(enumerator).add(eventEmitter);

    pipe(
      merge(
        ofValue(this.initial()),
        pipe(enumerator, withLatestFrom(eventEmitter, this.withLatestSelector)),
      ),
      onNotify(next => {
        if (next.type === ReducerRequestType.Continue) {
          eventEmitter.dispatch(next);
        } else {
          enumerator.dispose();
        }
      }),
      mapObs(({ acc }) => acc),
      takeLast(),
    ).subscribe(subscriber);
  }
}

/**
 *
 *
 * @param reducer
 * @param initial
 */
export const reduce = <TReq, TSrc, TAcc>(
  reducer: (acc: TAcc, next: TSrc) => ReducerRequest<TReq, TAcc>,
  initial: () => ReducerRequest<TReq, TAcc>,
): OperatorLike<
  AsyncEnumerableLike<TReq, TSrc>,
  ObservableLike<TAcc>
> => enumerable => {
  const withLatestSelector = (next: TSrc, acc: TAcc) => reducer(acc, next);
  return new ReduceObservable(enumerable, withLatestSelector, initial);
};
