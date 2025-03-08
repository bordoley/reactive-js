/// <reference types="./NodeStream.test.d.ts" />

var __addDisposableResource = (this && this.__addDisposableResource) || function (env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;
};
var __disposeResources = (this && this.__disposeResources) || (function (SuppressedError) {
    return function (env) {
        function fail(e) {
            env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while (r = env.stack.pop()) {
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                    }
                    else s |= 1;
                }
                catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
import { Readable, Writable, pipeline } from "node:stream";
import zlib from "node:zlib";
import { describe, expectEquals, expectFalse, expectPromiseToThrow, expectTrue, testAsync, testModule, } from "../../__internal__/testing.js";
import * as Observable from "../../computations/Observable.js";
import { newInstance, pipe, pipeAsync, returns, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import { DisposableLike_isDisposed, PauseableLike_pause, PauseableLike_resume, } from "../../utils.js";
import * as NodeStream from "../NodeStream.js";
testModule("NodeStream", describe("create", testAsync("reading from readable", async () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        function* generate() {
            yield Buffer.from("abc", "utf8");
            yield Buffer.from("defg", "utf8");
        }
        const scheduler = __addDisposableResource(env_1, HostScheduler.create(), false);
        const readable = Readable.from(generate(), {
            autoDestroy: false,
        });
        const flowed = pipe(readable, NodeStream.create, Disposable.addTo(scheduler));
        flowed[PauseableLike_resume]();
        flowed[PauseableLike_pause]();
        flowed[PauseableLike_resume]();
        await pipeAsync(flowed, Observable.fromEventSource(), Observable.decodeWithCharset(), Observable.scan((acc, next) => acc + next, returns("")), Observable.lastAsync(scheduler), expectEquals("abcdefg"));
        pipe(readable.destroyed, expectTrue("expected readable to be destroyed"));
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
}), testAsync("reading from readable factory", async () => {
    const env_2 = { stack: [], error: void 0, hasError: false };
    try {
        function* generate() {
            yield Buffer.from("abc", "utf8");
            yield Buffer.from("defg", "utf8");
        }
        const scheduler = __addDisposableResource(env_2, HostScheduler.create(), false);
        const flowed = pipe(Readable.from(generate()), NodeStream.create, Disposable.addTo(scheduler));
        flowed[PauseableLike_resume]();
        const acc = await pipe(flowed, Observable.fromEventSource(), Observable.decodeWithCharset(), Observable.scan((acc, next) => acc + next, returns("")), Observable.lastAsync(scheduler));
        pipe(acc, expectEquals("abcdefg"));
        pipe(flowed[DisposableLike_isDisposed], expectTrue("expected flowed to be disposed"));
    }
    catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
    }
    finally {
        __disposeResources(env_2);
    }
}), testAsync("reading from readable that throws", async () => {
    const env_3 = { stack: [], error: void 0, hasError: false };
    try {
        const err = newInstance(Error);
        function* generate() {
            yield Buffer.from("abc", "utf8");
            throw err;
        }
        const scheduler = __addDisposableResource(env_3, HostScheduler.create(), false);
        const flowed = pipe(generate(), Readable.from, NodeStream.create, Disposable.addTo(scheduler));
        flowed[PauseableLike_resume]();
        await pipe(flowed, Observable.fromEventSource(), Observable.lastAsync(scheduler), expectPromiseToThrow);
    }
    catch (e_3) {
        env_3.error = e_3;
        env_3.hasError = true;
    }
    finally {
        __disposeResources(env_3);
    }
})), describe("writeTo", testAsync("writing to writable", async () => {
    const env_4 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_4, HostScheduler.create(), false);
        let data = "";
        const writable = newInstance(Writable, {
            autoDestroy: false,
            highWaterMark: 4,
            write(chunk, _encoding, callback) {
                data += chunk;
                callback();
            },
        });
        await pipe(["abc", "defg", "xyz"], Observable.fromReadonlyArray(), Observable.keep(x => x !== "xyz"), Observable.encodeUtf8(), Observable.toPauseableEventSource(scheduler), NodeStream.writeTo(writable), DisposableContainer.toPromise);
        pipe(writable.destroyed, expectFalse("expected writable not to be destroyed"));
        pipe(data, expectEquals("abcdefg"));
        writable.destroy();
    }
    catch (e_4) {
        env_4.error = e_4;
        env_4.hasError = true;
    }
    finally {
        __disposeResources(env_4);
    }
}), testAsync("writing to writable that throws", async () => {
    const env_5 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_5, HostScheduler.create(), false);
        const err = newInstance(Error);
        const writable = newInstance(Writable, {
            autoDestroy: true,
            highWaterMark: 4,
            write(_chunk, _encoding, callback) {
                callback(err);
            },
        });
        await pipe(["abc", "defg"], Observable.fromReadonlyArray(), Observable.encodeUtf8(), Observable.toPauseableEventSource(scheduler), NodeStream.writeTo(writable), DisposableContainer.toPromise, expectPromiseToThrow);
        pipe(writable.destroyed, expectEquals(true));
    }
    catch (e_5) {
        env_5.error = e_5;
        env_5.hasError = true;
    }
    finally {
        __disposeResources(env_5);
    }
}), testAsync("writing to writable with pipeline", async () => {
    const env_6 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_6, HostScheduler.create(), false);
        let data = "";
        const writable = newInstance(Writable, {
            autoDestroy: true,
            highWaterMark: 4,
            write(chunk, _encoding, callback) {
                data += chunk;
                callback();
            },
        });
        const compressionPipeline = pipeline(zlib.createGzip(), zlib.createGunzip(), writable, Disposable.toErrorHandler(scheduler));
        await pipe(["abc", "defg"], Observable.fromReadonlyArray(), Observable.encodeUtf8(), Observable.toPauseableEventSource(scheduler), NodeStream.writeTo(compressionPipeline), DisposableContainer.toPromise);
        pipe(writable.destroyed, expectEquals(true));
        pipe(data, expectEquals("abcdefg"));
    }
    catch (e_6) {
        env_6.error = e_6;
        env_6.hasError = true;
    }
    finally {
        __disposeResources(env_6);
    }
})));
