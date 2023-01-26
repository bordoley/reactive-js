/// <reference types="./AsyncEnumerable.d.ts" />
import ReadonlyArray_toAsyncEnumerable from '../containers/__internal__/ReadonlyArray/ReadonlyArray.toAsyncEnumerable.mjs';
import AsyncEnumerable_generate from './__internal__/AsyncEnumerable/AsyncEnumerable.generate.mjs';
import AsyncEnumerable_keep from './__internal__/AsyncEnumerable/AsyncEnumerable.keep.mjs';
import AsyncEnumerable_map from './__internal__/AsyncEnumerable/AsyncEnumerable.map.mjs';
import AsyncEnumerable_scan from './__internal__/AsyncEnumerable/AsyncEnumerable.scan.mjs';
import AsyncEnumerable_scanAsync from './__internal__/AsyncEnumerable/AsyncEnumerable.scanAsync.mjs';
import AsyncEnumerable_takeWhile from './__internal__/AsyncEnumerable/AsyncEnumerable.takeWhile.mjs';
import AsyncEnumerable_toObservable from './__internal__/AsyncEnumerable/AsyncEnumerable.toObservable.mjs';
import AsyncEnumerable_toReadonlyArray from './__internal__/AsyncEnumerable/AsyncEnumerable.toReadonlyArray.mjs';
import Enumerable_toAsyncEnumerable from './__internal__/Enumerable/Enumerable.toAsyncEnumerable.mjs';

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

export { fromArray, fromEnumerable, generate, keep, map, scan, scanAsync, takeWhile, toObservable, toReadonlyArray };
