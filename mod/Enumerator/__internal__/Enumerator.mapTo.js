/// <reference types="./Enumerator.mapTo.d.ts" />

import { returns } from "../../functions.js";
import Enumerator_map from "./Enumerator.map.js";
const Enumerator_mapTo = (v) => Enumerator_map(returns(v));
export default Enumerator_mapTo;
