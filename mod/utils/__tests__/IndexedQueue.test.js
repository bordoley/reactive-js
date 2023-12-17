/// <reference types="./IndexedQueue.test.d.ts" />

import { describe, expectArrayEquals, expectEquals, test, testModule, } from "../../__internal__/testing.js";
import { CollectionLike_count, KeyedLike_get } from "../../collections.js";
import * as Enumerable from "../../collections/Enumerable.js";
import { none, pipe } from "../../functions.js";
import { QueueLike_dequeue, QueueLike_head, QueueableLike_enqueue, StackLike_head, } from "../../utils.js";
import * as IndexedQueue from "../IndexedQueue.js";
testModule("IndexedQueue", describe("indexedQueueMixin", test("push/pull/count", () => {
    const queue = IndexedQueue.create();
    pipe(queue[QueueLike_head], expectEquals(none));
    pipe(queue[QueueLike_dequeue](), expectEquals(none));
    for (let i = 0; i < 8; i++) {
        queue[QueueableLike_enqueue](i);
        pipe(queue[QueueLike_head], expectEquals(0));
        pipe(queue[StackLike_head], expectEquals(i));
    }
    pipe(queue, Enumerable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]));
    for (let i = 0; i < 8; i++) {
        pipe(queue[KeyedLike_get](i), expectEquals(i));
    }
    pipe(queue[CollectionLike_count], expectEquals(8));
    pipe(queue[QueueLike_dequeue](), expectEquals(0));
    pipe(queue[QueueLike_head], expectEquals(1));
    pipe(queue[QueueLike_dequeue](), expectEquals(1));
    pipe(queue[QueueLike_head], expectEquals(2));
    pipe(queue[QueueLike_dequeue](), expectEquals(2));
    pipe(queue[QueueLike_head], expectEquals(3));
    for (let i = 8; i < 16; i++) {
        queue[QueueableLike_enqueue](i);
        pipe(queue[QueueLike_head], expectEquals(3));
    }
    pipe(queue[QueueLike_dequeue](), expectEquals(3));
    pipe(queue[QueueLike_head], expectEquals(4));
    pipe(queue[QueueLike_dequeue](), expectEquals(4));
    pipe(queue[QueueLike_head], expectEquals(5));
    pipe(queue[QueueLike_dequeue](), expectEquals(5));
    pipe(queue[QueueLike_head], expectEquals(6));
    for (let i = 16; i < 32; i++) {
        queue[QueueableLike_enqueue](i);
        pipe(queue[QueueLike_head], expectEquals(6));
    }
    for (let i = 0; i < 20; i++) {
        queue[QueueLike_dequeue]();
    }
    pipe(queue[QueueLike_head], expectEquals(26));
}), test("shrink", () => {
    const queue = IndexedQueue.create();
    for (let i = 0; i < 300; i++) {
        queue[QueueableLike_enqueue](i);
    }
    for (let i = 0; i < 50; i++) {
        queue[QueueLike_dequeue]();
    }
    pipe(queue[QueueLike_head], expectEquals(50));
    for (let i = 300; i < 500; i++) {
        queue[QueueableLike_enqueue](i);
    }
    for (let i = 0; i < 200; i++) {
        queue[QueueLike_dequeue]();
    }
    pipe(queue[QueueLike_head], expectEquals(250));
})));
