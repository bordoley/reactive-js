import type * as Observable from "../../Observable.js";
import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { pipe } from "../../functions.js";
import { DeferredObservableLike } from "../../types.js";
import Observable_concatWith from "./Observable.concatWith.js";

const Observable_startWith: Observable.Signature["startWith"] = (<T>(
    ...values: readonly T[]
  ) =>
  // typed as DeferredObservableLike to avoid dealing with function overrides
  (observable: DeferredObservableLike<T>) =>
    pipe(
      values,
      ReadonlyArray_toObservable(),
      Observable_concatWith<T>(observable),
    )) as Observable.Signature["startWith"];

export default Observable_startWith;
