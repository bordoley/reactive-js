/// <reference types="./Dictionary.entries.d.ts" />

import Enumerator_map from "../../Enumerator/__internal__/Enumerator.map.js";
import { pipe } from "../../functions.js";
import { KeyedCollectionLike_get, } from "../../types.js";
import Dictionary_keys from "./Dictionary.keys.js";
const Dictionary_entries = () => (dict) => pipe(dict, Dictionary_keys(), Enumerator_map(key => [key, dict[KeyedCollectionLike_get](key)]));
export default Dictionary_entries;
