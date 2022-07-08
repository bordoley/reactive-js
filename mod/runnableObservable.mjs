/// <reference types="./runnableObservable.d.ts" />
import { concat as concat$1, concatAll as concatAll$1, distinctUntilChanged as distinctUntilChanged$1, fromArray as fromArray$1, generate as generate$1, keep as keep$1, map as map$1, repeat as repeat$1, scan as scan$1, skipFirst as skipFirst$1, takeFirst as takeFirst$1, takeLast as takeLast$1, takeWhile as takeWhile$1, toRunnable as toRunnable$1, zip as zip$1 } from './observable.mjs';

const concat = concat$1;
const concatT = {
    concat,
};
const concatAll = concatAll$1;
const concatAllT = {
    concatAll,
};
const distinctUntilChanged = distinctUntilChanged$1;
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const fromArray = fromArray$1;
const fromArrayT = {
    fromArray,
};
const generate = generate$1;
const generateT = {
    generate,
};
const keep = keep$1;
const keepT = {
    keep,
};
const map = map$1;
const mapT = { map };
const repeat = repeat$1;
const repeatT = { repeat };
const scan = scan$1;
const scanT = { scan };
const skipFirst = skipFirst$1;
const skipFirstT = {
    skipFirst,
};
const takeFirst = takeFirst$1;
const takeFirstT = {
    takeFirst,
};
const takeLast = takeLast$1;
const takeLastT = {
    takeLast,
};
const takeWhile = takeWhile$1;
const takeWhileT = {
    takeWhile,
};
const toRunnable = toRunnable$1;
const toRunnableT = {
    toRunnable,
};
const zip = zip$1;
const zipT = { zip };

export { concat, concatAll, concatAllT, concatT, distinctUntilChanged, distinctUntilChangedT, fromArray, fromArrayT, generate, generateT, keep, keepT, map, mapT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, toRunnable, toRunnableT, zip, zipT };
