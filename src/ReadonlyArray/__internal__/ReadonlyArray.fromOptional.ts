import { Optional, isSome } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_fromOptional: ReadonlyArray.Signature["fromOptional"] =
  <T>() =>
  (optional: Optional<T>) =>
    isSome(optional) ? [optional] : [];

export default ReadonlyArray_fromOptional;
