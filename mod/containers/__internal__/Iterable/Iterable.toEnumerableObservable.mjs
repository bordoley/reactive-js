/// <reference types="./Iterable.toEnumerableObservable.d.ts" />
import { compose } from '../../../functions.mjs';
import Enumerable$toEnumerableObservable from '../../../ix/__internal__/Enumerable/Enumerable.toEnumerableObservable.mjs';
import Iterable$toEnumerable from './Iterable.toEnumerable.mjs';

const Iterable$toEnumerableObservable = _ => compose(Iterable$toEnumerable(), Enumerable$toEnumerableObservable());

export { Iterable$toEnumerableObservable as default };
