/// <reference types="./Observable.scanMany.d.ts" />

import Broadcaster_toProducer from "../../Broadcaster/__private__/Broadcaster.toProducer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_map from "./Observable.map.js";
import Observable_switchAll from "./Observable.switchAll.js";
import Observable_withLatestFrom from "./Observable.withLatestFrom.js";
const ObservableModule = {
    forEach: Observable_forEach,
    fromBroadcaster: Broadcaster_toProducer,
    map: Observable_map,
    switchAll: Observable_switchAll,
    withLatestFrom: Observable_withLatestFrom,
};
const Observable_scanMany = 
/*@__PURE__*/ DeferredSource.scanMany(ObservableModule);
export default Observable_scanMany;
