import type * as Enumerator from "../../Enumerator.js";
import { isEqualTo } from "../../functions.js";
import Enumerator_someSatisfy from "./Enumerator.someSatisfy.js";

const Enumerator_contains: Enumerator.Signature["contains"] = (
  value,
  options,
) => Enumerator_someSatisfy(isEqualTo(value, options));

export default Enumerator_contains;
