/// <reference types="./Computation.isSynchronous.d.ts" />

import { ComputationLike_isSynchronous, } from "../../../computations.js";
const Computation_isSynchronous = (computation) => computation[ComputationLike_isSynchronous] ?? true;
export default Computation_isSynchronous;
