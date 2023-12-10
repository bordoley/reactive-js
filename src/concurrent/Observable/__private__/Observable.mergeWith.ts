import { ObservableLike } from "../../../concurrent.js";
import type * as Observable from "../../Observable.js";
import Observable_mergeMany from "./Observable.mergeMany.js";

const Observable_mergeWith: Observable.Signature["mergeWith"] = (<T>(
    ...tail: ObservableLike<T>[]
  ) =>
  (fst: ObservableLike<T>) =>
    Observable_mergeMany([fst, ...tail])) as Observable.Signature["mergeWith"];

export default Observable_mergeWith;
