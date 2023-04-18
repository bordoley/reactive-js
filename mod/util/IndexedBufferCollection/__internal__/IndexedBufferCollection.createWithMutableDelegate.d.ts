import { Mutable } from "../../../__internal__/mixins.js";
import { DelegatingLike } from "../../../__internal__/util.js";
import { IndexedBufferCollectionLike } from "../../../util.js";
declare const IndexedBufferCollection_createWithMutableDelegate: <T>(options?: {
    readonly replay?: number;
}) => Mutable<DelegatingLike<IndexedBufferCollectionLike<T>>> & IndexedBufferCollectionLike<T>;
export default IndexedBufferCollection_createWithMutableDelegate;
