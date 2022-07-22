import {
  Lift,
  TInteractive,
  interactive,
} from "../__internal__/containers/StatefulContainerLike";
import {
  Container,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
} from "../containers/ContainerLike";
import { none } from "../util/Option";
import { Function1, newInstance, pipeUnsafe } from "../util/functions";
import { EnumeratorLike } from "./EnumeratorLike";
import {
  InteractiveContainerLike,
  InteractiveContainerLike_interact,
} from "./InteractiveContainerLike";

/**
 * Interface for iterating a Container of items.
 */
export interface EnumerableLike<T = unknown> extends InteractiveContainerLike {
  readonly TContainerOf?: EnumerableLike<this["T"]>;
  readonly TStatefulContainerState?: EnumeratorLike<this["T"]>;
  readonly TCtx?: void;

  [InteractiveContainerLike_interact](_: void): EnumeratorLike<T>;
}

export interface FromEnumerable<C extends ContainerLike> extends Container<C> {
  fromEnumerable<T>(): Function1<EnumerableLike<T>, ContainerOf<C, T>>;
}

export interface ToEnumerable<C extends ContainerLike> extends Container<C> {
  toEnumerable<T>(): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
}

const enumerate =
  <T>() =>
  (enumerable: EnumerableLike<T>): EnumeratorLike<T> =>
    enumerable[InteractiveContainerLike_interact](none);

class LiftedEnumerable<T> implements EnumerableLike<T> {
  constructor(
    readonly src: EnumerableLike<any>,
    readonly operators: readonly Function1<
      EnumeratorLike<any>,
      EnumeratorLike<any>
    >[],
  ) {}

  [InteractiveContainerLike_interact](): EnumeratorLike<T> {
    return pipeUnsafe(
      this.src,
      enumerate<unknown>(),
      ...this.operators,
    ) as EnumeratorLike<T>;
  }
}

const lift =
  <TA, TB>(
    operator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
  ): ContainerOperator<EnumerableLike, TA, TB> =>
  (enumerable: EnumerableLike<TA>): EnumerableLike<TB> => {
    const src =
      enumerable instanceof LiftedEnumerable ? enumerable.src : enumerable;

    const allFunctions =
      enumerable instanceof LiftedEnumerable
        ? [...enumerable.operators, operator]
        : [operator];

    return newInstance<
      LiftedEnumerable<TB>,
      EnumerableLike<any>,
      readonly Function1<EnumeratorLike<any>, EnumeratorLike<any>>[]
    >(LiftedEnumerable, src, allFunctions);
  };

export const liftT: Lift<EnumerableLike<unknown>, TInteractive> = {
  lift,
  variance: interactive,
};
