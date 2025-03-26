/// <reference types="./ThrowIfEmptyOperator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { error, none, raise } from "../../../functions.js";
import { EventListenerLike_notify, SinkLike_complete, } from "../../../utils.js";
import DelegatingLiftedSinkMixin, { DelegatingLiftedSinkLike_delegate, DelegatingLiftedSinkLike_onCompleted, } from "../../__mixins__/DelegatingLiftedSinkMixin.js";
export const create = /*@__PURE__*/ (() => {
    const ThrowIfEmptyMixin_isEmpty = Symbol("ThrowIfEmptyMixin_isEmpty");
    const ThrowIfEmptyMixin_factory = Symbol("ThrowIfEmptyMixin_factory");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function ThrowIfEmptyOperator(delegate, factory) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[ThrowIfEmptyMixin_factory] = factory;
        return this;
    }, props({
        [ThrowIfEmptyMixin_factory]: none,
        [ThrowIfEmptyMixin_isEmpty]: true,
    }), proto({
        [EventListenerLike_notify](next) {
            this[ThrowIfEmptyMixin_isEmpty] = false;
            this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](next);
        },
        [DelegatingLiftedSinkLike_onCompleted]() {
            const factory = this[ThrowIfEmptyMixin_factory];
            let err = none;
            if (this[ThrowIfEmptyMixin_isEmpty]) {
                try {
                    err = error(factory());
                }
                catch (e) {
                    err = error(e);
                }
                raise(err);
            }
            this[DelegatingLiftedSinkLike_delegate][SinkLike_complete]();
        },
    }));
})();
