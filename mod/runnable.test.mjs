import { defer, increment, returns, alwaysFalse, alwaysTrue, pipe } from './functions.mjs';
import './option.mjs';
import { concat, concatMap, distinctUntilChanged, empty, endWith, fromArray, fromValue, generate, keep, map, mapTo, repeat, scan, skipFirst, startWith, takeFirst, takeLast, takeWhile, toRunnable, contains, everySatisfy, compute, first, forEach, noneSatisfy } from './runnable.mjs';
import { describe, test, expectFalse, expectTrue, expectEquals, expectNone, mockFn, expectToHaveBeenCalledTimes } from './testing.mjs';
import { createMonadTests } from './monad.test.mjs';

const Runnable = {
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
const tests = describe("runnable", describe("contains", test("source is empty", defer(empty(), contains(1), expectFalse)), test("source contains value", defer(generate(increment, returns(0)), contains(1), expectTrue)), test("source does not contain value", defer([2, 3, 4], fromArray(), contains(1), expectFalse))), describe("everySatisfy", test("source is empty", defer(empty(), everySatisfy(alwaysFalse), expectTrue)), test("source values pass predicate", defer([1, 2, 3], fromArray(), everySatisfy(alwaysTrue), expectTrue)), test("source values fail predicate", defer([1, 2, 3], fromArray(), everySatisfy(alwaysFalse), expectFalse))), describe("first", test("when enumerable is not empty", defer(returns(1), compute(), first, expectEquals(1))), test("when enumerable is empty", defer(empty(), first, expectNone))), test("forEach", () => {
    const fn = mockFn();
    pipe([1, 2, 3], fromArray(), forEach(fn));
    pipe(fn, expectToHaveBeenCalledTimes(3));
}), describe("noneSatisfy", test("source is empty", defer(empty(), noneSatisfy(alwaysFalse), expectTrue)), test("source values pass predicate", defer([1, 2, 3], fromArray(), noneSatisfy(alwaysTrue), expectFalse)), test("source values fail predicate", defer([1, 2, 3], fromArray(), noneSatisfy(alwaysFalse), expectTrue))), createMonadTests(Runnable));

export { tests };
