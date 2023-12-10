import { IndexedLike } from "../../../collections.js";
import { pipe } from "../../../functions.js";
import type * as Indexed from "../../Indexed.js";
import ReadonlyArray_empty from "../../ReadonlyArray/__private__/ReadonlyArray.empty.js";
import ReadonlyArray_toIndexed from "../../ReadonlyArray/__private__/ReadonlyArray.toIndexed.js";

const _empty: IndexedLike = /*@__PURE__*/ (() =>
  pipe(ReadonlyArray_empty(), ReadonlyArray_toIndexed()))();

const Indexed_empty: Indexed.Signature["empty"] = <T>() =>
  _empty as IndexedLike<T>;

export default Indexed_empty;
