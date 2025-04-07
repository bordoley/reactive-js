/// <reference types="./Queue.test.d.ts" />

import { Array_length, Array_push } from "../../__internal__/constants.js";
import { expectArrayEquals, expectEquals, expectFalse, expectTrue, test, testModule, } from "../../__internal__/testing.js";
import { newInstance, none, pipe } from "../../functions.js";
import { floor, random } from "../../math.js";
import { CollectionEnumeratorLike_count, CollectionEnumeratorLike_peek, DisposableLike_dispose, EnumeratorLike_current, EnumeratorLike_moveNext, QueueableLike_enqueue, } from "../../utils.js";
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
        queue[QueueableLike_enqueue](i);
    }
    for (let i = 0; i < 62; i++) {
        queue[EnumeratorLike_moveNext]();
    }
    for (let i = 128; i < 255; i++) {
        queue[QueueableLike_enqueue](i);
    }
    pipe(queue[CollectionEnumeratorLike_count], expectEquals(192));
}), test("push/pull/count", () => {
    const queue = Queue.create();
    pipe(queue[CollectionEnumeratorLike_peek], expectEquals(none));
    pipe(queue[EnumeratorLike_moveNext](), expectFalse());
    for (let i = 0; i < 8; i++) {
        queue[QueueableLike_enqueue](i);
        pipe(queue[CollectionEnumeratorLike_peek], expectEquals(0));
    }
    pipe(queue[CollectionEnumeratorLike_count], expectEquals(8));
    pipe((queue[EnumeratorLike_moveNext](), queue[EnumeratorLike_current]), expectEquals(0));
    pipe(queue[CollectionEnumeratorLike_peek], expectEquals(1));
    pipe((queue[EnumeratorLike_moveNext](), queue[EnumeratorLike_current]), expectEquals(1));
    pipe(queue[CollectionEnumeratorLike_peek], expectEquals(2));
    pipe((queue[EnumeratorLike_moveNext](), queue[EnumeratorLike_current]), expectEquals(2));
    pipe(queue[CollectionEnumeratorLike_peek], expectEquals(3));
    for (let i = 8; i < 16; i++) {
        queue[QueueableLike_enqueue](i);
        pipe(queue[CollectionEnumeratorLike_peek], expectEquals(3));
    }
    pipe((queue[EnumeratorLike_moveNext](), queue[EnumeratorLike_current]), expectEquals(3));
    pipe(queue[CollectionEnumeratorLike_peek], expectEquals(4));
    pipe((queue[EnumeratorLike_moveNext](), queue[EnumeratorLike_current]), expectEquals(4));
    pipe(queue[CollectionEnumeratorLike_peek], expectEquals(5));
    pipe((queue[EnumeratorLike_moveNext](), queue[EnumeratorLike_current]), expectEquals(5));
    pipe(queue[CollectionEnumeratorLike_peek], expectEquals(6));
    for (let i = 16; i < 32; i++) {
        queue[QueueableLike_enqueue](i);
        pipe(queue[CollectionEnumeratorLike_peek], expectEquals(6));
    }
    for (let i = 0; i < 20; i++) {
        queue[EnumeratorLike_moveNext]();
    }
    pipe(queue[CollectionEnumeratorLike_peek], expectEquals(26));
}), test("shrink", () => {
    const queue = Queue.create();
    for (let i = 0; i < 300; i++) {
        queue[QueueableLike_enqueue](i);
    }
    for (let i = 0; i < 50; i++) {
        queue[EnumeratorLike_moveNext]();
    }
    pipe(queue[CollectionEnumeratorLike_peek], expectEquals(50));
    for (let i = 300; i < 500; i++) {
        queue[QueueableLike_enqueue](i);
    }
    for (let i = 0; i < 200; i++) {
        queue[EnumeratorLike_moveNext]();
    }
    pipe(queue[CollectionEnumeratorLike_peek], expectEquals(250));
}), test("iterator", () => {
    const queue = Queue.create();
    for (let i = 0; i < 31; i++) {
        queue[QueueableLike_enqueue](i);
    }
    for (let i = 0; i < 10; i++) {
        queue[EnumeratorLike_moveNext]();
    }
    for (let i = 31; i < 40; i++) {
        queue[QueueableLike_enqueue](i);
    }
    let prev = 9;
    while (queue[EnumeratorLike_moveNext]()) {
        const v = queue[EnumeratorLike_current];
        pipe(v, expectEquals(prev + 1));
        prev = v;
    }
}), test("push when sorted", () => {
    const queue = createSorted();
    const shuffledArray = makeShuffledArray(100);
    for (let i = 0; i < shuffledArray[Array_length]; i++) {
        queue[QueueableLike_enqueue](shuffledArray[i]);
    }
    const acc = [];
    while (queue[CollectionEnumeratorLike_count] > 0) {
        queue[EnumeratorLike_moveNext]();
        acc[Array_push](queue[EnumeratorLike_current]);
    }
    pipe(acc, expectArrayEquals(makeSortedArray(100)));
}), test("enqueueing after dispose does nothing", () => {
    const queue = Queue.create();
    queue[DisposableLike_dispose]();
    queue[QueueableLike_enqueue](0);
    queue[QueueableLike_enqueue](1);
    queue[QueueableLike_enqueue](2);
    pipe(queue[CollectionEnumeratorLike_count], expectEquals(0));
}), test("enumerating after dispose", () => {
    const queue = Queue.create();
    queue[QueueableLike_enqueue](0);
    queue[QueueableLike_enqueue](1);
    queue[QueueableLike_enqueue](2);
    queue[DisposableLike_dispose]();
    for (let i = 0; i < 3; i++) {
        pipe(queue[EnumeratorLike_moveNext](), expectTrue("expected enumerator to have value"));
        pipe(queue[EnumeratorLike_current], expectEquals(i));
    }
    pipe(queue[EnumeratorLike_moveNext](), expectFalse("expected enumerator to been consumed"));
}))();
