import { Tuple2, pipe, returns } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as PairwiseSink from "../../__internal__/sinks/PairwiseSink.js";
import Observable_lift from "./Observable.lift.js";

const Observable_pairwise: Observable.Signature["pairwise"] = /*@__PURE__*/ (<
  T,
>() =>
  returns(
    pipe(PairwiseSink.create, Observable_lift<T, Tuple2<T, T>>()),
  ))() as Observable.Signature["pairwise"];

export default Observable_pairwise;
