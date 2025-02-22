/// <reference types="./Deferable.concatMap.d.ts" />

import { pipe } from "../../../functions.js";
import Deferable_concatAll from "./Deferable.concatAll.js";
import Deferable_map from "./Deferable.map.js";
const Deferable_concatMap = (selector) => (obs) => pipe(obs, Deferable_map(selector), Deferable_concatAll());
export default Deferable_concatMap;
