import { Tuple2, pipe, returns } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as Pairwise from "../../__internal__/operators/Pairwise.js";
import Producer_lift from "./Producer.lift.js";

const Producer_pairwise: Producer.Signature["pairwise"] = /*@__PURE__*/ (<
  T,
>() =>
  returns(pipe(Pairwise.createConsumer, Producer_lift<T, Tuple2<T, T>>())))();

export default Producer_pairwise;
