/// <reference types="./Iterable.toReadonlyArray.d.ts" />
import { returns, compose } from '../../../functions.mjs';
import Enumerable_toReadonlyArray from '../../../ix/Enumerable/__internal__/Enumerable.toReadonlyArray.mjs';
import Iterable_toEnumerable from './Iterable.toEnumerable.mjs';

const Iterable_toReadonlyArray = 
/*@__PURE__*/ returns(compose(Iterable_toEnumerable(), Enumerable_toReadonlyArray()));

export { Iterable_toReadonlyArray as default };
