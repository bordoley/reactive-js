/// <reference types="./AsyncEnumerable.d.ts" />
import ReadonlyArray_toAsyncEnumerable from '../containers/ReadonlyArray/__internal__/ReadonlyArray.toAsyncEnumerable.mjs';
import AsyncEnumerable_generate from './AsyncEnumerable/__internal__/AsyncEnumerable.generate.mjs';
import AsyncEnumerable_keep from './AsyncEnumerable/__internal__/AsyncEnumerable.keep.mjs';
import AsyncEnumerable_map from './AsyncEnumerable/__internal__/AsyncEnumerable.map.mjs';
import AsyncEnumerable_scan from './AsyncEnumerable/__internal__/AsyncEnumerable.scan.mjs';
import AsyncEnumerable_scanAsync from './AsyncEnumerable/__internal__/AsyncEnumerable.scanAsync.mjs';
import AsyncEnumerable_takeWhile from './AsyncEnumerable/__internal__/AsyncEnumerable.takeWhile.mjs';
import AsyncEnumerable_toObservable from './AsyncEnumerable/__internal__/AsyncEnumerable.toObservable.mjs';
import AsyncEnumerable_toReadonlyArray from './AsyncEnumerable/__internal__/AsyncEnumerable.toReadonlyArray.mjs';
import Enumerable_toAsyncEnumerable from './Enumerable/__internal__/Enumerable.toAsyncEnumerable.mjs';

const fromArray = ReadonlyArray_toAsyncEnumerable;
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
const fromEnumerable = Enumerable_toAsyncEnumerable;
/**
 * Generates an `AsyncEnumerableLike` sequence from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator The generator function.
 * @param initialValue Factory function to generate the initial accumulator.
 */
const generate = AsyncEnumerable_generate;
const keep = AsyncEnumerable_keep;
const map = AsyncEnumerable_map;
const scan = AsyncEnumerable_scan;
const scanAsync = AsyncEnumerable_scanAsync;
const takeWhile = AsyncEnumerable_takeWhile;
const toObservable = AsyncEnumerable_toObservable;
const toReadonlyArray = AsyncEnumerable_toReadonlyArray;
/** @ignore */
const AsyncEnumerable = {
    fromArray,
    generate,
    keep,
    map,
    scan,
    scanAsync,
    takeWhile,
    toReadonlyArray,
};

export { AsyncEnumerable as default, fromArray, fromEnumerable, generate, keep, map, scan, scanAsync, takeWhile, toObservable, toReadonlyArray };
