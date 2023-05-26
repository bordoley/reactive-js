import { CollectionLike_count, IndexedCollectionLike } from "../../types.js";

const Collection_getCount = (c: IndexedCollectionLike): number =>
  c[CollectionLike_count];

export default Collection_getCount;
