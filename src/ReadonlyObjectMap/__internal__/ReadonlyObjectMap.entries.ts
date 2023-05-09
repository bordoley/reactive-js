import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import { hasOwn } from "../../__internal__/Object.js";
import { ReadonlyObjectMapContainer } from "../../containers.js";
import { pipe } from "../../functions.js";
import { EnumeratorLike, ReadonlyObjectMapLike } from "../../types.js";

const ReadonlyObjectMap_entries: ReadonlyObjectMapContainer.TypeClass["entries"] =

    <
      T,
      TKey extends ReadonlyObjectMapContainer.TKey = ReadonlyObjectMapContainer.TKey,
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
