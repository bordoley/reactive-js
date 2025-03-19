import Broadcaster_toObservable from "../../Broadcaster/__private__/Broadcaster.toObservable.js";
import * as Observable from "../../Observable.js";
import * as ScanMany from "../../__internal__/operators/ScanMany.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_map from "./Observable.map.js";
import Observable_switchAll from "./Observable.switchAll.js";
import Observable_withLatestFrom from "./Observable.withLatestFrom.js";

const ObservableModule = {
  forEach: Observable_forEach,
  fromBroadcaster: Broadcaster_toObservable,
  map: Observable_map,
  switchAll: Observable_switchAll,
  withLatestFrom: Observable_withLatestFrom,
};

const Observable_scanMany: Observable.Signature["scanMany"] =
  /*@__PURE__*/ ScanMany.createOperator(
    ObservableModule,
  ) as Observable.Signature["scanMany"];

export default Observable_scanMany;
