/// <reference types="./Iterable.toRunnableObservable.d.ts" />
import { compose } from '../../../functions.mjs';
import Enumerable_toRunnableObservable from '../../../ix/Enumerable/__internal__/Enumerable.toRunnableObservable.mjs';
import Iterable_toEnumerable from './Iterable.toEnumerable.mjs';

const Iterable_toRunnableObservable = options => compose(Iterable_toEnumerable(), Enumerable_toRunnableObservable(options));

export { Iterable_toRunnableObservable as default };
