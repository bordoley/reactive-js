import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../functions.js";
import {
  EnumeratorLike,
  KeyedContainers,
  ReadonlyArrayContainer,
} from "../../types.js";

const ReadonlyArray_entries: KeyedContainers.TypeClass<ReadonlyArrayContainer>["entries"] =

    <
      T,
      TKey extends KeyedContainers.KeyOf<ReadonlyArrayContainer> = KeyedContainers.KeyOf<ReadonlyArrayContainer>,
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
