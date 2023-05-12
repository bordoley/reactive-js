/// <reference types="./Runnable.switchMap.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { compose } from "../../functions.js";
import Runnable_exhaust from "./Runnable.exhaust.js";
const Runnable_switchMap = (selector) => compose(Observable_map(selector), Runnable_exhaust());
export default Runnable_switchMap;
