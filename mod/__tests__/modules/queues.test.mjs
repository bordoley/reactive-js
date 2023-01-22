/// <reference types="./queues.test.d.ts" />
import { newInstance, floor, pipe } from '../../functions.mjs';
import QueueLike__count from '../../util/__internal__/QueueLike/QueueLike.count.mjs';
import QueueLike__create from '../../util/__internal__/QueueLike/QueueLike.create.mjs';
import QueueLike__pop from '../../util/__internal__/QueueLike/QueueLike.pop.mjs';
import QueueLike__push from '../../util/__internal__/QueueLike/QueueLike.push.mjs';
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
    const queue = QueueLike__create(compare);
    const shuffledArray = makeShuffledArray(100);
    for (let i = 0; i < shuffledArray.length; i++) {
        QueueLike__push(queue, shuffledArray[i]);
    }
    const acc = [];
    while (QueueLike__count(queue) > 0) {
        acc.push(QueueLike__pop(queue));
    }
    pipe(acc, expectArrayEquals(makeSortedArray(100)));
}));
