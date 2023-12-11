import {
  CollectionLike_count,
  IndexedLike,
  KeyedLike_get,
} from "../../../collections.js";
import { SideEffect1, SideEffect2 } from "../../../functions.js";
import type * as Indexed from "../../Indexed.js";

const Indexed_forEach: Indexed.Signature["forEach"] =
  <T, TKey extends Indexed.TKeyBase = Indexed.TKeyBase>(
    effect: SideEffect2<T, TKey>,
  ): SideEffect1<IndexedLike<T>> =>
  indexed => {
    const count = indexed[CollectionLike_count];
    for (let i = 0; i < count; i++) {
      effect(indexed[KeyedLike_get](i), i as TKey);
    }
  };

export default Indexed_forEach;
