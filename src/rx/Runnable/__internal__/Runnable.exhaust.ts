import { returns } from "../../../functions.js";
import { Reactive, RunnableContainer } from "../../../rx.js";
import Runnable_mergeAll from "./Runnable.mergeAll.js";

const Runnable_exhaust: Reactive.Exhaust<RunnableContainer>["exhaust"] =
  /*@__PURE__*/ (() =>
    returns(
      Runnable_mergeAll({
        capacity: 0,
        backpressureStrategy: "drop-latest",
        concurrency: 1,
      }),
    ))();

export default Runnable_exhaust;
