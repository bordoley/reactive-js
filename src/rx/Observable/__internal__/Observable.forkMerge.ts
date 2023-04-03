import { ContainerOperator } from "../../../containers.js";
import { pipe } from "../../../functions.js";
import ReadonlyArray_map from "../../../keyedcontainers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { ForkMerge, ObservableLike } from "../../../rx.js";
import Observable_mergeObservables from "./Observable.mergeObservables.js";

const Observable_forkMerge: ForkMerge<ObservableLike>["forkMerge"] =
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
