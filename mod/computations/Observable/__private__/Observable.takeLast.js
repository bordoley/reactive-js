/// <reference types="./Observable.takeLast.d.ts" />

import { ComputationModuleLike_computationType } from "../../../computations.js";
import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import { Observable_genPure } from "./Observable.gen.js";
const m = {
    genPure: Observable_genPure,
};
const Observable_takeLast = ((options) => DeferredSource.createTakeLast(m)(Observer.takeLast, options));
export default Observable_takeLast;
