import { hasOwn } from "../../../__internal__/Object.js";
import {
  EnumeratorLike,
  KeyedContainers,
  ReadonlyObjectMapContainer,
  ReadonlyObjectMapLike,
} from "../../../core.js";
import Iterator_enumerate from "../../../core/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";

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
