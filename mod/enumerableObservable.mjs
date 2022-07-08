/// <reference types="./enumerableObservable.d.ts" />
import { toEnumerable as toEnumerable$1, toRunnable as toRunnable$1 } from './observable.mjs';

const toEnumerable = toEnumerable$1;
const toEnumerableT = {
    toEnumerable,
};
const toRunnable = toRunnable$1;
const toRunnableT = {
    toRunnable,
};

export { toEnumerable, toEnumerableT, toRunnable, toRunnableT };
