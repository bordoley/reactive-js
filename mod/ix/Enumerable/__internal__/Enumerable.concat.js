/// <reference types="./Enumerable.concat.d.ts" />

import ReadonlyArray_toEnumerable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toEnumerable.js";
import { pipe } from "../../../functions.js";
import Enumerable_concatAll from "./Enumerable.concatAll.js";
const Enumerable_concat = (...enumerables) => pipe(enumerables, ReadonlyArray_toEnumerable(), Enumerable_concatAll());
export default Enumerable_concat;
