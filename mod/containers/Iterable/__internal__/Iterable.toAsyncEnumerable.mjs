/// <reference types="./Iterable.toAsyncEnumerable.d.ts" />
import { returns, compose } from '../../../functions.mjs';
import Enumerable_toAsyncEnumerable from '../../../ix/Enumerable/__internal__/Enumerable.toAsyncEnumerable.mjs';
import Iterable_toEnumerable from './Iterable.toEnumerable.mjs';

const Iterable_toAsyncEnumerable = 
/*@__PURE__*/ returns(compose(Iterable_toEnumerable(), Enumerable_toAsyncEnumerable()));

export { Iterable_toAsyncEnumerable as default };
