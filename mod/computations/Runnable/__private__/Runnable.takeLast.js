/// <reference types="./Runnable.takeLast.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, RunnableLike_eval, } from "../../../computations.js";
import { invoke, newInstance, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import { EnumeratorLike_current, EnumeratorLike_moveNext, } from "../../../utils.js";
import { Runnable_genPure } from "./Runnable.gen.js";
class TakeLastRunnable {
    s;
    c;
    [ComputationLike_isPure];
    [ComputationLike_isDeferred] = true;
    [ComputationLike_isSynchronous] = true;
    constructor(s, c) {
        this.s = s;
        this.c = c;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    [RunnableLike_eval](sink) {
        const count = this.c;
        const takeLastSink = pipe(Consumer.takeLast(count), Disposable.addTo(sink), DisposableContainer.onComplete(() => pipe(Runnable_genPure(function* TakeLast() {
            while (takeLastSink[EnumeratorLike_moveNext]()) {
                yield takeLastSink[EnumeratorLike_current];
            }
        }), invoke(RunnableLike_eval, sink))));
        pipe(this.s, invoke(RunnableLike_eval, takeLastSink));
    }
}
const Runnable_takeLast = ((options) => (runnable) => newInstance(TakeLastRunnable, runnable, options?.count ?? 1));
export default Runnable_takeLast;
