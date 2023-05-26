import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  MappingLike,
  MappingLike_selector,
} from "../../__internal__/types.js";
import { Function1, none, unsafeCast } from "../../functions.js";
import {
  CollectionLike_count,
  IndexedCollectionLike,
  KeyedCollectionLike_get,
} from "../../types.js";
import type * as IndexedCollection from "./../../IndexedCollection.js";

const IndexedCollection_map: IndexedCollection.Signature["map"] =
  /*@__PURE__*/ (<TA, TB>() => {
    const createMappingIndexedCollection = createInstanceFactory(
      mix(
        include(Delegating_mixin()),
        function MappingIndexedCollection(
          instance: IndexedCollectionLike<TB> & MappingLike<TA, TB>,
          delegate: IndexedCollectionLike<TA>,
          selector: Function1<TA, TB>,
        ): IndexedCollectionLike<TB> {
          init(
            Delegating_mixin<IndexedCollectionLike<TA>>(),
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
          get [CollectionLike_count]() {
            unsafeCast<DelegatingLike<IndexedCollectionLike>>(this);
            return this[DelegatingLike_delegate][CollectionLike_count];
          },

          [KeyedCollectionLike_get](
            this: DelegatingLike<IndexedCollectionLike<TA>> &
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
      (delegate: IndexedCollectionLike<TA>) =>
        createMappingIndexedCollection(delegate, selector);
  })();

export default IndexedCollection_map;
