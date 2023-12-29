/// <reference types="./Stream.test.d.ts" />

import { Readable, Writable, pipeline } from "node:stream";
import zlib from "node:zlib";
import { describe, expectEquals, expectFalse, expectPromiseToThrow, expectTrue, testAsync, testModule, } from "../../../__internal__/testing.js";
import { FlowableLike_flow, PauseableLike_resume, } from "../../../concurrent.js";
import * as Flowable from "../../../concurrent/Flowable.js";
import * as HostScheduler from "../../../concurrent/HostScheduler.js";
import * as Observable from "../../../concurrent/Observable.js";
import { bindMethod, invoke, newInstance, pipe, returns, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as NodeStream from "../Stream.js";
testModule("node/Stream", describe("sinkInto", testAsync("sinking to writable", Disposable.usingAsyncLazy(HostScheduler.create)(async (scheduler) => {
    const encoder = newInstance(TextEncoder);
    let data = "";
    const writable = newInstance(Writable, {
        autoDestroy: false,
        highWaterMark: 4,
        write(chunk, _encoding, callback) {
            data += chunk;
            callback();
        },
    });
    await pipe(["abc", "defg", "xyz"], Observable.fromReadonlyArray(), Observable.keep(x => x !== "xyz"), Observable.map(bindMethod(encoder, "encode")), Flowable.fromRunnable(), NodeStream.sinkInto(writable), Observable.lastAsync(scheduler));
    expectFalse(writable.destroyed);
    pipe(data, expectEquals("abcdefg"));
    writable.destroy();
})), testAsync("sinking to writable that throws", Disposable.usingAsyncLazy(HostScheduler.create)(async (scheduler) => {
    const encoder = newInstance(TextEncoder);
    const err = newInstance(Error);
    const writable = newInstance(Writable, {
        autoDestroy: true,
        highWaterMark: 4,
        write(_chunk, _encoding, callback) {
            callback(err);
        },
    });
    const promise = pipe([encoder.encode("abc"), encoder.encode("defg")], Observable.fromReadonlyArray(), Flowable.fromRunnable(), NodeStream.sinkInto(writable), Observable.lastAsync(scheduler));
    await expectPromiseToThrow(promise);
    pipe(writable.destroyed, expectEquals(true));
})), testAsync("sinking to writable with pipeline", Disposable.usingAsyncLazy(HostScheduler.create)(async (scheduler) => {
    const encoder = newInstance(TextEncoder);
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
    await pipe([encoder.encode("abc"), encoder.encode("defg")], Observable.fromReadonlyArray(), Flowable.fromRunnable(), NodeStream.sinkInto(compressionPipeline), Observable.lastAsync(scheduler));
    pipe(writable.destroyed, expectEquals(true));
    pipe(data, expectEquals("abcdefg"));
}))), describe("toFlowable", testAsync("reading from readable", async () => {
    function* generate() {
        yield Buffer.from("abc", "utf8");
        yield Buffer.from("defg", "utf8");
    }
    const textDecoder = newInstance(TextDecoder);
    await Disposable.usingAsync(HostScheduler.create)(async (scheduler) => {
        const readable = Readable.from(generate(), {
            autoDestroy: false,
        });
        const flowable = pipe(returns(readable), NodeStream.toFlowable(), invoke(FlowableLike_flow, scheduler), Disposable.addTo(scheduler));
        flowable[PauseableLike_resume]();
        const acc = await pipe(flowable, Observable.scan((acc, next) => acc + textDecoder.decode(next), returns("")), Observable.lastAsync(scheduler));
        pipe(acc, expectEquals("abcdefg"));
        expectTrue(readable.destroyed);
    });
}), testAsync("reading from readable factory", async () => {
    function* generate() {
        yield Buffer.from("abc", "utf8");
        yield Buffer.from("defg", "utf8");
    }
    const textDecoder = newInstance(TextDecoder);
    await Disposable.usingAsync(HostScheduler.create)(async (scheduler) => {
        const flowable = pipe(() => Readable.from(generate()), NodeStream.toFlowable(), invoke(FlowableLike_flow, scheduler), Disposable.addTo(scheduler));
        flowable[PauseableLike_resume]();
        const acc = await pipe(flowable, Observable.scan((acc, next) => acc + textDecoder.decode(next), returns("")), Observable.lastAsync(scheduler));
        pipe(acc, expectEquals("abcdefg"));
    });
}), testAsync("reading from readable that throws", async () => {
    const err = newInstance(Error);
    function* generate() {
        yield Buffer.from("abc", "utf8");
        throw err;
    }
    const textDecoder = newInstance(TextDecoder);
    await Disposable.usingAsync(HostScheduler.create)(async (scheduler) => {
        const flowable = pipe(() => Readable.from(generate()), NodeStream.toFlowable(), invoke(FlowableLike_flow, scheduler), Disposable.addTo(scheduler));
        flowable[PauseableLike_resume]();
        await pipe(flowable, Observable.scan((acc, next) => acc + textDecoder.decode(next), returns("")), Observable.lastAsync(scheduler), expectPromiseToThrow);
    });
})));
