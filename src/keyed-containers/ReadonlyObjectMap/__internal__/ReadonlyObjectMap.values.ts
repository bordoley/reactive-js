import { hasOwn } from "../../../__internal__/Object.js";
import { EnumeratorLike } from "../../../containers.js";
import Iterator_enumerate from "../../../containers/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";
import {
  KeyOf,
  ReadonlyObjectMapLike,
  Values,
} from "../../../keyed-containers.js";

const ReadonlyObjectMap_values: Values<ReadonlyObjectMapLike>["values"] =
  <
    T,
    TKey extends KeyOf<ReadonlyObjectMapLike> = KeyOf<ReadonlyObjectMapLike>,
  >() =>
  (obj: ReadonlyObjectMapLike<T, TKey>): EnumeratorLike<T> => {
    function* ReadonlyObjectMapValues(): Iterator<T> {
      for (const key in obj) {
        if (hasOwn(obj, key)) {
          yield obj[key as TKey] as T;
        }
      }
    }
    return pipe(ReadonlyObjectMapValues(), Iterator_enumerate());
  };

export default ReadonlyObjectMap_values;
