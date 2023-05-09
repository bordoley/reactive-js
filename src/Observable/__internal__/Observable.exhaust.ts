import { returns } from "../../functions.js";
import { ObservableContainer, ObservableContainers } from "../../types.js";
import Observable_mergeAll from "./Observable.mergeAll.js";

const Observable_exhaust: ObservableContainers.TypeClass<ObservableContainer>["exhaust"] =
  /*@__PURE__*/ (() =>
    returns(
      Observable_mergeAll({
        capacity: 0,
        backpressureStrategy: "drop-latest",
        concurrency: 1,
      }),
    ))();

export default Observable_exhaust;
