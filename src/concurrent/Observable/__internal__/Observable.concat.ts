import { DeferredObservableLike } from "../../../concurrent.js";
import type * as Observable from "../../Observable.js";
import Observable_concatMany from "./Observable.concatMany.js";

const Observable_concat: Observable.Signature["concat"] = (<T>(
  // typed to work around type overrides
  ...observables: DeferredObservableLike<T>[]
) => Observable_concatMany<T>(observables)) as Observable.Signature["concat"];

export default Observable_concat;
