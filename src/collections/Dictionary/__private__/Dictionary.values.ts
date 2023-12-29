import {
  DictionaryLike,
  DictionaryLike_get,
  DictionaryLike_keys,
} from "../../../collections.js";
import { Function1, bindMethod, pipe } from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";
import * as Enumerable from "../../Enumerable.js";

const Dictionary_values: Dictionary.Signature["values"] =
  <T, TKey extends Dictionary.TKeyBase = Dictionary.TKeyBase>() =>
  (dict: DictionaryLike<TKey, T>) =>
    pipe(
      dict[DictionaryLike_keys],
      Enumerable.map(
        bindMethod(dict, DictionaryLike_get) as Function1<TKey, T>,
      ),
    );

export default Dictionary_values;
