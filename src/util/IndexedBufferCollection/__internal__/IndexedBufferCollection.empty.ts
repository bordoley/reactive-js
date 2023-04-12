import { raiseWithDebugMessage } from "../../../functions.js";
import {
  BufferLike_capacity,
  CollectionLike_count,
  IndexedBufferCollectionLike,
  KeyedCollectionLike_get,
} from "../../../util.js";

const _empty: IndexedBufferCollectionLike = {
  [BufferLike_capacity]: 0,
  [KeyedCollectionLike_get](_: number): unknown {
    return raiseWithDebugMessage("buffer is empty");
  },
  [CollectionLike_count]: 0,
};

const IndexedBufferCollection_empty = <T>(): IndexedBufferCollectionLike<T> =>
  _empty as IndexedBufferCollectionLike<T>;

export default IndexedBufferCollection_empty;
