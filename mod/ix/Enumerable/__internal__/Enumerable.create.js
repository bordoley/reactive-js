/// <reference types="./Enumerable.create.d.ts" />

import { createInstanceFactory, mix, props, } from "../../../__internal__/mixins.js";
import { error, none, pipe } from "../../../functions.js";
import { InteractiveContainerLike_interact, } from "../../../ix.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Enumerator_empty from "../../Enumerator/__internal__/Enumerator.empty.js";
const Enumerable_create = /*@__PURE__*/ (() => {
    const CreateEnumerable_enumerate = Symbol("CreateEnumerable_enumerate");
    return createInstanceFactory(mix(function CreateEnumerable(instance, enumerate) {
        instance[CreateEnumerable_enumerate] = enumerate;
        return instance;
    }, props({
        [CreateEnumerable_enumerate]: none,
    }), {
        [InteractiveContainerLike_interact]() {
            try {
                return this[CreateEnumerable_enumerate]();
            }
            catch (e) {
                const emptyEnumerator = Enumerator_empty();
                return pipe(emptyEnumerator, Disposable_dispose(error(e)));
            }
        },
    }));
})();
export default Enumerable_create;
