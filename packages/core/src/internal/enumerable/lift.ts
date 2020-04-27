import {
  EnumerableLike,
  EnumeratorLike,
  EnumerableOperator,
  EnumeratorOperator,
} from "./interfaces";
import { pipe } from "../../functions";

class LiftedEnumerableLike<T> implements EnumerableLike<T> {
  constructor(
    readonly src: EnumerableLike<any>,
    readonly operators: EnumeratorOperator<any, any>[],
  ) {}

  enumerate(): EnumeratorLike<T> {
    const src = this.src.enumerate();
    return pipe(src, ...this.operators) as EnumeratorLike<T>;
  }
}

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
