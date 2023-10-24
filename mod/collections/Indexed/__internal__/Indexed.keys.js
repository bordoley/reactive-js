/// <reference types="./Indexed.keys.d.ts" />

import { CollectionLike_count } from "../../../collections.js";
import { returns } from "../../../functions.js";
import Enumerable_range from "../../Enumerable/__internal__/Enumerable.range.js";
const Indexed_keys = /*@__PURE__*/ returns((indexed) => Enumerable_range(0, { count: indexed[CollectionLike_count] }));
export default Indexed_keys;
