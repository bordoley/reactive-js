/// <reference types="./Sink.throwIfEmptyMixin.d.ts" />
import { mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { returns, pipe, none, error } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import { DelegatingSinkLike_delegate } from '../rx.internal.mjs';
import Sink_notify from './Sink.notify.mjs';

const Sink_throwIfEmptyMixin = /*@__PURE__*/ (() => {
    const ThrowIfEmptySink_private_isEmpty = Symbol("ThrowIfEmptySink_private_isEmpty");
    return returns(mix(include(Disposable_mixin), function ThrowIfEmptySink(instance, delegate, factory) {
        init(Disposable_mixin, instance);
        instance[DelegatingSinkLike_delegate] = delegate;
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            let err = none;
            if (instance[ThrowIfEmptySink_private_isEmpty]) {
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
        [ThrowIfEmptySink_private_isEmpty]: true,
    }), {
        [SinkLike_notify](next) {
            this[ThrowIfEmptySink_private_isEmpty] = false;
            pipe(this[DelegatingSinkLike_delegate], Sink_notify(next));
        },
    }));
})();

export { Sink_throwIfEmptyMixin as default };
