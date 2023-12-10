/// <reference types="./PriorityQueue.test.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { floor, random } from "../../__internal__/math.js";
import { expectArrayEquals, test, testModule, } from "../../__internal__/testing.js";
import { CollectionLike_count } from "../../collections.js";
import { newInstance, pipe } from "../../functions.js";
import { QueueLike_dequeue, QueueableLike_enqueue } from "../../utils.js";
import * as PriorityQueue from "../PriorityQueue.js";
const createPriorityQueue = /*@__PURE__*/ (() => {
    const compare = (a, b) => a - b;
    return () => PriorityQueue.create(compare, MAX_SAFE_INTEGER, "overflow");
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
    while (queue[CollectionLike_count] > 0) {
        acc.push(queue[QueueLike_dequeue]());
    }
    pipe(acc, expectArrayEquals(makeSortedArray(100)));
}));
