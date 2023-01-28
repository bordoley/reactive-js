/// <reference types="./Sink.throwIfEmptyMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, pipe, none, error } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';

const Sink_throwIfEmptyMixin = /*@__PURE__*/ (() => {
    const ThrowIfEmptySinkMixin_isEmpty = Symbol("ThrowIfEmptySinkMixin_isEmpty");
    return returns(mix(include(Disposable_mixin), function ThrowIfEmptySinkMixin(instance, delegate, factory) {
        init(Disposable_mixin, instance);
        instance[DelegatingSinkLike_delegate] = delegate;
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            let err = none;
            if (instance[ThrowIfEmptySinkMixin_isEmpty]) {
                try {
                    err = error(factory());
                }
                catch (e) {
                    err = error(e);
                }
            }
            pipe(delegate, Disposable_dispose(err));
        }));
        return instance;
    }, props({
        [DelegatingSinkLike_delegate]: none,
        [ThrowIfEmptySinkMixin_isEmpty]: true,
    }), {
        [SinkLike_notify](next) {
            this[ThrowIfEmptySinkMixin_isEmpty] = false;
            this[DelegatingSinkLike_delegate][SinkLike_notify](next);
        },
    }));
})();

export { Sink_throwIfEmptyMixin as default };
