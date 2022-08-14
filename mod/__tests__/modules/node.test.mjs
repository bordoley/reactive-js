/// <reference types="./node.test.d.ts" />
import { Writable, Readable } from 'stream';
import { testModule, describe as createDescribe, testAsync, expectEquals, expectPromiseToThrow } from '../../__internal__/__internal__testing.mjs';
import { endWith, ignoreElements } from '../../containers/ContainerLike.mjs';
import { toObservable } from '../../containers/ReadonlyArrayLike.mjs';
import { newInstance, pipe, returns } from '../../functions.mjs';
import { createWritableSink, createReadableSource, gzip, gunzip } from '../../integrations/node.mjs';
import { toFlowable, concatT, toPromise, keepT, reduce, takeFirst } from '../../rx/ObservableLike.mjs';
import { createHostScheduler } from '../../scheduling.mjs';
import { toObservable as toObservable$1 } from '../../streaming/FlowableLike.mjs';
import { sourceFrom } from '../../streaming/StreamLike.mjs';
import { stream } from '../../streaming/StreamableLike.mjs';
import { dispose } from '../../util/DisposableLike.mjs';

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
            fromArray: toObservable,
            ...concatT,
        }, "pause"), toPromise(scheduler));
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
        const cause = newInstance(Error);
        const writable = newInstance(Writable, {
            autoDestroy: true,
            highWaterMark: 4,
            write(_chunk, _encoding, callback) {
                callback(cause);
            },
        });
        const src = pipe([encoder.encode("abc"), encoder.encode("defg")], toObservable(), toFlowable());
        const dest = pipe(createWritableSink(returns(writable)), stream(scheduler), sourceFrom(src));
        const promise = pipe(dest, ignoreElements(keepT), endWith({
            fromArray: toObservable,
            ...concatT,
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
        const cause = newInstance(Error);
        function* generate() {
            yield Buffer.from("abc", "utf8");
            throw cause;
        }
        const textDecoder = newInstance(TextDecoder);
        await pipe(createReadableSource(() => pipe(generate(), Readable.from)), toObservable$1(), reduce((acc, next) => acc + textDecoder.decode(next), returns("")), endWith({
            fromArray: toObservable,
            ...concatT,
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
