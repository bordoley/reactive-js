/// <reference types="./Producer.toObservable.d.ts" />

import { EventSourceLike_subscribe, } from "../../../computations.js";
import * as ConsumerObservable from "../../__internal__/ConsumerObservable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const Producer_toObservable = (config) => (producer) => DeferredEventSource.create(observer => {
    const consumer = ConsumerObservable.create(config);
    consumer[EventSourceLike_subscribe](observer);
    producer[EventSourceLike_subscribe](consumer);
}, producer);
export default Producer_toObservable;
