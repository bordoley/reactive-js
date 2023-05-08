import {
  EnumeratorLike,
  KeyedContainer,
  ReadonlyObjectMapContainer,
  ReadonlyObjectMapLike,
} from "../../../core.js";
import Enumerator_map from "../../../core/Enumerator/__internal__/Enumerator.map.js";
import { pipe } from "../../../functions.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";

const ReadonlyObjectMap_values: KeyedContainer.Values<ReadonlyObjectMapContainer>["values"] =

    <
      T,
      TKey extends KeyedContainer.KeyOf<ReadonlyObjectMapContainer> = KeyedContainer.KeyOf<ReadonlyObjectMapContainer>,
    >() =>
    (obj: ReadonlyObjectMapLike<TKey, T>): EnumeratorLike<T> =>
      pipe(
        obj,
        ReadonlyObjectMap_keys(),
        Enumerator_map(key => obj[key as TKey] as T),
      );

export default ReadonlyObjectMap_values;
