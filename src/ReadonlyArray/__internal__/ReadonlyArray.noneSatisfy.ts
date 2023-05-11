import { Function1, Predicate, compose, negate } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_noneSatisfy: ReadonlyArray.Signature["noneSatisfy"] =
  <T>(predicate: Predicate<T>): Function1<readonly T[], boolean> =>
  arr =>
    arr.every(compose(predicate, negate));

export default ReadonlyArray_noneSatisfy;
