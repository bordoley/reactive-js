/// <reference types="./Dictionary.entries.d.ts" />

import EnumeratorFactory_map from "../../EnumeratorFactory/__internal__/EnumeratorFactory.map.js";
import { pipe } from "../../functions.js";
import { KeyedCollectionLike_get } from "../../types.js";
import Dictionary_keys from "./Dictionary.keys.js";
const Dictionary_entries = () => (dict) => pipe(dict, Dictionary_keys(), EnumeratorFactory_map(key => [
    key,
    dict[KeyedCollectionLike_get](key),
]));
export default Dictionary_entries;
