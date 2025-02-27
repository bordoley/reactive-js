/// <reference types="./Observable.isPure.d.ts" />

import { ComputationLike_isPure } from "../../../computations.js";
const Observable_isPure = (obs) => obs[ComputationLike_isPure] ?? true;
export default Observable_isPure;
