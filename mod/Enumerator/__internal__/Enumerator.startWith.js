/// <reference types="./Enumerator.startWith.d.ts" />

import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import { pipe } from "../../functions.js";
import Enumerator_concatWith from "./Enumerator.concatWith.js";
const Enumerator_startWith = ((...values) => (enumerator) => pipe(values, ReadonlyArray_enumerate(), Enumerator_concatWith(enumerator)));
export default Enumerator_startWith;
