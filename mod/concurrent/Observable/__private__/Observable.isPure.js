/// <reference types="./Observable.isPure.d.ts" />

import { ObservableLike_isPure, } from "../../../concurrent.js";
const Observable_isPure = (obs) => obs[ObservableLike_isPure];
export default Observable_isPure;
