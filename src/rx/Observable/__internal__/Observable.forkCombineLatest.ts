import { ContainerOperator, ForkZip } from "../../../containers.js";
import { pipe } from "../../../functions.js";
import ReadonlyArray_map from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { ObservableContainer, ObservableLike } from "../../../rx.js";
import Observable_latest from "./Observable.latest.js";

const Observable_forkCombineLatest: ForkZip<ObservableContainer>["forkZip"] = (<
    T,
  >(
    ...ops: readonly ContainerOperator<ObservableContainer, T, unknown>[]
  ): ContainerOperator<ObservableContainer, T, readonly unknown[]> =>
  (obs: ObservableLike<T>) =>
    Observable_latest(
      pipe(
        ops,
        ReadonlyArray_map(op => op(obs)),
      ),
      1,
    )) as ForkZip<ObservableContainer>["forkZip"];

export default Observable_forkCombineLatest;
