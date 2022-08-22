/// <reference types="./queues.test.d.ts" />
import { createPriorityQueue } from '../../__internal__/scheduling/__internal__queue.mjs';
import { newInstance, floor, pipe } from '../../functions.mjs';
import { testModule, test as createTest, expectArrayEquals } from '../testing.mjs';

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
testModule("priority queue", createTest("push", () => {
    const queue = createPriorityQueue(compare);
    const shuffledArray = makeShuffledArray(100);
    for (let i = 0; i < shuffledArray.length; i++) {
        queue.push(shuffledArray[i]);
    }
    const acc = [];
    while (queue.count > 0) {
        acc.push(queue.pop());
    }
    pipe(acc, expectArrayEquals(makeSortedArray(100)));
}));
