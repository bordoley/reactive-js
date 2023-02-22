import { ContainerOperator, ForkZip } from "../../../containers.js";
import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipe } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_latest from "./Observable.latest.js";

const Observable_forkCombineLatest: ForkZip<ObservableLike>["forkZip"] = (<T>(
    ...ops: readonly ContainerOperator<ObservableLike, T, unknown>[]
  ): ContainerOperator<ObservableLike, T, readonly unknown[]> =>
  (obs: ObservableLike<T>) =>
    Observable_latest(
      pipe(
        ops,
        ReadonlyArray_map(op => pipe(obs, op)),
      ),
      1,
    )) as ForkZip<ObservableLike>["forkZip"];

export default Observable_forkCombineLatest;
