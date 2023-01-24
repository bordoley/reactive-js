/// <reference types="./EnumerableLike.d.ts" />
import { identity } from '../functions.mjs';
import EnumerableLike__buffer from './__internal__/EnumerableLike/EnumerableLike.buffer.mjs';
import EnumerableLike__concat from './__internal__/EnumerableLike/EnumerableLike.concat.mjs';
import EnumerableLike__concatAll from './__internal__/EnumerableLike/EnumerableLike.concatAll.mjs';
import EnumerableLike__distinctUntilChanged from './__internal__/EnumerableLike/EnumerableLike.distinctUntilChanged.mjs';
import EnumerableLike__empty from './__internal__/EnumerableLike/EnumerableLike.empty.mjs';
import EnumerableLike__enumerate from './__internal__/EnumerableLike/EnumerableLike.enumerate.mjs';
import EnumerableLike__forEach from './__internal__/EnumerableLike/EnumerableLike.forEach.mjs';
import EnumerableLike__fromArray from './__internal__/EnumerableLike/EnumerableLike.fromArray.mjs';
import EnumerableLike__generate from './__internal__/EnumerableLike/EnumerableLike.generate.mjs';
import EnumerableLike__keep from './__internal__/EnumerableLike/EnumerableLike.keep.mjs';
import EnumerableLike__map from './__internal__/EnumerableLike/EnumerableLike.map.mjs';
import EnumerableLike__pairwise from './__internal__/EnumerableLike/EnumerableLike.pairwise.mjs';
import EnumerableLike__repeat from './__internal__/EnumerableLike/EnumerableLike.repeat.mjs';
import EnumerableLike__scan from './__internal__/EnumerableLike/EnumerableLike.scan.mjs';
import EnumerableLike__skipFirst from './__internal__/EnumerableLike/EnumerableLike.skipFirst.mjs';
import EnumerableLike__takeFirst from './__internal__/EnumerableLike/EnumerableLike.takeFirst.mjs';
import EnumerableLike__takeLast from './__internal__/EnumerableLike/EnumerableLike.takeLast.mjs';
import EnumerableLike__takeWhile from './__internal__/EnumerableLike/EnumerableLike.takeWhile.mjs';
import EnumerableLike__throwIfEmpty from './__internal__/EnumerableLike/EnumerableLike.throwIfEmpty.mjs';
import EnumerableLike__toEnumerableObservable from './__internal__/EnumerableLike/EnumerableLike.toEnumerableObservable.mjs';
import EnumerableLike__toIterable from './__internal__/EnumerableLike/EnumerableLike.toIterable.mjs';
import EnumerableLike__toReadonlyArray from './__internal__/EnumerableLike/EnumerableLike.toReadonlyArray.mjs';
import EnumerableLike__toRunnable from './__internal__/EnumerableLike/EnumerableLike.toRunnable.mjs';
import EnumerableLike__toRunnableObservable from './__internal__/EnumerableLike/EnumerableLike.toRunnableObservable.mjs';
import EnumerableLike__zip from './__internal__/EnumerableLike/EnumerableLike.zip.mjs';

const enumerate = EnumerableLike__enumerate;
const buffer = EnumerableLike__buffer;
const bufferT = {
    buffer,
};
const concat = EnumerableLike__concat;
const concatT = {
    concat,
};
const concatAll = EnumerableLike__concatAll;
const concatAllT = { concatAll };
const distinctUntilChanged = EnumerableLike__distinctUntilChanged;
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const empty = EnumerableLike__empty;
const emptyT = { empty };
const forEach = EnumerableLike__forEach;
const forEachT = { forEach };
const fromArray = EnumerableLike__fromArray;
const fromArrayT = { fromArray };
const generate = EnumerableLike__generate;
const generateT = {
    generate,
};
const keep = EnumerableLike__keep;
const keepT = {
    keep,
};
const map = EnumerableLike__map;
const mapT = { map };
const pairwise = EnumerableLike__pairwise;
const pairwiseT = {
    pairwise,
};
const repeat = EnumerableLike__repeat;
const repeatT = {
    repeat,
};
const scan = EnumerableLike__scan;
const scanT = {
    scan,
};
const skipFirst = EnumerableLike__skipFirst;
const skipFirstT = {
    skipFirst,
};
const takeFirst = EnumerableLike__takeFirst;
const takeFirstT = {
    takeFirst,
};
const takeLast = EnumerableLike__takeLast;
const takeLastT = { takeLast };
const takeWhile = EnumerableLike__takeWhile;
const takeWhileT = { takeWhile };
const throwIfEmpty = EnumerableLike__throwIfEmpty;
const throwIfEmptyT = {
    throwIfEmpty,
};
const toEnumerable = () => identity;
const toEnumerableT = {
    toEnumerable,
};
const toEnumerableObservable = EnumerableLike__toEnumerableObservable;
const toEnumerableObservableT = {
    toEnumerableObservable,
};
const toIterable = EnumerableLike__toIterable;
const toIterableT = { toIterable };
const toObservable = EnumerableLike__toRunnableObservable;
const toObservableT = { toObservable };
const toReadonlyArray = EnumerableLike__toReadonlyArray;
const toReadonlyArrayT = {
    toReadonlyArray,
};
const toRunnable = EnumerableLike__toRunnable;
const toRunnableT = { toRunnable };
const toRunnableObservable = EnumerableLike__toRunnableObservable;
const toRunnableObservableT = { toRunnableObservable };
const zip = EnumerableLike__zip;
const zipT = { zip };

export { buffer, bufferT, concat, concatAll, concatAllT, concatT, distinctUntilChanged, distinctUntilChangedT, empty, emptyT, enumerate, forEach, forEachT, fromArray, fromArrayT, generate, generateT, keep, keepT, map, mapT, pairwise, pairwiseT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableObservable, toEnumerableObservableT, toEnumerableT, toIterable, toIterableT, toObservable, toObservableT, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableObservable, toRunnableObservableT, toRunnableT, zip, zipT };
