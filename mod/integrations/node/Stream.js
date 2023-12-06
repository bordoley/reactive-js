/// <reference types="./Stream.d.ts" />

import Observable_createPauseable from "../..//concurrent/Observable/__internal__/Observable.createPauseable.js";
import { DispatcherLike_complete, PauseableLike_pause, PauseableLike_resume, } from "../../concurrent.js";
import * as Observable from "../../concurrent/Observable.js";
import { bindMethod, ignore, isFunction, pipe, } from "../../functions.js";
import { DisposableLike_dispose, QueueableLike_enqueue, } from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
const disposeStream = (stream) => () => {
    stream.removeAllListeners();
    // Calling destory can result in onError being called
    // if we don't catch the error, it crashes the process.
    // This kind of sucks, but its the best we can do;
    stream.once("error", ignore);
    stream.once("close", () => {
        stream.removeAllListeners();
    });
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
export const flow = (scheduler, options) => factory => Observable_createPauseable(mode => Observable.create(observer => {
    const dispatchDisposable = pipe(Disposable.create(), Disposable.onError(Disposable.toErrorHandler(observer)), Disposable.onComplete(bindMethod(observer, DispatcherLike_complete)));
    const readable = isFunction(factory)
        ? pipe(factory(), addToDisposable(observer), addDisposable(dispatchDisposable))
        : pipe(factory, addDisposable(dispatchDisposable));
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
}), scheduler, options);
export const sinkInto = (factory) => flowable => Observable.create(observer => {
    const writable = isFunction(factory)
        ? pipe(factory(), addToDisposable(observer), addDisposable(observer))
        : pipe(factory, addDisposable(observer));
    pipe(flowable, Observable.forEach((ev) => {
        // FIXME: when writing to an outgoing node ServerResponse with a UInt8Array
        // node throws a type Error regarding expecting a Buffer, though the docs
        // say a UInt8Array should be accepted. Need to file a bug.
        if (!writable.write(Buffer.from(ev))) {
            flowable[PauseableLike_pause]();
        }
    }), Observable.subscribe(observer), Disposable.onComplete(bindMethod(writable, "end")), Disposable.addTo(observer));
    const onDrain = bindMethod(flowable, PauseableLike_resume);
    const onFinish = bindMethod(observer, DisposableLike_dispose);
    writable.on("drain", onDrain);
    writable.on("finish", onFinish);
    flowable[PauseableLike_resume]();
});
