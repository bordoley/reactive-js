/// <reference types="./Deferable.startWith.d.ts" />

import { pipe } from "../../../functions.js";
import Deferable_concatWith from "./Deferable.concatWith.js";
import Deferable_fromReadonlyArray from "./Deferable.fromReadonlyArray.js";
const Deferable_startWith = (...values) => (deferable) => pipe(values, Deferable_fromReadonlyArray(), Deferable_concatWith(deferable));
export default Deferable_startWith;
