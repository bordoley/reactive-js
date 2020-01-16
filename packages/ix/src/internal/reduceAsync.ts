import { AsyncEnumerableLike } from "./interfaces";
import {
  map,
  merge,
  ObservableLike,
  ofValue,
  onNotify,
  SubscriberLike,
  switchAll,
  takeLast,
  withLatestFrom,
} from "@reactive-js/rx";
import { pipe, OperatorLike } from "@reactive-js/pipe";
import { identity } from "./identity";
import { lift } from "./lift";
import {
  ReducerRequestType,
  ContinueRequestLike,
  ReducerRequest,
} from "./reduce";

class ReduceAsyncObservable<TReq, TSrc, TAcc> implements ObservableLike<TAcc> {
  constructor(
    private readonly enumerable: AsyncEnumerableLike<TReq, TSrc>,
    private readonly withLatestSelector: (
      next: TSrc,
      acc: TAcc,
    ) => ObservableLike<ReducerRequest<TReq, TAcc>>,
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
      lift(map(({ acc }) => acc)),
    ).enumerateAsync(subscriber);

    subscriber.add(enumerator).add(eventEmitter);

    pipe(
      merge(
        ofValue(this.initial()),
        pipe(
          enumerator,
          withLatestFrom(eventEmitter, this.withLatestSelector),
          switchAll,
        ),
      ),
      onNotify(next => {
        if (next.type === ReducerRequestType.Continue) {
          eventEmitter.dispatch(next);
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
 * @param reducer
 * @param initial
 */
export const reduceAsync = <TReq, TSrc, TAcc>(
  reducer: (
    acc: TAcc,
    next: TSrc,
  ) => ObservableLike<ReducerRequest<TReq, TAcc>>,
  initial: () => ReducerRequest<TReq, TAcc>,
): OperatorLike<
  AsyncEnumerableLike<TReq, TSrc>,
  ObservableLike<TAcc>
> => enumerable => {
  const withLatestSelector = (next: TSrc, acc: TAcc) => reducer(acc, next);
  return new ReduceAsyncObservable(enumerable, withLatestSelector, initial);
};
