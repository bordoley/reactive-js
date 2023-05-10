import { none } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_lastAsync: ReadonlyArray.Signature["lastAsync"] =
  <T>() =>
  (values: ReadonlyArray<T>) => {
    const count = values.length;

    return Promise.resolve(count > 0 ? values[count - 1] : none);
  };

export default ReadonlyArray_lastAsync;
