/// <reference types="./Runnable.d.ts" />
import { returns, identity } from '../functions.mjs';
import Runnable_buffer from './__internal__/Runnable/Runnable.buffer.mjs';
import Runnable_catchError from './__internal__/Runnable/Runnable.catchError.mjs';
import Runnable_concat from './__internal__/Runnable/Runnable.concat.mjs';
import Runnable_concatAll from './__internal__/Runnable/Runnable.concatAll.mjs';
import Runnable_create from './__internal__/Runnable/Runnable.create.mjs';
import Runnable_decodeWithCharset from './__internal__/Runnable/Runnable.decodeWithCharset.mjs';
import Runnable_defer from './__internal__/Runnable/Runnable.defer.mjs';
import Runnable_distinctUntilChanged from './__internal__/Runnable/Runnable.distinctUntilChanged.mjs';
import Runnable_empty from './__internal__/Runnable/Runnable.empty.mjs';
import Runnable_everySatisfy from './__internal__/Runnable/Runnable.everySatisfy.mjs';
import Runnable_first from './__internal__/Runnable/Runnable.first.mjs';
import Runnable_forEach from './__internal__/Runnable/Runnable.forEach.mjs';
import Runnable_fromArray from './__internal__/Runnable/Runnable.fromArray.mjs';
import Runnable_generate from './__internal__/Runnable/Runnable.generate.mjs';
import Runnable_keep from './__internal__/Runnable/Runnable.keep.mjs';
import Runnable_last from './__internal__/Runnable/Runnable.last.mjs';
import Runnable_map from './__internal__/Runnable/Runnable.map.mjs';
import Runnable_never from './__internal__/Runnable/Runnable.never.mjs';
import Runnable_onRun from './__internal__/Runnable/Runnable.onRun.mjs';
import Runnable_pairwise from './__internal__/Runnable/Runnable.pairwise.mjs';
import Runnable_reduce from './__internal__/Runnable/Runnable.reduce.mjs';
import Runnable_repeat from './__internal__/Runnable/Runnable.repeat.mjs';
import Runnable_run from './__internal__/Runnable/Runnable.run.mjs';
import Runnable_scan from './__internal__/Runnable/Runnable.scan.mjs';
import Runnable_skipFirst from './__internal__/Runnable/Runnable.skipFirst.mjs';
import Runnable_someSatisfy from './__internal__/Runnable/Runnable.someSatisfy.mjs';
import Runnable_takeFirst from './__internal__/Runnable/Runnable.takeFirst.mjs';
import Runnable_takeLast from './__internal__/Runnable/Runnable.takeLast.mjs';
import Runnable_takeWhile from './__internal__/Runnable/Runnable.takeWhile.mjs';
import Runnable_throwIfEmpty from './__internal__/Runnable/Runnable.throwIfEmpty.mjs';
import Runnable_toReadonlyArray from './__internal__/Runnable/Runnable.toReadonlyArray.mjs';

const create = Runnable_create;
const buffer = Runnable_buffer;
const catchError = Runnable_catchError;
const concat = Runnable_concat;
const concatAll = Runnable_concatAll;
const decodeWithCharset = Runnable_decodeWithCharset;
const defer = Runnable_defer;
const distinctUntilChanged = Runnable_distinctUntilChanged;
const empty = Runnable_empty;
const everySatisfy = Runnable_everySatisfy;
const first = Runnable_first;
const forEach = Runnable_forEach;
const fromArray = Runnable_fromArray;
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
const toRunnable = returns(identity);
const Runnable = {
    buffer,
    catchError,
    concat,
    concatAll,
    decodeWithCharset,
    defer,
    distinctUntilChanged,
    empty,
    everySatisfy,
    forEach,
    fromArray,
    generate,
    keep,
    map,
    pairwise,
    reduce,
    repeat,
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

export { buffer, catchError, concat, concatAll, create, decodeWithCharset, Runnable as default, defer, distinctUntilChanged, empty, everySatisfy, first, forEach, fromArray, generate, keep, last, map, never, onRun, pairwise, reduce, repeat, run, scan, skipFirst, someSatisfy, takeFirst, takeLast, takeWhile, throwIfEmpty, toReadonlyArray, toRunnable };
