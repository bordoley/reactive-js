/// <reference types="./Iterable.toRunnableObservable.d.ts" />
import { compose } from '../../../functions.mjs';
import Enumerable$toRunnableObservable from '../../../ix/__internal__/Enumerable/Enumerable.toRunnableObservable.mjs';
import Iterable$toEnumerable from './Iterable.toEnumerable.mjs';

const Iterable$toRunnableObservable = options => compose(Iterable$toEnumerable(), Enumerable$toRunnableObservable(options));

export { Iterable$toRunnableObservable as default };
