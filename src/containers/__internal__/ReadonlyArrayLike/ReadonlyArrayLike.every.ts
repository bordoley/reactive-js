import { Function1, Predicate } from "../../../functions";

const every =
  <T>(predicate: Predicate<T>): Function1<readonly T[], boolean> =>
  arr =>
    arr.every(predicate);

export default every;
