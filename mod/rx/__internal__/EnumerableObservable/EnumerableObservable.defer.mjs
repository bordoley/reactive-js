/// <reference types="./EnumerableObservable.defer.d.ts" />
import Observable$defer from '../Observable/Observable.defer.mjs';

const EnumerableObservable$defer = (f => Observable$defer(f, true, true));

export { EnumerableObservable$defer as default };
