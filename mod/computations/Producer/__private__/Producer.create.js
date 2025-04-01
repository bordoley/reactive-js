/// <reference types="./Producer.create.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
const Producer_create = (f) => DeferredReactiveSource.create(f, {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: false,
});
export default Producer_create;
