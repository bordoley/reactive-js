/// <reference types="./SharedObservable.exhaustMap.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { compose } from "../../functions.js";
import SharedObservable_exhaust from "./SharedObservable.exhaust.js";
const SharedObservable_exhaustMap = (selector) => compose(Observable_map(selector), SharedObservable_exhaust());
export default SharedObservable_exhaustMap;
