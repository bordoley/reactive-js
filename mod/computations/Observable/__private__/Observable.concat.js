/// <reference types="./Observable.concat.d.ts" />

import { ComputationModuleLike_computationType } from "../../../computations.js";
import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import { Observable_genPure } from "./Observable.gen.js";
const m = {
    genPure: Observable_genPure,
    createDelegatingNotifyOnlyNonCompletingNonDisposing: Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
};
const Observable_concat = 
/*@__PURE__*/ DeferredSource.creatConcat(m);
export default Observable_concat;
