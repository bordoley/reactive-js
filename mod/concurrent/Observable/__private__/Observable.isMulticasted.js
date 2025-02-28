/// <reference types="./Observable.isMulticasted.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, } from "../../../computations.js";
const Observable_isMulticasted = (obs) => !obs[ComputationLike_isDeferred] && (obs[ComputationLike_isPure] ?? true);
export default Observable_isMulticasted;
