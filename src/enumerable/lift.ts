import { EnumerableLike, EnumerableOperator } from "../enumerable";
import { Function1, pipe } from "../functions";
import { AbstractLiftable, Lift } from "../liftable";
import { Enumerator, enumerate } from "./enumerator";

class LiftedEnumerableLike<T>
  extends AbstractLiftable<Enumerator<T>>
  implements EnumerableLike<T>
{
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
      enumerable instanceof LiftedEnumerableLike ? enumerable.src : enumerable;

    const allFunctions =
      enumerable instanceof LiftedEnumerableLike
        ? [...enumerable.operators, operator]
        : [operator];

    return new LiftedEnumerableLike<TB>(src, allFunctions);
  };

export const liftT: Lift<EnumerableLike<unknown>, "covariant"> = {
  variance: "covariant",
  lift,
};
