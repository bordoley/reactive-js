/// <reference types="./Runnable.raise.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, RunnableLike_eval, } from "../../../computations.js";
import { error, newInstance, raise } from "../../../functions.js";
class RaiseRunnable {
    r;
    [ComputationLike_isPure] = true;
    [ComputationLike_isDeferred] = false;
    constructor(r) {
        this.r = r;
    }
    [RunnableLike_eval](_) {
        raise(error(this.r()));
    }
}
const Runnable_raise = (options) => {
    const { raise: factory = raise } = options ?? {};
    return newInstance((RaiseRunnable), factory);
};
export default Runnable_raise;
