/// <reference types="./Iterable.toAsyncEnumerable.d.ts" />
import { compose } from '../../../functions.mjs';
import Enumerable_toAsyncEnumerable from '../../../ix/Enumerable/__internal__/Enumerable.toAsyncEnumerable.mjs';
import Iterable_toEnumerable from './Iterable.toEnumerable.mjs';

const Iterable_toAsyncEnumerable = () => compose(Iterable_toEnumerable(), Enumerable_toAsyncEnumerable());

export { Iterable_toAsyncEnumerable as default };
