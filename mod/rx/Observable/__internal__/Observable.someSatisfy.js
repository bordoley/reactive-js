/// <reference types="./Observable.someSatisfy.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import Observer_satisfyMixin from "../../Observer/__internal__/Observer.satisfyMixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_someSatisfy = 
/*@__PURE__*/ (() => {
    const typedSatisfyObserverMixin = Observer_satisfyMixin(false);
    const someSatisfyObserverMixin = mix(include(typedSatisfyObserverMixin), function EverySatisfyObserver(instance, delegate, predicate) {
        init(typedSatisfyObserverMixin, instance, delegate, predicate);
        return instance;
    });
    return (predicate) => pipe(createInstanceFactory(someSatisfyObserverMixin), partial(predicate), Observable_liftEnumerableOperator);
})();
export default Observable_someSatisfy;
