/// <reference types="./Enumerable.concat.d.ts" />
import ReadonlyArray$toEnumerable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toEnumerable.mjs';
import { pipe } from '../../../functions.mjs';
import Enumerable$concatAll from './Enumerable.concatAll.mjs';

const Enumerable$concat = (...enumerables) => pipe(enumerables, ReadonlyArray$toEnumerable(), Enumerable$concatAll());

export { Enumerable$concat as default };
