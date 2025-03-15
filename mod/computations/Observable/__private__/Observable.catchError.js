/// <reference types="./Observable.catchError.d.ts" />

import * as Computation from "../../../computations/Computation.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, ObservableLike_observe, } from "../../../computations.js";
import { error, isSome, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as DelegatingObserver from "../../../utils/__internal__/DelegatingObserver.js";
import { DisposableLike_dispose, SinkLike_complete, } from "../../../utils.js";
import Observable_lift, { ObservableLift_isStateless, } from "./Observable.lift.js";
const Observable_catchError = ((errorHandler, options) => pipe((delegate) => pipe(DelegatingObserver.createNotifyOnlyNonCompletingNonDisposing(delegate), Disposable.addToContainer(delegate), DisposableContainer.onError(err => {
    let action = none;
    try {
        action = errorHandler(err);
    }
    catch (e) {
        delegate[DisposableLike_dispose](error([error(e), err]));
    }
    if (isSome(action)) {
        action[ObservableLike_observe](delegate);
    }
    else {
        delegate[SinkLike_complete]();
    }
})), Observable_lift({
    [ObservableLift_isStateless]: false,
    [ComputationLike_isDeferred]: Computation.isDeferred(options?.innerType ?? {}),
    [ComputationLike_isPure]: Computation.isPure(options?.innerType ?? {}),
    [ComputationLike_isSynchronous]: Computation.isSynchronous(options?.innerType ?? {}),
})));
export default Observable_catchError;
