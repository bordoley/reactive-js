/// <reference types="./MulticastObservable.exhaustMap.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { compose } from "../../functions.js";
import MulticastObservable_exhaust from "./MulticastObservable.exhaust.js";
const MulticastObservable_exhaustMap = (selector) => compose(Observable_map(selector), MulticastObservable_exhaust());
export default MulticastObservable_exhaustMap;
