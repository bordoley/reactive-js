import { hasOwn } from "../../../__internal__/Object.js";
import { EnumeratorLike } from "../../../containers.js";
import Iterator_enumerate from "../../../containers/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";
import {
  KeyOf,
  ReadonlyRecordLike,
  Values,
} from "../../../keyed-containers.js";

const ReadonlyRecord_values: Values<ReadonlyRecordLike>["values"] =
  <T, TKey extends KeyOf<ReadonlyRecordLike> = KeyOf<ReadonlyRecordLike>>() =>
  (obj: ReadonlyRecordLike<T, TKey>): EnumeratorLike<T> => {
    function* ReadonlyRecordValues(): Iterator<T> {
      for (const key in obj) {
        if (hasOwn(obj, key)) {
          yield obj[key as TKey] as T;
        }
      }
    }
    return pipe(ReadonlyRecordValues(), Iterator_enumerate());
  };

export default ReadonlyRecord_values;
