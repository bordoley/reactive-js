/// <reference types="./Enumerator.concatMany.d.ts" />

import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import { pipe } from "../../functions.js";
import Enumerator_concatAll from "./Enumerator.concatAll.js";
const Enumerator_concatMany = (enumerators) => pipe(enumerators, ReadonlyArray_enumerate(), Enumerator_concatAll());
export default Enumerator_concatMany;
