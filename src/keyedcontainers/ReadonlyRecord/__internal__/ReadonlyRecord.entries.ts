import { hasOwn } from "../../../__internal__/Object.js";
import { EnumeratorLike } from "../../../containers.js";
import Iterator_enumerate from "../../../containers/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";
import {
  Entries,
  KeyOf,
  ReadonlyRecordLike,
} from "../../../keyedcontainers.js";

const ReadonlyRecord_entries: Entries<ReadonlyRecordLike>["entries"] =
  <T, TKey extends KeyOf<ReadonlyRecordLike> = KeyOf<ReadonlyRecordLike>>() =>
  (obj: ReadonlyRecordLike<TKey, T>): EnumeratorLike<[TKey, T]> => {
    function* ReadonlyRecordEntries(): Iterator<[TKey, T]> {
      for (const key in obj) {
        if (hasOwn(obj, key)) {
          yield [key as TKey, obj[key as TKey] as T];
        }
      }
    }
    return pipe(ReadonlyRecordEntries(), Iterator_enumerate());
  };

export default ReadonlyRecord_entries;
