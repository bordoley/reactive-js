import {
  DeferredObservableLike,
  MulticastObservableLike,
  RunnableLike,
  RunnableWithSideEffectsLike,
} from "../../../concurrent.js";
import type * as Observable from "../../Observable.js";
import Observable_mergeMany from "./Observable.mergeMany.js";

const Observable_mergeWith: Observable.Signature["mergeWith"] = (<T>(
    ...tail: (
      | RunnableLike<T>
      | RunnableWithSideEffectsLike<T>
      | DeferredObservableLike<T>
      | MulticastObservableLike<T>
    )[]
  ) =>
  (
    fst:
      | RunnableLike<T>
      | RunnableWithSideEffectsLike<T>
      | DeferredObservableLike<T>
      | MulticastObservableLike<T>,
  ) =>
    Observable_mergeMany([fst, ...tail])) as Observable.Signature["mergeWith"];

export default Observable_mergeWith;
