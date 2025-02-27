/// <reference types="./Observable.isMulticasted.d.ts" />

import { ComputationLike_isPure } from "../../../computations.js";
import { ObservableLike_isDeferred, } from "../../../concurrent.js";
const Observable_isMulticasted = (obs) => !obs[ObservableLike_isDeferred] && (obs[ComputationLike_isPure] ?? true);
export default Observable_isMulticasted;
