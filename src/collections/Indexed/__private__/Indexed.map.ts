import { Function2, compose } from "../../../functions.js";
import type * as Indexed from "../../Indexed.js";
import * as ReadonlyArray from "../../ReadonlyArray.js";
import Indexed_toReadonlyArray from "./Indexed.toReadonlyArray.js";

const Indexed_map: Indexed.Signature["map"] = <TA, TB, TKey extends number>(
  mapper: Function2<TA, TKey, TB>,
) =>
  compose(
    Indexed_toReadonlyArray<TA>(),
    ReadonlyArray.map<TA, TB, TKey>(mapper),
    ReadonlyArray.toIndexed(),
  );

export default Indexed_map;
