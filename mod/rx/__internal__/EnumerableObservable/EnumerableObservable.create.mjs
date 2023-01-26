/// <reference types="./EnumerableObservable.create.d.ts" />
import Observable$create from '../Observable/Observable.create.mjs';

const EnumerableObservable$create = (f) => Observable$create(f, true, true);

export { EnumerableObservable$create as default };
