import { Empty, Entries, Keys, Values } from "../keyed-containers.js";
import { DictionaryContainer } from "../util.js";
import Dictionary_empty from "./Dictionary/__internal__/Dictionary.empty.js";
import Dictionary_entries from "./Dictionary/__internal__/Dictionary.entries.js";
import Dictionary_keys from "./Dictionary/__internal__/Dictionary.keys.js";
import Dictionary_values from "./Dictionary/__internal__/Dictionary.values.js";

export const empty: Empty<DictionaryContainer>["empty"] = Dictionary_empty;
export const entries: Entries<DictionaryContainer>["entries"] =
  Dictionary_entries;
export const keys: Keys<DictionaryContainer>["keys"] = Dictionary_keys;
export const values: Values<DictionaryContainer>["values"] = Dictionary_values;
