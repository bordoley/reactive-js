import { Function1, SideEffect2 } from "../../../functions.js";
import {
  ForEachWithKey,
  KeyOf,
  ReadonlyArrayLike,
} from "../../../keyed-containers.js";

const ReadonlyArray_forEachWithKey: ForEachWithKey<ReadonlyArrayLike>["forEachWithKey"] =

    <T, TKey extends KeyOf<ReadonlyArrayLike> = KeyOf<ReadonlyArrayLike>>(
      effect: SideEffect2<T, TKey>,
    ): Function1<readonly T[], readonly T[]> =>
    arr => {
      arr.forEach(effect as SideEffect2<T, number>);
      return arr;
    };

export default ReadonlyArray_forEachWithKey;
