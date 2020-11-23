'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
require('./option.js');
require('./readonlyArray.js');
require('./enumerable.js');
require('./runnable.js');
var queues = require('./queues.js');
var testing = require('./testing.js');

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
const tests = testing.describe("priority queue", testing.test("push", () => {
    const queue = queues.createPriorityQueue(compare);
    const shuffledArray = makeShuffledArray(100);
    for (let i = 0; i < shuffledArray.length; i++) {
        queue.push(shuffledArray[i]);
    }
    const acc = [];
    while (queue.count > 0) {
        acc.push(queue.pop());
    }
    functions.pipe(acc, testing.expectArrayEquals(makeSortedArray(100)));
}));

exports.tests = tests;
