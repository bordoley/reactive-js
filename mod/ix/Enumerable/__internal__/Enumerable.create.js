/// <reference types="./Enumerable.create.d.ts" />

import { createInstanceFactory, mix, props, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { EnumerableLike_enumerate, } from "../../../ix.js";
const Enumerable_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(function CreateObservable(instance, enumerate) {
        instance[EnumerableLike_enumerate] = enumerate;
        return instance;
    }, props({
        [EnumerableLike_enumerate]: none,
    }), {}));
})();
export default Enumerable_create;
