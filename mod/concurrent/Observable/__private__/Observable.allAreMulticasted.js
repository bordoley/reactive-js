/// <reference types="./Observable.allAreMulticasted.d.ts" />

import { ObservableLike_isMulticasted, } from "../../../concurrent.js";
import { isTrue } from "../../../functions.js";
import Observable_isMulticasted from "./Observable.isMulticasted.js";
const Observable_allAreMulticasted = (observables => observables.map(Observable_isMulticasted).every(isTrue));
export default Observable_allAreMulticasted;
