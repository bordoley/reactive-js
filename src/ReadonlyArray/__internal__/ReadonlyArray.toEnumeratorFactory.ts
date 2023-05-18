import type * as ReadonlyArray from "../../ReadonlyArray.js";
import { composeLazy } from "../../functions.js";
import ReadonlyArray_enumerate from "./ReadonlyArray.enumerate.js";

const ReadonlyArray_toEnumeratorFactory: ReadonlyArray.Signature["toEnumeratorFactory"] =
  <T>(options?: { readonly start?: number; readonly count?: number }) =>
    composeLazy(ReadonlyArray_enumerate<T>(options));

export default ReadonlyArray_toEnumeratorFactory;
