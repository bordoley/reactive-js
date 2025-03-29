import { DictionaryLike } from "../../../collections.js";
import { pipe, returns } from "../../../functions.js";
import type * as Dictionary from "../../Dictionary.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
import Dictionary_entries from "./Dictionary.entries.js";

const Dictionary_toReadonlyMap: Dictionary.Signature["toReadonlyMap"] =
  /*@__PURE__*/ returns((dict: DictionaryLike) =>
    pipe(dict, Dictionary_entries<any, any>(), ReadonlyMap.fromEntries()),
  );

export default Dictionary_toReadonlyMap;
