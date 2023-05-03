import {
  CollectionLike_count,
  KeyedCollectionLike_get,
} from "../../../containers.js";
import { raiseWithDebugMessage } from "../../../functions.js";
import {
  BufferLike_capacity,
  IndexedBufferCollectionLike,
} from "../../../util.js";

const _empty: IndexedBufferCollectionLike = {
  [BufferLike_capacity]: 0,
  [CollectionLike_count]: 0,
  [KeyedCollectionLike_get](_: number): unknown {
    return raiseWithDebugMessage("buffer is empty");
  },
};

const IndexedBufferCollection_empty = <T>(options?: {
  readonly [BufferLike_capacity]?: number;
}): IndexedBufferCollectionLike<T> => {
  const { [BufferLike_capacity]: capacity = 0 } = options ?? {};
  return (
    capacity === 0
      ? _empty
      : {
          [BufferLike_capacity]: capacity,
          [CollectionLike_count]: 0,
          [KeyedCollectionLike_get]: _empty[KeyedCollectionLike_get],
        }
  ) as IndexedBufferCollectionLike<T>;
};

export default IndexedBufferCollection_empty;
