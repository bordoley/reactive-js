import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../../__internal__/util.js";
import { unsafeCast } from "../../../functions.js";
import {
  BufferLike_capacity,
  CollectionLike_count,
  IndexedBufferCollectionLike,
  KeyedCollectionLike_get,
} from "../../../util.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import IndexedBufferCollection_empty from "./IndexedBufferCollection.empty.js";

const IndexedBufferCollection_createWithMutableDelegate: <T>() => Mutable<
  DelegatingLike<IndexedBufferCollectionLike<T>>
> &
  IndexedBufferCollectionLike<T> = (<T>() =>
  createInstanceFactory(
    mix(
      include(Delegating_mixin()),
      function MutableDelegatingIndexedBufferCollection(
        instance: IndexedBufferCollectionLike<T>,
      ): Mutable<DelegatingLike<IndexedBufferCollectionLike<T>>> &
        IndexedBufferCollectionLike<T> {
        init(
          Delegating_mixin<IndexedBufferCollectionLike<T>>(),
          instance,
          IndexedBufferCollection_empty(),
        );

        return instance;
      },
      props({}),
      {
        get [BufferLike_capacity]() {
          unsafeCast<DelegatingLike<IndexedBufferCollectionLike<T>>>(this);
          return this[DelegatingLike_delegate][BufferLike_capacity];
        },

        get [CollectionLike_count]() {
          unsafeCast<DelegatingLike<IndexedBufferCollectionLike<T>>>(this);
          return this[DelegatingLike_delegate][CollectionLike_count];
        },

        [KeyedCollectionLike_get](
          this: DelegatingLike<IndexedBufferCollectionLike<T>>,
          index: number,
        ): T {
          return this[DelegatingLike_delegate][KeyedCollectionLike_get](index);
        },
      },
    ),
  ))();

export default IndexedBufferCollection_createWithMutableDelegate;
