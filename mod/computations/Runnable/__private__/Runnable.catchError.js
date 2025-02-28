/// <reference types="./Runnable.catchError.d.ts" />

import { ComputationLike_isPure, RunnableLike_eval, SinkLike_complete, } from "../../../computations.js";
import { error, isSome, newInstance, none, } from "../../../functions.js";
class CatchErrorRunnable {
    s;
    onError;
    [ComputationLike_isPure];
    constructor(s, onError) {
        this.s = s;
        this.onError = onError;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    [RunnableLike_eval](sink) {
        try {
            this.s[RunnableLike_eval](sink);
        }
        catch (e) {
            const err = error(e);
            let action = none;
            try {
                action = this.onError(err);
            }
            catch (e) {
                throw error([error(e), err]);
            }
            if (isSome(action)) {
                action[RunnableLike_eval](sink);
            }
            sink[SinkLike_complete]();
        }
    }
}
const Runnable_catchError = (onError) => (deferable) => newInstance((CatchErrorRunnable), deferable, onError);
export default Runnable_catchError;
