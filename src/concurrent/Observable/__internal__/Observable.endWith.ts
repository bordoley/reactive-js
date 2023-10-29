import { DeferredObservableLike } from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_concatWith from "./Observable.concatWith.js";
import Observable_fromReadonlyArray from "./Observable.fromReadonlyArray.js";

const Observable_endWith: Observable.Signature["endWith"] = (<T>(
    ...values: readonly T[]
  ) =>
  // typed as DeferredObservableLike to avoid dealing with function overrides
  (observable: DeferredObservableLike<T>) =>
    pipe(
      observable,
      Observable_concatWith<T>(pipe(values, Observable_fromReadonlyArray())),
    )) as Observable.Signature["endWith"];

export default Observable_endWith;
