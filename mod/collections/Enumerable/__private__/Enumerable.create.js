/// <reference types="./Enumerable.create.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { EnumerableLike_enumerate, } from "../../../collections.js";
import { none } from "../../../functions.js";
import EnumerableIterableMixin from "../../__mixins__/EnumerableIterableMixin.js";
const Enumerable_create = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(EnumerableIterableMixin()), function CreateEnumerable(instance, enumerate) {
        init(EnumerableIterableMixin(), instance);
        instance[EnumerableLike_enumerate] = enumerate;
        return instance;
    }, props({
        [EnumerableLike_enumerate]: none,
    }));
})();
export default Enumerable_create;
