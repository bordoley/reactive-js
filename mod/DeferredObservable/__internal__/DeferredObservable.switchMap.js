/// <reference types="./DeferredObservable.switchMap.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { compose } from "../../functions.js";
import DeferredObservable_switchAll from "./DeferredObservable.switchAll.js";
const DeferredObservable_switchMap = (selector) => compose(Observable_map(selector), DeferredObservable_switchAll());
export default DeferredObservable_switchMap;
