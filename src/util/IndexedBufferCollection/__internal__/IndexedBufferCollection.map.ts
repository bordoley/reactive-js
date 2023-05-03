import {
  MappingLike,
  MappingLike_selector,
} from "../../../__internal__/containers.js";
import {
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
import {
  CollectionLike_count,
  KeyedCollectionLike_get,
} from "../../../containers.js";
import { Function1, none, unsafeCast } from "../../../functions.js";
import {
  BufferLike_capacity,
  IndexedBufferCollectionLike,
} from "../../../util.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";

const IndexedBufferCollection_map: <TA, TB>(
  selector: Function1<TA, TB>,
) => Function1<
  IndexedBufferCollectionLike<TA>,
  IndexedBufferCollectionLike<TB>
> = /*@__PURE__*/ (<TA, TB>() => {
  const createMappingIndexedBufferCollection = createInstanceFactory(
    mix(
      include(Delegating_mixin()),
      function MappingIndexedBufferCollection(
        instance: IndexedBufferCollectionLike<TB> & MappingLike<TA, TB>,
        delegate: IndexedBufferCollectionLike<TA>,
        selector: Function1<TA, TB>,
      ): IndexedBufferCollectionLike<TB> {
        init(
          Delegating_mixin<IndexedBufferCollectionLike<TA>>(),
          instance,
          delegate,
        );

        instance[MappingLike_selector] = selector;

        return instance;
      },
      props<MappingLike<TA, TB>>({
        [MappingLike_selector]: none,
      }),
      {
        get [BufferLike_capacity]() {
          unsafeCast<DelegatingLike<IndexedBufferCollectionLike>>(this);
          return this[DelegatingLike_delegate][BufferLike_capacity];
        },

        get [CollectionLike_count]() {
          unsafeCast<DelegatingLike<IndexedBufferCollectionLike>>(this);
          return this[DelegatingLike_delegate][CollectionLike_count];
        },

        [KeyedCollectionLike_get](
          this: DelegatingLike<IndexedBufferCollectionLike<TA>> &
            MappingLike<TA, TB>,
          index: number,
        ): TB {
          return this[MappingLike_selector](
            this[DelegatingLike_delegate][KeyedCollectionLike_get](index),
          );
        },
      },
    ),
  );

  return (selector: Function1<TA, TB>) =>
    (delegate: IndexedBufferCollectionLike<TA>) =>
      createMappingIndexedBufferCollection(delegate, selector);
})();

export default IndexedBufferCollection_map;
