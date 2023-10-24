import { Function2, compose } from "../../../functions.js";
import type * as Indexed from "../../Indexed.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import ReadonlyArray_toIndexed from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexed.js";
import Indexed_toReadonlyArray from "./Indexed.toReadonlyArray.js";

const Indexed_map: Indexed.Signature["map"] = <TA, TB, TKey extends number>(
  mapper: Function2<TA, TKey, TB>,
) =>
  compose(
    Indexed_toReadonlyArray<TA>(),
    ReadonlyArray_map<TA, TB, TKey>(mapper),
    ReadonlyArray_toIndexed(),
  );

export default Indexed_map;
