/// <reference types="./Indexed.toIndexed.d.ts" />

import { compose } from "../../../functions.js";
import ReadonlyArray_toIndexed from "../../ReadonlyArray/__private__/ReadonlyArray.toIndexed.js";
import Indexed_toReadonlyArray from "./Indexed.toReadonlyArray.js";
const Indexed_toIndexed = (options) => compose(Indexed_toReadonlyArray(options), ReadonlyArray_toIndexed());
export default Indexed_toIndexed;
