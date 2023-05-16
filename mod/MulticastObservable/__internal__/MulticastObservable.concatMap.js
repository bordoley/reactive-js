/// <reference types="./MulticastObservable.concatMap.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { compose } from "../../functions.js";
import MulticastObservable_concatAll from "./MulticastObservable.concatAll.js";
const MulticastObservable_concatMap = (selector) => compose(Observable_map(selector), MulticastObservable_concatAll());
export default MulticastObservable_concatMap;
