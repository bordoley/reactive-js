/// <reference types="./DeferredObservable.concatMap.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { compose } from "../../functions.js";
import DeferredObservable_concatAll from "./DeferredObservable.concatAll.js";
const DeferredObservable_concatMap = (selector) => compose(Observable_map(selector), DeferredObservable_concatAll());
export default DeferredObservable_concatMap;
