import { Lift, TInteractive, interactive } from "../__internal__.liftable";
import {
  AsyncEnumerableLike,
  AsyncEnumerableOperator,
} from "../asyncEnumerable";
import { AsyncEnumerator } from "../asyncEnumerator";
import { Function1, newInstance, pipe, raise } from "../functions";
import { SchedulerLike } from "../scheduler";
import { StreamableLike, stream } from "../streamable";

export abstract class AbstractAsyncEnumerable<T>
  implements AsyncEnumerableLike<T>
{
  get T(): T {
    return raise();
  }

  get TContainerOf(): AsyncEnumerableLike<this["T"]> {
    return this;
  }

  get TLiftableContainerState(): AsyncEnumerator<this["T"]> {
    return raise();
  }

  get TCtx(): SchedulerLike {
    return raise();
  }

  source(scheduler: SchedulerLike): AsyncEnumerator<T> {
    return pipe(this, stream(scheduler));
  }

  abstract stream(
    this: StreamableLike<void, T, AsyncEnumerator<T>>,
    scheduler: SchedulerLike,
    options?: { readonly replay?: number | undefined } | undefined,
  ): AsyncEnumerator<T>;
}

class LiftedAsyncEnumerable<T> extends AbstractAsyncEnumerable<T> {
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

export const liftT: Lift<AsyncEnumerableLike<unknown>, TInteractive> = {
  lift,
  variance: interactive,
};
