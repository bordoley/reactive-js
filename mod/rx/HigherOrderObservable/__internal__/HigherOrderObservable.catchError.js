/// <reference types="./HigherOrderObservable.catchError.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { bindMethod, error, isSome, partial, pipe, } from "../../../functions.js";
import { DispatcherLike_scheduler, ObservableLike_observe, ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose, QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../../util.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onError from "../../../util/Disposable/__internal__/Disposable.onError.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
const HigherOrderObservable_catchError = (lift) => {
    const createCatchErrorObserver = (() => {
        return createInstanceFactory(mix(include(Disposable_mixin, delegatingMixin(), Observer_mixin()), function CatchErrorObserver(instance, delegate, errorHandler) {
            init(Disposable_mixin, instance);
            init(delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[DispatcherLike_scheduler], delegate[QueueableLike_capacity], delegate[QueueableLike_backpressureStrategy]);
            pipe(instance, Disposable_addToIgnoringChildErrors(delegate), Disposable_onComplete(bindMethod(delegate, DisposableLike_dispose)), Disposable_onError((err) => {
                try {
                    const result = errorHandler(err);
                    if (isSome(result)) {
                        result[ObservableLike_observe](delegate);
                    }
                    else {
                        delegate[DisposableLike_dispose]();
                    }
                }
                catch (e) {
                    delegate[DisposableLike_dispose](error([e, err]));
                }
            }));
            return instance;
        }, props({}), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                this[DelegatingLike_delegate][ObserverLike_notify](next);
            },
        }));
    })();
    return ((errorHandler) => pipe(createCatchErrorObserver, partial(errorHandler), lift));
};
export default HigherOrderObservable_catchError;
