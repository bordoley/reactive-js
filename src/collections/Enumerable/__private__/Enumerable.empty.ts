import { pipeLazy } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import ReadonlyArray_empty from "../../ReadonlyArray/__private__/ReadonlyArray.empty.js";
import ReadonlyArray_values from "../../ReadonlyArray/__private__/ReadonlyArray.values.js";

const Enumerable_empty: Enumerable.Signature["empty"] = /*@__PURE__*/ (<T>() =>
  pipeLazy(
    ReadonlyArray_empty<T>(),
    ReadonlyArray_values(),
  ))() as Enumerable.Signature["empty"];

export default Enumerable_empty;
