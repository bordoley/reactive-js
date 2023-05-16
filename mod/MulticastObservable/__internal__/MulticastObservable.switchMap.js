/// <reference types="./MulticastObservable.switchMap.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { compose } from "../../functions.js";
import MulticastObservable_switchAll from "./MulticastObservable.switchAll.js";
const MulticastObservable_switchMap = (selector) => compose(Observable_map(selector), MulticastObservable_switchAll());
export default MulticastObservable_switchMap;
