/// <reference types="./Dictionary.values.d.ts" />

import { KeyedCollectionLike_get, } from "../../../containers.js";
import Enumerator_map from "../../../containers/Enumerator/__internal__/Enumerator.map.js";
import { pipe } from "../../../functions.js";
import Dictionary_keys from "./Dictionary.keys.js";
const Dictionary_values = () => (dict) => pipe(dict, Dictionary_keys(), Enumerator_map(key => dict[KeyedCollectionLike_get](key)));
export default Dictionary_values;
