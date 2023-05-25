/// <reference types="./Observable.pick.d.ts" />

import { pickUnsafe } from "../../functions.js";
import Observable_map from "./Observable.map.js";
const Observable_pick = (...keys) => Observable_map(pickUnsafe(...keys));
export default Observable_pick;
