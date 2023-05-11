/// <reference types="./SharedObservable.concatMap.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { compose } from "../../functions.js";
import SharedObservable_concatAll from "./SharedObservable.concatAll.js";
const SharedObservable_concatMap = (selector) => compose(Observable_map(selector), SharedObservable_concatAll());
export default SharedObservable_concatMap;
