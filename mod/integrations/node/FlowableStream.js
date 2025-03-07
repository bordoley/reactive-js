/// <reference types="./FlowableStream.d.ts" />

import * as EventSource from "../../computations/EventSource.js";
import * as Flowable from "../../computations/Flowable.js";
import * as Observable from "../../computations/Observable.js";
import { DispatcherLike_complete, FlowableLike_flow, ObservableLike_observe, } from "../../computations.js";
import { bindMethod, ignore, invoke, pipe, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import { DisposableLike_dispose, PauseableLike_pause, PauseableLike_resume, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../../utils.js";
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
export const create = factory => Flowable.create(mode => Observable.create(observer => {
    const dispatchDisposable = pipe(Disposable.create(), DisposableContainer.onError(Disposable.toErrorHandler(observer)), DisposableContainer.onComplete(bindMethod(observer, DispatcherLike_complete)));
    const readable = pipe(factory(), addToDisposable(observer), addDisposable(dispatchDisposable));
    readable.pause();
    pipe(mode, EventSource.addEventHandler(isPaused => {
        if (isPaused) {
            readable.pause();
        }
        else {
            readable.resume();
        }
    }), addToNodeStream(readable));
    const onData = bindMethod(observer, QueueableLike_enqueue);
    const onEnd = bindMethod(observer, DispatcherLike_complete);
    readable.on("data", onData);
    readable.on("end", onEnd);
}));
export const writeTo = (writable) => flowable => Observable.create(observer => {
    pipe(writable, addDisposable(observer));
    const flowed = pipe(flowable[FlowableLike_flow](observer, {
        backpressureStrategy: observer[QueueableLike_backpressureStrategy],
        capacity: observer[QueueableLike_capacity],
    }), Disposable.addTo(observer));
    pipe(flowed, Observable.forEach((ev) => {
        // FIXME: when writing to an outgoing node ServerResponse with a UInt8Array
        // node throws a type Error regarding expecting a Buffer, though the docs
        // say a UInt8Array should be accepted. Need to file a bug.
        if (!writable.write(Buffer.from(ev))) {
            flowed[PauseableLike_pause]();
        }
    }), invoke(ObservableLike_observe, observer));
    pipe(observer, DisposableContainer.onComplete(bindMethod(writable, "end")));
    const onDrain = bindMethod(flowed, PauseableLike_resume);
    const onFinish = bindMethod(observer, DisposableLike_dispose);
    writable.on("drain", onDrain);
    writable.on("finish", onFinish);
    flowed[PauseableLike_resume]();
});
