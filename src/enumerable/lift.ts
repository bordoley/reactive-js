import { AbstractContainer } from "../container";
import {
  EnumerableLike,
  EnumerableOperator,
  EnumeratorLike,
  EnumeratorOperator,
} from "../enumerable";
import { pipe } from "../functions";
import { enumerate } from "./enumerator";

class LiftedEnumerableLike<T>
  extends AbstractContainer
  implements EnumerableLike<T>
{
  constructor(
    readonly src: EnumerableLike<any>,
    readonly operators: readonly EnumeratorOperator<any, any>[],
  ) {
    super();
  }

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
export const lift =
  <TA, TB>(operator: EnumeratorOperator<TA, TB>): EnumerableOperator<TA, TB> =>
  enumerable => {
    const src =
      enumerable instanceof LiftedEnumerableLike ? enumerable.src : enumerable;

    const allFunctions =
      enumerable instanceof LiftedEnumerableLike
        ? [...enumerable.operators, operator]
        : [operator];

    return new LiftedEnumerableLike(src, allFunctions);
  };
