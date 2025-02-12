/// <reference types="./Observable.isMulticasted.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isPure, } from "../../../concurrent.js";
const Observable_isMulticasted = (obs) => !obs[ObservableLike_isDeferred] && obs[ObservableLike_isPure];
export default Observable_isMulticasted;
