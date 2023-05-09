import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import { hasOwn } from "../../__internal__/Object.js";
import {
  KeyedContainers,
  ReadonlyObjectMapContainer,
} from "../../containers.js";
import { pipe } from "../../functions.js";
import { EnumeratorLike, ReadonlyObjectMapLike } from "../../types.js";

const ReadonlyObjectMap_keys: KeyedContainers.TypeClass<ReadonlyObjectMapContainer>["keys"] =

    <
      TKey extends KeyedContainers.KeyOf<ReadonlyObjectMapContainer> = KeyedContainers.KeyOf<ReadonlyObjectMapContainer>,
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
