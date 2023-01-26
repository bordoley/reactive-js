/// <reference types="./Iterable.toAsyncEnumerable.d.ts" />
import { compose } from '../../../functions.mjs';
import Enumerable$toAsyncEnumerable from '../../../ix/__internal__/Enumerable/Enumerable.toAsyncEnumerable.mjs';
import Iterable$toEnumerable from './Iterable.toEnumerable.mjs';

const Iterable$toAsyncEnumerable = () => compose(Iterable$toEnumerable(), Enumerable$toAsyncEnumerable());

export { Iterable$toAsyncEnumerable as default };
