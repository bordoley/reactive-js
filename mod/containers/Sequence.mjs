/// <reference types="./Sequence.d.ts" />
import Sequence_concat from './Sequence/__internal__/Sequence.concat.mjs';
import Sequence_concatAll from './Sequence/__internal__/Sequence.concatAll.mjs';
import Sequence_distinctUntilChanged from './Sequence/__internal__/Sequence.distinctUntilChanged.mjs';
import Sequence_fromReadonlyArray from './Sequence/__internal__/Sequence.fromReadonlyArray.mjs';
import Sequence_generate from './Sequence/__internal__/Sequence.generate.mjs';
import Sequence_keep from './Sequence/__internal__/Sequence.keep.mjs';
import Sequence_map from './Sequence/__internal__/Sequence.map.mjs';
import Sequence_pairwise from './Sequence/__internal__/Sequence.pairwise.mjs';
import Sequence_repeat from './Sequence/__internal__/Sequence.repeat.mjs';
import Sequence_scan from './Sequence/__internal__/Sequence.scan.mjs';
import Sequence_seek from './Sequence/__internal__/Sequence.seek.mjs';
import Sequence_skipFirst from './Sequence/__internal__/Sequence.skipFirst.mjs';
import Sequence_takeFirst from './Sequence/__internal__/Sequence.takeFirst.mjs';
import Sequence_takeLast from './Sequence/__internal__/Sequence.takeLast.mjs';
import Sequence_takeWhile from './Sequence/__internal__/Sequence.takeWhile.mjs';
import Sequence_toEnumerable from './Sequence/__internal__/Sequence.toEnumerable.mjs';
import Sequence_toReadonlyArray from './Sequence/__internal__/Sequence.toReadonlyArray.mjs';
import Sequence_toRunnable from './Sequence/__internal__/Sequence.toRunnable.mjs';
import Sequence_toRunnableObservable from './Sequence/__internal__/Sequence.toRunnableObservable.mjs';
import Sequence_zip from './Sequence/__internal__/Sequence.zip.mjs';

const concat = Sequence_concat;
const concatAll = Sequence_concatAll;
const distinctUntilChanged = Sequence_distinctUntilChanged;
const fromReadonlyArray = Sequence_fromReadonlyArray;
const generate = Sequence_generate;
const keep = Sequence_keep;
const map = Sequence_map;
const pairwise = Sequence_pairwise;
const repeat = Sequence_repeat;
const scan = Sequence_scan;
const seek = Sequence_seek;
const skipFirst = Sequence_skipFirst;
const takeFirst = Sequence_takeFirst;
const takeLast = Sequence_takeLast;
const takeWhile = Sequence_takeWhile;
const toEnumerable = Sequence_toEnumerable;
const toEnumerableObservable = Sequence_toRunnableObservable;
const toObservable = Sequence_toRunnableObservable;
const toReadonlyArray = Sequence_toReadonlyArray;
const toRunnable = Sequence_toRunnable;
const toRunnableObservable = Sequence_toRunnableObservable;
const zip = Sequence_zip;
/** @ignore */
const Sequence = {
    concat,
    concatAll,
    distinctUntilChanged,
    fromReadonlyArray,
    generate,
    keep,
    map,
    pairwise,
    repeat,
    scan,
    skipFirst,
    takeFirst,
    takeLast,
    takeWhile,
    toEnumerable,
    toEnumerableObservable,
    toObservable,
    toReadonlyArray,
    toRunnable,
    toRunnableObservable,
    zip,
};

export { concat, concatAll, Sequence as default, distinctUntilChanged, fromReadonlyArray, generate, keep, map, pairwise, repeat, scan, seek, skipFirst, takeFirst, takeLast, takeWhile, toEnumerable, toEnumerableObservable, toObservable, toReadonlyArray, toRunnable, toRunnableObservable, zip };
