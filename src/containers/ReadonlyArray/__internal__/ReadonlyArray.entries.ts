import {
  EnumeratorLike,
  KeyOf,
  KeyedContainer,
  ReadonlyArrayContainer,
} from "../../../containers.js";
import Iterator_enumerate from "../../../containers/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";

const ReadonlyArray_entries: KeyedContainer.Entries<ReadonlyArrayContainer>["entries"] =

    <
      T,
      TKey extends KeyOf<ReadonlyArrayContainer> = KeyOf<ReadonlyArrayContainer>,
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
