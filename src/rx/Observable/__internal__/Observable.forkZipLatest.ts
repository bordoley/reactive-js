import { ContainerOperator, ForkZip } from "../../../containers";
import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map";
import { pipe } from "../../../functions";
import { ObservableLike } from "../../../rx";
import Observable_latest from "./Observable.latest";

const Observable_forkZipLatest: ForkZip<ObservableLike>["forkZip"] = (<T>(
    ...ops: readonly ContainerOperator<ObservableLike, T, unknown>[]
  ): ContainerOperator<ObservableLike, T, readonly any[]> =>
  (obs: ObservableLike<T>) =>
    Observable_latest(
      pipe(
        ops,
        ReadonlyArray_map(op => pipe(obs, op)),
      ),
      2,
    )) as ForkZip<ObservableLike>["forkZip"];

export default Observable_forkZipLatest;
