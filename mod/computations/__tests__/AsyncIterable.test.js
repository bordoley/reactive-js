/// <reference types="./AsyncIterable.test.d.ts" />

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
import { describe, expectArrayEquals, expectToThrowAsync, testAsync, testModule, } from "../../__internal__/testing.js";
import { Computation_deferredWithSideEffectsOfT, Computation_pureDeferredOfT, } from "../../computations.js";
import { error, none, pipe, pipeLazy, pipeLazyAsync } from "../../functions.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import { PauseableLike_pause, PauseableLike_resume, SchedulerLike_schedule, } from "../../utils.js";
import * as AsyncIterable from "../AsyncIterable.js";
import * as Broadcaster from "../Broadcaster.js";
import * as Computation from "../Computation.js";
import * as EventSource from "../EventSource.js";
import * as Observable from "../Observable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ConcurrentDeferredComputationModuleTests from "./fixtures/ConcurrentDeferredComputationModuleTests.js";
import InteractiveComputationModuleTests from "./fixtures/InteractiveComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";
const AsyncIterableTypes = {
    [Computation_deferredWithSideEffectsOfT]: pipe((async function* () { })(), AsyncIterable.of()),
    [Computation_pureDeferredOfT]: pipe([], AsyncIterable.fromReadonlyArray()),
};
testModule("AsyncIterable", ComputationModuleTests(AsyncIterable, AsyncIterableTypes), SequentialComputationModuleTests(AsyncIterable, AsyncIterableTypes), InteractiveComputationModuleTests(AsyncIterable), ConcurrentDeferredComputationModuleTests(AsyncIterable), describe("broadcast", testAsync("infinite immediately resolving iterable", async () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_1, HostScheduler.create(), false);
        let timeout = none;
        const obs = pipe((async function* foo() {
            let i = 0;
            while (true) {
                await new Promise(resolve => {
                    timeout = setTimeout(resolve, 25);
                });
                yield i++;
                timeout = none;
            }
        })(), AsyncIterable.of(), AsyncIterable.broadcast({ scheduler, autoDispose: true }), DisposableContainer.onDisposed(_ => {
            if (timeout !== none) {
                clearTimeout(timeout);
            }
        }));
        obs[PauseableLike_resume]();
        scheduler[SchedulerLike_schedule](_ => obs[PauseableLike_pause](), {
            delay: 20,
        });
        scheduler[SchedulerLike_schedule](_ => obs[PauseableLike_resume](), {
            delay: 40,
        });
        const result = await pipe(obs, Broadcaster.toObservable(), Observable.takeFirst({ count: 10 }), Observable.buffer(), Observable.lastAsync({ scheduler }));
        pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
}), testAsync("iterable that completes", async () => {
    const env_2 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_2, HostScheduler.create(), false);
        const stream = pipe((async function* foo() {
            yield 1;
            yield 2;
            yield 3;
        })(), AsyncIterable.of(), AsyncIterable.broadcast({ scheduler, autoDispose: true }));
        stream[PauseableLike_resume]();
        const result = await pipe(stream, Broadcaster.toObservable(), Observable.buffer(), Observable.lastAsync({ scheduler }));
        pipe(result ?? [], expectArrayEquals([1, 2, 3]));
    }
    catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
    }
    finally {
        __disposeResources(env_2);
    }
}), testAsync("iterable that throws", pipeLazy(async () => {
    const env_3 = { stack: [], error: void 0, hasError: false };
    try {
        const scheduler = __addDisposableResource(env_3, HostScheduler.create(), false);
        const e = error();
        const stream = pipe((async function* foo() {
            throw e;
        })(), AsyncIterable.of(), AsyncIterable.broadcast({ scheduler, autoDispose: true }));
        stream[PauseableLike_resume]();
        await pipe(stream, Broadcaster.toObservable(), Observable.lastAsync({ scheduler }));
    }
    catch (e_3) {
        env_3.error = e_3;
        env_3.hasError = true;
    }
    finally {
        __disposeResources(env_3);
    }
}, expectToThrowAsync)), testAsync("notifies all the values produced by the iterable", pipeLazyAsync([1, 2, 3, 4], Computation.fromIterable(AsyncIterable), AsyncIterable.broadcast({ autoDispose: true }), Broadcaster.toEventSource(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 4])))));
((_) => { })(AsyncIterable);
