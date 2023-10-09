/// <reference types="./Enumerable.create.d.ts" />

import { createInstanceFactory, mix, props, } from "../../../__internal__/mixins.js";
import { EnumerableLike_enumerate, } from "../../../collections.js";
import { none } from "../../../functions.js";
import EnumerableIterablePrototypeBase from "../../__mixins__/EnumerableIterablePrototypeBase.js";
const Enumerable_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(function CreateEnumerable(instance, enumerate) {
        instance[EnumerableLike_enumerate] = enumerate;
        return instance;
    }, props({
        [EnumerableLike_enumerate]: none,
    }), EnumerableIterablePrototypeBase()));
})();
export default Enumerable_create;
