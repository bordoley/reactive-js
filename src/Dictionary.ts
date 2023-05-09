import Dictionary_empty from "./Dictionary/__internal__/Dictionary.empty.js";
import Dictionary_entries from "./Dictionary/__internal__/Dictionary.entries.js";
import Dictionary_keys from "./Dictionary/__internal__/Dictionary.keys.js";
import Dictionary_values from "./Dictionary/__internal__/Dictionary.values.js";
import { DictionaryContainer } from "./containers.js";

export const empty: DictionaryContainer.TypeClass["empty"] = Dictionary_empty;
export const entries: DictionaryContainer.TypeClass["entries"] =
  Dictionary_entries;
export const keys: DictionaryContainer.TypeClass["keys"] = Dictionary_keys;
export const values: DictionaryContainer.TypeClass["values"] =
  Dictionary_values;
