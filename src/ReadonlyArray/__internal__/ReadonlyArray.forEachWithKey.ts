import { Function1, SideEffect2 } from "../../functions.js";
import { KeyedContainers, ReadonlyArrayContainer } from "../../types.js";

const ReadonlyArray_forEachWithKey: KeyedContainers.TypeClass<ReadonlyArrayContainer>["forEachWithKey"] =

    <
      T,
      TKey extends KeyedContainers.KeyOf<ReadonlyArrayContainer> = KeyedContainers.KeyOf<ReadonlyArrayContainer>,
    >(
      effect: SideEffect2<T, TKey>,
    ): Function1<readonly T[], readonly T[]> =>
    arr => {
      arr.forEach(effect as SideEffect2<T, number>);
      return arr;
    };

export default ReadonlyArray_forEachWithKey;
