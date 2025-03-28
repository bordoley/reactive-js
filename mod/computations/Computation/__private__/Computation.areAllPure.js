/// <reference types="./Computation.areAllPure.d.ts" />

import Computation_isPure from "./Computation.isPure.js";
const Computation_areAllPure = (computations) => computations.every(Computation_isPure);
export default Computation_areAllPure;
