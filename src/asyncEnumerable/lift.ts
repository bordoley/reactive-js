import { Lift, TInteractive, interactive } from "../__internal__.liftable";
import {
  AsyncEnumerableLike,
  AsyncEnumerableOperator,
} from "../asyncEnumerable";
import { AsyncEnumeratorLike } from "../asyncEnumerator";
import { Function1, newInstance, pipe, raise } from "../functions";
import { DefaultObservable } from "../observable";
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

  get TLiftableContainerState(): AsyncEnumeratorLike<this["T"]> {
    return raise();
  }

  get TCtx(): SchedulerLike {
    return raise();
  }

  readonly observableType: DefaultObservable = 0;

  interact(scheduler: SchedulerLike): AsyncEnumeratorLike<T> {
    return pipe(this, stream(scheduler));
  }

  abstract stream(
    this: StreamableLike<void, T, AsyncEnumeratorLike<T>>,
    scheduler: SchedulerLike,
    options?: { readonly replay?: number | undefined } | undefined,
  ): AsyncEnumeratorLike<T>;
}

class LiftedAsyncEnumerable<T> extends AbstractAsyncEnumerable<T> {
  constructor(
    readonly src: AsyncEnumerableLike<any>,
    readonly operators: readonly Function1<
      AsyncEnumeratorLike<any>,
      AsyncEnumeratorLike<any>
    >[],
  ) {
    super();
  }

  stream(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): AsyncEnumeratorLike<T> {
    const src = pipe(this.src, stream(scheduler, options));
    return pipe(src, ...this.operators) as AsyncEnumeratorLike<T>;
  }
}

export const lift =
  <TA, TB>(
    operator: Function1<AsyncEnumeratorLike<TA>, AsyncEnumeratorLike<TB>>,
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
      readonly Function1<AsyncEnumeratorLike<any>, AsyncEnumeratorLike<any>>[]
    >(LiftedAsyncEnumerable, src, allFunctions);
  };

export const liftT: Lift<AsyncEnumerableLike<unknown>, TInteractive> = {
  lift,
  variance: interactive,
};
