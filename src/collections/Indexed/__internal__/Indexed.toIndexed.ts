import { compose } from "../../../functions.js";
import type * as Indexed from "../../Indexed.js";
import ReadonlyArray_toIndexed from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexed.js";
import Indexed_toReadonlyArray from "./Indexed.toReadonlyArray.js";

const Indexed_toIndexed: Indexed.Signature["toIndexed"] = <T>(options?: {
  readonly count?: number;
  readonly start?: number;
}) => compose(Indexed_toReadonlyArray<T>(options), ReadonlyArray_toIndexed());

export default Indexed_toIndexed;
