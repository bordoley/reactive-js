/// <reference types="./node.d.ts" />
import fs from 'fs';
import { createBrotliDecompress, createGunzip, createInflate, createBrotliCompress, createGzip, createDeflate } from 'zlib';
import { pipe, ignore, pipeLazy, isFunction } from '../functions.mjs';
import { ObserverLike_dispatcher } from '../rx.mjs';
import { create, forEach, subscribe } from '../rx/ObservableLike.mjs';
import { getScheduler, getDispatcher } from '../rx/ObserverLike.mjs';
import { sinkInto } from '../rx/ReactiveContainerLike.mjs';
import { dispatch, dispatchTo, getScheduler as getScheduler$1 } from '../scheduling/DispatcherLike.mjs';
import { sourceFrom } from '../streaming/StreamLike.mjs';
import { stream } from '../streaming/StreamableLike.mjs';
import FlowableLike__createLifted from '../streaming/__internal__/FlowableLike/FlowableLike.createLifted.mjs';
import StreamableLike__createLifted from '../streaming/__internal__/StreamableLike/StreamableLike.createLifted.mjs';
import { dispose, toErrorHandler, onError, onDisposed, onComplete } from '../util/DisposableLike.mjs';

const bindNodeCallback = (callback) => function (...args) {
    return create(({ [ObserverLike_dispatcher]: dispatcher }) => {
        const handler = (cause, arg) => {
            if (cause) {
                pipe(dispatcher, dispose({ cause }));
            }
            else {
                pipe(dispatcher, dispatch(arg), dispose());
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
    stream.on("error", toErrorHandler(disposable));
    stream.once("close", pipeLazy(disposable, dispose()));
    pipe(disposable, onError(disposeStream(stream)));
    return stream;
};
const addToDisposable = (disposable) => stream => {
    pipe(disposable, onDisposed(disposeStream(stream)));
    stream.on("error", toErrorHandler(disposable));
    return stream;
};
const createReadableSource = (factory) => FlowableLike__createLifted(mode => create(observer => {
    const { [ObserverLike_dispatcher]: dispatcher } = observer;
    const readable = isFunction(factory)
        ? pipe(factory(), addToDisposable(observer), addDisposable(dispatcher))
        : pipe(factory, addDisposable(dispatcher));
    readable.pause();
    pipe(mode, forEach(ev => {
        switch (ev) {
            case "pause":
                readable.pause();
                break;
            case "resume":
                readable.resume();
                break;
        }
    }), subscribe(getScheduler(observer)), addToNodeStream(readable));
    const onData = dispatchTo(dispatcher);
    const onEnd = () => {
        pipe(dispatcher, dispose());
    };
    readable.on("data", onData);
    readable.on("end", onEnd);
}));
const readFile = (path, options) => createReadableSource(() => fs.createReadStream(path, options));
const createWritableSink = /*@__PURE__*/ (() => {
    const NODE_JS_PAUSE_EVENT = "__REACTIVE_JS_NODE_WRITABLE_PAUSE__";
    return (factory) => StreamableLike__createLifted(events => create(observer => {
        const { [ObserverLike_dispatcher]: dispatcher } = observer;
        const writable = isFunction(factory)
            ? pipe(factory(), addToDisposable(observer), addDisposable(dispatcher))
            : pipe(factory, addDisposable(dispatcher));
        pipe(events, forEach(ev => {
            // FIXME: when writing to an outgoing node ServerResponse with a UInt8Array
            // node throws a type Error regarding expecting a Buffer, though the docs
            // say a UInt8Array should be accepted. Need to file a bug.
            if (!writable.write(Buffer.from(ev))) {
                // Hack in a custom event here for pause request
                writable.emit(NODE_JS_PAUSE_EVENT);
            }
        }), subscribe(getScheduler$1(dispatcher)), addToNodeStream(writable), onComplete(() => {
            writable.end();
        }));
        const onDrain = pipeLazy(dispatcher, dispatch("resume"));
        const onFinish = pipeLazy(dispatcher, dispose());
        const onPause = pipeLazy(dispatcher, dispatch("pause"));
        writable.on("drain", onDrain);
        writable.on("finish", onFinish);
        writable.on(NODE_JS_PAUSE_EVENT, onPause);
        pipe(dispatcher, dispatch("resume"));
    }));
})();
const transform = (factory) => src => FlowableLike__createLifted(modeObs => create(observer => {
    const transform = pipe(factory(), addToDisposable(observer), addDisposable(getDispatcher(observer)));
    pipe(createWritableSink(transform), stream(getScheduler(observer)), sourceFrom(src), addToNodeStream(transform));
    const transformReadableStream = pipe(createReadableSource(transform), stream(getScheduler(observer)), addToNodeStream(transform), sinkInto(observer));
    pipe(modeObs, forEach(dispatchTo(transformReadableStream)), subscribe(getScheduler(observer)), addToNodeStream(transform));
}));
const brotliDecompress = (options = {}) => transform(pipeLazy(options, createBrotliDecompress));
const gunzip = (options = {}) => transform(pipeLazy(options, createGunzip));
const inflate = (options = {}) => transform(pipeLazy(options, createInflate));
const brotliCompress = (options = {}) => transform(pipeLazy(options, createBrotliCompress));
const gzip = (options = {}) => transform(pipeLazy(options, createGzip));
const deflate = (options = {}) => transform(pipeLazy(options, createDeflate));

export { bindNodeCallback, brotliCompress, brotliDecompress, createReadableSource, createWritableSink, deflate, gunzip, gzip, inflate, readFile, transform };
