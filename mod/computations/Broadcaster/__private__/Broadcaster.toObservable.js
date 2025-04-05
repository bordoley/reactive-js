/// <reference types="./Broadcaster.toObservable.d.ts" />

import { EventSourceLike_subscribe, } from "../../../computations.js";
import * as ConsumerObservable from "../../__internal__/ConsumerObservable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const Broadcaster_toObservable = ((config) => (Broadcaster) => DeferredEventSource.create(observer => {
    const consumer = ConsumerObservable.create(config);
    consumer[EventSourceLike_subscribe](observer);
    Broadcaster[EventSourceLike_subscribe](consumer);
}, Broadcaster));
export default Broadcaster_toObservable;
