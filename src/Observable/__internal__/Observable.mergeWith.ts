import type * as Observable from "../../Observable.js";
import { DeferredObservableLike } from "../../types.js";
import Observable_mergeMany from "./Observable.mergeMany.js";

const Observable_mergeWith: Observable.Signature["mergeWith"] = (<T>(
    ...tail: DeferredObservableLike<T>[]
  ) =>
  (fst: DeferredObservableLike<T>) =>
    Observable_mergeMany([fst, ...tail])) as Observable.Signature["mergeWith"];

export default Observable_mergeWith;
