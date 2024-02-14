/// <reference types="./Observable.onSubscribe.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isMulticasted, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../concurrent.js";
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
    [ObservableLike_isRunnable]: obs[ObservableLike_isRunnable],
    [ObservableLike_isMulticasted]: false,
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isPure]: false,
}));
export default Observable_onSubscribe;
