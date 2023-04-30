import { EnumeratorLike } from "../../../containers.js";
import Enumerator_map from "../../../containers/Enumerator/__internal__/Enumerator.map.js";
import { pipe } from "../../../functions.js";
import {
  KeyOf,
  ReadonlyObjectMapContainer,
  ReadonlyObjectMapLike,
  Values,
} from "../../../keyed-containers.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";

const ReadonlyObjectMap_values: Values<ReadonlyObjectMapContainer>["values"] =
  <
    T,
    TKey extends KeyOf<ReadonlyObjectMapContainer> = KeyOf<ReadonlyObjectMapContainer>,
  >() =>
  (obj: ReadonlyObjectMapLike<TKey, T>): EnumeratorLike<T> =>
    pipe(
      obj,
      ReadonlyObjectMap_keys(),
      Enumerator_map(key => obj[key as TKey] as T),
    );

export default ReadonlyObjectMap_values;
