/// <reference types="./Observable.mapTo.d.ts" />

import { returns } from "../../functions.js";
import Observable_map from "./Observable.map.js";
const Observable_mapTo = (v) => Observable_map(returns(v));
export default Observable_mapTo;
