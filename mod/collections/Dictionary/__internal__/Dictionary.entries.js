/// <reference types="./Dictionary.entries.d.ts" />

import { KeyedLike_get } from "../../../collections.js";
import { pipe } from "../../../functions.js";
import Enumerable_map from "../../Enumerable/__internal__/Enumerable.map.js";
import Dictionary_keys from "./Dictionary.keys.js";
const Dictionary_entries = () => (dict) => pipe(dict, Dictionary_keys(), Enumerable_map(key => [
    key,
    dict[KeyedLike_get](key),
]));
export default Dictionary_entries;
