/// <reference types="./NodeReadable.d.ts" />

import * as EventSource from "../computations/EventSource.js";
import * as PauseableEventSource from "../computations/PauseableEventSource.js";
import { bindMethod, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import { DisposableLike_dispose, EventListenerLike_notify, } from "../utils.js";
import * as NodeStream from "./NodeStream.js";
export const toPauseableEventSource = readable => PauseableEventSource.create(mode => pipe(EventSource.create(listener => {
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
