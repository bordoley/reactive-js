import { newInstance } from "../../functions.js";
import {
  CollectionLike_count,
  IndexedCollectionLike,
  KeyedCollectionLike_get,
} from "../../types.js";

const Indexed_toReadonlyArray =
  <T>() =>
  (queue: IndexedCollectionLike<T>) => {
    const count = queue[CollectionLike_count];
    const result = newInstance<Array<T>, number>(Array, count);

    for (let i = 0; i < count; i++) {
      result[i] = queue[KeyedCollectionLike_get](i);
    }

    return result;
  };

export default Indexed_toReadonlyArray;
