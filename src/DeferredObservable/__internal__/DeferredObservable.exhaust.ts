import { DeferredObservableContainer } from "../../containers.js";
import { returns } from "../../functions.js";
import DeferredObservable_mergeAll from "./DeferredObservable.mergeAll.js";

const DeferredObservable_exhaust: DeferredObservableContainer.TypeClass["exhaust"] =
  /*@__PURE__*/ (() =>
    returns(
      DeferredObservable_mergeAll({
        capacity: 0,
        backpressureStrategy: "drop-latest",
        concurrency: 1,
      }),
    ))();

export default DeferredObservable_exhaust;
