/// <reference types="./MulticastObservable.mergeMap.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { compose } from "../../functions.js";
import MulticastObservable_mergeAll from "./MulticastObservable.mergeAll.js";
const MulticastObservable_mergeMap = (selector, options) => compose(Observable_map(selector), MulticastObservable_mergeAll(options));
export default MulticastObservable_mergeMap;
