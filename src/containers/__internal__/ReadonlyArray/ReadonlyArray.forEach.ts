import { ForEach, ReadonlyArrayLike } from "../../../containers";
import { Function1, SideEffect1 } from "../../../functions";

const ReadonlyArray$forEach: ForEach<ReadonlyArrayLike>["forEach"] =
  <T>(effect: SideEffect1<T>): Function1<readonly T[], readonly T[]> =>
  arr => {
    arr.forEach(effect);
    return arr;
  };

export default ReadonlyArray$forEach;
