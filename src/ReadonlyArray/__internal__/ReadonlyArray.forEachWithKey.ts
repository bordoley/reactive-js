import { ReadonlyArrayContainer } from "../../containers.js";
import { Function1, SideEffect2 } from "../../functions.js";

const ReadonlyArray_forEachWithKey: ReadonlyArrayContainer.TypeClass["forEachWithKey"] =

    <T, TKey extends ReadonlyArrayContainer.TKey = ReadonlyArrayContainer.TKey>(
      effect: SideEffect2<T, TKey>,
    ): Function1<readonly T[], readonly T[]> =>
    arr => {
      arr.forEach(effect as SideEffect2<T, number>);
      return arr;
    };

export default ReadonlyArray_forEachWithKey;
