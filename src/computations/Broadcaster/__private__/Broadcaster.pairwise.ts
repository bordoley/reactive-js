import { Tuple2, pipe, returns } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as PairwiseSink from "../../__internal__/sinks/PairwiseSink.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_pairwise: Broadcaster.Signature["pairwise"] = /*@__PURE__*/ (<
  T,
>() =>
  returns(
    pipe(PairwiseSink.create, Broadcaster_lift<T, Tuple2<T, T>>),
  ))() as Broadcaster.Signature["pairwise"];

export default Broadcaster_pairwise;
