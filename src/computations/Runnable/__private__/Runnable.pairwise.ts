import { Tuple2, pipe, returns } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import * as PairwiseSink from "../../__internal__/sinks/PairwiseSink.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_pairwise: Runnable.Signature["pairwise"] = /*@__PURE__*/ (<
  T,
>() => returns(pipe(PairwiseSink.create, Runnable_lift<T, Tuple2<T, T>>())))();

export default Runnable_pairwise;
