import { Tuple2, pipe, returns } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as Pairwise from "../../__internal__/operators/Pairwise.js";
import Observable_lift from "./Observable.lift.js";

const Observable_pairwise: Observable.Signature["pairwise"] = /*@__PURE__*/ (<
  T,
>() =>
  returns(pipe(Pairwise.createObserver, Observable_lift<T, Tuple2<T, T>>())))();

export default Observable_pairwise;
