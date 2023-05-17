import type * as Dictionary from "../../Dictionary.js";
import ReadonlyObjectMap_fromEntries from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.fromEntries.js";
import { compose } from "../../functions.js";
import Dictionary_entries from "./Dictionary.entries.js";

const Dictionary_toReadonlyObjectMap: Dictionary.Signature["toReadonlyObjectMap"] =
  (() =>
    compose(
      Dictionary_entries(),
      ReadonlyObjectMap_fromEntries(),
    )) as Dictionary.Signature["toReadonlyObjectMap"];

export default Dictionary_toReadonlyObjectMap;
