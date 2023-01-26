/// <reference types="./EnumerableObservable.scanAsync.d.ts" />
import HigherOrderObservable_scanAsync from '../HigherOrderObservable/HigherOrderObservable.scanAsync.mjs';
import EnumerableObservable_create from './EnumerableObservable.create.mjs';

const EnumerableObservable_scanAsync = HigherOrderObservable_scanAsync(EnumerableObservable_create);

export { EnumerableObservable_scanAsync as default };
