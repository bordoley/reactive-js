/// <reference types="./Enumerable.empty.d.ts" />

import { pipe, returns } from "../../../functions.js";
import Enumerator_fromIterator from "../../Enumerator/__private__/Enumerator.fromIterator.js";
import Enumerable_create from "./Enumerable.create.js";
const Enumerable_empty = /*@__PURE__*/ (() => pipe(() => {
    const iter = function* () { };
    return pipe(iter(), Enumerator_fromIterator());
}, Enumerable_create, returns))();
export default Enumerable_empty;
