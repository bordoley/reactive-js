import type * as MulticastObservable from "../../MulticastObservable.js";
import { returns } from "../../functions.js";
import MulticastObservable_mergeAll from "./MulticastObservable.mergeAll.js";

const MulticastObservable_exhaust: MulticastObservable.Signature["exhaust"] =
  /*@__PURE__*/ (() =>
    returns(
      MulticastObservable_mergeAll({
        capacity: 0,
        backpressureStrategy: "drop-latest",
        concurrency: 1,
      }),
    ))();

export default MulticastObservable_exhaust;
