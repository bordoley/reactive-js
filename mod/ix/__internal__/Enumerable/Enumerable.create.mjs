/// <reference types="./Enumerable.create.d.ts" />
import { createInstanceFactory, mix, props } from '../../../__internal__/mixins.mjs';
import { none, pipe, error } from '../../../functions.mjs';
import { InteractiveContainerLike_interact } from '../../../ix.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Enumerator_empty from '../Enumerator/Enumerator.empty.mjs';

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

export { Enumerable_create as default };
