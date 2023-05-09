import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import { ReadonlyArrayContainer } from "../../containers.js";
import { pipe } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";

const ReadonlyArray_entries: ReadonlyArrayContainer.TypeClass["entries"] =
  <
    T,
    TKey extends ReadonlyArrayContainer.TKey = ReadonlyArrayContainer.TKey,
  >() =>
  (arr: ReadonlyArray<T>): EnumeratorLike<[TKey, T]> => {
    const count = arr.length;
    function* ReadonlyArrayEntries(): Iterator<[TKey, T]> {
      for (let i = 0; i < count; i++) {
        yield [i as TKey, arr[i]];
      }
    }
    return pipe(ReadonlyArrayEntries(), Iterator_enumerate());
  };

export default ReadonlyArray_entries;
