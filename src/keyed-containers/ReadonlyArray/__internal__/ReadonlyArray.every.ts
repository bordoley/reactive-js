import { Function1, Predicate } from "../../../functions.js";

const ReadonlyArray_every =
  <T>(predicate: Predicate<T>): Function1<readonly T[], boolean> =>
  arr =>
    arr.every(predicate);

export default ReadonlyArray_every;
