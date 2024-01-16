/// <reference types="./Observable.allArePure.d.ts" />

import { Array_every, Array_map } from "../../../__internal__/constants.js";
import { ObservableLike_isPure } from "../../../concurrent.js";
import { isTrue } from "../../../functions.js";
import Observable_isPure from "./Observable.isPure.js";
const Observable_allArePure = (observables => observables[Array_map](Observable_isPure)[Array_every](isTrue));
export default Observable_allArePure;
