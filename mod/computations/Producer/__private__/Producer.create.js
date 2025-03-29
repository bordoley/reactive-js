/// <reference types="./Producer.create.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
const Producer_create = (f) => DeferredSource.create(f, {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: false,
});
export default Producer_create;
