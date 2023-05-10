import { Function1, Predicate } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_everySatisfy: ReadonlyArray.Signature["everySatisfy"] =
  <T>(predicate: Predicate<T>): Function1<readonly T[], boolean> =>
  arr =>
    arr.every(predicate);

export default ReadonlyArray_everySatisfy;
