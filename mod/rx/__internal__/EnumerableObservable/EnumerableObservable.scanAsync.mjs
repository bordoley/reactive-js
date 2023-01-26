/// <reference types="./EnumerableObservable.scanAsync.d.ts" />
import HigherOrderObservable$scanAsync from '../HigherOrderObservable/HigherOrderObservable.scanAsync.mjs';
import EnumerableObservable$create from './EnumerableObservable.create.mjs';

const EnumerableObservable$scanAsync = HigherOrderObservable$scanAsync(EnumerableObservable$create);

export { EnumerableObservable$scanAsync as default };
