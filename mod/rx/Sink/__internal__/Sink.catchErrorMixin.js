/// <reference types="./Sink.catchErrorMixin.d.ts" />

import { DelegatingLike_delegate, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { error, isSome, none, pipe, returns, } from "../../../functions.js";
import { SinkLike_notify, } from "../../../rx.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onError from "../../../util/Disposable/__internal__/Disposable.onError.js";
import ReactiveContainer_sinkInto from "../../ReactiveContainer/__internal__/ReactiveContainer.sinkInto.js";
const Sink_catchErrorMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(Disposable_mixin, delegatingMixin()), function CatchErrorSinkMixin(instance, delegate, errorHandler) {
        init(Disposable_mixin, instance);
        init(delegatingMixin(), instance, delegate);
        pipe(instance, Disposable_addToIgnoringChildErrors(delegate), Disposable_onComplete(() => {
            pipe(delegate, Disposable_dispose());
        }), Disposable_onError((err) => {
            try {
                const result = errorHandler(err) || none;
                if (isSome(result)) {
                    pipe(result, ReactiveContainer_sinkInto(delegate));
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
        [SinkLike_notify](next) {
            this[DelegatingLike_delegate][SinkLike_notify](next);
        },
    }));
})();
export default Sink_catchErrorMixin;
