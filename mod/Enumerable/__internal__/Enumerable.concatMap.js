/// <reference types="./Enumerable.concatMap.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { compose, identity } from "../../functions.js";
import Enumerable_concatAll from "./Enumerable.concatAll.js";
const Enumerable_concatMap = (selector) => compose((identity), Observable_map(selector), Enumerable_concatAll());
export default Enumerable_concatMap;
