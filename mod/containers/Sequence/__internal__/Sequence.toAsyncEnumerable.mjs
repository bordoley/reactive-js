/// <reference types="./Sequence.toAsyncEnumerable.d.ts" />
import { returns, compose } from '../../../functions.mjs';
import Enumerable_toAsyncEnumerable from '../../../ix/Enumerable/__internal__/Enumerable.toAsyncEnumerable.mjs';
import Sequence_toEnumerable from './Sequence.toEnumerable.mjs';

const Sequence_toAsyncEnumerable = 
/*@__PURE__*/ returns(compose(Sequence_toEnumerable(), Enumerable_toAsyncEnumerable()));

export { Sequence_toAsyncEnumerable as default };
