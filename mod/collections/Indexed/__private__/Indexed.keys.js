/// <reference types="./Indexed.keys.d.ts" />

import { CollectionLike_count } from "../../../collections.js";
import { returns } from "../../../functions.js";
import * as Enumerable from "../../Enumerable.js";
const Indexed_keys = /*@__PURE__*/ returns((indexed) => Enumerable.range(0, { count: indexed[CollectionLike_count] }));
export default Indexed_keys;
