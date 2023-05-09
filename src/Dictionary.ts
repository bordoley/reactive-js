import Dictionary_empty from "./Dictionary/__internal__/Dictionary.empty.js";
import Dictionary_entries from "./Dictionary/__internal__/Dictionary.entries.js";
import Dictionary_keys from "./Dictionary/__internal__/Dictionary.keys.js";
import Dictionary_values from "./Dictionary/__internal__/Dictionary.values.js";
import { DictionaryContainer, KeyedContainers } from "./containers.js";

export const empty: KeyedContainers.TypeClass<DictionaryContainer>["empty"] =
  Dictionary_empty;
export const entries: KeyedContainers.TypeClass<DictionaryContainer>["entries"] =
  Dictionary_entries;
export const keys: KeyedContainers.TypeClass<DictionaryContainer>["keys"] =
  Dictionary_keys;
export const values: KeyedContainers.TypeClass<DictionaryContainer>["values"] =
  Dictionary_values;
