/// <reference types="./Dictionary.keys.d.ts" />

import { DictionaryLike_keys } from "../../../collections.js";
import { pick, returns } from "../../../functions.js";
const Dictionary_keys = /*@__PURE__*/ returns(pick(DictionaryLike_keys));
export default Dictionary_keys;
