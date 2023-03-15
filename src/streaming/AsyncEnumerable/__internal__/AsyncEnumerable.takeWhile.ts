import { ContainerOperator, TakeWhile } from "../../../containers.js";
import { Predicate, partial, pipe } from "../../../functions.js";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile.js";
import { AsyncEnumerableLike } from "../../../streaming.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_create from "./AsyncEnumerator.create.js";

const AsyncEnumerable_takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"] = <
  T,
>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) => {
  const { inclusive = false } = options;
  return pipe(
    AsyncEnumerator_create,
    partial(Observable_takeWhile<T>(predicate, { inclusive })),
    AsyncEnumerable_lift(true, true),
  ) as ContainerOperator<AsyncEnumerableLike, T, T>;
};

export default AsyncEnumerable_takeWhile;
