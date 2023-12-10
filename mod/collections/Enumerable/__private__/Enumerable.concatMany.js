/// <reference types="./Enumerable.concatMany.d.ts" />

import { pipe } from "../../../functions.js";
import ReadonlyArray_values from "../../ReadonlyArray/__private__/ReadonlyArray.values.js";
import Enumerable_concatAll from "./Enumerable.concatAll.js";
import Enumerable_empty from "./Enumerable.empty.js";
const Enumerable_concatMany = enumerables => enumerables.length === 0
    ? Enumerable_empty()
    : pipe(enumerables, ReadonlyArray_values(), Enumerable_concatAll());
export default Enumerable_concatMany;
