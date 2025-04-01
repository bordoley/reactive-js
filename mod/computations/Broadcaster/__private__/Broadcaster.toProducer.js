/// <reference types="./Broadcaster.toProducer.d.ts" />

import { EventSourceLike_subscribe, } from "../../../computations.js";
import { returns } from "../../../functions.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const Broadcaster_toProducer = 
/*@__PURE__*/ returns((src) => DeferredEventSource.create((consumer) => {
    src[EventSourceLike_subscribe](consumer);
}));
export default Broadcaster_toProducer;
