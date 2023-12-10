import { CollectionLike_count, IndexedLike } from "../../../collections.js";
import { newInstance } from "../../../functions.js";
import type * as Indexed from "../../Indexed.js";

const Indexed_keySet: Indexed.Signature["keySet"] =
  <TKey extends number>() =>
  (indexed: IndexedLike) => {
    const result = newInstance(Set<TKey>);
    const count = indexed[CollectionLike_count];

    for (let i = 0; i < count; i++) {
      result.add(i as TKey);
    }

    return result;
  };

export default Indexed_keySet;
