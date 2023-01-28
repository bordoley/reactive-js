/// <reference types="./node.test.d.ts" />
import { Writable, Readable } from 'stream';
import { endWith, ignoreElements } from '../../containers/Container.mjs';
import { toObservable } from '../../containers/ReadonlyArray.mjs';
import { newInstance, pipe, returns } from '../../functions.mjs';
import { createWritableSink, createReadableSource, gzip, gunzip } from '../../integrations/node.mjs';
import { toFlowable, fromArray, concat, toPromise, keep, reduce, takeFirst } from '../../rx/Observable.mjs';
import { createHostScheduler } from '../../scheduling/Scheduler.mjs';
import { FlowMode_pause } from '../../streaming.mjs';
import { toObservable as toObservable$1 } from '../../streaming/Flowable.mjs';
import { sourceFrom } from '../../streaming/Stream.mjs';
import { stream } from '../../streaming/Streamable.mjs';
import { dispose } from '../../util/Disposable.mjs';
import { testModule, describe as createDescribe, testAsync, expectEquals, expectPromiseToThrow } from '../testing.mjs';

testModule("node", createDescribe("createWritableIOSink", testAsync("sinking to writable", async () => {
    const scheduler = createHostScheduler();
    try {
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
        const src = pipe([encoder.encode("abc"), encoder.encode("defg")], toObservable(), toFlowable());
        const dest = pipe(createWritableSink(returns(writable)), stream(scheduler), sourceFrom(src));
        await pipe(dest, endWith({
            fromArray,
            concat,
        }, FlowMode_pause), toPromise(scheduler));
        pipe(writable.destroyed, expectEquals(true));
        pipe(data, expectEquals("abcdefg"));
    }
    finally {
        pipe(scheduler, dispose());
    }
}), testAsync("sinking to writable that throws", async () => {
    const scheduler = createHostScheduler();
    try {
        const encoder = newInstance(TextEncoder);
        const err = newInstance(Error);
        const writable = newInstance(Writable, {
            autoDestroy: true,
            highWaterMark: 4,
            write(_chunk, _encoding, callback) {
                callback(err);
            },
        });
        const src = pipe([encoder.encode("abc"), encoder.encode("defg")], toObservable(), toFlowable());
        const dest = pipe(createWritableSink(returns(writable)), stream(scheduler), sourceFrom(src));
        const promise = pipe(dest, ignoreElements({ keep }), endWith({
            fromArray,
            concat,
        }, 0), toPromise(scheduler));
        await expectPromiseToThrow(promise);
        pipe(writable.destroyed, expectEquals(true));
    }
    finally {
        pipe(scheduler, dispose());
    }
})), createDescribe("createReadableIOSource", testAsync("reading from readable", async () => {
    const scheduler = createHostScheduler();
    try {
        function* generate() {
            yield Buffer.from("abc", "utf8");
            yield Buffer.from("defg", "utf8");
        }
        const textDecoder = newInstance(TextDecoder);
        const acc = await pipe(createReadableSource(() => pipe(generate(), Readable.from)), toObservable$1(), reduce((acc, next) => acc + textDecoder.decode(next), returns("")), takeFirst({ count: 1 }), toPromise(scheduler));
        pipe(acc, expectEquals("abcdefg"));
    }
    finally {
        pipe(scheduler, dispose());
    }
}), testAsync("reading from readable that throws", async () => {
    const scheduler = createHostScheduler();
    try {
        const err = newInstance(Error);
        function* generate() {
            yield Buffer.from("abc", "utf8");
            throw err;
        }
        const textDecoder = newInstance(TextDecoder);
        await pipe(createReadableSource(() => pipe(generate(), Readable.from)), toObservable$1(), reduce((acc, next) => acc + textDecoder.decode(next), returns("")), endWith({
            fromArray,
            concat,
        }, ""), toPromise(scheduler), expectPromiseToThrow);
    }
    finally {
        pipe(scheduler, dispose());
    }
})), testAsync("transform", async () => {
    const scheduler = createHostScheduler();
    try {
        const encoder = newInstance(TextEncoder);
        const textDecoder = newInstance(TextDecoder);
        const acc = await pipe([encoder.encode("abc"), encoder.encode("defg")], toObservable(), toFlowable(), gzip(), gunzip(), toObservable$1(), reduce((acc, next) => acc + textDecoder.decode(next), returns("")), takeFirst({ count: 1 }), toPromise(scheduler));
        pipe(acc, expectEquals("abcdefg"));
    }
    finally {
        pipe(scheduler, dispose());
    }
}));
