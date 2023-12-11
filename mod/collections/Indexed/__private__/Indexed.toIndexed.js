/// <reference types="./Indexed.toIndexed.d.ts" />

import { compose } from "../../../functions.js";
import * as ReadonlyArray from "../../ReadonlyArray.js";
import Indexed_toReadonlyArray from "./Indexed.toReadonlyArray.js";
const Indexed_toIndexed = (options) => compose(Indexed_toReadonlyArray(options), ReadonlyArray.toIndexed());
export default Indexed_toIndexed;
