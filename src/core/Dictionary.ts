import { DictionaryContainer, KeyedContainer } from "../core.js";
import Dictionary_empty from "./Dictionary/__internal__/Dictionary.empty.js";
import Dictionary_entries from "./Dictionary/__internal__/Dictionary.entries.js";
import Dictionary_keys from "./Dictionary/__internal__/Dictionary.keys.js";
import Dictionary_values from "./Dictionary/__internal__/Dictionary.values.js";

export const empty: KeyedContainer.TypeClass<DictionaryContainer>["empty"] =
  Dictionary_empty;
export const entries: KeyedContainer.TypeClass<DictionaryContainer>["entries"] =
  Dictionary_entries;
export const keys: KeyedContainer.TypeClass<DictionaryContainer>["keys"] =
  Dictionary_keys;
export const values: KeyedContainer.TypeClass<DictionaryContainer>["values"] =
  Dictionary_values;
