/// <reference types="./EnumerableObservable.toIterable.d.ts" />
import { returns, compose } from '../../../functions.mjs';
import Enumerable_toIterable from '../../../ix/Enumerable/__internal__/Enumerable.toIterable.mjs';
import EnumerableObservable_toEnumerable from './EnumerableObservable.toEnumerable.mjs';

const EnumerableObservable_toIterable = 
/*@__PURE__*/ returns(compose(EnumerableObservable_toEnumerable(), Enumerable_toIterable()));

export { EnumerableObservable_toIterable as default };
