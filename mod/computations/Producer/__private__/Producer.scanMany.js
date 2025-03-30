/// <reference types="./Producer.scanMany.d.ts" />

import Broadcaster_toProducer from "../../Broadcaster/__private__/Broadcaster.toProducer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import Producer_forEach from "./Producer.forEach.js";
import Producer_map from "./Producer.map.js";
import Producer_switchAll from "./Producer.switchAll.js";
import Producer_withLatestFrom from "./Producer.withLatestFrom.js";
const ProducerModule = {
    forEach: Producer_forEach,
    fromBroadcaster: Broadcaster_toProducer,
    map: Producer_map,
    switchAll: Producer_switchAll,
    withLatestFrom: Producer_withLatestFrom,
};
const Producer_scanMany = 
/*@__PURE__*/ DeferredSource.scanMany(ProducerModule);
export default Producer_scanMany;
