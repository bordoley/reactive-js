/// <reference types="./Observable.everySatisfy.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import { compose, negate, partial, pipe, } from "../../../functions.js";
import Observer_satisfyMixin from "../../Observer/__internal__/Observer.satisfyMixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_everySatisfy = /*@__PURE__*/ (() => {
    const typedSatisfyObserverMixin = Observer_satisfyMixin(true);
    const everySatisfyObserverMixin = mix(include(typedSatisfyObserverMixin), function EverySatisfyObserver(instance, delegate, predicate) {
        init(typedSatisfyObserverMixin, instance, delegate, compose(predicate, negate));
        return instance;
    });
    return ((predicate) => pipe(createInstanceFactory(everySatisfyObserverMixin), partial(predicate), Observable_liftEnumerableOperator));
})();
export default Observable_everySatisfy;
