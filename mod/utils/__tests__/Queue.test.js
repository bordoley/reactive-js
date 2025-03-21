/// <reference types="./Queue.test.d.ts" />

import { Array_length, Array_push } from "../../__internal__/constants.js";
import { describe, expectArrayEquals, expectEquals, expectFalse, test, testModule, } from "../../__internal__/testing.js";
import * as Iterable from "../../computations/Iterable.js";
import { newInstance, none, pipe } from "../../functions.js";
import { floor, random } from "../../math.js";
import { CollectionEnumeratorLike_count, EnumeratorLike_current, EnumeratorLike_moveNext, QueueLike_enqueue, } from "../../utils.js";
import * as Queue from "../Queue.js";
const createSorted = /*@__PURE__*/ (() => {
    const comparator = (a, b) => a - b;
    return () => Queue.createSorted(comparator);
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
        queue[QueueLike_enqueue](i);
    }
    for (let i = 0; i < 62; i++) {
        queue[EnumeratorLike_moveNext]();
    }
    for (let i = 128; i < 255; i++) {
        queue[QueueLike_enqueue](i);
    }
    pipe(queue[CollectionEnumeratorLike_count], expectEquals(192));
}), test("push/pull/count", () => {
    const queue = Queue.create();
    pipe(queue, Iterable.first(), expectEquals(none));
    pipe(queue[EnumeratorLike_moveNext](), expectFalse());
    for (let i = 0; i < 8; i++) {
        queue[QueueLike_enqueue](i);
        pipe(queue, Iterable.first(), expectEquals(0));
    }
    pipe(queue[CollectionEnumeratorLike_count], expectEquals(8));
    pipe((queue[EnumeratorLike_moveNext](), queue[EnumeratorLike_current]), expectEquals(0));
    pipe(queue, Iterable.first(), expectEquals(1));
    pipe((queue[EnumeratorLike_moveNext](), queue[EnumeratorLike_current]), expectEquals(1));
    pipe(queue, Iterable.first(), expectEquals(2));
    pipe((queue[EnumeratorLike_moveNext](), queue[EnumeratorLike_current]), expectEquals(2));
    pipe(queue, Iterable.first(), expectEquals(3));
    for (let i = 8; i < 16; i++) {
        queue[QueueLike_enqueue](i);
        pipe(queue, Iterable.first(), expectEquals(3));
    }
    pipe((queue[EnumeratorLike_moveNext](), queue[EnumeratorLike_current]), expectEquals(3));
    pipe(queue, Iterable.first(), expectEquals(4));
    pipe((queue[EnumeratorLike_moveNext](), queue[EnumeratorLike_current]), expectEquals(4));
    pipe(queue, Iterable.first(), expectEquals(5));
    pipe((queue[EnumeratorLike_moveNext](), queue[EnumeratorLike_current]), expectEquals(5));
    pipe(queue, Iterable.first(), expectEquals(6));
    for (let i = 16; i < 32; i++) {
        queue[QueueLike_enqueue](i);
        pipe(queue, Iterable.first(), expectEquals(6));
    }
    for (let i = 0; i < 20; i++) {
        queue[EnumeratorLike_moveNext]();
    }
    pipe(queue, Iterable.first(), expectEquals(26));
}), test("shrink", () => {
    const queue = Queue.create();
    for (let i = 0; i < 300; i++) {
        queue[QueueLike_enqueue](i);
    }
    for (let i = 0; i < 50; i++) {
        queue[EnumeratorLike_moveNext]();
    }
    pipe(queue, Iterable.first(), expectEquals(50));
    for (let i = 300; i < 500; i++) {
        queue[QueueLike_enqueue](i);
    }
    for (let i = 0; i < 200; i++) {
        queue[EnumeratorLike_moveNext]();
    }
    pipe(queue, Iterable.first(), expectEquals(250));
}), test("iterator", () => {
    const queue = Queue.create();
    for (let i = 0; i < 31; i++) {
        queue[QueueLike_enqueue](i);
    }
    for (let i = 0; i < 10; i++) {
        queue[EnumeratorLike_moveNext]();
    }
    for (let i = 31; i < 40; i++) {
        queue[QueueLike_enqueue](i);
    }
    let prev = 9;
    for (const v of queue) {
        pipe(v, expectEquals(prev + 1));
        prev = v;
    }
}), describe("priority queue", test("push", () => {
    const queue = createSorted();
    const shuffledArray = makeShuffledArray(100);
    for (let i = 0; i < shuffledArray[Array_length]; i++) {
        queue[QueueLike_enqueue](shuffledArray[i]);
    }
    const acc = [];
    while (queue[CollectionEnumeratorLike_count] > 0) {
        queue[EnumeratorLike_moveNext]();
        acc[Array_push](queue[EnumeratorLike_current]);
    }
    pipe(acc, expectArrayEquals(makeSortedArray(100)));
})));
