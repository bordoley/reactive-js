/// <reference types="./Observable.allAreRunnable.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isRunnable, } from "../../../concurrent.js";
import { isTrue } from "../../../functions.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
const Observable_allAreRunnable = (observables => observables.map(Observable_isRunnable).every(isTrue));
export default Observable_allAreRunnable;
