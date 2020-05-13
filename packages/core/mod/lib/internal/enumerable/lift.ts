import { pipe } from "../../functions.ts";
import { enumerate } from "./enumerator.ts";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumerableFunction,
  EnumeratorFunction,
} from "./interfaces.ts";

class LiftedEnumerableLike<T> implements EnumerableLike<T> {
  constructor(
    readonly src: EnumerableLike<any>,
    readonly operators: EnumeratorFunction<any, any>[],
  ) {}

  enumerate(): EnumeratorLike<T> {
    const src = enumerate(this.src);
    return pipe(src, ...this.operators) as EnumeratorLike<T>;
  }
}

/**
 * Returns an EnumerableFunction that applies `operator` to
 * the EnumeratorLike returned by the source when enumerated.
 *
 * @param operator
 */
export const lift = <TA, TB>(
  operator: EnumeratorFunction<TA, TB>,
): EnumerableFunction<TA, TB> => enumerable => {
  const src =
    enumerable instanceof LiftedEnumerableLike ? enumerable.src : enumerable;

  const allFunctions =
    enumerable instanceof LiftedEnumerableLike
      ? [...enumerable.operators, operator]
      : [operator];

  return new LiftedEnumerableLike(src, allFunctions);
};
