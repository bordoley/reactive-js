/// <reference types="./Sink.throwIfEmptyMixin.d.ts" />

import { DelegatingLike_delegate, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { error, none, pipe, returns, } from "../../../functions.js";
import { SinkLike_notify } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
const Sink_throwIfEmptyMixin = /*@__PURE__*/ (() => {
    const ThrowIfEmptySinkMixin_isEmpty = Symbol("ThrowIfEmptySinkMixin_isEmpty");
    return returns(mix(include(Disposable_mixin, delegatingMixin()), function ThrowIfEmptySinkMixin(instance, delegate, factory) {
        init(Disposable_mixin, instance);
        init(delegatingMixin(), instance, delegate);
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
        [ThrowIfEmptySinkMixin_isEmpty]: true,
    }), {
        [SinkLike_notify](next) {
            this[ThrowIfEmptySinkMixin_isEmpty] = false;
            this[DelegatingLike_delegate][SinkLike_notify](next);
        },
    }));
})();
export default Sink_throwIfEmptyMixin;
