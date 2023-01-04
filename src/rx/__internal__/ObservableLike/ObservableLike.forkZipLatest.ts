import { ContainerOperator, ForkZip } from "../../../containers";
import ReadonlyArrayLike__map from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map";
import { pipe } from "../../../functions";
import { ObservableLike } from "../../../rx";
import ObservableLike__latest from "./ObservableLike.latest";

const ObservableLike__forkZipLatest: ForkZip<ObservableLike>["forkZip"] = (<T>(
    ...ops: readonly ContainerOperator<ObservableLike, T, unknown>[]
  ): ContainerOperator<ObservableLike, T, readonly any[]> =>
  (obs: ObservableLike<T>) =>
    ObservableLike__latest(
      pipe(
        ops,
        ReadonlyArrayLike__map(op => pipe(obs, op)),
      ),
      2,
    )) as ForkZip<ObservableLike>["forkZip"];

export default ObservableLike__forkZipLatest;
