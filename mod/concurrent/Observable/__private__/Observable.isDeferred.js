/// <reference types="./Observable.isDeferred.d.ts" />

import { ComputationLike_isDeferred } from "../../../computations.js";
const Observable_isDeferred = (obs) => obs[ComputationLike_isDeferred] ?? true;
export default Observable_isDeferred;
