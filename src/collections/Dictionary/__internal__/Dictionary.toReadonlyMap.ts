import { DictionaryLike } from "../../../collections.js";
import { pipe } from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";
import ReadonlyMap_fromEntries from "../../ReadonlyMap/__internal__/ReadonlyMap.fromEntries.js";
import Dictionary_entries from "./Dictionary.entries.js";

const Dictionary_toReadonlyMap: Dictionary.Signature["toReadonlyMap"] =
  <T, TKey extends Dictionary.TKeyBase>() =>
  (dict: DictionaryLike<TKey, T>) =>
    pipe(dict, Dictionary_entries(), ReadonlyMap_fromEntries());

export default Dictionary_toReadonlyMap;
