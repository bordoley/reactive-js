/// <reference types="./IterableLike.toAsyncEnumerable.d.ts" />
import { compose } from '../../../functions.mjs';
import { fromEnumerable } from '../../../ix/AsyncEnumerableLike.mjs';
import IterableLike__toEnumerable from './IterableLike.toEnumerable.mjs';

const IterableLike__toAsyncEnumerable = () => compose(IterableLike__toEnumerable(), fromEnumerable());

export { IterableLike__toAsyncEnumerable as default };
