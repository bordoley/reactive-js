import Iterable_toReadonlyArray from "../../Iterable/__internal__/Iterable.toReadonlyArray.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_fromIterable: ReadonlyArray.Signature["fromIterable"] =
  Iterable_toReadonlyArray;

export default ReadonlyArray_fromIterable;
