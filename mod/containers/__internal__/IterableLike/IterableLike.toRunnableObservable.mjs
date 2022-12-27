/// <reference types="./IterableLike.toRunnableObservable.d.ts" />
import { compose } from '../../../functions.mjs';
import { toRunnableObservable as toRunnableObservable$1 } from '../../../ix/EnumerableLike.mjs';
import toEnumerable from './IterableLike.toEnumerable.mjs';

const toRunnableObservable = options => compose(toEnumerable(), toRunnableObservable$1(options));

export { toRunnableObservable as default };
