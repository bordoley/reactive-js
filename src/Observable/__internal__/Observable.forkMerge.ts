import type * as Observable from "../../Observable.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipe } from "../../functions.js";
import { ContainerOperator, ObservableLike } from "../../types.js";
import Observable_mergeMany from "./Observable.mergeMany.js";

const Observable_forkMerge: Observable.Signature["forkMerge"] = (<TIn, TOut>(
    ...ops: readonly ContainerOperator<Observable.Type, TIn, TOut>[]
  ) =>
  (obs: ObservableLike<TIn>) =>
    pipe(
      ops,
      ReadonlyArray_map(op => op(obs)),
      Observable_mergeMany,
    )) as Observable.Signature["forkMerge"];

export default Observable_forkMerge;
