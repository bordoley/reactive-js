/// <reference types="./Sequence.toIterable.d.ts" />
import { returns, compose } from '../../../functions.mjs';
import Enumerable_toIterable from '../../../ix/Enumerable/__internal__/Enumerable.toIterable.mjs';
import Sequence_toEnumerable from './Sequence.toEnumerable.mjs';

const Sequence_toIterable = returns(compose(Sequence_toEnumerable(), Enumerable_toIterable()));

export { Sequence_toIterable as default };
