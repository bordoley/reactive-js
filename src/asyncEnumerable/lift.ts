import { AbstractLiftable } from "../__internal__.liftable";
import {
  AsyncEnumerableLike,
  AsyncEnumerableOperator,
} from "../asyncEnumerable";
import { AsyncEnumerator } from "../asyncEnumerator";
import { Function1, newInstance, pipe } from "../functions";
import { Covariant, Lift, covariant } from "../liftable";
import { SchedulerLike } from "../scheduler";
import { stream } from "../streamable";

class LiftedAsyncEnumerable<T>
  extends AbstractLiftable<AsyncEnumerator<T>>
  implements AsyncEnumerableLike<T>
{
  constructor(
    readonly src: AsyncEnumerableLike<any>,
    readonly operators: readonly Function1<
      AsyncEnumerator<any>,
      AsyncEnumerator<any>
    >[],
  ) {
    super();
  }

  stream(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): AsyncEnumerator<T> {
    const src = pipe(this.src, stream(scheduler, options));
    return pipe(src, ...this.operators) as AsyncEnumerator<T>;
  }
}

export const lift =
  <TA, TB>(
    operator: Function1<AsyncEnumerator<TA>, AsyncEnumerator<TB>>,
  ): AsyncEnumerableOperator<TA, TB> =>
  enumerable => {
    const src =
      enumerable instanceof LiftedAsyncEnumerable ? enumerable.src : enumerable;

    const allFunctions =
      enumerable instanceof LiftedAsyncEnumerable
        ? [...enumerable.operators, operator]
        : [operator];

    return newInstance<
      LiftedAsyncEnumerable<TB>,
      AsyncEnumerableLike<any>,
      readonly Function1<AsyncEnumerator<any>, AsyncEnumerator<any>>[]
    >(LiftedAsyncEnumerable, src, allFunctions);
  };

export const liftT: Lift<AsyncEnumerableLike<unknown>, Covariant> = {
  variance: covariant,
  lift,
};
