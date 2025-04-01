/// <reference types="./Producer.create.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const Producer_create = (f) => DeferredEventSource.create(f, {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: false,
});
export default Producer_create;
