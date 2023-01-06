/// <reference types="./RunnableLike.d.ts" />
import { returns, identity } from '../functions.mjs';
import RunnableLike__buffer from './__internal__/RunnableLike/RunnableLike.buffer.mjs';
import RunnableLike__catchError from './__internal__/RunnableLike/RunnableLike.catchError.mjs';
import RunnableLike__concat from './__internal__/RunnableLike/RunnableLike.concat.mjs';
import RunnableLike__concatAll from './__internal__/RunnableLike/RunnableLike.concatAll.mjs';
import RunnableLike__create from './__internal__/RunnableLike/RunnableLike.create.mjs';
import RunnableLike__decodeWithCharset from './__internal__/RunnableLike/RunnableLike.decodeWithCharset.mjs';
import RunnableLike__defer from './__internal__/RunnableLike/RunnableLike.defer.mjs';
import RunnableLike__distinctUntilChanged from './__internal__/RunnableLike/RunnableLike.distinctUntilChanged.mjs';
import RunnableLike__empty from './__internal__/RunnableLike/RunnableLike.empty.mjs';
import RunnableLike__everySatisfy from './__internal__/RunnableLike/RunnableLike.everySatisfy.mjs';
import RunnableLike__first from './__internal__/RunnableLike/RunnableLike.first.mjs';
import RunnableLike__forEach from './__internal__/RunnableLike/RunnableLike.forEach.mjs';
import RunnableLike__generate from './__internal__/RunnableLike/RunnableLike.generate.mjs';
import RunnableLike__keep from './__internal__/RunnableLike/RunnableLike.keep.mjs';
import RunnableLike__last from './__internal__/RunnableLike/RunnableLike.last.mjs';
import RunnableLike__map from './__internal__/RunnableLike/RunnableLike.map.mjs';
import RunnableLike__never from './__internal__/RunnableLike/RunnableLike.never.mjs';
import RunnableLike__onRun from './__internal__/RunnableLike/RunnableLike.onRun.mjs';
import RunnableLike__pairwise from './__internal__/RunnableLike/RunnableLike.pairwise.mjs';
import RunnableLike__reduce from './__internal__/RunnableLike/RunnableLike.reduce.mjs';
import RunnableLike__repeat from './__internal__/RunnableLike/RunnableLike.repeat.mjs';
import RunnableLike__run from './__internal__/RunnableLike/RunnableLike.run.mjs';
import RunnableLike__scan from './__internal__/RunnableLike/RunnableLike.scan.mjs';
import RunnableLike__skipFirst from './__internal__/RunnableLike/RunnableLike.skipFirst.mjs';
import RunnableLike__someSatisfy from './__internal__/RunnableLike/RunnableLike.someSatisfy.mjs';
import RunnableLike__takeFirst from './__internal__/RunnableLike/RunnableLike.takeFirst.mjs';
import RunnableLike__takeLast from './__internal__/RunnableLike/RunnableLike.takeLast.mjs';
import RunnableLike__takeWhile from './__internal__/RunnableLike/RunnableLike.takeWhile.mjs';
import RunnableLike__throwIfEmpty from './__internal__/RunnableLike/RunnableLike.throwIfEmpty.mjs';
import RunnableLike__toReadonlyArray from './__internal__/RunnableLike/RunnableLike.toReadonlyArray.mjs';

const create = RunnableLike__create;
const buffer = RunnableLike__buffer;
const bufferT = { buffer };
const catchError = RunnableLike__catchError;
const catchErrorT = { catchError };
const concat = RunnableLike__concat;
const concatT = {
    concat,
};
const concatAll = RunnableLike__concatAll;
const concatAllT = {
    concatAll,
};
const decodeWithCharset = RunnableLike__decodeWithCharset;
const decodeWithCharsetT = {
    decodeWithCharset,
};
const defer = RunnableLike__defer;
const deferT = { defer };
const distinctUntilChanged = RunnableLike__distinctUntilChanged;
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const empty = RunnableLike__empty;
const emptyT = { empty };
const everySatisfy = RunnableLike__everySatisfy;
const everySatisfyT = { everySatisfy };
const first = RunnableLike__first;
const forEach = RunnableLike__forEach;
const forEachT = { forEach };
const generate = RunnableLike__generate;
const generateT = {
    generate,
};
const keep = RunnableLike__keep;
const keepT = { keep };
const last = RunnableLike__last;
const map = RunnableLike__map;
const mapT = { map };
const never = RunnableLike__never;
const neverT = {
    never: never,
};
const onRun = RunnableLike__onRun;
const pairwise = RunnableLike__pairwise;
const pairwiseT = { pairwise };
const reduce = RunnableLike__reduce;
const reduceT = { reduce };
const repeat = RunnableLike__repeat;
const repeatT = { repeat };
const run = RunnableLike__run;
const scan = RunnableLike__scan;
const scanT = { scan };
const skipFirst = RunnableLike__skipFirst;
const skipFirstT = { skipFirst };
const someSatisfy = RunnableLike__someSatisfy;
const someSatisfyT = { someSatisfy };
const takeFirst = RunnableLike__takeFirst;
const takeFirstT = { takeFirst };
const takeLast = RunnableLike__takeLast;
const takeLastT = { takeLast };
const takeWhile = RunnableLike__takeWhile;
const takeWhileT = { takeWhile };
const throwIfEmpty = RunnableLike__throwIfEmpty;
const throwIfEmptyT = {
    throwIfEmpty,
};
const toReadonlyArray = RunnableLike__toReadonlyArray;
const toReadonlyArrayT = {
    toReadonlyArray,
};
const toRunnable = returns(identity);
const toRunnableT = {
    toRunnable,
};

export { buffer, bufferT, catchError, catchErrorT, concat, concatAll, concatAllT, concatT, create, decodeWithCharset, decodeWithCharsetT, defer, deferT, distinctUntilChanged, distinctUntilChangedT, empty, emptyT, everySatisfy, everySatisfyT, first, forEach, forEachT, generate, generateT, keep, keepT, last, map, mapT, never, neverT, onRun, pairwise, pairwiseT, reduce, reduceT, repeat, repeatT, run, scan, scanT, skipFirst, skipFirstT, someSatisfy, someSatisfyT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableT };
