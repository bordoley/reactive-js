import { defer } from './functions.mjs';
import { concat, concatMap, distinctUntilChanged, empty, endWith, fromArray, fromValue, generate, keep, map, mapTo, repeat, scan, skipFirst, startWith, takeFirst, takeLast, takeWhile, toRunnable, toIterable, fromIterable, zipWith } from './enumerable.mjs';
import { toArray } from './runnable.mjs';
import { describe, test, expectArrayEquals } from './testing.mjs';
import { createMonadTests } from './monad.test.mjs';

const Enumerable = {
    concat,
    concatMap,
    distinctUntilChanged,
    empty,
    endWith,
    fromArray,
    fromValue,
    generate,
    keep,
    map,
    mapTo,
    repeat,
    scan,
    skipFirst,
    startWith,
    takeFirst,
    takeLast,
    takeWhile,
    toRunnable,
};
const tests = describe("enumerable", test("toIterable", defer([1, 2, 3], fromArray(), toIterable(), fromIterable(), toRunnable(), toArray(), expectArrayEquals([1, 2, 3]))), test("zip", defer([1, 2, 3], fromArray(), zipWith(fromArray()([1, 2, 3, 4, 5])), map(([a, b]) => a + b), toRunnable(), toArray(), expectArrayEquals([2, 4, 6]))), createMonadTests(Enumerable));

export { tests };
