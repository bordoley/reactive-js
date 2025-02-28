/// <reference types="./Observable.allArePure.d.ts" />

import { Array_every, Array_map } from "../../../__internal__/constants.js";
import * as Computation from "../../../computations/Computation.js";
import { ComputationLike_isPure } from "../../../computations.js";
import { isTrue } from "../../../functions.js";
const Observable_allArePure = (observables => observables[Array_map](Computation.isPure)[Array_every](isTrue));
export default Observable_allArePure;
