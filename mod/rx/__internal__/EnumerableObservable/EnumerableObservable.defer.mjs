/// <reference types="./EnumerableObservable.defer.d.ts" />
import Observable_defer from '../Observable/Observable.defer.mjs';

const EnumerableObservable_defer = (f => Observable_defer(f, true, true));

export { EnumerableObservable_defer as default };
