/// <reference types="./Observable.allAreMulticasted.d.ts" />

import { Array_every, Array_map } from "../../../__internal__/constants.js";
import * as Computation from "../../../computations/Computation.js";
import { isTrue } from "../../../functions.js";
const Observable_allAreMulticasted = (observables => observables[Array_map](Computation.isMulticasted)[Array_every](isTrue));
export default Observable_allAreMulticasted;
