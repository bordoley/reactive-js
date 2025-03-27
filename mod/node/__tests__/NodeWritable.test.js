/// <reference types="./NodeWritable.test.d.ts" />

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
import { Writable, pipeline } from "node:stream";
import zlib from "node:zlib";
import { describe, expectEquals, expectFalse, expectPromiseToThrow, testAsync, testModule, } from "../../__internal__/testing.js";
import * as Computation from "../../computations/Computation.js";
import * as Producer from "../../computations/Producer.js";
import { SourceLike_subscribe } from "../../computations.js";
import { invoke, newInstance, pipe } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import * as NodeWritable from "../NodeWritable.js";
const ProducerModule = Producer.makeModule(Producer);
testModule("NodeWritable", describe("toConsumer", testAsync("writing to writable", async () => {
    let data = "";
    const writable = newInstance(Writable, {
        autoDestroy: false,
        highWaterMark: 4,
        write(chunk, _encoding, callback) {
            data += chunk;
            callback();
        },
    });
    const consumer = pipe(writable, NodeWritable.toConsumer({ autoDispose: true }));
    pipe(["abc", "defg"], Computation.fromReadonlyArray(ProducerModule)(), Producer.encodeUtf8(), invoke(SourceLike_subscribe, consumer));
    await DisposableContainer.toPromise(consumer);
    pipe(writable.destroyed, expectFalse("expected writable not to be destroyed"));
    pipe(data, expectEquals("abcdefg"));
    writable.destroy();
}), testAsync("writing to writable that throws", async () => {
    const err = newInstance(Error);
    const writable = newInstance(Writable, {
        autoDestroy: true,
        highWaterMark: 4,
        write(_chunk, _encoding, callback) {
            callback(err);
        },
    });
    const consumer = pipe(writable, NodeWritable.toConsumer({ autoDispose: true }));
    pipe(["abc", "defg"], Computation.fromReadonlyArray(ProducerModule)(), Producer.encodeUtf8(), invoke(SourceLike_subscribe, consumer));
    await pipe(consumer, DisposableContainer.toPromise, expectPromiseToThrow);
    pipe(writable.destroyed, expectEquals(true));
}), testAsync("writing to writable with pipeline", async () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_1, HostScheduler.create(), false);
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
        const consumer = pipe(compressionPipeline, NodeWritable.toConsumer({ autoDispose: true }));
        pipe(["abc", "defg"], Computation.fromReadonlyArray(ProducerModule)(), Producer.encodeUtf8(), invoke(SourceLike_subscribe, consumer));
        await DisposableContainer.toPromise(consumer);
        pipe(writable.destroyed, expectEquals(true));
        pipe(data, expectEquals("abcdefg"));
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
})))();
