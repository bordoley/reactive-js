import { returns } from "../../../functions.js";
import { Exhaust, ObservableLike } from "../../../rx.js";
import Observable_mergeAll from "./Observable.mergeAll.js";

const Observable_exhaust: Exhaust<ObservableLike>["exhaust"] =
  /*@__PURE__*/ (() =>
    returns(
      Observable_mergeAll({
        maxBufferSize: 1,
        maxConcurrency: 1,
      }),
    ))();

export default Observable_exhaust;
