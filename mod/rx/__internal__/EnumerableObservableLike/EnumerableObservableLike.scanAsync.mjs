/// <reference types="./EnumerableObservableLike.scanAsync.d.ts" />
import HigherOrderObservableLike__scanAsync from '../HigherOrderObservableLike/HigherOrderObservableLike.scanAsync.mjs';
import EnumerableObservableLike__create from './EnumerableObservableLike.create.mjs';

const EnumerableObservableLike__scanAsync = HigherOrderObservableLike__scanAsync(EnumerableObservableLike__create);

export { EnumerableObservableLike__scanAsync as default };
