/// <reference types="./Enumerable.create.d.ts" />
import { createInstanceFactory, mix, props } from '../../../__internal__/mixins.mjs';
import { none, pipe, error } from '../../../functions.mjs';
import { InteractiveContainerLike_interact } from '../../../ix.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Enumerator$empty from '../Enumerator/Enumerator.empty.mjs';

const Enumerable$create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(function CreateEnumerable(instance, enumerate) {
        instance.enumerate = enumerate;
        return instance;
    }, props({
        enumerate: none,
    }), {
        [InteractiveContainerLike_interact]() {
            try {
                return this.enumerate();
            }
            catch (e) {
                const emptyEnumerator = Enumerator$empty();
                return pipe(emptyEnumerator, Disposable$dispose(error(e)));
            }
        },
    }));
})();

export { Enumerable$create as default };
