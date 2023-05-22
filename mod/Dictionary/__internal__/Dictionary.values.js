/// <reference types="./Dictionary.values.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { bindMethod, pipe } from "../../functions.js";
import { KeyedCollectionLike_get, } from "../../types.js";
import Dictionary_keys from "./Dictionary.keys.js";
const Dictionary_values = () => (dict) => pipe(dict, Dictionary_keys(), Observable_map(bindMethod(dict, KeyedCollectionLike_get)));
export default Dictionary_values;
