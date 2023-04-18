import { raiseWithDebugMessage } from "../../../functions.js";
import {
  BufferLike_capacity,
  CollectionLike_count,
  IndexedBufferCollectionLike,
  KeyedCollectionLike_get,
} from "../../../util.js";

const _empty: IndexedBufferCollectionLike = {
  [BufferLike_capacity]: 0,
  [CollectionLike_count]: 0,
  [KeyedCollectionLike_get](_: number): unknown {
    return raiseWithDebugMessage("buffer is empty");
  },
};

const IndexedBufferCollection_empty = <T>(options?: {
  readonly replay?: number;
}): IndexedBufferCollectionLike<T> => {
  const { replay = 0 } = options ?? {};
  return (
    replay === 0
      ? _empty
      : {
          [BufferLike_capacity]: replay,
          [CollectionLike_count]: 0,
          [KeyedCollectionLike_get]: _empty[KeyedCollectionLike_get],
        }
  ) as IndexedBufferCollectionLike<T>;
};

export default IndexedBufferCollection_empty;
