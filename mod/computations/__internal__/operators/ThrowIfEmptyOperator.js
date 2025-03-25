/// <reference types="./ThrowIfEmptyOperator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { error, none, raise } from "../../../functions.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedOperatorLike_delegate, DelegatingLiftedOperatorLike_onCompleted, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import { LiftedOperatorLike_complete, LiftedOperatorLike_notify, } from "../LiftedSource.js";
export const create = /*@__PURE__*/ (() => {
    const ThrowIfEmptyMixin_isEmpty = Symbol("ThrowIfEmptyMixin_isEmpty");
    const ThrowIfEmptyMixin_factory = Symbol("ThrowIfEmptyMixin_factory");
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function ThrowIfEmptyOperator(delegate, factory) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        this[ThrowIfEmptyMixin_factory] = factory;
        return this;
    }, props({
        [ThrowIfEmptyMixin_factory]: none,
        [ThrowIfEmptyMixin_isEmpty]: true,
    }), proto({
        [LiftedOperatorLike_notify](next) {
            this[ThrowIfEmptyMixin_isEmpty] = false;
            this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_notify](next);
        },
        [DelegatingLiftedOperatorLike_onCompleted]() {
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
            this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_complete]();
        },
    }));
})();
