/// <reference types="./Indexed.map.d.ts" />

import { compose } from "../../../functions.js";
import * as ReadonlyArray from "../../ReadonlyArray.js";
import Indexed_toReadonlyArray from "./Indexed.toReadonlyArray.js";
const Indexed_map = (mapper) => compose(Indexed_toReadonlyArray(), ReadonlyArray.map(mapper), ReadonlyArray.toIndexed());
export default Indexed_map;
