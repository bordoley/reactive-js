import { ContainerOperator, ForkConcat } from "../../../containers.js";
import { pipe } from "../../../functions.js";
import ReadonlyArray_map from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { ObservableContainerLike, ObservableLike } from "../../../rx.js";
import Observable_concatObservables from "./Observable.concatObservables.js";

const Observable_forkConcat: ForkConcat<ObservableContainerLike>["forkConcat"] =

    <TIn, TOut>(
      ...ops: readonly ContainerOperator<ObservableContainerLike, TIn, TOut>[]
    ) =>
    (obs: ObservableLike<TIn>) =>
      pipe(
        ops,
        ReadonlyArray_map(op => op(obs)),
        Observable_concatObservables,
      );

export default Observable_forkConcat;
