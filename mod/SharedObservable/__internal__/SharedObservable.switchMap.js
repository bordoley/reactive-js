/// <reference types="./SharedObservable.switchMap.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { compose } from "../../functions.js";
import SharedObservable_switchAll from "./SharedObservable.switchAll.js";
const SharedObservable_switchMap = (selector) => compose(Observable_map(selector), SharedObservable_switchAll());
export default SharedObservable_switchMap;
