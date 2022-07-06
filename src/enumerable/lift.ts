import { Lift, TInteractive, interactive } from "../__internal__.liftable";
import { EnumerableLike, EnumerableOperator } from "../enumerable";
import { Enumerator } from "../enumerator";
import { Function1, newInstance, pipe } from "../functions";
import { AbstractEnumerable, enumerate } from "./enumerable";

class LiftedEnumerable<T> extends AbstractEnumerable<T> {
  constructor(
    readonly src: EnumerableLike<any>,
    readonly operators: readonly Function1<Enumerator<any>, Enumerator<any>>[],
  ) {
    super();
  }

  enumerate(): Enumerator<T> {
    return pipe(this.src, enumerate, ...this.operators) as Enumerator<T>;
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

    return newInstance<
      LiftedEnumerable<TB>,
      EnumerableLike<any>,
      readonly Function1<Enumerator<any>, Enumerator<any>>[]
    >(LiftedEnumerable, src, allFunctions);
  };

export const liftT: Lift<EnumerableLike<unknown>, TInteractive> = {
  lift,
  variance: interactive,
};
