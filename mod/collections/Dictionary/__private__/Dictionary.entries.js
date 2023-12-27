/// <reference types="./Dictionary.entries.d.ts" />

import { DictionaryLike_get } from "../../../collections.js";
import { pipe, tuple } from "../../../functions.js";
import * as Enumerable from "../../Enumerable.js";
import Dictionary_keys from "./Dictionary.keys.js";
const Dictionary_entries = () => (dict) => pipe(dict, Dictionary_keys(), Enumerable.map(key => tuple(key, dict[DictionaryLike_get](key))));
export default Dictionary_entries;
