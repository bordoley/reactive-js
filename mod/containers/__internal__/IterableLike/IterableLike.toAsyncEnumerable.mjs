/// <reference types="./IterableLike.toAsyncEnumerable.d.ts" />
import { compose } from '../../../functions.mjs';
import EnumerableLike__toAsyncEnumerable from '../../../ix/__internal__/EnumerableLike/EnumerableLike.toAsyncEnumerable.mjs';
import IterableLike__toEnumerable from './IterableLike.toEnumerable.mjs';

const IterableLike__toAsyncEnumerable = () => compose(IterableLike__toEnumerable(), EnumerableLike__toAsyncEnumerable());

export { IterableLike__toAsyncEnumerable as default };
