import { Mutable } from "../../../__internal__/mixins.js";
import { DelegatingLike } from "../../../__internal__/util.js";
import { IndexedBufferCollectionLike } from "../../../util.js";
declare const IndexedBufferCollection_createWithMutableDelegate: <T>() => Mutable<DelegatingLike<IndexedBufferCollectionLike<T>>> & IndexedBufferCollectionLike<T>;
export default IndexedBufferCollection_createWithMutableDelegate;
