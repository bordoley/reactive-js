/// <reference types="./Indexed.toDictionary.d.ts" />

import { compose } from "../../../functions.js";
import * as ReadonlyArray from "../../ReadonlyArray.js";
import Indexed_toReadonlyArray from "./Indexed.toReadonlyArray.js";
const Indexed_toDictionary = () => compose(Indexed_toReadonlyArray(), ReadonlyArray.toDictionary());
export default Indexed_toDictionary;
