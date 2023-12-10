/// <reference types="./Enumerable.empty.d.ts" />

import { returns } from "../../../functions.js";
import Enumerator_empty from "../../Enumerator/__private__/Enumerator.empty.js";
import Enumerable_create from "./Enumerable.create.js";
const emptyEnumerable = /*@__PURE__*/ Enumerable_create(Enumerator_empty);
const Enumerable_empty = /*@__PURE__*/ returns(emptyEnumerable);
export default Enumerable_empty;
