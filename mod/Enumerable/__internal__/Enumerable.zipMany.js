/// <reference types="./Enumerable.zipMany.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerable_enumerate from "../../Enumerable/__internal__/Enumerable.enumerate.js";
import ReadonlyArray_everySatisfy from "../../ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_forEach from "../../ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { bindMethod, compose, pipe } from "../../functions.js";
import { DisposableLike_dispose, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, ObserverLike_notify, SchedulerLike_schedule, SchedulerLike_yield, } from "../../types.js";
const Enumerable_zipMany = /*@__PURE__*/ (() => {
    const Enumerator_getCurrent = (enumerator) => enumerator[EnumeratorLike_current];
    const Enumerator_hasCurrent = (enumerator) => enumerator[EnumeratorLike_hasCurrent];
    const moveAll = (enumerators) => {
        for (const enumerator of enumerators) {
            enumerator[EnumeratorLike_move]();
        }
    };
    const allHaveCurrent = (enumerators) => pipe(enumerators, ReadonlyArray_everySatisfy(Enumerator_hasCurrent));
    const onSubscribe = (observables) => (observer) => {
        const enumerators = pipe(observables, ReadonlyArray_map(Enumerable_enumerate()), ReadonlyArray_forEach(Disposable_addTo(observer)));
        const continuation = (scheduler) => {
            while ((moveAll(enumerators), allHaveCurrent(enumerators))) {
                pipe(enumerators, ReadonlyArray_map(Enumerator_getCurrent), bindMethod(observer, ObserverLike_notify));
                scheduler[SchedulerLike_yield]();
            }
            observer[DisposableLike_dispose]();
        };
        pipe(observer[SchedulerLike_schedule](continuation), Disposable_addTo(observer));
    };
    return compose(onSubscribe, Enumerable_create);
})();
export default Enumerable_zipMany;
