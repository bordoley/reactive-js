/// <reference types="./queues.test.d.ts" />
import { newInstance, floor, pipe } from '../../functions.mjs';
import Queue$count from '../../util/__internal__/Queue/Queue.count.mjs';
import Queue$create from '../../util/__internal__/Queue/Queue.create.mjs';
import Queue$pop from '../../util/__internal__/Queue/Queue.pop.mjs';
import Queue$push from '../../util/__internal__/Queue/Queue.push.mjs';
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
    const queue = Queue$create(compare);
    const shuffledArray = makeShuffledArray(100);
    for (let i = 0; i < shuffledArray.length; i++) {
        Queue$push(queue, shuffledArray[i]);
    }
    const acc = [];
    while (Queue$count(queue) > 0) {
        acc.push(Queue$pop(queue));
    }
    pipe(acc, expectArrayEquals(makeSortedArray(100)));
}));
