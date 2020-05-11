import { pipe } from "../../functions.ts";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumerableOperator,
  EnumeratorOperator,
} from "./interfaces.ts";
import { enumerate } from "./enumerate.ts";

class LiftedEnumerableLike<T> implements EnumerableLike<T> {
  constructor(
    readonly src: EnumerableLike<any>,
    readonly operators: EnumeratorOperator<any, any>[],
  ) {}

  enumerate(): EnumeratorLike<T> {
    const src = enumerate(this.src);
    return pipe(src, ...this.operators) as EnumeratorLike<T>;
  }
}

/**
 * Returns an EnumerableOperator that applies `operator` to
 * the EnumeratorLike returned by the source when enumerated.
 *
 * @param operator
 */
export const lift = <TA, TB>(
  operator: EnumeratorOperator<TA, TB>,
): EnumerableOperator<TA, TB> => enumerable => {
  const src =
    enumerable instanceof LiftedEnumerableLike ? enumerable.src : enumerable;

  const allOperators =
    enumerable instanceof LiftedEnumerableLike
      ? [...enumerable.operators, operator]
      : [operator];

  return new LiftedEnumerableLike(src, allOperators);
};
