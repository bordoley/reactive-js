/// <reference types="./Observable.empty.d.ts" />

import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerator_empty from "../../Enumerator/__internal__/Enumerator.empty.js";
import { returns } from "../../functions.js";
const emptyEnumerable = /*@__PURE__*/ Enumerable_create(Enumerator_empty);
const Observable_empty = /*@__PURE__*/ returns(emptyEnumerable);
export default Observable_empty;
