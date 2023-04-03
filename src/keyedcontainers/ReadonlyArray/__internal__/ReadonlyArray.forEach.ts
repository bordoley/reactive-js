import { Function1, SideEffect1 } from "../../../functions.js";
import { ForEach, ReadonlyArrayLike } from "../../../keyedcontainers.js";

const ReadonlyArray_forEach: ForEach<ReadonlyArrayLike>["forEach"] =
  <T>(effect: SideEffect1<T>): Function1<readonly T[], readonly T[]> =>
  arr => {
    arr.forEach(effect);
    return arr;
  };

export default ReadonlyArray_forEach;
