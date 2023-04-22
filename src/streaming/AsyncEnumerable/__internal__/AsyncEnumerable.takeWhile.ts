import { ContainerOperator, TakeWhile } from "../../../containers.js";
import { Predicate, pipe } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile.js";
import { AsyncEnumerableLike } from "../../../streaming.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_lift from "./AsyncEnumerator.lift.js";

const AsyncEnumerable_takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"] = <
  T,
>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) => {
  const { inclusive = false } = options;
  return pipe(
    Observable_takeWhile<ObservableLike, T>(predicate, { inclusive }),
    AsyncEnumerator_lift,
    AsyncEnumerable_lift(true, true),
  ) as ContainerOperator<AsyncEnumerableLike, T, T>;
};

export default AsyncEnumerable_takeWhile;
