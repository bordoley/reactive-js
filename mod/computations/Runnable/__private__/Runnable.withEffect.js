/// <reference types="./Runnable.withEffect.d.ts" />

import { ComputationLike_isPure, RunnableLike_eval, } from "../../../computations.js";
import { error, isFunction, isSome, newInstance, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { DisposableContainerLike_add, DisposableLike_dispose, } from "../../../utils.js";
import * as Computation from "../../Computation.js";
class WithEffectRunnable {
    s;
    e;
    [ComputationLike_isPure];
    constructor(s, e) {
        this.s = s;
        this.e = e;
        this[ComputationLike_isPure] = Computation.isPure(s);
    }
    [RunnableLike_eval](sink) {
        const source = this.s;
        const effect = this.e;
        try {
            const cleanup = effect();
            if (isSome(cleanup) && isFunction(cleanup)) {
                sink[DisposableContainerLike_add](cleanup);
            }
            else if (isSome(cleanup)) {
                pipe(sink, Disposable.add(cleanup));
            }
        }
        catch (e) {
            sink[DisposableLike_dispose](error(e));
        }
        source[RunnableLike_eval](sink);
    }
}
const Runnable_withEffect = ((effect) => (deferable) => newInstance(WithEffectRunnable, deferable, effect));
export default Runnable_withEffect;
