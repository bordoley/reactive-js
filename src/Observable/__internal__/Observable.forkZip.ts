import type * as Observable from "../../Observable.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipe } from "../../functions.js";
import { ContainerOperator, ObservableLike } from "../../types.js";
import Observable_zipObservables from "./Observable.zipMany.js";

const Observable_forkZip: Observable.Signature["forkZip"] = (<TIn, TOut>(
    ...ops: readonly ContainerOperator<Observable.Type, TIn, TOut>[]
  ) =>
  (obs: ObservableLike<TIn>) =>
    pipe(
      ops,
      ReadonlyArray_map(op => op(obs)),
      Observable_zipObservables,
    )) as Observable.Signature["forkZip"];

export default Observable_forkZip;
