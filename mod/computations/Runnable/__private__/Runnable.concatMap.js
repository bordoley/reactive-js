/// <reference types="./Runnable.concatMap.d.ts" />

import { pipe } from "../../../functions.js";
import Runnable_concatAll from "./Runnable.concatAll.js";
import Runnable_map from "./Runnable.map.js";
const Runnable_concatMap = (selector) => (obs) => pipe(obs, Runnable_map(selector), Runnable_concatAll());
export default Runnable_concatMap;
