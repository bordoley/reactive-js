import type * as Enumerator from "../../Enumerator.js";
import { returns } from "../../functions.js";
import Enumerator_map from "./Enumerator.map.js";

const Enumerator_mapTo: Enumerator.Signature["mapTo"] = <T>(v: T) =>
  Enumerator_map(returns(v));

export default Enumerator_mapTo;
