/// <reference types="./Sequence.d.ts" />
import Sequence_concat from './__internal__/Sequence/Sequence.concat.mjs';
import Sequence_concatAll from './__internal__/Sequence/Sequence.concatAll.mjs';
import Sequence_distinctUntilChanged from './__internal__/Sequence/Sequence.distinctUntilChanged.mjs';
import Sequence_fromArray from './__internal__/Sequence/Sequence.fromArray.mjs';
import Sequence_generate from './__internal__/Sequence/Sequence.generate.mjs';
import Sequence_keep from './__internal__/Sequence/Sequence.keep.mjs';
import Sequence_map from './__internal__/Sequence/Sequence.map.mjs';
import Sequence_pairwise from './__internal__/Sequence/Sequence.pairwise.mjs';
import Sequence_repeat from './__internal__/Sequence/Sequence.repeat.mjs';
import Sequence_scan from './__internal__/Sequence/Sequence.scan.mjs';
import Sequence_seek from './__internal__/Sequence/Sequence.seek.mjs';
import Sequence_skipFirst from './__internal__/Sequence/Sequence.skipFirst.mjs';
import Sequence_takeFirst from './__internal__/Sequence/Sequence.takeFirst.mjs';
import Sequence_takeLast from './__internal__/Sequence/Sequence.takeLast.mjs';
import Sequence_takeWhile from './__internal__/Sequence/Sequence.takeWhile.mjs';
import Sequence_toEnumerable from './__internal__/Sequence/Sequence.toEnumerable.mjs';
import Sequence_toReadonlyArray from './__internal__/Sequence/Sequence.toReadonlyArray.mjs';
import Sequence_toRunnable from './__internal__/Sequence/Sequence.toRunnable.mjs';
import Sequence_zip from './__internal__/Sequence/Sequence.zip.mjs';

const concat = Sequence_concat;
const concatAll = Sequence_concatAll;
const distinctUntilChanged = Sequence_distinctUntilChanged;
const fromArray = Sequence_fromArray;
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
const toReadonlyArray = Sequence_toReadonlyArray;
const toRunnable = Sequence_toRunnable;
const zip = Sequence_zip;
const Sequence = {
    concat,
    concatAll,
    distinctUntilChanged,
    fromArray,
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
    toReadonlyArray,
    toRunnable,
    zip,
};

export { concat, concatAll, Sequence as default, distinctUntilChanged, fromArray, generate, keep, map, pairwise, repeat, scan, seek, skipFirst, takeFirst, takeLast, takeWhile, toEnumerable, toReadonlyArray, toRunnable, zip };
