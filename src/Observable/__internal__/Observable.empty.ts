import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerator_empty from "../../Enumerator/__internal__/Enumerator.empty.js";
import type * as Observable from "../../Observable.js";
import { returns } from "../../functions.js";

const emptyEnumerable = /*@__PURE__*/ Enumerable_create(Enumerator_empty);

const Observable_empty: Observable.Signature["empty"] = /*@__PURE__*/ returns(
  emptyEnumerable,
) as Observable.Signature["empty"];

export default Observable_empty;
