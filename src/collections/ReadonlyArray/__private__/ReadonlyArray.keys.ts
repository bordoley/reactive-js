import { Array_length } from "../../../__internal__/constants.js";
import { returns } from "../../../functions.js";
import * as Enumerable from "../../Enumerable.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_keys: ReadonlyArray.Signature["keys"] =
  /*@__PURE__*/ returns((arr: readonly unknown[]) =>
    Enumerable.range(0, { count: arr[Array_length] }),
  ) as ReadonlyArray.Signature["keys"];

export default ReadonlyArray_keys;
