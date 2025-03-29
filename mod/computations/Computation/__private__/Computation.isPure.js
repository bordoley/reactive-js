/// <reference types="./Computation.isPure.d.ts" />

import { ComputationLike_isPure, } from "../../../computations.js";
const Computation_isPure = (computation) => computation[ComputationLike_isPure] ?? true;
export default Computation_isPure;
