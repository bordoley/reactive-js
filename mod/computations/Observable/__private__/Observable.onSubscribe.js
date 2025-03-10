/// <reference types="./Observable.onSubscribe.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, ObservableLike_observe, } from "../../../computations.js";
import { identity, isFunction, isSome, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_onSubscribe = ((f) => (obs) => Observable_createWithConfig((observer) => {
    obs[ObservableLike_observe](observer);
    const disposable = f() || none;
    pipe(observer, isFunction(disposable)
        ? DisposableContainer.onDisposed(disposable)
        : isSome(disposable)
            ? Disposable.add(disposable)
            : identity);
}, {
    [ComputationLike_isSynchronous]: obs[ComputationLike_isSynchronous],
    [ComputationLike_isPure]: false,
}));
export default Observable_onSubscribe;
