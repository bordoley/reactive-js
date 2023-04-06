/// <reference types="./Observable.someSatisfy.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_satisfyMixin from "../../Observer/__internal__/Observer.satisfyMixin.js";
const Observable_someSatisfy = /*@__PURE__*/ (() => {
    const typedSatisfyObserverMixin = Observer_satisfyMixin(false);
    const someSatisfyObserverMixin = mix(include(typedSatisfyObserverMixin), function EverySatisfyObserver(instance, delegate, predicate) {
        init(typedSatisfyObserverMixin, instance, delegate, predicate);
        return instance;
    });
    return (predicate) => pipe(createInstanceFactory(someSatisfyObserverMixin), partial(predicate), Enumerable_lift);
})();
export default Observable_someSatisfy;
