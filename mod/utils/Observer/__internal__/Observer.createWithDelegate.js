/// <reference types="./Observer.createWithDelegate.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import DisposableMixin from "../../__mixins__/DisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_complete, } from "../../__mixins__/LiftedObserverMixin.js";
const Observer_createWithDelegate = 
/*@__PURE__*/ (() => mixInstanceFactory(include(DisposableMixin, LiftedObserverMixin()), function DelegatingObserver(delegate) {
    init(DisposableMixin, this);
    init(LiftedObserverMixin(), this, delegate, none);
    return this;
}, props(), proto({
    [LiftedObserverLike_complete]() {
        this[DisposableLike_dispose]();
    },
})))();
export default Observer_createWithDelegate;
