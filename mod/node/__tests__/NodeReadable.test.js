/// <reference types="./NodeReadable.test.d.ts" />

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
import { Readable } from "node:stream";
import { describe, expectEquals, expectPromiseToThrow, expectTrue, testAsync, testModule, } from "../../__internal__/testing.js";
import * as Iterable from "../../computations/Iterable.js";
import * as Observable from "../../computations/Observable.js";
import { ProducerLike_consume } from "../../computations.js";
import { invoke, newInstance, pipe, pipeAsync, returns, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import * as Queue from "../../utils/Queue.js";
import { DisposableLike_isDisposed, PauseableLike_pause, PauseableLike_resume, } from "../../utils.js";
import * as NodeReadable from "../NodeReadable.js";
testModule("NodeReadable", describe("toEventSource", testAsync("reading from readable", async () => {
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
        const src = pipe(readable, NodeReadable.toEventSource, Disposable.addTo(scheduler));
        src[PauseableLike_resume]();
        src[PauseableLike_pause]();
        src[PauseableLike_resume]();
        await pipeAsync(src, Observable.fromEventSource(), Observable.decodeWithCharset(), Observable.scan((acc, next) => acc + next, returns("")), Observable.lastAsync({ scheduler }), expectEquals("abcdefg"));
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
        const src = pipe(Readable.from(generate()), NodeReadable.toEventSource, Disposable.addTo(scheduler));
        const queue = Queue.createDropOldestWithoutBackpressure(1, {
            autoDispose: true,
        });
        pipe(src, Observable.fromEventSource(), Observable.decodeWithCharset(), Observable.scan((acc, next) => acc + next, returns("")), Observable.toProducer(scheduler), invoke(ProducerLike_consume, queue));
        src[PauseableLike_resume]();
        await DisposableContainer.toPromise(queue);
        pipe(queue, Iterable.first(), expectEquals("abcdefg"));
        pipe(src[DisposableLike_isDisposed], expectTrue("expected flowed to be disposed"));
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
        const src = pipe(generate(), Readable.from, NodeReadable.toEventSource, Disposable.addTo(scheduler));
        src[PauseableLike_resume]();
        await pipe(src, Observable.fromEventSource(), Observable.lastAsync({ scheduler }), expectPromiseToThrow);
    }
    catch (e_3) {
        env_3.error = e_3;
        env_3.hasError = true;
    }
    finally {
        __disposeResources(env_3);
    }
})));
