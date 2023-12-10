import { DeferredSideEffectsObservableLike } from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_concatWith from "./Observable.concatWith.js";
import Observable_fromReadonlyArray from "./Observable.fromReadonlyArray.js";

const Observable_startWith: Observable.Signature["startWith"] = (<T>(
    ...values: readonly T[]
  ) =>
  // typed as DeferredSideEffectsObservableLike to avoid dealing with function overrides
  (observable: DeferredSideEffectsObservableLike<T>) =>
    pipe(
      values,
      Observable_fromReadonlyArray(),
      Observable_concatWith<T>(observable),
    )) as Observable.Signature["startWith"];

export default Observable_startWith;
