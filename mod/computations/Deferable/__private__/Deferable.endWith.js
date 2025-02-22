/// <reference types="./Deferable.endWith.d.ts" />

import { pipe } from "../../../functions.js";
import Deferable_concatWith from "./Deferable.concatWith.js";
import Deferable_fromReadonlyArray from "./Deferable.fromReadonlyArray.js";
const Deferable_endWith = (...values) => (deferable) => pipe(deferable, Deferable_concatWith(pipe(values, Deferable_fromReadonlyArray())));
export default Deferable_endWith;
