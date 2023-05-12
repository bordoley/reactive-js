import type * as Observable from "../../Observable.js";
import { Function1 } from "../../functions.js";
import { ObservableLike } from "../../types.js";
import Observable_zipMany from "./Observable.zipMany.js";

const Observable_zipWith: Observable.Signature["zipWith"] = ((
    ...tail: readonly ObservableLike<any>[]
  ): Function1<ObservableLike<any>, ObservableLike<any>> =>
  (fst: ObservableLike<any>) =>
    Observable_zipMany([fst, ...tail])) as Observable.Signature["zipWith"];

export default Observable_zipWith;
