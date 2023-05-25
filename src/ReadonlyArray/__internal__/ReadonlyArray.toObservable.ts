import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";
import { pipe } from "../../functions.js";
import ReadonlyArray_enumerate from "./ReadonlyArray.enumerate.js";

const ReadonlyArray_toObservable: ReadonlyArray.Signature["toObservable"] =
  <T>(options?: { readonly start?: number; readonly count?: number }) =>
  (arr: ReadonlyArray<T>) =>
    Enumerable_create<T>(() => pipe(arr, ReadonlyArray_enumerate<T>(options)));

export default ReadonlyArray_toObservable;
