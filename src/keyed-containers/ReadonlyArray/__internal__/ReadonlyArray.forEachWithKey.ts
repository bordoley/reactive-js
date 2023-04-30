import { Function1, SideEffect2 } from "../../../functions.js";
import {
  ForEachWithKey,
  KeyOf,
  ReadonlyArrayContainerLike,
} from "../../../keyed-containers.js";

const ReadonlyArray_forEachWithKey: ForEachWithKey<ReadonlyArrayContainerLike>["forEachWithKey"] =

    <
      T,
      TKey extends KeyOf<ReadonlyArrayContainerLike> = KeyOf<ReadonlyArrayContainerLike>,
    >(
      effect: SideEffect2<T, TKey>,
    ): Function1<readonly T[], readonly T[]> =>
    arr => {
      arr.forEach(effect as SideEffect2<T, number>);
      return arr;
    };

export default ReadonlyArray_forEachWithKey;
