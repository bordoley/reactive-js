import { Function1, Predicate } from "../../../functions";

const ReadonlyArrayLike__every =
  <T>(predicate: Predicate<T>): Function1<readonly T[], boolean> =>
  arr =>
    arr.every(predicate);

export default ReadonlyArrayLike__every;
