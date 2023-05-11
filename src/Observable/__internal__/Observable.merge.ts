import type * as Observable from "../../Observable.js";
import { DeferredObservableLike } from "../../types.js";
import Observable_mergeMany from "./Observable.mergeMany.js";

const Observable_merge: Observable.Signature["merge"] = (<T>(
  // type as DeferredObservableLike to work around type overrides
  ...observables: DeferredObservableLike<T>[]
) => Observable_mergeMany<T>(observables)) as Observable.Signature["merge"];

export default Observable_merge;
