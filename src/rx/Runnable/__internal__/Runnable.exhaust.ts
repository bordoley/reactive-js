import { returns } from "../../../functions.js";
import { Exhaust, RunnableLike } from "../../../rx.js";
import Runnable_mergeAll from "./Runnable.mergeAll.js";

const Runnable_exhaust: Exhaust<RunnableLike>["exhaust"] = /*@__PURE__*/ (() =>
  returns(
    Runnable_mergeAll({
      maxBufferSize: 1,
      maxConcurrency: 1,
    }),
  ))();

export default Runnable_exhaust;
