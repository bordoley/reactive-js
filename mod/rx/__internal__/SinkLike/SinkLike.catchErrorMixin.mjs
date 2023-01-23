/// <reference types="./SinkLike.catchErrorMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, pipe, none, isSome, error } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__addToIgnoringChildErrors from '../../../util/__internal__/DisposableLike/DisposableLike.addToIgnoringChildErrors.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DisposableLike__onComplete from '../../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import DisposableLike__onError from '../../../util/__internal__/DisposableLike/DisposableLike.onError.mjs';
import ReactiveContainerLike__sinkInto from '../ReactiveContainerLike/ReactiveContainerLike.sinkInto.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const SinkLike__catchErrorMixin = 
/*@__PURE__*/ (() => {
    return returns(mix(include(DisposableLike__mixin), function CatchErrorSink(instance, delegate, errorHandler) {
        init(DisposableLike__mixin, instance);
        instance[DelegatingSinkLike_delegate] = delegate;
        pipe(instance, DisposableLike__addToIgnoringChildErrors(delegate), DisposableLike__onComplete(() => {
            pipe(delegate, DisposableLike__dispose());
        }), DisposableLike__onError((err) => {
            try {
                const result = errorHandler(err) || none;
                if (isSome(result)) {
                    pipe(result, ReactiveContainerLike__sinkInto(delegate));
                }
                else {
                    pipe(delegate, DisposableLike__dispose());
                }
            }
            catch (e) {
                pipe(delegate, DisposableLike__dispose(error([e, err])));
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

export { SinkLike__catchErrorMixin as default };
