/// <reference types="./DeferredObservable.switchMap.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { compose } from "../../functions.js";
import DeferredObservable_exhaust from "./DeferredObservable.exhaust.js";
const DeferredObservable_switchMap = (selector) => compose(Observable_map(selector), DeferredObservable_exhaust());
export default DeferredObservable_switchMap;
