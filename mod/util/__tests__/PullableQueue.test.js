/// <reference types="./PullableQueue.test.d.ts" />

import { createInstanceFactory } from "../../__internal__/mixins.js";
import { describe, expectArrayEquals, expectEquals, test, testModule, } from "../../__tests__/testing.js";
import { floor, newInstance, none, pipe } from "../../functions.js";
import { QueueLike_push } from "../../util.js";
import PullableQueue_fifoQueueMixin from "../PullableQueue/__internal__/PullableQueue.fifoQueueMixin.js";
import PullableQueue_priorityQueueMixin from "../PullableQueue/__internal__/PullableQueue.priorityQueueMixin.js";
import PullableQueue_pull from "../PullableQueue/__internal__/PullableQueue.pull.js";
import Queue_count from "../Queue/__internal__/Queue.count.js";
import { PullableQueueLike_peek, PullableQueueLike_pull, } from "../__internal__/util.internal.js";
const createPriorityQueue = /*@__PURE__*/ (() => {
    const compare = (a, b) => a - b;
    const createInstance = createInstanceFactory(PullableQueue_priorityQueueMixin());
    return () => createInstance(compare);
})();
const createFifoQueue = /*@__PURE__*/ (() => createInstanceFactory(PullableQueue_fifoQueueMixin()))();
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
        const index = floor(Math.random() * (count + 1));
        const temp = result[count];
        result[count] = result[index];
        result[index] = temp;
    }
    return result;
};
testModule("PullableQueue", describe("fifoQueueMixin", test("push/pull/count", () => {
    const queue = createFifoQueue();
    pipe(queue[PullableQueueLike_peek](), expectEquals(none));
    pipe(queue[PullableQueueLike_pull](), expectEquals(none));
    for (let i = 0; i < 8; i++) {
        queue[QueueLike_push](i);
        pipe(queue[PullableQueueLike_peek](), expectEquals(0));
    }
    pipe(queue, Queue_count, expectEquals(8));
    pipe(queue[PullableQueueLike_pull](), expectEquals(0));
    pipe(queue[PullableQueueLike_peek](), expectEquals(1));
    pipe(queue[PullableQueueLike_pull](), expectEquals(1));
    pipe(queue[PullableQueueLike_peek](), expectEquals(2));
    pipe(queue[PullableQueueLike_pull](), expectEquals(2));
    pipe(queue[PullableQueueLike_peek](), expectEquals(3));
    for (let i = 8; i < 16; i++) {
        queue[QueueLike_push](i);
        pipe(queue[PullableQueueLike_peek](), expectEquals(3));
    }
    pipe(queue[PullableQueueLike_pull](), expectEquals(3));
    pipe(queue[PullableQueueLike_peek](), expectEquals(4));
    pipe(queue[PullableQueueLike_pull](), expectEquals(4));
    pipe(queue[PullableQueueLike_peek](), expectEquals(5));
    pipe(queue[PullableQueueLike_pull](), expectEquals(5));
    pipe(queue[PullableQueueLike_peek](), expectEquals(6));
    for (let i = 16; i < 32; i++) {
        queue[QueueLike_push](i);
        pipe(queue[PullableQueueLike_peek](), expectEquals(6));
    }
    for (let i = 0; i < 20; i++) {
        queue[PullableQueueLike_pull]();
    }
    pipe(queue[PullableQueueLike_peek](), expectEquals(26));
}), test("shrink", () => {
    const queue = createFifoQueue();
    for (let i = 0; i < 30000; i++) {
        queue[QueueLike_push](i);
    }
    for (let i = 0; i < 5000; i++) {
        queue[PullableQueueLike_pull]();
    }
    pipe(queue[PullableQueueLike_peek](), expectEquals(5000));
    for (let i = 30000; i < 5000; i++) {
        queue[QueueLike_push](i);
    }
    for (let i = 0; i < 20000; i++) {
        queue[PullableQueueLike_pull]();
    }
    pipe(queue[PullableQueueLike_peek](), expectEquals(25000));
})), describe("priorityQueueMixin", test("push", () => {
    const queue = createPriorityQueue();
    const shuffledArray = makeShuffledArray(100);
    for (let i = 0; i < shuffledArray.length; i++) {
        queue[QueueLike_push](shuffledArray[i]);
    }
    debugger;
    const acc = [];
    while (Queue_count(queue) > 0) {
        acc.push(PullableQueue_pull(queue));
    }
    pipe(acc, expectArrayEquals(makeSortedArray(100)));
})));
