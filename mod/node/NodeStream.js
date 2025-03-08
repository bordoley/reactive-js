/// <reference types="./NodeStream.d.ts" />

import * as EventSource from "../computations/EventSource.js";
import * as PauseableEventSource from "../computations/PauseableEventSource.js";
import { EventListenerLike_notify, } from "../computations.js";
import { bindMethod, ignore, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import { DisposableLike_dispose, PauseableLike_pause, PauseableLike_resume, } from "../utils.js";
const disposeStream = (stream) => () => {
    stream.removeAllListeners();
    // Calling destory can result in onError being called
    // if we don't catch the error, it crashes the process.
    // This kind of sucks, but its the best we can do;
    stream.once("error", ignore);
    stream.destroy();
};
const addToNodeStream = (stream) => disposable => {
    pipe(stream, addDisposable(disposable));
    return disposable;
};
const addDisposable = (disposable) => stream => {
    stream.on("error", Disposable.toErrorHandler(disposable));
    stream.once("close", bindMethod(disposable, DisposableLike_dispose));
    pipe(disposable, DisposableContainer.onError(disposeStream(stream)));
    return stream;
};
const addToDisposable = (disposable) => stream => {
    pipe(disposable, DisposableContainer.onDisposed(disposeStream(stream)));
    stream.on("error", Disposable.toErrorHandler(disposable));
    return stream;
};
export const create = readable => PauseableEventSource.create(mode => pipe(EventSource.create(listener => {
    pipe(readable, addToDisposable(listener), addDisposable(listener));
    readable.pause();
    pipe(mode, EventSource.addEventHandler(isPaused => {
        if (isPaused) {
            readable.pause();
        }
        else {
            readable.resume();
        }
    }), addToNodeStream(readable));
    const onData = bindMethod(listener, EventListenerLike_notify);
    const onEnd = bindMethod(listener, DisposableLike_dispose);
    readable.on("data", onData);
    readable.on("end", onEnd);
}), Disposable.bindTo(mode)));
export const writeTo = (writable) => src => {
    const disposable = Disposable.create();
    pipe(writable, addDisposable(disposable));
    pipe(src, EventSource.addEventHandler((ev) => {
        // FIXME: when writing to an outgoing node ServerResponse with a UInt8Array
        // node throws a type Error regarding expecting a Buffer, though the docs
        // say a UInt8Array should be accepted. Need to file a bug.
        if (!writable.write(Buffer.from(ev))) {
            src[PauseableLike_pause]();
        }
    }), Disposable.addTo(disposable));
    pipe(src, DisposableContainer.onComplete(bindMethod(writable, "end")));
    const onDrain = bindMethod(src, PauseableLike_resume);
    const onFinish = bindMethod(disposable, DisposableLike_dispose);
    writable.on("drain", onDrain);
    writable.on("finish", onFinish);
    src[PauseableLike_resume]();
    return disposable;
};
