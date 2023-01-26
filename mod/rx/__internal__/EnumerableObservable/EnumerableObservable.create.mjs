/// <reference types="./EnumerableObservable.create.d.ts" />
import Observable_create from '../Observable/Observable.create.mjs';

const EnumerableObservable_create = (f) => Observable_create(f, true, true);

export { EnumerableObservable_create as default };
