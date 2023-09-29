/// <reference types="./Enumerable.lift.d.ts" />

import { createInstanceFactory, mix, props, } from "../../../__internal__/mixins.js";
import { none, pipeUnsafe } from "../../../functions.js";
import { EnumerableLike_enumerate, } from "../../../ix.js";
const LiftedEnumerable_source = Symbol("LiftedEnumerable_source");
const LiftedEnumerable_ops = Symbol("LiftedEnumerable_ops");
const createLiftedEnumerable = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(function LiftedEnumerable(instance, source, ops) {
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
