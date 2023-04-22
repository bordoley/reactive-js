import { ContainerOperator, Map } from "../../../containers.js";
import { Function1, pipe } from "../../../functions.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import { AsyncEnumerableLike } from "../../../streaming.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_lift from "./AsyncEnumerator.lift.js";

const AsyncEnumerable_map: Map<AsyncEnumerableLike>["map"] = <TA, TB>(
  selector: Function1<TA, TB>,
): ContainerOperator<AsyncEnumerableLike, TA, TB> =>
  pipe(
    selector,
    Observable_map,
    AsyncEnumerator_lift,
    AsyncEnumerable_lift(true, true),
  ) as ContainerOperator<AsyncEnumerableLike, TA, TB>;

export default AsyncEnumerable_map;
