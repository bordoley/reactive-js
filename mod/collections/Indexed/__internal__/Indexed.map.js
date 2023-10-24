/// <reference types="./Indexed.map.d.ts" />

import { compose } from "../../../functions.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import ReadonlyArray_toIndexed from "../../ReadonlyArray/__internal__/ReadonlyArray.toIndexed.js";
import Indexed_toReadonlyArray from "./Indexed.toReadonlyArray.js";
const Indexed_map = (mapper) => compose(Indexed_toReadonlyArray(), ReadonlyArray_map(mapper), ReadonlyArray_toIndexed());
export default Indexed_map;
