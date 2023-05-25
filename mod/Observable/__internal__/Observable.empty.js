/// <reference types="./Observable.empty.d.ts" />

import Enumerable_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import Enumerator_empty from "../../Enumerator/__internal__/Enumerator.empty.js";
import { returns } from "../../functions.js";
const emptyEnumerable = /*@__PURE__*/ Enumerable_create(Enumerator_empty, true);
const Observable_empty = /*@__PURE__*/ returns(emptyEnumerable);
export default Observable_empty;
