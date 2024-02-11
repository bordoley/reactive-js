/// <reference types="./FlowableStream.d.ts" />

import * as Flowable from "../../concurrent/Flowable.js";
import * as Observable from "../../concurrent/Observable.js";
import { DispatcherLike_complete, FlowableLike_flow, ObservableLike_observe, PauseableLike_pause, PauseableLike_resume, } from "../../concurrent.js";
import { bindMethod, ignore, invoke, pipe, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import { DisposableLike_dispose, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../../utils.js";
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
    pipe(disposable, Disposable.onError(disposeStream(stream)));
    return stream;
};
const addToDisposable = (disposable) => stream => {
    pipe(disposable, Disposable.onDisposed(disposeStream(stream)));
    stream.on("error", Disposable.toErrorHandler(disposable));
    return stream;
};
export const create = factory => Flowable.create(mode => Observable.create(observer => {
    const dispatchDisposable = pipe(Disposable.create(), Disposable.onError(Disposable.toErrorHandler(observer)), Disposable.onComplete(bindMethod(observer, DispatcherLike_complete)));
    const readable = pipe(factory(), addToDisposable(observer), addDisposable(dispatchDisposable));
    readable.pause();
    pipe(mode, Observable.forEach(isPaused => {
        if (isPaused) {
            readable.pause();
        }
        else {
            readable.resume();
        }
    }), Observable.subscribe(observer), addToNodeStream(readable));
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
    pipe(observer, Disposable.onComplete(bindMethod(writable, "end")));
    const onDrain = bindMethod(flowed, PauseableLike_resume);
    const onFinish = bindMethod(observer, DisposableLike_dispose);
    writable.on("drain", onDrain);
    writable.on("finish", onFinish);
    flowed[PauseableLike_resume]();
});
