/// <reference types="./EnumerableObservableLike.defer.d.ts" />
import defer$1 from '../ObservableLike/ObservableLike.defer.mjs';

const defer = (f => defer$1(f, true, true));

export { defer as default };
