/// <reference types="./NodeReadable.d.ts" />

import * as Producer from "../computations/Producer.js";
import { bindMethod, pipe } from "../functions.js";
import { EventListenerLike_notify, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, SinkLike_complete, } from "../utils.js";
import * as NodeStream from "./NodeStream.js";
export const create = factory => Producer.create(consumer => {
    const readable = factory();
    pipe(readable, NodeStream.addTo(consumer), NodeStream.add(consumer));
    readable.pause();
    consumer[FlowControllerLike_addOnReadyListener](bindMethod(readable, "resume"));
    const onData = (data) => {
        consumer[EventListenerLike_notify](data);
        if (!consumer[FlowControllerLike_isReady]) {
            readable.pause();
        }
    };
    readable.on("data", onData);
    readable.on("end", bindMethod(consumer, SinkLike_complete));
    if (consumer[FlowControllerLike_isReady]) {
        readable.resume();
    }
});
