/// <reference types="./IterableLike.toRunnableObservable.d.ts" />
import { compose } from '../../../functions.mjs';
import { toRunnableObservable } from '../../../ix/EnumerableLike.mjs';
import IterableLike__toEnumerable from './IterableLike.toEnumerable.mjs';

const IterableLike__toRunnableObservable = options => compose(IterableLike__toEnumerable(), toRunnableObservable(options));

export { IterableLike__toRunnableObservable as default };
