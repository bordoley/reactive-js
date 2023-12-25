/// <reference types="./Enumerable.concatMany.d.ts" />

import { pipe } from "../../../functions.js";
import Enumerable_concatAll from "./Enumerable.concatAll.js";
import Enumerable_empty from "./Enumerable.empty.js";
import Enumerable_fromReadonlyArray from "./Enumerable.fromReadonlyArray.js";
const Enumerable_concatMany = enumerables => enumerables.length === 0
    ? Enumerable_empty()
    : pipe(enumerables, Enumerable_fromReadonlyArray(), Enumerable_concatAll());
export default Enumerable_concatMany;
