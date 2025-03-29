/// <reference types="./NodeReadable.test.d.ts" />

import { Readable } from "node:stream";
import { describe, expectEquals, expectPromiseToThrow, expectTrue, testAsync, testModule, } from "../../__internal__/testing.js";
import * as Producer from "../../computations/Producer.js";
import * as Source from "../../computations/Source.js";
import { SourceLike_subscribe } from "../../computations.js";
import { invoke, newInstance, pipe, pipeAsync, returns, } from "../../functions.js";
import * as DefaultScheduler from "../../utils/DefaultScheduler.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import * as Consumer from "../../utils/__internal__/Consumer.js";
import { CollectionEnumeratorLike_peek } from "../../utils.js";
import * as NodeReadable from "../NodeReadable.js";
testModule("NodeReadable", describe("create", testAsync("reading from readable", async () => {
    function* generate() {
        yield Buffer.from("abc", "utf8");
        yield Buffer.from("defg", "utf8");
    }
    const readable = Readable.from(generate(), {
        autoDestroy: false,
    });
    await pipeAsync(readable, returns, NodeReadable.create, Producer.decodeWithCharset(), Producer.scan((acc, next) => acc + next, returns("")), Source.lastAsync(), expectEquals("abcdefg"));
    pipe(readable.destroyed, expectTrue("expected readable to be destroyed"));
}), testAsync("reading from readable factory", async () => {
    function* generate() {
        yield Buffer.from("abc", "utf8");
        yield Buffer.from("defg", "utf8");
    }
    const queue = Consumer.takeLast(1);
    pipe(NodeReadable.create(() => Readable.from(generate())), Producer.decodeWithCharset(), Producer.scan((acc, next) => acc + next, returns("")), invoke(SourceLike_subscribe, queue));
    await DisposableContainer.toPromise(queue);
    pipe(queue[CollectionEnumeratorLike_peek], expectEquals("abcdefg"));
}), testAsync("reading from readable that throws", async () => {
    const err = newInstance(Error);
    function* generate() {
        yield Buffer.from("abc", "utf8");
        throw err;
    }
    await pipe(NodeReadable.create(() => Readable.from(generate())), Source.lastAsync(), expectPromiseToThrow);
})))({
    beforeEach() {
        const scheduler = HostScheduler.create();
        DefaultScheduler.set(scheduler);
    },
    afterEach() {
        DefaultScheduler.dispose();
    },
});
