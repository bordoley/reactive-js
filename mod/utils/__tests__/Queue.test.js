/// <reference types="./Queue.test.d.ts" />

import { Array_length, Array_push } from "../../__internal__/constants.js";
import { describe, expectArrayEquals, expectEquals, test, testModule, } from "../../__internal__/testing.js";
import { newInstance, none, pipe } from "../../functions.js";
import { floor, random } from "../../math.js";
import { QueueLike_count, QueueLike_dequeue, QueueLike_enqueue, QueueLike_head, } from "../../utils.js";
import * as Queue from "../Queue.js";
const createSorted = /*@__PURE__*/ (() => {
    const comparator = (a, b) => a - b;
    return () => Queue.createSorted(comparator);
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
testModule("Queue", test("enqueue", () => {
    const queue = Queue.create();
    for (let i = 0; i < 127; i++) {
        queue[QueueLike_enqueue](i);
    }
    for (let i = 0; i < 62; i++) {
        queue[QueueLike_dequeue]();
    }
    for (let i = 128; i < 255; i++) {
        queue[QueueLike_enqueue](i);
    }
    pipe(queue[QueueLike_count], expectEquals(192));
}), test("push/pull/count", () => {
    const queue = Queue.create();
    pipe(queue[QueueLike_head], expectEquals(none));
    pipe(queue[QueueLike_dequeue](), expectEquals(none));
    for (let i = 0; i < 8; i++) {
        queue[QueueLike_enqueue](i);
        pipe(queue[QueueLike_head], expectEquals(0));
    }
    pipe(queue[QueueLike_count], expectEquals(8));
    pipe(queue[QueueLike_dequeue](), expectEquals(0));
    pipe(queue[QueueLike_head], expectEquals(1));
    pipe(queue[QueueLike_dequeue](), expectEquals(1));
    pipe(queue[QueueLike_head], expectEquals(2));
    pipe(queue[QueueLike_dequeue](), expectEquals(2));
    pipe(queue[QueueLike_head], expectEquals(3));
    for (let i = 8; i < 16; i++) {
        queue[QueueLike_enqueue](i);
        pipe(queue[QueueLike_head], expectEquals(3));
    }
    pipe(queue[QueueLike_dequeue](), expectEquals(3));
    pipe(queue[QueueLike_head], expectEquals(4));
    pipe(queue[QueueLike_dequeue](), expectEquals(4));
    pipe(queue[QueueLike_head], expectEquals(5));
    pipe(queue[QueueLike_dequeue](), expectEquals(5));
    pipe(queue[QueueLike_head], expectEquals(6));
    for (let i = 16; i < 32; i++) {
        queue[QueueLike_enqueue](i);
        pipe(queue[QueueLike_head], expectEquals(6));
    }
    for (let i = 0; i < 20; i++) {
        queue[QueueLike_dequeue]();
    }
    pipe(queue[QueueLike_head], expectEquals(26));
}), test("shrink", () => {
    const queue = Queue.create();
    for (let i = 0; i < 300; i++) {
        queue[QueueLike_enqueue](i);
    }
    for (let i = 0; i < 50; i++) {
        queue[QueueLike_dequeue]();
    }
    pipe(queue[QueueLike_head], expectEquals(50));
    for (let i = 300; i < 500; i++) {
        queue[QueueLike_enqueue](i);
    }
    for (let i = 0; i < 200; i++) {
        queue[QueueLike_dequeue]();
    }
    pipe(queue[QueueLike_head], expectEquals(250));
}), test("iterator", () => {
    const queue = Queue.create();
    for (let i = 0; i < 31; i++) {
        queue[QueueLike_enqueue](i);
    }
    for (let i = 0; i < 10; i++) {
        queue[QueueLike_dequeue]();
    }
    for (let i = 31; i < 40; i++) {
        queue[QueueLike_enqueue](i);
    }
    let prev = 9;
    for (const v of queue) {
        pipe(v, expectEquals(prev + 1));
        prev = v;
    }
}), describe("priority queue", test("push", () => {
    const queue = createSorted();
    const shuffledArray = makeShuffledArray(100);
    for (let i = 0; i < shuffledArray[Array_length]; i++) {
        queue[QueueLike_enqueue](shuffledArray[i]);
    }
    const acc = [];
    while (queue[QueueLike_count] > 0) {
        acc[Array_push](queue[QueueLike_dequeue]());
    }
    pipe(acc, expectArrayEquals(makeSortedArray(100)));
})));
