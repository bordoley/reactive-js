/// <reference types="./Iterable.toEnumerableObservable.d.ts" />
import { returns, compose } from '../../../functions.mjs';
import Enumerable_toEnumerableObservable from '../../../ix/Enumerable/__internal__/Enumerable.toEnumerableObservable.mjs';
import Iterable_toEnumerable from './Iterable.toEnumerable.mjs';

const Iterable_toEnumerableObservable = 
/*@__PURE__*/ returns(compose(Iterable_toEnumerable(), Enumerable_toEnumerableObservable()));

export { Iterable_toEnumerableObservable as default };
