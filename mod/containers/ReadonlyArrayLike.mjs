/// <reference types="./ReadonlyArrayLike.d.ts" />
import { identity } from '../functions.mjs';
import empty$1 from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.empty.mjs';
import every$1 from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.every.mjs';
import forEach$1 from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.forEach.mjs';
import keep$1 from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.keep.mjs';
import map$1 from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map.mjs';
import some$1 from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.some.mjs';
import toEnumerable$1 from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toEnumerable.mjs';
import toRunnable$1 from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable.mjs';
import toRunnableObservable$1 from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable.mjs';
import toSequence$1 from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toSequence.mjs';

const empty = empty$1;
const emptyT = {
    empty,
};
const every = every$1;
const forEach = forEach$1;
const forEachT = { forEach };
const keep = keep$1;
const keepT = { keep };
const map = map$1;
const mapT = { map };
const some = some$1;
const toEnumerable = toEnumerable$1;
const toEnumerableT = { toEnumerable };
const toEnumerableObservable = toRunnableObservable$1;
const toEnumerableObservableT = { toEnumerableObservable };
const toObservable = toRunnableObservable$1;
const toObservableT = { toObservable };
const toReadonlyArray = () => identity;
const toReadonlyArrayT = {
    toReadonlyArray,
};
const toRunnable = toRunnable$1;
const toRunnableT = { toRunnable };
const toRunnableObservable = toRunnableObservable$1;
const toRunnableObservableT = { toRunnableObservable };
const toSequence = toSequence$1;
const toSequenceT = {
    toSequence,
};

export { empty, emptyT, every, forEach, forEachT, keep, keepT, map, mapT, some, toEnumerable, toEnumerableObservable, toEnumerableObservableT, toEnumerableT, toObservable, toObservableT, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableObservable, toRunnableObservableT, toRunnableT, toSequence, toSequenceT };
