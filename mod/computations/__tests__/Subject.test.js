/// <reference types="./Subject.test.d.ts" />

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
import { describe, expectArrayEquals, expectEquals, expectFalse, expectIsSome, expectTrue, test, testModule, } from "../../__internal__/testing.js";
import * as Observable from "../../computations/Observable.js";
import * as Subject from "../../computations/Subject.js";
import { BroadcasterLike_connect } from "../../computations.js";
import { bindMethod, ignore, pipe, returns, } from "../../functions.js";
import { increment } from "../../math.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, EventListenerLike_notify, SchedulerLike_schedule, ThrowBackpressureStrategy, VirtualTimeSchedulerLike_run, } from "../../utils.js";
import * as Broadcaster from "../Broadcaster.js";
import * as Computation from "../Computation.js";
testModule("Subject", describe("create", test("with replay", () => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_1, VirtualTimeScheduler.create(), false);
        const subject = Subject.create({ replay: 2 });
        for (const v of [1, 2, 3, 4]) {
            subject[EventListenerLike_notify](v);
        }
        subject[DisposableLike_dispose]();
        const result = [];
        pipe(subject, Broadcaster.toObservable(), Observable.forEach(bindMethod(result, Array_push)), Observable.subscribe(vts));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(result, expectArrayEquals([3, 4]));
    }
    catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
    }
    finally {
        __disposeResources(env_1);
    }
}), test("with multiple observers", () => {
    const env_2 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_2, VirtualTimeScheduler.create(), false);
        const subject = Subject.create({ autoDispose: true });
        pipe(subject[DisposableLike_isDisposed], expectFalse());
        const sub1 = pipe(subject, Broadcaster.toObservable(), Observable.subscribe(vts));
        pipe(subject[DisposableLike_isDisposed], expectFalse());
        const sub2 = pipe(subject, Broadcaster.toObservable(), Observable.subscribe(vts));
        pipe(subject[DisposableLike_isDisposed], expectFalse());
        const sub3 = pipe(Observable.create(observer => {
            subject[BroadcasterLike_connect](observer);
            subject[BroadcasterLike_connect](observer);
        }), Observable.subscribe(vts));
        pipe(subject[DisposableLike_isDisposed], expectFalse());
        sub3[DisposableLike_dispose]();
        pipe(subject[DisposableLike_isDisposed], expectFalse());
        sub1[DisposableLike_dispose]();
        pipe(subject[DisposableLike_isDisposed], expectFalse());
        sub2[DisposableLike_dispose]();
        pipe(subject[DisposableLike_isDisposed], expectTrue());
    }
    catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
    }
    finally {
        __disposeResources(env_2);
    }
}), test("notifying a disposed subject", () => {
    const env_3 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_3, VirtualTimeScheduler.create(), false);
        const subject = Subject.create();
        const result = [];
        const subjectSubscription = pipe(subject, Broadcaster.toObservable(), Observable.forEach(bindMethod(result, Array_push)), Observable.subscribe(vts));
        const generateSubscription = pipe(Computation.generate(Observable)(increment, returns(-1), {
            delay: 3,
            delayStart: true,
        }), Observable.forEach(bindMethod(subject, EventListenerLike_notify)), Observable.subscribe(vts));
        vts[SchedulerLike_schedule](() => {
            subject[DisposableLike_dispose]();
        }, { delay: 7 });
        vts[SchedulerLike_schedule](() => {
            generateSubscription[DisposableLike_dispose]();
        }, { delay: 10 });
        vts[VirtualTimeSchedulerLike_run]();
        pipe(subjectSubscription[DisposableLike_isDisposed], expectTrue());
        pipe(result, expectArrayEquals([0, 1]));
    }
    catch (e_3) {
        env_3.error = e_3;
        env_3.hasError = true;
    }
    finally {
        __disposeResources(env_3);
    }
}), test("subscribing to a subject disposed with an error", () => {
    const env_4 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_4, VirtualTimeScheduler.create(), false);
        const subject = Subject.create();
        const e = new Error();
        subject[DisposableLike_dispose](e);
        const subscription = pipe(subject, Broadcaster.toObservable(), Observable.subscribe(vts));
        vts[VirtualTimeSchedulerLike_run]();
        pipe(subscription[DisposableLike_error], expectEquals(e));
    }
    catch (e_4) {
        env_4.error = e_4;
        env_4.hasError = true;
    }
    finally {
        __disposeResources(env_4);
    }
}), test("notifing an observer that throws an exception on overflow", () => {
    const env_5 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_5, VirtualTimeScheduler.create(), false);
        const subject = Subject.create();
        const subscription = pipe(subject, Broadcaster.toObservable(), Observable.forEach(ignore), Observable.backpressureStrategy({
            backpressureStrategy: ThrowBackpressureStrategy,
            capacity: 1,
        }), Observable.subscribe(vts));
        subject[EventListenerLike_notify](1);
        subject[EventListenerLike_notify](2);
        subject[EventListenerLike_notify](3);
        expectIsSome(subscription[DisposableLike_error]);
    }
    catch (e_5) {
        env_5.error = e_5;
        env_5.hasError = true;
    }
    finally {
        __disposeResources(env_5);
    }
}), test("with autoDispose", () => {
    const env_6 = { stack: [], error: void 0, hasError: false };
    try {
        const vts = __addDisposableResource(env_6, VirtualTimeScheduler.create(), false);
        const subject = Subject.create({
            autoDispose: true,
            replay: 2,
        });
        for (const v of [1, 2, 3, 4]) {
            subject[EventListenerLike_notify](v);
        }
        const result = [];
        const subscription = pipe(subject, Broadcaster.toObservable(), Observable.forEach(bindMethod(result, Array_push)), Observable.subscribe(vts));
        vts[SchedulerLike_schedule](() => {
            pipe(result, expectArrayEquals([3, 4]));
            pipe(subject[DisposableLike_isDisposed], expectFalse());
            subscription[DisposableLike_dispose]();
            pipe(subject[DisposableLike_isDisposed], expectTrue());
        });
        vts[VirtualTimeSchedulerLike_run]();
    }
    catch (e_6) {
        env_6.error = e_6;
        env_6.hasError = true;
    }
    finally {
        __disposeResources(env_6);
    }
})));
