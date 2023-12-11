import { IndexedLike } from "../../../collections.js";
import { pipe } from "../../../functions.js";
import type * as Indexed from "../../Indexed.js";
import * as ReadonlyArray from "../../ReadonlyArray.js";

const _empty: IndexedLike = /*@__PURE__*/ (() =>
  pipe(ReadonlyArray.empty(), ReadonlyArray.toIndexed()))();

const Indexed_empty: Indexed.Signature["empty"] = <T>() =>
  _empty as IndexedLike<T>;

export default Indexed_empty;
