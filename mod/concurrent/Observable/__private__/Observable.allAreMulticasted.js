/// <reference types="./Observable.allAreMulticasted.d.ts" />

import { Array_every, Array_map } from "../../../__internal__/constants.js";
import { ObservableLike_isMulticasted, } from "../../../concurrent.js";
import { isTrue } from "../../../functions.js";
import Observable_isMulticasted from "./Observable.isMulticasted.js";
const Observable_allAreMulticasted = (observables => observables[Array_map](Observable_isMulticasted)[Array_every](isTrue));
export default Observable_allAreMulticasted;
