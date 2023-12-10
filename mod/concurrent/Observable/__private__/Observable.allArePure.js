/// <reference types="./Observable.allArePure.d.ts" />

import { ObservableLike_isPure } from "../../../concurrent.js";
import { isTrue } from "../../../functions.js";
import Observable_isPure from "./Observable.isPure.js";
const Observable_allArePure = (observables => observables.map(Observable_isPure).every(isTrue));
export default Observable_allArePure;
