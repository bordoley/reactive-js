import { newInstance } from "../../../functions.js";
import {
  CollectionLike_count,
  IndexedLike,
  IndexedLike_get,
} from "../../../util.js";

const Indexed_toReadonlyArray =
  <T>() =>
  (queue: IndexedLike<T>) => {
    const count = queue[CollectionLike_count];
    const result = newInstance<Array<T>, number>(Array, count);

    for (let i = 0; i < count; i++) {
      result[i] = queue[IndexedLike_get](i);
    }

    return result;
  };

export default Indexed_toReadonlyArray;
