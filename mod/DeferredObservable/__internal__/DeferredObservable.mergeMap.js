/// <reference types="./DeferredObservable.mergeMap.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { compose } from "../../functions.js";
import DeferredObservable_mergeAll from "./DeferredObservable.mergeAll.js";
const DeferredObservable_mergeMap = (selector, options) => compose(Observable_map(selector), DeferredObservable_mergeAll(options));
export default DeferredObservable_mergeMap;
