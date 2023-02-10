/// <reference types="./Sink.catchErrorMixin.d.ts" />
import { mix, include, delegatingMixin, init, props, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import { returns, pipe, none, isSome, error } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_addToIgnoringChildErrors from '../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Disposable_mixin from '../../../util/Disposable/__internal__/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/Disposable/__internal__/Disposable.onComplete.mjs';
import Disposable_onError from '../../../util/Disposable/__internal__/Disposable.onError.mjs';
import ReactiveContainer_sinkInto from '../../ReactiveContainer/__internal__/ReactiveContainer.sinkInto.mjs';

const Sink_catchErrorMixin = 
/*@__PURE__*/ (() => {
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

export { Sink_catchErrorMixin as default };
