/// <reference types="./Computation.isDeferred.d.ts" />

import { ComputationLike_isDeferred, } from "../../../computations.js";
const Computation_isDeferred = (computation) => computation[ComputationLike_isDeferred] ?? true;
export default Computation_isDeferred;
