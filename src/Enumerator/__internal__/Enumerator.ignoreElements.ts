import type * as Enumerator from "../../Enumerator.js";
import Enumerator_empty from "./Enumerator.empty.js";

const Enumerator_ignoreElements: Enumerator.Signature["ignoreElements"] = () =>
  Enumerator_empty;

export default Enumerator_ignoreElements;
