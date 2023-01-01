/// <reference types="./EnumerableLike.concat.d.ts" />
import ReadonlyArrayLike__toEnumerable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toEnumerable.mjs';
import { pipe } from '../../../functions.mjs';
import EnumerableLike__concatAll from './EnumerableLike.concatAll.mjs';

const EnumerableLike__concat = (...enumerables) => pipe(enumerables, ReadonlyArrayLike__toEnumerable(), EnumerableLike__concatAll());

export { EnumerableLike__concat as default };
