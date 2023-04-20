import { Mutable } from "../../../__internal__/mixins.js";
import { DelegatingLike } from "../../../__internal__/util.js";
import { BufferLike_capacity, IndexedBufferCollectionLike } from "../../../util.js";
declare const IndexedBufferCollection_createWithMutableDelegate: <T>(options?: {
    readonly [BufferLike_capacity]?: number;
}) => Mutable<DelegatingLike<IndexedBufferCollectionLike<T>>> & IndexedBufferCollectionLike<T>;
export default IndexedBufferCollection_createWithMutableDelegate;
