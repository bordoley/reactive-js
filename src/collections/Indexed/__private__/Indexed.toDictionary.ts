import { compose } from "../../../functions.js";
import type * as Indexed from "../../Indexed.js";
import * as ReadonlyArray from "../../ReadonlyArray.js";
import Indexed_toReadonlyArray from "./Indexed.toReadonlyArray.js";

const Indexed_toDictionary: Indexed.Signature["toDictionary"] = <
  T,
  TKey extends number,
>() =>
  compose(Indexed_toReadonlyArray<T>(), ReadonlyArray.toDictionary<T, TKey>());

export default Indexed_toDictionary;
