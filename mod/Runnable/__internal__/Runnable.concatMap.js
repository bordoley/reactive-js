/// <reference types="./Runnable.concatMap.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { compose } from "../../functions.js";
import Runnable_concatAll from "./Runnable.concatAll.js";
const Runnable_concatMap = (selector) => compose(Observable_map(selector), x => x, Runnable_concatAll());
export default Runnable_concatMap;
