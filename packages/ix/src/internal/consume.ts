import { AsyncEnumerableLike } from "./interfaces";
import {
  map,
  merge,
  ObservableLike,
  ofValue,
  onNotify,
  SubscriberLike,
  takeLast,
  withLatestFrom,
} from "@reactive-js/rx";
import { pipe, OperatorLike } from "@reactive-js/pipe";
import { identity } from "./identity";
import { lift } from "./lift";

/**
 * 
 */
export const enum ConsumeRequestType {
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
  readonly type: ConsumeRequestType.Continue;
  
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
  readonly type: ConsumeRequestType.Done;

  /**
   * 
   */
  readonly acc: TAcc;
}

/**
 * 
 */
export type ConsumeRequest<TReq, TAcc> =
  | ContinueRequestLike<TReq, TAcc>
  | DoneRequestLike<TAcc>;

class ConsumeObservable<TReq, TSrc, TAcc> implements ObservableLike<TAcc> {
  constructor(
    private readonly enumerable: AsyncEnumerableLike<TReq, TSrc>,
    private readonly withLatestSelector: (
      next: TSrc,
      acc: TAcc,
    ) => ConsumeRequest<TReq, TAcc>,
    private readonly initial: () => ConsumeRequest<TReq, TAcc>,
  ) {}

  subscribe(subscriber: SubscriberLike<TAcc>) {
    const enumerator = this.enumerable.enumerateAsync(subscriber);

    const eventEmitter = pipe(
      identity<ContinueRequestLike<TReq, TAcc>>(),
      lift(
        onNotify(continueRequest => {
          enumerator.notifySafe(continueRequest.req);
        }),
      ),
      lift(map(({ acc }) => acc)),
    ).enumerateAsync(subscriber);

    subscriber.add(enumerator).add(eventEmitter);

    pipe(
      merge(
        ofValue(this.initial()),
        pipe(enumerator, withLatestFrom(eventEmitter, this.withLatestSelector)),
      ),
      onNotify(next => {
        if (next.type === ConsumeRequestType.Continue) {
          eventEmitter.notifySafe(next);
        } else {
          enumerator.dispose();
        }
      }),
      map(({ acc }) => acc),
      takeLast(),
    ).subscribe(subscriber);
  }
}

/**
 * 
 * 
 * @param consumer 
 * @param initial 
 */
export const consume = <TReq, TSrc, TAcc>(
  consumer: (acc: TAcc, next: TSrc) => ConsumeRequest<TReq, TAcc>,
  initial: () => ConsumeRequest<TReq, TAcc>,
): OperatorLike<
  AsyncEnumerableLike<TReq, TSrc>,
  ObservableLike<TAcc>
> => enumerable => {
  const withLatestSelector = (next: TSrc, acc: TAcc) => consumer(acc, next);
  return new ConsumeObservable(enumerable, withLatestSelector, initial);
};
