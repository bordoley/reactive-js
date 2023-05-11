/// <reference types="./SharedObservable.mergeMap.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { compose } from "../../functions.js";
import SharedObservable_mergeAll from "./SharedObservable.mergeAll.js";
const SharedObservable_mergeMap = (selector, options) => compose(Observable_map(selector), SharedObservable_mergeAll(options));
export default SharedObservable_mergeMap;
