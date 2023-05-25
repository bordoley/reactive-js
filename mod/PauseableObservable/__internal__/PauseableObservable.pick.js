/// <reference types="./PauseableObservable.pick.d.ts" />

import { pickUnsafe } from "../../functions.js";
import PauseableObservable_map from "./PauseableObservable.map.js";
const PauseableObservable_pick = (...keys) => PauseableObservable_map(pickUnsafe(...keys));
export default PauseableObservable_pick;
