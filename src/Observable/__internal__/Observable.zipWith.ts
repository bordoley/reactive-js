import type * as Observable from "../../Observable.js";
import { ObservableBaseLike } from "../../types.js";
import Observable_zipMany from "./Observable.zipMany.js";

const Observable_zipWith: Observable.Signature["zipWith"] = ((
    ...tail: readonly ObservableBaseLike<any>[]
  ) =>
  (fst: ObservableBaseLike<any>) =>
    Observable_zipMany([fst, ...tail])) as Observable.Signature["zipWith"];

export default Observable_zipWith;
