/// <reference types="./Computation.areAllSynchronous.d.ts" />

import { ComputationLike_isSynchronous, } from "../../../computations.js";
import Computation_isSynchronous from "./Computation.isSynchronous.js";
const Computation_areAllSynchronous = (computations) => computations.every(Computation_isSynchronous);
export default Computation_areAllSynchronous;
