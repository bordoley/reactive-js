/// <reference types="./Queue.test.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { floor, random } from "../../__internal__/math.js";
import { describe, expectArrayEquals, expectEquals, test, testModule, } from "../../__internal__/testing.js";
import { QueueLike_dequeue, QueueLike_head, } from "../../__internal__/util.internal.js";
import { newInstance, none, pipe } from "../../functions.js";
import { CollectionLike_count, QueueableLike_enqueue } from "../../util.js";
import IndexedQueue_createFifoQueue from "../Queue/__internal__/IndexedQueue.createFifoQueue.js";
import Queue_createPriorityQueue from "../Queue/__internal__/Queue.createPriorityQueue.js";
const createPriorityQueue = /*@__PURE__*/ (() => {
    const compare = (a, b) => a - b;
    return () => Queue_createPriorityQueue(compare, MAX_SAFE_INTEGER, "overflow");
})();
const makeSortedArray = (n) => {
    const result = newInstance(Array, n);
    for (let i = 0; i < n; i++) {
        result[i] = i;
    }
    return result;
};
const makeShuffledArray = (n) => {
    const result = makeSortedArray(n);
    for (let count = n - 1; count >= 0; count--) {
        const index = floor(random() * (count + 1));
        const temp = result[count];
        result[count] = result[index];
        result[index] = temp;
    }
    return result;
};
testModule("Queue", describe("fifoQueueMixin", test("push/pull/count", () => {
    const queue = IndexedQueue_createFifoQueue(MAX_SAFE_INTEGER, "overflow");
    pipe(queue[QueueLike_head], expectEquals(none));
    pipe(queue[QueueLike_dequeue](), expectEquals(none));
    for (let i = 0; i < 8; i++) {
        queue[QueueableLike_enqueue](i);
        pipe(queue[QueueLike_head], expectEquals(0));
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
    const queue = IndexedQueue_createFifoQueue(MAX_SAFE_INTEGER, "overflow");
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
})), describe("priorityQueueMixin", test("push", () => {
    const queue = createPriorityQueue();
    const shuffledArray = makeShuffledArray(100);
    for (let i = 0; i < shuffledArray.length; i++) {
        queue[QueueableLike_enqueue](shuffledArray[i]);
    }
    const acc = [];
    while (queue[CollectionLike_count] > 0) {
        acc.push(queue[QueueLike_dequeue]());
    }
    pipe(acc, expectArrayEquals(makeSortedArray(100)));
})));
