/// <reference types="./Iterable.toRunnable.d.ts" />
import { returns, compose } from '../../../functions.mjs';
import Enumerable_toRunnable from '../../../ix/Enumerable/__internal__/Enumerable.toRunnable.mjs';
import Iterable_toEnumerable from './Iterable.toEnumerable.mjs';

const Iterable_toRunnable = 
/*@__PURE__*/ returns(compose(Iterable_toEnumerable(), Enumerable_toRunnable()));

export { Iterable_toRunnable as default };
