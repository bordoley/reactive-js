/// <reference types="./IndexedQueue.test.d.ts" />

import { expectEquals, expectIsNone, expectToThrow, test, testModule, } from "../../__internal__/testing.js";
import { none, pipe } from "../../functions.js";
import { IndexedQueueLike_get, IndexedQueueLike_set, QueueLike_count, QueueLike_dequeue, QueueLike_head, QueueableLike_enqueue, StackLike_head, StackLike_pop, } from "../../utils.js";
import * as IndexedQueue from "../IndexedQueue.js";
testModule("IndexedQueue", test("get/set", () => {
    const queue = IndexedQueue.create();
    for (let i = 0; i < 30; i++) {
        queue[QueueableLike_enqueue](i);
    }
    for (let i = 0; i < 20; i++) {
        queue[QueueLike_dequeue]();
    }
    for (let i = 0; i < 4; i++) {
        queue[QueueableLike_enqueue](i + 30);
    }
    for (let i = 0; i < queue[QueueLike_count]; i++) {
        queue[IndexedQueueLike_set](i, i);
        const v = queue[IndexedQueueLike_get](i);
        pipe(v, expectEquals(i));
    }
    for (let i = 0; i < 20; i++) {
        queue[QueueableLike_enqueue](i + 34);
    }
    for (let i = 0; i < queue[QueueLike_count]; i++) {
        queue[IndexedQueueLike_set](i, i);
        const v = queue[IndexedQueueLike_get](i);
        pipe(v, expectEquals(i));
    }
}), test("push/pull/count", () => {
    const queue = IndexedQueue.create();
    pipe(queue[StackLike_head], expectIsNone);
    pipe(queue[StackLike_pop](), expectIsNone);
    expectToThrow(() => queue[IndexedQueueLike_get](0));
    expectToThrow(() => queue[IndexedQueueLike_set](0, 0));
    pipe(queue[QueueLike_head], expectEquals(none));
    pipe(queue[QueueLike_dequeue](), expectEquals(none));
    for (let i = 0; i < 8; i++) {
        queue[QueueableLike_enqueue](i);
        pipe(queue[QueueLike_head], expectEquals(0));
        pipe(queue[StackLike_head], expectEquals(i));
    }
    expectToThrow(() => queue[IndexedQueueLike_get](-10));
    for (let i = 0; i < 8; i++) {
        pipe(queue[IndexedQueueLike_get](i), expectEquals(i));
    }
    pipe(queue[QueueLike_count], expectEquals(8));
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
}));
