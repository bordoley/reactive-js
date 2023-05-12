import type * as Observable from "../../Observable.js";
import { ObservableLike } from "../../types.js";
import Observable_zipObservables from "./Observable.zipMany.js";

const Observable_zip: Observable.Signature["zip"] = (<T>(
  ...observables: ObservableLike<T>[]
) => Observable_zipObservables(observables)) as Observable.Signature["zip"];

export default Observable_zip;
