import type * as Observable from "../../Observable.js";
import ReadonlyArray_toRunnable from "../../ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { pipe } from "../../functions.js";
import { DeferredObservableLike } from "../../types.js";
import Observable_concatWith from "./Observable.concatWith.js";

const Observable_endWith: Observable.Signature["endWith"] = (<T>(
    ...values: readonly T[]
  ) =>
  // typed as DeferredObservableLike to avoid dealing with function overrides
  (observable: DeferredObservableLike<T>) =>
    pipe(
      observable,
      Observable_concatWith<T>(pipe(values, ReadonlyArray_toRunnable())),
    )) as Observable.Signature["endWith"];

export default Observable_endWith;
