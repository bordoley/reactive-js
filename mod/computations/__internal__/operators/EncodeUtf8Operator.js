/// <reference types="./EncodeUtf8Operator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { newInstance, none } from "../../../functions.js";
import { EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedSinkMixin, { DelegatingLiftedSinkLike_delegate, } from "../../__mixins__/DelegatingLiftedSinkMixin.js";
export const create = /*@__PURE__*/ (() => {
    const EncodeUtf8Operator_textEncoder = Symbol("EncodeUtf8Operator_textEncoder");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function EncodeUtf8Operator(delegate) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[EncodeUtf8Operator_textEncoder] = newInstance(TextEncoder);
        return this;
    }, props({
        [EncodeUtf8Operator_textEncoder]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            const mapped = this[EncodeUtf8Operator_textEncoder].encode(next);
            this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](mapped);
        },
    }));
})();
