import { ContainerOperator, ForkConcat } from "../../../containers";
import ReadonlyArrayLike__map from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map";
import { pipe } from "../../../functions";
import { ObservableLike } from "../../../rx";
import ObservableLike__mergeObservables from "./ObservableLike.mergeObservables";

const ObservableLike__forkMerge: ForkConcat<ObservableLike>["forkConcat"] =
  <TIn, TOut>(
    ...ops: readonly ContainerOperator<ObservableLike, TIn, TOut>[]
  ) =>
  (obs: ObservableLike<TIn>) =>
    pipe(
      ops,
      ReadonlyArrayLike__map(op => op(obs)),
      ObservableLike__mergeObservables,
    );

export default ObservableLike__forkMerge;
