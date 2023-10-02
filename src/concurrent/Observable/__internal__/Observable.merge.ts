import {
  DeferredObservableLike,
  MulticastObservableLike,
  RunnableLike,
  RunnableWithSideEffectsLike,
} from "../../../concurrent.js";
import type * as Observable from "../../Observable.js";
import Observable_mergeMany from "./Observable.mergeMany.js";

const Observable_merge: Observable.Signature["merge"] = (<T>(
  ...observables: (
    | RunnableLike<T>
    | RunnableWithSideEffectsLike<T>
    | DeferredObservableLike<T>
    | MulticastObservableLike<T>
  )[]
) => Observable_mergeMany<T>(observables)) as Observable.Signature["merge"];

export default Observable_merge;
