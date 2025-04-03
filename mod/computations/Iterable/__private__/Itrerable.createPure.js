/// <reference types="./Itrerable.createPure.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
const Iterable_createPure = (f) => ({
    [ComputationLike_isPure]: true,
    [ComputationLike_isDeferred]: true,
    [ComputationLike_isSynchronous]: true,
    [Symbol.iterator]: f,
});
export default Iterable_createPure;
