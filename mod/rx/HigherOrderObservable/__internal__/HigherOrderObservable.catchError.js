/// <reference types="./HigherOrderObservable.catchError.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { error, isSome, partial, pipe } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onError from "../../../util/Disposable/__internal__/Disposable.onError.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
const HigherOrderObservable_catchError = (lift) => {
    const createCatchErrorObserver = (() => {
        return createInstanceFactory(mix(include(Disposable_mixin, delegatingMixin(), Observer_mixin()), function CatchErrorObserver(instance, delegate, errorHandler) {
            init(Disposable_mixin, instance);
            init(delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
            pipe(instance, Disposable_addToIgnoringChildErrors(delegate), Disposable_onComplete(() => {
                pipe(delegate, Disposable_dispose());
            }), Disposable_onError((err) => {
                try {
                    const result = errorHandler(err);
                    if (isSome(result)) {
                        pipe(result, Observable_observeWith(delegate));
                    }
                    else {
                        pipe(delegate, Disposable_dispose());
                    }
                }
                catch (e) {
                    pipe(delegate, Disposable_dispose(error([e, err])));
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
