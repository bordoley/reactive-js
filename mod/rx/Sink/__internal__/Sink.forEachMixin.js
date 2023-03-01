/// <reference types="./Sink.forEachMixin.d.ts" />

import { DelegatingLike_delegate, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, returns } from "../../../functions.js";
import { ObserverLike_notify } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
export const Sink_forEachMixin = /*@__PURE__*/ (() => {
    const ForEachSinkMixin_effect = Symbol("ForEachSinkMixin_effect");
    return returns(mix(include(Disposable_delegatingMixin()), function ForEachSinkMixin(instance, delegate, effect) {
        init(Disposable_delegatingMixin(), instance, delegate);
        instance[ForEachSinkMixin_effect] = effect;
        return instance;
    }, props({
        [ForEachSinkMixin_effect]: none,
    }), {
        [ObserverLike_notify](next) {
            this[ForEachSinkMixin_effect](next);
            this[DelegatingLike_delegate][ObserverLike_notify](next);
        },
    }));
})();
export default Sink_forEachMixin;
