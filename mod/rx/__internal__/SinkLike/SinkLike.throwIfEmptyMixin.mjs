/// <reference types="./SinkLike.throwIfEmptyMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { addTo, onComplete, dispose } from '../../../util/DisposableLike.mjs';
import disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import { notify } from '../../SinkLike.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const throwIfEmptyMixin = /*@__PURE__*/ (() => {
    const ThrowIfEmptySink_private_isEmpty = Symbol("ThrowIfEmptySink_private_isEmpty");
    return returns(mix(include(disposableMixin), function ThrowIfEmptySink(instance, delegate, factory) {
        init(disposableMixin, instance);
        instance[DelegatingSinkLike_delegate] = delegate;
        pipe(instance, addTo(delegate), onComplete(() => {
            let error = none;
            if (instance[ThrowIfEmptySink_private_isEmpty]) {
                let cause = none;
                try {
                    cause = factory();
                }
                catch (e) {
                    cause = e;
                }
                error = { cause };
            }
            pipe(delegate, dispose(error));
        }));
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [ThrowIfEmptySink_private_isEmpty]: true,
    }), {
        [SinkLike_notify](next) {
            this[ThrowIfEmptySink_private_isEmpty] = false;
            pipe(this[DelegatingSinkLike_delegate], notify(next));
        },
    }));
})();

export { throwIfEmptyMixin as default };
