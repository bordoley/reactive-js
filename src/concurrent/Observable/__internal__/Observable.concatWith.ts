import {
  DeferredObservableLike,
  RunnableLike,
  RunnableWithSideEffectsLike,
} from "../../../concurrent.js";
import type * as Observable from "../../Observable.js";
import Observable_concatMany from "./Observable.concatMany.js";

const Observable_concatWith: Observable.Signature["concatWith"] = (<T>(
    ...tail: (
      | RunnableLike<T>
      | RunnableWithSideEffectsLike<T>
      | DeferredObservableLike<T>
    )[]
  ) =>
  (
    fst:
      | RunnableLike<T>
      | RunnableWithSideEffectsLike<T>
      | DeferredObservableLike<T>,
  ) =>
    Observable_concatMany([
      fst,
      ...tail,
    ])) as Observable.Signature["concatWith"];

export default Observable_concatWith;
