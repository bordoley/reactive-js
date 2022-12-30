/// <reference types="./SinkLike.catchErrorMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, pipe, none, isSome } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { addToIgnoringChildErrors, onComplete, dispose, onError } from '../../../util/DisposableLike.mjs';
import disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import { sinkInto } from '../../ReactiveContainerLike.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const catchErrorMixin = 
/*@__PURE__*/ (() => {
    return returns(mix(include(disposableMixin), function CatchErrorSink(instance, delegate, errorHandler) {
        init(disposableMixin, instance);
        instance[DelegatingSinkLike_delegate] = delegate;
        pipe(instance, addToIgnoringChildErrors(delegate), onComplete(() => {
            pipe(delegate, dispose());
        }), onError((e) => {
            try {
                const result = errorHandler(e.cause) || none;
                if (isSome(result)) {
                    pipe(result, sinkInto(delegate));
                }
                else {
                    pipe(delegate, dispose());
                }
            }
            catch (cause) {
                pipe(delegate, dispose({ cause: { parent: e.cause, cause } }));
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

export { catchErrorMixin as default };
