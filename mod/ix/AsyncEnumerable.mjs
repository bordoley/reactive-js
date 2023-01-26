/// <reference types="./AsyncEnumerable.d.ts" />
import ReadonlyArray$toAsyncEnumerable from '../containers/__internal__/ReadonlyArray/ReadonlyArray.toAsyncEnumerable.mjs';
import AsyncEnumerable$generate from './__internal__/AsyncEnumerable/AsyncEnumerable.generate.mjs';
import AsyncEnumerable$keep from './__internal__/AsyncEnumerable/AsyncEnumerable.keep.mjs';
import AsyncEnumerable$map from './__internal__/AsyncEnumerable/AsyncEnumerable.map.mjs';
import AsyncEnumerable$scan from './__internal__/AsyncEnumerable/AsyncEnumerable.scan.mjs';
import AsyncEnumerable$scanAsync from './__internal__/AsyncEnumerable/AsyncEnumerable.scanAsync.mjs';
import AsyncEnumerable$takeWhile from './__internal__/AsyncEnumerable/AsyncEnumerable.takeWhile.mjs';
import AsyncEnumerable$toObservable from './__internal__/AsyncEnumerable/AsyncEnumerable.toObservable.mjs';
import AsyncEnumerable$toReadonlyArray from './__internal__/AsyncEnumerable/AsyncEnumerable.toReadonlyArray.mjs';
import Enumerable$toAsyncEnumerable from './__internal__/Enumerable/Enumerable.toAsyncEnumerable.mjs';

const fromArray = ReadonlyArray$toAsyncEnumerable;
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
const fromEnumerable = Enumerable$toAsyncEnumerable;
/**
 * Generates an `AsyncEnumerableLike` sequence from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator The generator function.
 * @param initialValue Factory function to generate the initial accumulator.
 */
const generate = AsyncEnumerable$generate;
const keep = AsyncEnumerable$keep;
const map = AsyncEnumerable$map;
const scan = AsyncEnumerable$scan;
const scanAsync = AsyncEnumerable$scanAsync;
const takeWhile = AsyncEnumerable$takeWhile;
const toObservable = AsyncEnumerable$toObservable;
const toReadonlyArray = AsyncEnumerable$toReadonlyArray;

export { fromArray, fromEnumerable, generate, keep, map, scan, scanAsync, takeWhile, toObservable, toReadonlyArray };
