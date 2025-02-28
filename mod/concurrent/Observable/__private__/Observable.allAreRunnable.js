/// <reference types="./Observable.allAreRunnable.d.ts" />

import { Array_every, Array_map } from "../../../__internal__/constants.js";
import { ComputationLike_isSynchronous } from "../../../computations.js";
import { ObservableLike_isDeferred, } from "../../../concurrent.js";
import { isTrue } from "../../../functions.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
const Observable_allAreRunnable = (observables => observables[Array_map](Observable_isRunnable)[Array_every](isTrue));
export default Observable_allAreRunnable;
