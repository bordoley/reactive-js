/// <reference types="./Iterable.toEnumerableObservable.d.ts" />
import { compose } from '../../../functions.mjs';
import Enumerable_toEnumerableObservable from '../../../ix/__internal__/Enumerable/Enumerable.toEnumerableObservable.mjs';
import Iterable_toEnumerable from './Iterable.toEnumerable.mjs';

const Iterable_toEnumerableObservable = _ => compose(Iterable_toEnumerable(), Enumerable_toEnumerableObservable());

export { Iterable_toEnumerableObservable as default };
