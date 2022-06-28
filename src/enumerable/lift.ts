import { EnumerableLike, EnumerableOperator } from "../enumerable";
import { Enumerator } from "../enumerator";
import { Function1, pipe } from "../functions";
import { Covariant, Lift, covariant } from "../liftable";
import { AbstractEnumerable, enumerate } from "./enumerable";

class LiftedEnumerable<T> extends AbstractEnumerable<T> {
  constructor(
    readonly src: EnumerableLike<any>,
    readonly operators: readonly Function1<Enumerator<any>, Enumerator<any>>[],
  ) {
    super();
  }

  enumerate(): Enumerator<T> {
    const src = enumerate(this.src);
    return pipe(src, ...this.operators) as Enumerator<T>;
  }
}

/**
 * Returns an EnumerableOperator that applies `operator` to
 * the EnumeratorLike returned by the source when enumerated.
 *
 * @param operator
 */
export const lift =
  <TA, TB>(
    operator: Function1<Enumerator<TA>, Enumerator<TB>>,
  ): EnumerableOperator<TA, TB> =>
  enumerable => {
    const src =
      enumerable instanceof LiftedEnumerable ? enumerable.src : enumerable;

    const allFunctions =
      enumerable instanceof LiftedEnumerable
        ? [...enumerable.operators, operator]
        : [operator];

    return new LiftedEnumerable<TB>(src, allFunctions);
  };

export const liftT: Lift<EnumerableLike<unknown>, Covariant> = {
  variance: covariant,
  lift,
};
