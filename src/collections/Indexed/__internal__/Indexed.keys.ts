import { CollectionLike_count, IndexedLike } from "../../../collections.js";
import { returns } from "../../../functions.js";
import Enumerable_range from "../../Enumerable/__internal__/Enumerable.range.js";
import type * as Indexed from "../../Indexed.js";

const Indexed_keys: Indexed.Signature["keys"] = /*@__PURE__*/ returns(
  (indexed: IndexedLike<unknown>) =>
    Enumerable_range(0, { count: indexed[CollectionLike_count] }),
) as Indexed.Signature["keys"];

export default Indexed_keys;
