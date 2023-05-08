import { DelegatingLike } from "../../../__internal__/core.js";
import { Mutable } from "../../../__internal__/mixins.js";
import { BufferLike_capacity, IndexedBufferCollectionLike } from "../../../core.js";
declare const IndexedBufferCollection_createWithMutableDelegate: <T>(options?: {
    readonly [BufferLike_capacity]?: number;
}) => Mutable<DelegatingLike<IndexedBufferCollectionLike<T>>> & IndexedBufferCollectionLike<T>;
export default IndexedBufferCollection_createWithMutableDelegate;
