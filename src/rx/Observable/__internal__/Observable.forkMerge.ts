import { ContainerOperator, ForkConcat } from "../../../containers";
import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map";
import { pipe } from "../../../functions";
import { ObservableLike } from "../../../rx";
import Observable_mergeObservables from "./Observable.mergeObservables";

const Observable_forkMerge: ForkConcat<ObservableLike>["forkConcat"] =
  <TIn, TOut>(
    ...ops: readonly ContainerOperator<ObservableLike, TIn, TOut>[]
  ) =>
  (obs: ObservableLike<TIn>) =>
    pipe(
      ops,
      ReadonlyArray_map(op => op(obs)),
      Observable_mergeObservables,
    );

export default Observable_forkMerge;
