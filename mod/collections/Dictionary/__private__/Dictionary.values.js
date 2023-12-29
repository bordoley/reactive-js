/// <reference types="./Dictionary.values.d.ts" />

import { DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import { bindMethod, pipe } from "../../../functions.js";
import * as Enumerable from "../../Enumerable.js";
const Dictionary_values = () => (dict) => pipe(dict[DictionaryLike_keys], Enumerable.map(bindMethod(dict, DictionaryLike_get)));
export default Dictionary_values;
