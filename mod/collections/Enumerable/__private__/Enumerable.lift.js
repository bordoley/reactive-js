/// <reference types="./Enumerable.lift.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { EnumerableLike_enumerate, } from "../../../collections.js";
import { none, pipeUnsafe } from "../../../functions.js";
import EnumerableIterableMixin from "../../__mixins__/EnumerableIterableMixin.js";
const LiftedEnumerable_source = Symbol("LiftedEnumerable_source");
const LiftedEnumerable_ops = Symbol("LiftedEnumerable_ops");
const createLiftedEnumerable = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(EnumerableIterableMixin()), function LiftedEnumerable(instance, source, ops) {
        init(EnumerableIterableMixin(), instance);
        instance[LiftedEnumerable_source] = source;
        instance[LiftedEnumerable_ops] = ops;
        return instance;
    }, props({
        [LiftedEnumerable_source]: none,
        [LiftedEnumerable_ops]: none,
    }), {
        [EnumerableLike_enumerate]() {
            return pipeUnsafe(this[LiftedEnumerable_source][EnumerableLike_enumerate](), ...this[LiftedEnumerable_ops]);
        },
    }));
})();
const Enumerable_lift = (enumeratorOp) => source => {
    const sourceSource = source[LiftedEnumerable_source] ?? source;
    const enumeratorOps = [
        ...(source[LiftedEnumerable_ops] ?? []),
        enumeratorOp,
    ];
    return createLiftedEnumerable(sourceSource, enumeratorOps);
};
export default Enumerable_lift;
