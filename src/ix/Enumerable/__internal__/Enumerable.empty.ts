import { returns } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerator_empty from "../../Enumerator/__internal__/Enumerator.empty.js";
import Enumerable_create from "./Enumerable.create.js";

const emptyEnumerable = /*@__PURE__*/ Enumerable_create(Enumerator_empty);
const Enumerable_empty: Enumerable.Signature["empty"] = /*@__PURE__*/ returns(
  emptyEnumerable,
) as Enumerable.Signature["empty"];

export default Enumerable_empty;
