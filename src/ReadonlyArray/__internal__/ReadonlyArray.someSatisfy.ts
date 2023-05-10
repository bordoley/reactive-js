import { Function1, Predicate } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_someSatisfy: ReadonlyArray.Signature["someSatisfy"] =
  <T>(predicate: Predicate<T>): Function1<ReadonlyArray<T>, boolean> =>
  arr =>
    arr.some(predicate);
export default ReadonlyArray_someSatisfy;
