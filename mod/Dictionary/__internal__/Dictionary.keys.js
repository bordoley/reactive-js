/// <reference types="./Dictionary.keys.d.ts" />

import { bindMethod } from "../../functions.js";
import { AssociativeCollectionLike_keys } from "../../types.js";
const Dictionary_keys = () => (dict) => bindMethod(dict, AssociativeCollectionLike_keys);
export default Dictionary_keys;
