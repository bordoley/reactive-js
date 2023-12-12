/// <reference types="./Stream.test.d.ts" />

import { Readable, Writable, pipeline } from "node:stream";
import zlib from "node:zlib";
import { describe, expectEquals, expectPromiseToThrow, testAsync, testModule, } from "../../../__internal__/testing.js";
import { FlowableLike_flow, PauseableLike_resume, } from "../../../concurrent.js";
import * as HostScheduler from "../../../concurrent/HostScheduler.js";
import * as Observable from "../../../concurrent/Observable.js";
import { bindMethod, invoke, newInstance, pipe, pipeLazy, returns, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as NodeStream from "../Stream.js";
testModule("node/Stream", describe("sinkInto", testAsync("sinking to writable", pipeLazy(async (scheduler) => {
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
    await pipe(["abc", "defg", "xyz"], Observable.fromReadonlyArray(), Observable.keep(x => x !== "xyz"), Observable.map(bindMethod(encoder, "encode")), Observable.flow(), invoke(FlowableLike_flow, scheduler), Disposable.addTo(scheduler), NodeStream.sinkInto(writable), Observable.lastAsync(scheduler));
    pipe(writable.destroyed, expectEquals(true));
    pipe(data, expectEquals("abcdefg"));
}, Disposable.usingAsync(HostScheduler.create))), testAsync("sinking to writable that throws", pipeLazy(async (scheduler) => {
    const encoder = newInstance(TextEncoder);
    const err = newInstance(Error);
    const writable = newInstance(Writable, {
        autoDestroy: true,
        highWaterMark: 4,
        write(_chunk, _encoding, callback) {
            callback(err);
        },
    });
    const promise = pipe([encoder.encode("abc"), encoder.encode("defg")], Observable.fromReadonlyArray(), Observable.flow(), invoke(FlowableLike_flow, scheduler), Disposable.addTo(scheduler), NodeStream.sinkInto(writable), Observable.lastAsync(scheduler));
    await expectPromiseToThrow(promise);
    pipe(writable.destroyed, expectEquals(true));
}, Disposable.usingAsync(HostScheduler.create))), testAsync("sinking to writable with pipeline", pipeLazy(async (scheduler) => {
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
    await pipe([encoder.encode("abc"), encoder.encode("defg")], Observable.fromReadonlyArray(), Observable.flow(), invoke(FlowableLike_flow, scheduler), Disposable.addTo(scheduler), NodeStream.sinkInto(compressionPipeline), Observable.lastAsync(scheduler));
    pipe(writable.destroyed, expectEquals(true));
    pipe(data, expectEquals("abcdefg"));
}, Disposable.usingAsync(HostScheduler.create)))), describe("flow", testAsync("reading from readable", async () => {
    function* generate() {
        yield Buffer.from("abc", "utf8");
        yield Buffer.from("defg", "utf8");
    }
    const textDecoder = newInstance(TextDecoder);
    await Disposable.usingAsync(HostScheduler.create)(async (scheduler) => {
        const flowable = pipe(() => Readable.from(generate()), NodeStream.flow(), invoke(FlowableLike_flow, scheduler), Disposable.addTo(scheduler));
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
        const flowable = pipe(() => Readable.from(generate()), NodeStream.flow(), invoke(FlowableLike_flow, scheduler), Disposable.addTo(scheduler));
        flowable[PauseableLike_resume]();
        await pipe(flowable, Observable.scan((acc, next) => acc + textDecoder.decode(next), returns("")), Observable.lastAsync(scheduler), expectPromiseToThrow);
    });
})));
