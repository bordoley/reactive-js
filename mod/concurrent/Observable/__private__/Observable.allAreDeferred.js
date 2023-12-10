/// <reference types="./Observable.allAreDeferred.d.ts" />

import { ObservableLike_isDeferred, } from "../../../concurrent.js";
import { isTrue } from "../../../functions.js";
import Observable_isDeferred from "./Observable.isDeferred.js";
const Observable_allAreDeferred = (observables => observables.map(Observable_isDeferred).every(isTrue));
export default Observable_allAreDeferred;
