/// <reference types="./Runnable.d.ts" />
import Iterable_toRunnable from '../containers/Iterable/__internal__/Iterable.toRunnable.mjs';
import ReadonlyArray_toRunnable from '../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.mjs';
import { returns, identity } from '../functions.mjs';
import Enumerable_toRunnable from '../ix/Enumerable/__internal__/Enumerable.toRunnable.mjs';
import Runnable_buffer from './Runnable/__internal__/Runnable.buffer.mjs';
import Runnable_catchError from './Runnable/__internal__/Runnable.catchError.mjs';
import Runnable_concat from './Runnable/__internal__/Runnable.concat.mjs';
import Runnable_concatAll from './Runnable/__internal__/Runnable.concatAll.mjs';
import Runnable_create from './Runnable/__internal__/Runnable.create.mjs';
import Runnable_decodeWithCharset from './Runnable/__internal__/Runnable.decodeWithCharset.mjs';
import Runnable_defer from './Runnable/__internal__/Runnable.defer.mjs';
import Runnable_distinctUntilChanged from './Runnable/__internal__/Runnable.distinctUntilChanged.mjs';
import Runnable_empty from './Runnable/__internal__/Runnable.empty.mjs';
import Runnable_everySatisfy from './Runnable/__internal__/Runnable.everySatisfy.mjs';
import Runnable_first from './Runnable/__internal__/Runnable.first.mjs';
import Runnable_forEach from './Runnable/__internal__/Runnable.forEach.mjs';
import Runnable_generate from './Runnable/__internal__/Runnable.generate.mjs';
import Runnable_keep from './Runnable/__internal__/Runnable.keep.mjs';
import Runnable_last from './Runnable/__internal__/Runnable.last.mjs';
import Runnable_map from './Runnable/__internal__/Runnable.map.mjs';
import Runnable_never from './Runnable/__internal__/Runnable.never.mjs';
import Runnable_onRun from './Runnable/__internal__/Runnable.onRun.mjs';
import Runnable_pairwise from './Runnable/__internal__/Runnable.pairwise.mjs';
import Runnable_reduce from './Runnable/__internal__/Runnable.reduce.mjs';
import Runnable_repeat from './Runnable/__internal__/Runnable.repeat.mjs';
import Runnable_run from './Runnable/__internal__/Runnable.run.mjs';
import Runnable_scan from './Runnable/__internal__/Runnable.scan.mjs';
import Runnable_skipFirst from './Runnable/__internal__/Runnable.skipFirst.mjs';
import Runnable_someSatisfy from './Runnable/__internal__/Runnable.someSatisfy.mjs';
import Runnable_takeFirst from './Runnable/__internal__/Runnable.takeFirst.mjs';
import Runnable_takeLast from './Runnable/__internal__/Runnable.takeLast.mjs';
import Runnable_takeWhile from './Runnable/__internal__/Runnable.takeWhile.mjs';
import Runnable_throwIfEmpty from './Runnable/__internal__/Runnable.throwIfEmpty.mjs';
import Runnable_toReadonlyArray from './Runnable/__internal__/Runnable.toReadonlyArray.mjs';
import RunnableObservable_toRunnable from './RunnableObservable/__internal__/RunnableObservable.toRunnable.mjs';

const buffer = Runnable_buffer;
const catchError = Runnable_catchError;
const concat = Runnable_concat;
const concatAll = Runnable_concatAll;
const create = Runnable_create;
const decodeWithCharset = Runnable_decodeWithCharset;
const defer = Runnable_defer;
const distinctUntilChanged = Runnable_distinctUntilChanged;
const empty = Runnable_empty;
const everySatisfy = Runnable_everySatisfy;
const first = Runnable_first;
const forEach = Runnable_forEach;
const fromEnumerable = Enumerable_toRunnable;
const fromEnumerableObservable = RunnableObservable_toRunnable;
const fromIterable = Iterable_toRunnable;
const fromReadonlyArray = ReadonlyArray_toRunnable;
const fromRunnableObservable = RunnableObservable_toRunnable;
const generate = Runnable_generate;
const keep = Runnable_keep;
const last = Runnable_last;
const map = Runnable_map;
const never = Runnable_never;
const onRun = Runnable_onRun;
const pairwise = Runnable_pairwise;
const reduce = Runnable_reduce;
const repeat = Runnable_repeat;
const run = Runnable_run;
const scan = Runnable_scan;
const skipFirst = Runnable_skipFirst;
const someSatisfy = Runnable_someSatisfy;
const takeFirst = Runnable_takeFirst;
const takeLast = Runnable_takeLast;
const takeWhile = Runnable_takeWhile;
const throwIfEmpty = Runnable_throwIfEmpty;
const toReadonlyArray = Runnable_toReadonlyArray;
const toRunnable = 
/*@__PURE__*/ returns(identity);
/** @ignore */
const Runnable = {
    buffer,
    catchError,
    concat,
    concatAll,
    create,
    decodeWithCharset,
    defer,
    distinctUntilChanged,
    empty,
    everySatisfy,
    first,
    forEach,
    fromEnumerable,
    fromEnumerableObservable,
    fromIterable,
    fromReadonlyArray,
    fromRunnableObservable,
    generate,
    keep,
    last,
    map,
    never,
    onRun,
    pairwise,
    reduce,
    repeat,
    run,
    scan,
    skipFirst,
    someSatisfy,
    takeFirst,
    takeLast,
    takeWhile,
    throwIfEmpty,
    toReadonlyArray,
    toRunnable,
};

export { buffer, catchError, concat, concatAll, create, decodeWithCharset, Runnable as default, defer, distinctUntilChanged, empty, everySatisfy, first, forEach, fromEnumerable, fromEnumerableObservable, fromIterable, fromReadonlyArray, fromRunnableObservable, generate, keep, last, map, never, onRun, pairwise, reduce, repeat, run, scan, skipFirst, someSatisfy, takeFirst, takeLast, takeWhile, throwIfEmpty, toReadonlyArray, toRunnable };
