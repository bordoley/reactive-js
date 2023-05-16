/// <reference types="./Observer.createTakeWhileObserver.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __TakeWhileObserver_inclusive } from "../../__internal__/symbols.js";
import { DelegatingLike_delegate, PredicatedLike_predicate, } from "../../__internal__/types.js";
import { none } from "../../functions.js";
import { DisposableLike_dispose, SinkLike_notify, } from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";
const Observer_createTakeWhileObserver = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Observer_delegatingMixin(), Disposable_delegatingMixin, Delegating_mixin()), function TakeWhileObserver(instance, delegate, predicate, inclusive) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[PredicatedLike_predicate] = predicate;
        instance[__TakeWhileObserver_inclusive] = inclusive;
        return instance;
    }, props({
        [PredicatedLike_predicate]: none,
        [__TakeWhileObserver_inclusive]: none,
    }), {
        [SinkLike_notify](next) {
            Observer_assertState(this);
            const satisfiesPredicate = this[PredicatedLike_predicate](next);
            if (satisfiesPredicate || this[__TakeWhileObserver_inclusive]) {
                this[DelegatingLike_delegate][SinkLike_notify](next);
            }
            if (!satisfiesPredicate) {
                this[DisposableLike_dispose]();
            }
        },
    }));
})();
export default Observer_createTakeWhileObserver;
