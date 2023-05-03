/// <reference types="./Dictionary.entries.d.ts" />

import { KeyedCollectionLike_get, } from "../../../containers.js";
import Enumerator_map from "../../../containers/Enumerator/__internal__/Enumerator.map.js";
import { pipe } from "../../../functions.js";
import Dictionary_keys from "./Dictionary.keys.js";
const Dictionary_entries = () => (dict) => pipe(dict, Dictionary_keys(), Enumerator_map(key => [key, dict[KeyedCollectionLike_get](key)]));
export default Dictionary_entries;
