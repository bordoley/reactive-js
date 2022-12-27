/// <reference types="./IterableLike.toAsyncEnumerable.d.ts" />
import { compose } from '../../../functions.mjs';
import { fromEnumerable } from '../../../ix/AsyncEnumerableLike.mjs';
import toEnumerable from './IterableLike.toEnumerable.mjs';

const toAsyncEnumerable = () => compose(toEnumerable(), fromEnumerable());

export { toAsyncEnumerable as default };
