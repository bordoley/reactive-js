import { returns } from "../../../functions.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";

const ReadonlyArray_fromIterable: ReadonlyArray.Signature["fromIterable"] =
  /*@__PURE__*/ returns(Array.from);

export default ReadonlyArray_fromIterable;
