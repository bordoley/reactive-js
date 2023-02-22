/// <reference types="./node.d.ts" />

import fs from "fs";
import { createBrotliCompress, createBrotliDecompress, createDeflate, createGunzip, createGzip, createInflate, } from "zlib";
import { error, ignore, isFunction, pipe, pipeLazy, returns, } from "../functions.js";
import { ObserverLike_dispatcher } from "../rx.js";
import * as Observable from "../rx/Observable.js";
import * as Observer from "../rx/Observer.js";
import * as ReactiveContainer from "../rx/ReactiveContainer.js";
import { PauseableState_paused, PauseableState_running, } from "../scheduling.js";
import * as Dispatcher from "../scheduling/Dispatcher.js";
import Flowable_createLifted from "../streaming/Flowable/__internal__/Flowable.createLifted.js";
import * as Stream from "../streaming/Stream.js";
import * as Streamable from "../streaming/Streamable.js";
import Streamable_createLifted from "../streaming/Streamable/__internal__/Streamable.createLifted.js";
import * as Disposable from "../util/Disposable.js";
export const bindNodeCallback = (callback) => function (...args) {
    return Observable.create(({ [ObserverLike_dispatcher]: dispatcher }) => {
        const handler = (err, arg) => {
            if (err) {
                pipe(dispatcher, Disposable.dispose(error(err)));
            }
            else {
                pipe(dispatcher, Dispatcher.dispatch(arg), Disposable.dispose());
            }
        };
        callback.apply(this, [...args, handler]);
    });
};
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
    stream.once("close", pipeLazy(disposable, Disposable.dispose()));
    pipe(disposable, Disposable.onError(disposeStream(stream)));
    return stream;
};
const addToDisposable = (disposable) => stream => {
    pipe(disposable, Disposable.onDisposed(disposeStream(stream)));
    stream.on("error", Disposable.toErrorHandler(disposable));
    return stream;
};
export const createReadableSource = (factory) => Flowable_createLifted(mode => Observable.create(observer => {
    const { [ObserverLike_dispatcher]: dispatcher } = observer;
    const readable = isFunction(factory)
        ? pipe(factory(), addToDisposable(observer), addDisposable(dispatcher))
        : pipe(factory, addDisposable(dispatcher));
    readable.pause();
    pipe(mode, Observable.forEach(ev => {
        switch (ev) {
            case PauseableState_paused:
                readable.pause();
                break;
            case PauseableState_running:
                readable.resume();
                break;
        }
    }), Observable.subscribe(Observer.getScheduler(observer)), addToNodeStream(readable));
    const onData = Dispatcher.dispatchTo(dispatcher);
    const onEnd = () => {
        pipe(dispatcher, Disposable.dispose());
    };
    readable.on("data", onData);
    readable.on("end", onEnd);
}));
export const readFile = (path, options) => createReadableSource(() => fs.createReadStream(path, options));
export const createWritableSink = /*@__PURE__*/ (() => {
    const NODE_JS_PAUSE_EVENT = "__REACTIVE_JS_NODE_WRITABLE_PAUSE__";
    return (factory) => Streamable_createLifted(events => Observable.create(observer => {
        const { [ObserverLike_dispatcher]: dispatcher } = observer;
        const writable = isFunction(factory)
            ? pipe(factory(), addToDisposable(observer), addDisposable(dispatcher))
            : pipe(factory, addDisposable(dispatcher));
        pipe(events, Observable.forEach(ev => {
            // FIXME: when writing to an outgoing node ServerResponse with a UInt8Array
            // node throws a type Error regarding expecting a Buffer, though the docs
            // say a UInt8Array should be accepted. Need to file a bug.
            if (!writable.write(Buffer.from(ev))) {
                // Hack in a custom event here for pause request
                writable.emit(NODE_JS_PAUSE_EVENT);
            }
        }), Observable.subscribe(Dispatcher.getScheduler(dispatcher)), addToNodeStream(writable), Disposable.onComplete(() => {
            writable.end();
        }));
        const onDrain = pipeLazy(dispatcher, Dispatcher.dispatch(returns(PauseableState_running)));
        const onFinish = pipeLazy(dispatcher, Disposable.dispose());
        const onPause = pipeLazy(dispatcher, Dispatcher.dispatch(returns(PauseableState_paused)));
        writable.on("drain", onDrain);
        writable.on("finish", onFinish);
        writable.on(NODE_JS_PAUSE_EVENT, onPause);
        pipe(dispatcher, Dispatcher.dispatch(returns(PauseableState_running)));
    }));
})();
export const transform = (factory) => src => Flowable_createLifted(modeObs => Observable.create(observer => {
    const transform = pipe(factory(), addToDisposable(observer), addDisposable(Observer.getDispatcher(observer)));
    pipe(createWritableSink(transform), Streamable.stream(Observer.getScheduler(observer)), Stream.sourceFrom(src), addToNodeStream(transform));
    const transformReadableStream = pipe(createReadableSource(transform), Streamable.stream(Observer.getScheduler(observer)), addToNodeStream(transform), ReactiveContainer.sinkInto(observer));
    pipe(modeObs, Observable.map(returns), Observable.forEach(Dispatcher.dispatchTo(transformReadableStream)), Observable.subscribe(Observer.getScheduler(observer)), addToNodeStream(transform));
}));
export const brotliDecompress = (options = {}) => transform(pipeLazy(options, createBrotliDecompress));
export const gunzip = (options = {}) => transform(pipeLazy(options, createGunzip));
export const inflate = (options = {}) => transform(pipeLazy(options, createInflate));
export const brotliCompress = (options = {}) => transform(pipeLazy(options, createBrotliCompress));
export const gzip = (options = {}) => transform(pipeLazy(options, createGzip));
export const deflate = (options = {}) => transform(pipeLazy(options, createDeflate));
