import { none } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_last: ReadonlyArray.Signature["last"] =
  <T>() =>
  (values: ReadonlyArray<T>) => {
    const count = values.length;

    return count > 0 ? values[count - 1] : none;
  };

export default ReadonlyArray_last;
