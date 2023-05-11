import type * as DeferredObservable from "../../DeferredObservable.js";
import { returns } from "../../functions.js";
import DeferredObservable_mergeAll from "./DeferredObservable.mergeAll.js";

const DeferredObservable_exhaust: DeferredObservable.Signature["exhaust"] =
  /*@__PURE__*/ (() =>
    returns(
      DeferredObservable_mergeAll({
        capacity: 0,
        backpressureStrategy: "drop-latest",
        concurrency: 1,
      }),
    ))();

export default DeferredObservable_exhaust;
