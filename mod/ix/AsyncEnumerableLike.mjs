/// <reference types="./AsyncEnumerableLike.d.ts" />
import ReadonlyArrayLike__toAsyncEnumerable from '../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toAsyncEnumerable.mjs';
import AsyncEnumerableLike__generate from './__internal__/AsyncEnumerableLike/AsyncEnumerableLike.generate.mjs';
import AsyncEnumerableLike__keep from './__internal__/AsyncEnumerableLike/AsyncEnumerableLike.keep.mjs';
import AsyncEnumerableLike__map from './__internal__/AsyncEnumerableLike/AsyncEnumerableLike.map.mjs';
import AsyncEnumerableLike__scan from './__internal__/AsyncEnumerableLike/AsyncEnumerableLike.scan.mjs';
import AsyncEnumerableLike__scanAsync from './__internal__/AsyncEnumerableLike/AsyncEnumerableLike.scanAsync.mjs';
import AsyncEnumerableLike__takeWhile from './__internal__/AsyncEnumerableLike/AsyncEnumerableLike.takeWhile.mjs';
import AsyncEnumerable__toObservable from './__internal__/AsyncEnumerableLike/AsyncEnumerableLike.toObservable.mjs';
import AsyncEnumerableLike__toReadonlyArray from './__internal__/AsyncEnumerableLike/AsyncEnumerableLike.toReadonlyArray.mjs';
import EnumerableLike__toAsyncEnumerable from './__internal__/EnumerableLike/EnumerableLike.toAsyncEnumerable.mjs';

const fromArray = ReadonlyArrayLike__toAsyncEnumerable;
const fromArrayT = { fromArray };
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
const fromEnumerable = EnumerableLike__toAsyncEnumerable;
/**
 * Generates an `AsyncEnumerableLike` sequence from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator The generator function.
 * @param initialValue Factory function to generate the initial accumulator.
 */
const generate = AsyncEnumerableLike__generate;
const generateT = {
    generate,
};
const keep = AsyncEnumerableLike__keep;
const keepT = {
    keep,
};
const map = AsyncEnumerableLike__map;
const mapT = {
    map,
};
const scan = AsyncEnumerableLike__scan;
const scanT = {
    scan,
};
const scanAsync = AsyncEnumerableLike__scanAsync;
const scanAsyncT = {
    scanAsync,
};
const takeWhile = AsyncEnumerableLike__takeWhile;
const takeWhileT = {
    takeWhile,
};
const toObservable = AsyncEnumerable__toObservable;
const toObservableT = {
    toObservable,
};
const toReadonlyArray = AsyncEnumerableLike__toReadonlyArray;
const toReadonlyArrayT = {
    toReadonlyArray,
};

export { fromArray, fromArrayT, fromEnumerable, generate, generateT, keep, keepT, map, mapT, scan, scanAsync, scanAsyncT, scanT, takeWhile, takeWhileT, toObservable, toObservableT, toReadonlyArray, toReadonlyArrayT };
