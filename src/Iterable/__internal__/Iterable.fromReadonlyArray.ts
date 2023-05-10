import type * as Iterable from "../../Iterable.js";
import ReadonlyArray_toReadonlyArray from "../../ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray.js";

const Iterable_fromReadonlyArray: Iterable.Signature["fromReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;

export default Iterable_fromReadonlyArray;
