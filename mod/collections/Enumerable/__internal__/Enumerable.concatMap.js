/// <reference types="./Enumerable.concatMap.d.ts" />

import { compose, identity } from "../../../functions.js";
import Enumerable_concatAll from "./Enumerable.concatAll.js";
import Enumerable_map from "./Enumerable.map.js";
const Enumerable_concatMap = (selector) => compose((identity), Enumerable_map(selector), Enumerable_concatAll());
export default Enumerable_concatMap;
