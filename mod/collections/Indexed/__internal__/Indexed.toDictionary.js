/// <reference types="./Indexed.toDictionary.d.ts" />

import { compose } from "../../../functions.js";
import ReadonlyArray_toDictionary from "../../ReadonlyArray/__internal__/ReadonlyArray.toDictionary.js";
import Indexed_toReadonlyArray from "./Indexed.toReadonlyArray.js";
const Indexed_toDictionary = () => compose(Indexed_toReadonlyArray(), ReadonlyArray_toDictionary());
export default Indexed_toDictionary;
