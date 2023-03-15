import { ContainerOperator, Scan } from "../../../containers.js";
import { Factory, Reducer, partial, pipe } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import { AsyncEnumerableLike } from "../../../streaming.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_create from "./AsyncEnumerator.create.js";

const AsyncEnumerable_scan: Scan<
  AsyncEnumerableLike,
  ObservableLike
>["scan"] = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): ContainerOperator<AsyncEnumerableLike, T, TAcc> =>
  pipe(
    AsyncEnumerator_create,
    partial(Observable_scan<ObservableLike, T, TAcc>(reducer, initialValue)),
    AsyncEnumerable_lift(true, true),
  ) as ContainerOperator<AsyncEnumerableLike, T, TAcc>;

export default AsyncEnumerable_scan;
