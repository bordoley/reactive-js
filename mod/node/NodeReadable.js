/// <reference types="./NodeReadable.d.ts" />

import * as EventSource from "../computations/EventSource.js";
import * as PauseableEventSource from "../computations/PauseableEventSource.js";
import * as Producer from "../computations/Producer.js";
import { bindMethod, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import { ConsumerLike_addOnReadyListener, ConsumerLike_isReady, DisposableLike_dispose, EventListenerLike_notify, SinkLike_complete, } from "../utils.js";
import * as NodeStream from "./NodeStream.js";
// FIXME: Ideally this would be implemented as a wrapper around toProducer
export const toEventSource = readable => PauseableEventSource.create(mode => pipe(EventSource.create(listener => {
    pipe(readable, NodeStream.addTo(listener), NodeStream.add(listener));
    readable.pause();
    pipe(mode, EventSource.addEventHandler(isPaused => {
        if (isPaused) {
            readable.pause();
        }
        else {
            readable.resume();
        }
    }), NodeStream.addToNodeStream(readable));
    const onData = bindMethod(listener, EventListenerLike_notify);
    const onEnd = bindMethod(listener, DisposableLike_dispose);
    readable.on("data", onData);
    readable.on("end", onEnd);
}), Disposable.bindTo(mode)));
export const toProducer = readable => Producer.create(consumer => {
    pipe(readable, NodeStream.addTo(consumer), NodeStream.add(consumer));
    readable.pause();
    consumer[ConsumerLike_addOnReadyListener](bindMethod(readable, "resume"));
    const onData = (data) => {
        consumer[EventListenerLike_notify](data);
        if (!consumer[ConsumerLike_isReady]) {
            readable.pause();
        }
    };
    readable.on("data", onData);
    readable.on("end", bindMethod(consumer, SinkLike_complete));
    if (consumer[ConsumerLike_isReady]) {
        readable.resume();
    }
});
