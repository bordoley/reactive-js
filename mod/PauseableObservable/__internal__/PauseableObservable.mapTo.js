/// <reference types="./PauseableObservable.mapTo.d.ts" />

import { returns } from "../../functions.js";
import PauseableObservable_map from "./PauseableObservable.map.js";
const PauseableObservable_mapTo = (v) => PauseableObservable_map(returns(v));
export default PauseableObservable_mapTo;
