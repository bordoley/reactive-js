/// <reference types="./Runnable.takeLast.d.ts" />

import { ComputationLike_isPure, RunnableLike_eval, } from "../../../computations.js";
import { bindMethod, invoke, newInstance, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import { Runnable_genPure } from "./Runnable.gen.js";
class TakeLastRunnable {
    s;
    c;
    [ComputationLike_isPure];
    constructor(s, c) {
        this.s = s;
        this.c = c;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    [RunnableLike_eval](sink) {
        const count = this.c;
        const takeLastSink = pipe(Consumer.takeLast(count), Disposable.addTo(sink), DisposableContainer.onComplete(() => pipe(Runnable_genPure(bindMethod(takeLastSink, Symbol.iterator)), invoke(RunnableLike_eval, sink))));
        pipe(this.s, invoke(RunnableLike_eval, takeLastSink));
    }
}
const Runnable_takeLast = ((options) => (runnable) => newInstance(TakeLastRunnable, runnable, options?.count ?? 1));
export default Runnable_takeLast;
