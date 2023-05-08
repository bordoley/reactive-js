import {
  EnumeratorLike,
  KeyedContainer,
  ReadonlyArrayContainer,
} from "../../../core.js";
import Iterator_enumerate from "../../../core/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";

const ReadonlyArray_entries: KeyedContainer.TypeClass<ReadonlyArrayContainer>["entries"] =

    <
      T,
      TKey extends KeyedContainer.KeyOf<ReadonlyArrayContainer> = KeyedContainer.KeyOf<ReadonlyArrayContainer>,
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
