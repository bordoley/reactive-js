/// <reference types="./Queue.test.d.ts" />

import { Array_length, Array_push } from "../../__internal__/constants.js";
import { describe, expectArrayEquals, expectEquals, expectToThrow, test, testModule, } from "../../__internal__/testing.js";
import { newInstance, none, pipe } from "../../functions.js";
import { floor, random } from "../../math.js";
import { DropLatestBackpressureStrategy, DropOldestBackpressureStrategy, QueueLike_count, QueueLike_dequeue, QueueLike_head, SinkLike_next, ThrowBackpressureStrategy, } from "../../utils.js";
import * as Queue from "../Queue.js";
const createPriorityQueue = /*@__PURE__*/ (() => {
    const comparator = (a, b) => a - b;
    return () => Queue.create({ comparator });
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
        queue[SinkLike_next](i);
    }
    for (let i = 0; i < 62; i++) {
        queue[QueueLike_dequeue]();
    }
    for (let i = 128; i < 255; i++) {
        queue[SinkLike_next](i);
    }
    pipe(queue[QueueLike_count], expectEquals(192));
}), test("push/pull/count", () => {
    const queue = Queue.create();
    pipe(queue[QueueLike_head], expectEquals(none));
    pipe(queue[QueueLike_dequeue](), expectEquals(none));
    for (let i = 0; i < 8; i++) {
        queue[SinkLike_next](i);
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
        queue[SinkLike_next](i);
        pipe(queue[QueueLike_head], expectEquals(3));
    }
    pipe(queue[QueueLike_dequeue](), expectEquals(3));
    pipe(queue[QueueLike_head], expectEquals(4));
    pipe(queue[QueueLike_dequeue](), expectEquals(4));
    pipe(queue[QueueLike_head], expectEquals(5));
    pipe(queue[QueueLike_dequeue](), expectEquals(5));
    pipe(queue[QueueLike_head], expectEquals(6));
    for (let i = 16; i < 32; i++) {
        queue[SinkLike_next](i);
        pipe(queue[QueueLike_head], expectEquals(6));
    }
    for (let i = 0; i < 20; i++) {
        queue[QueueLike_dequeue]();
    }
    pipe(queue[QueueLike_head], expectEquals(26));
}), test("shrink", () => {
    const queue = Queue.create();
    for (let i = 0; i < 300; i++) {
        queue[SinkLike_next](i);
    }
    for (let i = 0; i < 50; i++) {
        queue[QueueLike_dequeue]();
    }
    pipe(queue[QueueLike_head], expectEquals(50));
    for (let i = 300; i < 500; i++) {
        queue[SinkLike_next](i);
    }
    for (let i = 0; i < 200; i++) {
        queue[QueueLike_dequeue]();
    }
    pipe(queue[QueueLike_head], expectEquals(250));
}), test("iterator", () => {
    const queue = Queue.create();
    for (let i = 0; i < 31; i++) {
        queue[SinkLike_next](i);
    }
    for (let i = 0; i < 10; i++) {
        queue[QueueLike_dequeue]();
    }
    for (let i = 31; i < 40; i++) {
        queue[SinkLike_next](i);
    }
    let prev = 9;
    for (const v of queue) {
        pipe(v, expectEquals(prev + 1));
        prev = v;
    }
}), describe("priority queue", test("push", () => {
    const queue = createPriorityQueue();
    const shuffledArray = makeShuffledArray(100);
    for (let i = 0; i < shuffledArray[Array_length]; i++) {
        queue[SinkLike_next](shuffledArray[i]);
    }
    const acc = [];
    while (queue[QueueLike_count] > 0) {
        acc[Array_push](queue[QueueLike_dequeue]());
    }
    pipe(acc, expectArrayEquals(makeSortedArray(100)));
}), test("drop-latest backpressure", () => {
    const comparator = (a, b) => a - b;
    const queue = Queue.create({
        comparator,
        capacity: 1,
        backpressureStrategy: DropLatestBackpressureStrategy,
    });
    queue[SinkLike_next](0);
    queue[SinkLike_next](1);
    pipe(queue[QueueLike_count], expectEquals(1));
    pipe(queue[QueueLike_head], expectEquals(0));
}), test("drop-oldest backpressure", () => {
    const comparator = (a, b) => a - b;
    const queue = Queue.create({
        comparator,
        capacity: 1,
        backpressureStrategy: DropOldestBackpressureStrategy,
    });
    queue[SinkLike_next](0);
    queue[SinkLike_next](1);
    pipe(queue[QueueLike_count], expectEquals(1));
    pipe(queue[QueueLike_head], expectEquals(1));
}), test("throw backpressure", () => {
    const comparator = (a, b) => a - b;
    const queue = Queue.create({
        comparator,
        capacity: 1,
        backpressureStrategy: ThrowBackpressureStrategy,
    });
    queue[SinkLike_next](0);
    expectToThrow(() => {
        queue[SinkLike_next](1);
    });
    pipe(queue[QueueLike_count], expectEquals(1));
    pipe(queue[QueueLike_head], expectEquals(0));
})));
