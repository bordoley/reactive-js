import { AsyncEnumerableLike } from "./interfaces";
import {
  map,
  merge,
  ObservableLike,
  ofValue,
  onNotify,
  SubscriberLike,
  switchAll,
  takeFirst,
  takeLast,
  throwIfEmpty,
  withLatestFrom,
} from "@reactive-js/rx";
import { pipe, OperatorLike } from "@reactive-js/pipe";
import { identity } from "./identity";
import { lift } from "./lift";
import {
  ConsumeRequestType,
  ContinueRequestLike,
  ConsumeRequest,
} from "./consume";

const emptyError = Symbol("empty");

class ConsumeAsyncObservable<TReq, TSrc, TAcc> implements ObservableLike<TAcc> {
  constructor(
    private readonly enumerable: AsyncEnumerableLike<TReq, TSrc>,
    private readonly withLatestSelector: (
      next: TSrc,
      acc: TAcc,
    ) => ObservableLike<ConsumeRequest<TReq, TAcc>>,
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
        pipe(
          enumerator,
          withLatestFrom(eventEmitter, this.withLatestSelector),
          switchAll(),
        ),
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
export const consumeAsync = <TReq, TSrc, TAcc>(
  consumer: (
    acc: TAcc,
    next: TSrc,
  ) => ObservableLike<ConsumeRequest<TReq, TAcc>>,
  initial: () => ConsumeRequest<TReq, TAcc>,
): OperatorLike<
  AsyncEnumerableLike<TReq, TSrc>,
  ObservableLike<TAcc>
> => enumerable => {
  const withLatestSelector = (next: TSrc, acc: TAcc) =>
    pipe(
      consumer(acc, next),
      takeFirst(),
      throwIfEmpty(() => emptyError),
    );
  return new ConsumeAsyncObservable(enumerable, withLatestSelector, initial);
};
