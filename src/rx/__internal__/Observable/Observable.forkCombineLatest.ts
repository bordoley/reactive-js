import { ContainerOperator, ForkZip } from "../../../containers";
import ReadonlyArray$map from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map";
import { pipe } from "../../../functions";
import { ObservableLike } from "../../../rx";
import Observable$latest from "./Observable.latest";

const Observable$forkCombineLatest: ForkZip<ObservableLike>["forkZip"] = (<T>(
    ...ops: readonly ContainerOperator<ObservableLike, T, unknown>[]
  ): ContainerOperator<ObservableLike, T, readonly unknown[]> =>
  (obs: ObservableLike<T>) =>
    Observable$latest(
      pipe(
        ops,
        ReadonlyArray$map(op => pipe(obs, op)),
      ),
      1,
    )) as ForkZip<ObservableLike>["forkZip"];

export default Observable$forkCombineLatest;
