import type * as SharedObservable from "../../SharedObservable.js";
import { returns } from "../../functions.js";
import SharedObservable_mergeAll from "./SharedObservable.mergeAll.js";

const SharedObservable_exhaust: SharedObservable.Signature["exhaust"] =
  /*@__PURE__*/ (() =>
    returns(
      SharedObservable_mergeAll({
        capacity: 0,
        backpressureStrategy: "drop-latest",
        concurrency: 1,
      }),
    ))();

export default SharedObservable_exhaust;
