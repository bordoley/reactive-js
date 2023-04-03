import { EnumeratorLike } from "../../../containers.js";
import Iterator_enumerate from "../../../containers/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";
import { Entries, KeyOf, ReadonlyArrayLike } from "../../../keyedcontainers.js";

const ReadonlyArray_entries: Entries<ReadonlyArrayLike>["entries"] =
  <T, TKey extends KeyOf<ReadonlyArrayLike> = KeyOf<ReadonlyArrayLike>>() =>
  (arr: ReadonlyArrayLike<T>): EnumeratorLike<[TKey, T]> => {
    const count = arr.length;
    function* ReadonlyArrayEntries(): Iterator<[TKey, T]> {
      for (let i = 0; i < count; i++) {
        yield [i as TKey, arr[i]];
      }
    }
    return pipe(ReadonlyArrayEntries(), Iterator_enumerate());
  };

export default ReadonlyArray_entries;
