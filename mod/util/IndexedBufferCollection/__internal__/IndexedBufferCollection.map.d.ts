import { Function1 } from "../../../functions.js";
import { IndexedBufferCollectionLike } from "../../../util.js";
declare const IndexedBufferCollection_map: <TA, TB>(selector: Function1<TA, TB>) => Function1<IndexedBufferCollectionLike<TA>, IndexedBufferCollectionLike<TB>>;
export default IndexedBufferCollection_map;
