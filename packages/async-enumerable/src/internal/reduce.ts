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
