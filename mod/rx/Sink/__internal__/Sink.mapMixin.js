/// <reference types="./Sink.mapMixin.d.ts" />

import { DelegatingLike_delegate, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, returns } from "../../../functions.js";
import { ObserverLike_notify } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
export const Sink_mapMixin = /*@__PURE__*/ (() => {
    const MapSinkMixin_mapper = Symbol("MapSinkMixin_mapper");
    return returns(mix(include(Disposable_delegatingMixin()), function MapSinkMixin(instance, delegate, mapper) {
        init(Disposable_delegatingMixin(), instance, delegate);
        instance[MapSinkMixin_mapper] = mapper;
        return instance;
    }, props({
        [MapSinkMixin_mapper]: none,
    }), {
        [ObserverLike_notify](next) {
            const mapped = this[MapSinkMixin_mapper](next);
            this[DelegatingLike_delegate][ObserverLike_notify](mapped);
        },
    }));
})();
export default Sink_mapMixin;
