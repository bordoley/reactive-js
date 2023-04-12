/// <reference types="./HigherOrderObservable.catchError.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { bindMethod, error, isSome, partial, pipe, } from "../../../functions.js";
import { ObservableLike_observe, ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onError from "../../../util/Disposable/__internal__/Disposable.onError.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
const HigherOrderObservable_catchError = (lift) => {
    const createCatchErrorObserver = (() => {
        return createInstanceFactory(mix(include(Observer_mixin(), Delegating_mixin()), function CatchErrorObserver(instance, delegate, errorHandler) {
            init(Observer_mixin(), instance, delegate, delegate);
            init(Delegating_mixin(), instance, delegate);
            pipe(instance, Disposable_onComplete(bindMethod(delegate, DisposableLike_dispose)), Disposable_onError((err) => {
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
