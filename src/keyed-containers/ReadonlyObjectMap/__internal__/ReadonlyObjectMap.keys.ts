import { hasOwn } from "../../../__internal__/Object.js";
import { EnumeratorLike } from "../../../containers.js";
import Iterator_enumerate from "../../../containers/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";
import {
  KeyOf,
  Keys,
  ReadonlyObjectMapContainer,
  ReadonlyObjectMapLike,
} from "../../../keyed-containers.js";

const ReadonlyObjectMap_keys: Keys<ReadonlyObjectMapContainer>["keys"] =
  <
    TKey extends KeyOf<ReadonlyObjectMapContainer> = KeyOf<ReadonlyObjectMapContainer>,
  >() =>
  (obj: ReadonlyObjectMapLike<TKey, unknown>): EnumeratorLike<TKey> => {
    function* ReadonlyObjectMapKeys(): Iterator<TKey> {
      for (const key in obj) {
        if (hasOwn(obj, key)) {
          yield key as TKey;
        }
      }
    }
    return pipe(ReadonlyObjectMapKeys(), Iterator_enumerate());
  };

export default ReadonlyObjectMap_keys;
