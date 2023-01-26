/// <reference types="./Enumerable.concat.d.ts" />
import ReadonlyArray_toEnumerable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toEnumerable.mjs';
import { pipe } from '../../../functions.mjs';
import Enumerable_concatAll from './Enumerable.concatAll.mjs';

const Enumerable_concat = (...enumerables) => pipe(enumerables, ReadonlyArray_toEnumerable(), Enumerable_concatAll());

export { Enumerable_concat as default };
