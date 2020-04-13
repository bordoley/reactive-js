import { ObservableLike, using } from "@reactive-js/observable";
import { Operator } from "@reactive-js/pipe";
import { AsyncEnumerableLike } from "./interfaces";
import { consume, consumeAsync, ReducerRequest } from "./consume";

/**
 *
 *
 * @param reducer
 * @param initial
 */
export const reduce = <TReq, TSrc, TAcc>(
  reducer: (acc: TAcc, next: TSrc) => ReducerRequest<TReq, TAcc>,
  initial: () => ReducerRequest<TReq, TAcc>,
): Operator<
  AsyncEnumerableLike<TReq, TSrc>,
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
export const reduceAsync = <TReq, TSrc, TAcc>(
  reducer: (
    acc: TAcc,
    next: TSrc,
  ) => ObservableLike<ReducerRequest<TReq, TAcc>>,
  initial: () => ReducerRequest<TReq, TAcc>,
): Operator<
  AsyncEnumerableLike<TReq, TSrc>,
  ObservableLike<TAcc>
> => enumerable =>
  using(
    scheduler => enumerable.enumerateAsync(scheduler),
    consumeAsync(reducer, initial),
  );
