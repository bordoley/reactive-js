import { hasOwn } from "../../../__internal__/Object.js";
import {
  EnumeratorLike,
  KeyedContainers,
  ReadonlyObjectMapContainer,
  ReadonlyObjectMapLike,
} from "../../../core.js";
import Iterator_enumerate from "../../../core/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";

const ReadonlyObjectMap_entries: KeyedContainers.TypeClass<ReadonlyObjectMapContainer>["entries"] =

    <
      T,
      TKey extends KeyedContainers.KeyOf<ReadonlyObjectMapContainer> = KeyedContainers.KeyOf<ReadonlyObjectMapContainer>,
    >() =>
    (obj: ReadonlyObjectMapLike<TKey, T>): EnumeratorLike<[TKey, T]> => {
      function* ReadonlyObjectMapEntries(): Iterator<[TKey, T]> {
        for (const key in obj) {
          if (hasOwn(obj, key)) {
            yield [key as TKey, obj[key as TKey] as T];
          }
        }
      }
      return pipe(ReadonlyObjectMapEntries(), Iterator_enumerate());
    };

export default ReadonlyObjectMap_entries;
