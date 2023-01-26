import { ContainerOperator, ForkConcat } from "../../../containers";
import ReadonlyArray$map from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map";
import { pipe } from "../../../functions";
import { ObservableLike } from "../../../rx";
import Observable$mergeObservables from "./Observable.mergeObservables";

const Observable$forkMerge: ForkConcat<ObservableLike>["forkConcat"] =
  <TIn, TOut>(
    ...ops: readonly ContainerOperator<ObservableLike, TIn, TOut>[]
  ) =>
  (obs: ObservableLike<TIn>) =>
    pipe(
      ops,
      ReadonlyArray$map(op => op(obs)),
      Observable$mergeObservables,
    );

export default Observable$forkMerge;
