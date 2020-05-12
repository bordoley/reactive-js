import { pipe } from "../../lib/functions.js";
import { createPriorityQueue } from "../../lib/internal/queues.js";
import { test, describe, expectArrayEquals } from "../../lib/internal/testing.js";
const compare = (a, b) => a - b;
const makeSortedArray = (n) => {
    const result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = i;
    }
    return result;
};
const makeShuffledArray = (n) => {
    const result = makeSortedArray(n);
    for (let count = n - 1; count >= 0; count--) {
        const index = Math.floor(Math.random() * (count + 1));
        const temp = result[count];
        result[count] = result[index];
        result[index] = temp;
    }
    return result;
};
export const tests = describe("priority queue", test("push", () => {
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
