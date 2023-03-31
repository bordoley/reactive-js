import { ContainerOperator } from "../../../containers.js";
import { Factory, Function2, partial, pipe } from "../../../functions.js";
import { ObservableLike, ScanLast } from "../../../rx.js";
import Observable_scanLast from "../../../rx/Observable/__internal__/Observable.scanLast.js";
import { AsyncEnumerableLike } from "../../../streaming.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_create from "./AsyncEnumerator.create.js";

const AsyncEnumerable_scanLast: ScanLast<
  AsyncEnumerableLike,
  ObservableLike
>["scanLast"] = <T, TAcc>(
  reducer: Function2<TAcc, T, ObservableLike<TAcc>>,
  initialValue: Factory<TAcc>,
): ContainerOperator<AsyncEnumerableLike, T, TAcc> =>
  pipe(
    AsyncEnumerator_create(),
    partial(Observable_scanLast(reducer, initialValue)),
    AsyncEnumerable_lift(false, false),
  ) as ContainerOperator<AsyncEnumerableLike, T, TAcc>;

export default AsyncEnumerable_scanLast;
