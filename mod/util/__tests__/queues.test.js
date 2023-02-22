/// <reference types="./queues.test.d.ts" />

import { expectArrayEquals, test, testModule, } from "../../__tests__/testing.js";
import { floor, newInstance, pipe } from "../../functions.js";
import Queue_count from "../../util/__internal__/Queue/Queue.count.js";
import Queue_create from "../../util/__internal__/Queue/Queue.create.js";
import Queue_pop from "../../util/__internal__/Queue/Queue.pop.js";
import Queue_push from "../../util/__internal__/Queue/Queue.push.js";
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
    const queue = Queue_create(compare);
    const shuffledArray = makeShuffledArray(100);
    for (let i = 0; i < shuffledArray.length; i++) {
        Queue_push(queue, shuffledArray[i]);
    }
    const acc = [];
    while (Queue_count(queue) > 0) {
        acc.push(Queue_pop(queue));
    }
    pipe(acc, expectArrayEquals(makeSortedArray(100)));
}));
