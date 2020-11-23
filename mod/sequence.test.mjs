import { describe } from './testing.mjs';
import { createMonadTests } from './monad.test.mjs';
import { concat, concatMap, distinctUntilChanged, empty, endWith, fromArray, fromValue, generate, keep, map, mapTo, repeat, scan, skipFirst, startWith, takeFirst, takeLast, takeWhile, toRunnable } from './sequence.mjs';

const Sequence = {
    concat,
    concatMap,
    distinctUntilChanged,
    empty,
    endWith,
    fromArray,
    fromValue,
    generate,
    keep,
    map,
    mapTo,
    repeat,
    scan,
    skipFirst,
    startWith,
    takeFirst,
    takeLast,
    takeWhile,
    toRunnable,
};
const tests = describe("sequence", createMonadTests(Sequence));

export { tests };
