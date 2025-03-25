import { Tuple2, pipe, returns } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as PairwiseOperator from "../../__internal__/operators/PairwiseOperator.js";
import Observable_lift from "./Observable.lift.js";

const Observable_pairwise: Observable.Signature["pairwise"] = /*@__PURE__*/ (<
  T,
>() =>
  returns(
    pipe(PairwiseOperator.create, Observable_lift<T, Tuple2<T, T>>()),
  ))() as Observable.Signature["pairwise"];

export default Observable_pairwise;
