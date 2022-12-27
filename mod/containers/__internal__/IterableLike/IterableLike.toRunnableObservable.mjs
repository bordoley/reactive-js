/// <reference types="./IterableLike.toRunnableObservable.d.ts" />
import { compose } from '../../../functions.mjs';
import { toObservable } from '../../../ix/EnumerableLike.mjs';
import toEnumerable from './IterableLike.toEnumerable.mjs';

const toRunnableObservable = options => compose(toEnumerable(), 
// FIXME: any use
toObservable(options));

export { toRunnableObservable as default };
