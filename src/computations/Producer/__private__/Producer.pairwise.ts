import { Tuple2, pipe, returns } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as PairwiseOperator from "../../__internal__/operators/PairwiseOperator.js";
import Producer_lift from "./Producer.lift.js";

const Producer_pairwise: Producer.Signature["pairwise"] = /*@__PURE__*/ (<
  T,
>() =>
  returns(
    pipe(PairwiseOperator.create, Producer_lift<T, Tuple2<T, T>>()),
  ))() as Producer.Signature["pairwise"];

export default Producer_pairwise;
