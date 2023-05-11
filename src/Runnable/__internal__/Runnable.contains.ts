import type * as Runnable from "../../Runnable.js";
import { isEqualTo } from "../../functions.js";
import Runnable_someSatisfy from "./Runnable.someSatisfy.js";

const Runnable_contains: Runnable.Signature["contains"] = (value, options) =>
  Runnable_someSatisfy(isEqualTo(value, options));

export default Runnable_contains;
