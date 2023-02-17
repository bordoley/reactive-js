/// <reference types="./EnumerableObservable.toAsyncEnumerable.d.ts" />
import { returns, compose } from '../../../functions.mjs';
import Enumerable_toAsyncEnumerable from '../../../ix/Enumerable/__internal__/Enumerable.toAsyncEnumerable.mjs';
import EnumerableObservable_toEnumerable from './EnumerableObservable.toEnumerable.mjs';

const EnumerableObservable_toAsyncEnumerable = 
/*@__PURE__*/ returns(compose(EnumerableObservable_toEnumerable(), Enumerable_toAsyncEnumerable()));

export { EnumerableObservable_toAsyncEnumerable as default };
