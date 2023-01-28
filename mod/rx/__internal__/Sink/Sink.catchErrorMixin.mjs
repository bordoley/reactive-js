/// <reference types="./Sink.catchErrorMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, pipe, none, isSome, error } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_addToIgnoringChildErrors from '../../../util/__internal__/Disposable/Disposable.addToIgnoringChildErrors.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import Disposable_onError from '../../../util/__internal__/Disposable/Disposable.onError.mjs';
import ReactiveContainer_sinkInto from '../ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const Sink_catchErrorMixin = 
/*@__PURE__*/ (() => {
    return returns(mix(include(Disposable_mixin), function CatchErrorSinkMixin(instance, delegate, errorHandler) {
        init(Disposable_mixin, instance);
        instance[DelegatingSinkLike_delegate] = delegate;
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
    }, props({
        [DelegatingSinkLike_delegate]: none,
    }), {
        [SinkLike_notify](next) {
            this[DelegatingSinkLike_delegate][SinkLike_notify](next);
        },
    }));
})();

export { Sink_catchErrorMixin as default };
