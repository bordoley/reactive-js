import { EnumeratorLike } from "../../../containers.js";
import Iterator_enumerate from "../../../containers/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";
import {
  Entries,
  KeyOf,
  ReadonlyArrayContainerLike,
} from "../../../keyed-containers.js";

const ReadonlyArray_entries: Entries<ReadonlyArrayContainerLike>["entries"] =
  <
    T,
    TKey extends KeyOf<ReadonlyArrayContainerLike> = KeyOf<ReadonlyArrayContainerLike>,
  >() =>
  (arr: ReadonlyArrayContainerLike<T>): EnumeratorLike<[TKey, T]> => {
    const count = arr.length;
    function* ReadonlyArrayEntries(): Iterator<[TKey, T]> {
      for (let i = 0; i < count; i++) {
        yield [i as TKey, arr[i]];
      }
    }
    return pipe(ReadonlyArrayEntries(), Iterator_enumerate());
  };

export default ReadonlyArray_entries;
