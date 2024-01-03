/// <reference types="./PriorityQueue.test.d.ts" />

import { floor, random } from "../../__internal__/math.js";
import { expectArrayEquals, expectEquals, expectToThrow, test, testModule, } from "../../__internal__/testing.js";
import { newInstance, pipe } from "../../functions.js";
import { QueueLike_count, QueueLike_dequeue, QueueLike_head, QueueableLike_enqueue, } from "../../utils.js";
import * as PriorityQueue from "../PriorityQueue.js";
const createPriorityQueue = /*@__PURE__*/ (() => {
    const compare = (a, b) => a - b;
    return () => PriorityQueue.create(compare);
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
testModule("PriorityQueue", test("push", () => {
    const queue = createPriorityQueue();
    const shuffledArray = makeShuffledArray(100);
    for (let i = 0; i < shuffledArray.length; i++) {
        queue[QueueableLike_enqueue](shuffledArray[i]);
    }
    const acc = [];
    while (queue[QueueLike_count] > 0) {
        acc.push(queue[QueueLike_dequeue]());
    }
    pipe(acc, expectArrayEquals(makeSortedArray(100)));
}), test("drop-latest backpressure", () => {
    const compare = (a, b) => a - b;
    const queue = PriorityQueue.create(compare, {
        capacity: 1,
        backpressureStrategy: "drop-latest",
    });
    queue[QueueableLike_enqueue](0);
    queue[QueueableLike_enqueue](1);
    pipe(queue[QueueLike_count], expectEquals(1));
    pipe(queue[QueueLike_head], expectEquals(0));
}), test("drop-oldest backpressure", () => {
    const compare = (a, b) => a - b;
    const queue = PriorityQueue.create(compare, {
        capacity: 1,
        backpressureStrategy: "drop-oldest",
    });
    queue[QueueableLike_enqueue](0);
    queue[QueueableLike_enqueue](1);
    pipe(queue[QueueLike_count], expectEquals(1));
    pipe(queue[QueueLike_head], expectEquals(1));
}), test("throw backpressure", () => {
    const compare = (a, b) => a - b;
    const queue = PriorityQueue.create(compare, {
        capacity: 1,
        backpressureStrategy: "throw",
    });
    queue[QueueableLike_enqueue](0);
    expectToThrow(() => {
        queue[QueueableLike_enqueue](1);
    });
    pipe(queue[QueueLike_count], expectEquals(1));
    pipe(queue[QueueLike_head], expectEquals(0));
}));
