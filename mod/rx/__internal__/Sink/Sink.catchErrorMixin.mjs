/// <reference types="./Sink.catchErrorMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, pipe, none, isSome, error } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$addToIgnoringChildErrors from '../../../util/__internal__/Disposable/Disposable.addToIgnoringChildErrors.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable$onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import Disposable$onError from '../../../util/__internal__/Disposable/Disposable.onError.mjs';
import ReactiveContainer$sinkInto from '../ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const Sink$catchErrorMixin = 
/*@__PURE__*/ (() => {
    return returns(mix(include(Disposable$mixin), function CatchErrorSink(instance, delegate, errorHandler) {
        init(Disposable$mixin, instance);
        instance[DelegatingSinkLike_delegate] = delegate;
        pipe(instance, Disposable$addToIgnoringChildErrors(delegate), Disposable$onComplete(() => {
            pipe(delegate, Disposable$dispose());
        }), Disposable$onError((err) => {
            try {
                const result = errorHandler(err) || none;
                if (isSome(result)) {
                    pipe(result, ReactiveContainer$sinkInto(delegate));
                }
                else {
                    pipe(delegate, Disposable$dispose());
                }
            }
            catch (e) {
                pipe(delegate, Disposable$dispose(error([e, err])));
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

export { Sink$catchErrorMixin as default };
