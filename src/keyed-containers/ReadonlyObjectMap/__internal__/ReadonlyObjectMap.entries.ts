import { hasOwn } from "../../../__internal__/Object.js";
import { EnumeratorLike } from "../../../containers.js";
import Iterator_enumerate from "../../../containers/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";
import {
  Entries,
  KeyOf,
  ReadonlyObjectMapContainerLike,
  ReadonlyObjectMapLike,
} from "../../../keyed-containers.js";

const ReadonlyObjectMap_entries: Entries<ReadonlyObjectMapContainerLike>["entries"] =

    <
      T,
      TKey extends KeyOf<ReadonlyObjectMapContainerLike> = KeyOf<ReadonlyObjectMapContainerLike>,
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
