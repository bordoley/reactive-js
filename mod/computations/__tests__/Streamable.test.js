/// <reference types="./Streamable.test.d.ts" />

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
import { Array_push } from "../../__internal__/constants.js";
import { describe, expectArrayEquals, expectEquals, expectFalse, expectTrue, test, testModule, } from "../../__internal__/testing.js";
import * as Collection from "../../collections/Collection.js";
import * as Dictionary from "../../collections/Dictionary.js";
import { DictionaryLike_get } from "../../collections.js";
import * as Observable from "../../computations/Observable.js";
import * as Streamable from "../../computations/Streamable.js";
import { StreamableLike_stream } from "../../computations.js";
import { bindMethod, invoke, none, pipe, pipeSome, returns, } from "../../functions.js";
import { increment } from "../../math.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import { ConsumerLike_backpressureStrategy, ConsumerLike_capacity, DropLatestBackpressureStrategy, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, VirtualTimeSchedulerLike_run, } from "../../utils.js";
import * as EventSource from "../EventSource.js";
testModule("Streamable", describe("animation", test("integration", () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_1, VirtualTimeScheduler.create({ maxMicroTaskTicks: 1 }), false);
        const stream = Streamable.animation(Observable.keyFrame(500))[StreamableLike_stream](vts);
        let result = 0;
        pipeSome(stream, EventSource.addEventHandler(ev => {
            result = ev;
        }));
        stream[EventListenerLike_notify](none);
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectEquals(1));
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
})), describe("animationGroup", test("integration", () => {
    const env_2 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_2, VirtualTimeScheduler.create({ maxMicroTaskTicks: 1 }), false);
        const stream = Streamable.animationGroup({
            a: Observable.keyFrame(500),
        })[StreamableLike_stream](vts);
        pipe(stream, Collection.keySet(Dictionary.keys), invoke("has", "a"), expectTrue("expect collection tot contain the key 'a'"));
        let result = 0;
        pipeSome(stream[DictionaryLike_get]("a"), EventSource.addEventHandler(ev => {
            result = ev;
        }));
        stream[EventListenerLike_notify](none);
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectEquals(1));
    }
    catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
    }
    finally {
        __disposeResources(env_2);
    }
})), describe("stateStore", test("stateStore", () => {
    const env_3 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_3, VirtualTimeScheduler.create(), false);
        const streamable = Streamable.stateStore(returns(1));
        const stateStream = streamable[StreamableLike_stream](vts, {
            capacity: 20,
            backpressureStrategy: DropLatestBackpressureStrategy,
        });
        pipe(stateStream[ConsumerLike_capacity], expectEquals(20));
        pipe(stateStream[ConsumerLike_backpressureStrategy], expectEquals(DropLatestBackpressureStrategy));
        stateStream[EventListenerLike_notify](returns(2));
        stateStream[EventListenerLike_notify](returns(3));
        stateStream[SinkLike_complete]();
        let result = [];
        pipe(stateStream, Observable.forEach(bindMethod(result, Array_push)), Observable.subscribe(vts));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([1, 2, 3]));
    }
    catch (e_3) {
        env_3.error = e_3;
        env_3.hasError = true;
    }
    finally {
        __disposeResources(env_3);
    }
}), test("completing the store", () => {
    const env_4 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_4, VirtualTimeScheduler.create(), false);
        const streamable = Streamable.stateStore(returns(1));
        const stateStream = streamable[StreamableLike_stream](vts, {
            capacity: 20,
            backpressureStrategy: DropLatestBackpressureStrategy,
        });
        pipe(stateStream[SinkLike_isCompleted], expectFalse("expected stream not to be completed"));
        stateStream[SinkLike_complete]();
        pipe(stateStream[SinkLike_isCompleted], expectTrue("expected stream to be completed"));
    }
    catch (e_4) {
        env_4.error = e_4;
        env_4.hasError = true;
    }
    finally {
        __disposeResources(env_4);
    }
})), describe("syncState", test("without throttling", () => {
    const env_5 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_5, VirtualTimeScheduler.create({ maxMicroTaskTicks: 1 }), false);
        const stream = pipe(Streamable.stateStore(returns(-1)), Streamable.syncState(_ => pipe([9, 10, 50, 60, 70], Observable.fromReadonlyArray({ delay: 1, delayStart: true }), Observable.map(x => (_) => x), Observable.takeFirst({ count: 2 })), (_oldState, _newState) => Observable.empty()), invoke(StreamableLike_stream, vts));
        pipe((x) => x + 2, Observable.fromValue({ delay: 5 }), Observable.forEach(bindMethod(stream, EventListenerLike_notify)), Observable.subscribe(vts));
        const result = [];
        pipe(stream, Observable.forEach(bindMethod(result, Array_push)), Observable.subscribe(vts));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([-1, 9, 10, 12]));
    }
    catch (e_5) {
        env_5.error = e_5;
        env_5.hasError = true;
    }
    finally {
        __disposeResources(env_5);
    }
}), test("with throttling", () => {
    const env_6 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_6, VirtualTimeScheduler.create(), false);
        let updateCnt = 0;
        const stream = pipe(Streamable.stateStore(returns(0)), Streamable.syncState(state => pipe((_) => state, Observable.fromValue()), (_oldState, _newState) => {
            updateCnt++;
            return Observable.empty({ delay: 1 });
        }, { throttleDuration: 20 }), invoke(StreamableLike_stream, vts));
        pipe(increment, Observable.fromValue({ delay: 1 }), Observable.repeat(24), Observable.forEach(bindMethod(stream, EventListenerLike_notify)), Observable.subscribe(vts));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(updateCnt, expectEquals(2));
    }
    catch (e_6) {
        env_6.error = e_6;
        env_6.hasError = true;
    }
    finally {
        __disposeResources(env_6);
    }
})));
((_) => { })(Streamable);
