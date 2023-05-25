import type * as Observable from "../../Observable.js";
import { ObservableLike } from "../../types.js";
import Observable_mergeMany from "./Observable.mergeMany.js";

const Observable_merge: Observable.Signature["merge"] = (<T>(
  ...observables: ObservableLike<T>[]
) => Observable_mergeMany<T>(observables)) as Observable.Signature["merge"];

export default Observable_merge;
