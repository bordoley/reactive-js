/// <reference types="./PullableQueue_priorityQueueMixin.test.d.ts" />

import { createInstanceFactory } from "../../__internal__/mixins.js";
import { expectArrayEquals, test, testModule, } from "../../__tests__/testing.js";
import { floor, newInstance, pipe } from "../../functions.js";
import { QueueableLike_push } from "../../util.js";
import PullableQueue_priorityQueueMixin from "../PullableQueue/__internal__/PullableQueue.priorityQueueMixin.js";
import PullableQueue_pull from "../PullableQueue/__internal__/PullableQueue.pull.js";
import Queueable_count from "../Queueable/__internal__/Queueable.count.js";
const createPriorityQueue = /*@__PURE__*/ (() => createInstanceFactory(PullableQueue_priorityQueueMixin()))();
const compare = (a, b) => a - b;
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
testModule("priority queue", test("push", () => {
    const queue = createPriorityQueue(compare);
    const shuffledArray = makeShuffledArray(100);
    for (let i = 0; i < shuffledArray.length; i++) {
        queue[QueueableLike_push](shuffledArray[i]);
    }
    const acc = [];
    while (Queueable_count(queue) > 0) {
        acc.push(PullableQueue_pull(queue));
    }
    pipe(acc, expectArrayEquals(makeSortedArray(100)));
}));
