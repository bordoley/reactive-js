/// <reference types="./NodeStream.d.ts" />

import { bindMethod, ignore, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../utils.js";
const dispose = (stream) => () => {
    stream.removeAllListeners();
    // Calling destory can result in onError being called
    // if we don't catch the error, it crashes the process.
    // This kind of sucks, but its the best we can do;
    stream.once("error", ignore);
    stream.destroy();
};
export const add = (disposable) => stream => {
    stream.on("error", Disposable.toErrorHandler(disposable));
    stream.once("close", bindMethod(disposable, DisposableLike_dispose));
    pipe(disposable, DisposableContainer.onError(dispose(stream)));
    return stream;
};
export const addTo = (disposable) => stream => {
    pipe(disposable, DisposableContainer.onDisposed(dispose(stream)));
    stream.on("error", Disposable.toErrorHandler(disposable));
    return stream;
};
export const addToNodeStream = (stream) => disposable => {
    pipe(stream, add(disposable));
    return disposable;
};
