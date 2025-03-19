import { Tuple2, pipe, returns } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as Pairwise from "../../__internal__/operators/Pairwise.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_pairwise: Broadcaster.Signature["pairwise"] = /*@__PURE__*/ (<
  T,
>() =>
  returns(pipe(Pairwise.createListener, Broadcaster_lift<T, Tuple2<T, T>>)))();

export default Broadcaster_pairwise;
