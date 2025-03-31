/// <reference types="./ThrowIfEmptySink.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { error, none, raise } from "../../../functions.js";
import { EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedSinkMixin, { DelegatingLiftedSinkLike_delegate, DelegatingLiftedSinkLike_onCompleted, } from "../../__mixins__/DelegatingLiftedSinkMixin.js";
export const create = /*@__PURE__*/ (() => {
    const ThrowIfEmptySink_isEmpty = Symbol("ThrowIfEmptySink_isEmpty");
    const ThrowIfEmptySink_factory = Symbol("ThrowIfEmptySink_factory");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function ThrowIfEmptySink(delegate, factory) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[ThrowIfEmptySink_factory] = factory;
        return this;
    }, props({
        [ThrowIfEmptySink_factory]: none,
        [ThrowIfEmptySink_isEmpty]: true,
    }), proto({
        [EventListenerLike_notify](next) {
            this[ThrowIfEmptySink_isEmpty] = false;
            this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](next);
        },
        [DelegatingLiftedSinkLike_onCompleted]() {
            const factory = this[ThrowIfEmptySink_factory];
            let err = none;
            if (this[ThrowIfEmptySink_isEmpty]) {
                try {
                    err = error(factory());
                }
                catch (e) {
                    err = error(e);
                }
                raise(err);
            }
        },
    }));
})();
