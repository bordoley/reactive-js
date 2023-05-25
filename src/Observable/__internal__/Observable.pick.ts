import type * as Observable from "../../Observable.js";
import { pickUnsafe } from "../../functions.js";
import Observable_map from "./Observable.map.js";

const Observable_pick: Observable.Signature["pick"] = (
  ...keys: (string | number | symbol)[]
) => Observable_map(pickUnsafe(...keys));

export default Observable_pick;
