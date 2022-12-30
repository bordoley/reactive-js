/// <reference types="./EnumerableLike.create.d.ts" />
import { createInstanceFactory, mix, props } from '../../../__internal__/mixins.mjs';
import { none, pipe } from '../../../functions.mjs';
import { InteractiveContainerLike_interact } from '../../../ix.mjs';
import dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import empty from '../EnumeratorLike/EnumeratorLike.empty.mjs';

const create = 
/*@__PURE__*/ (() => {
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
            catch (cause) {
                const emptyEnumerator = empty();
                return pipe(emptyEnumerator, dispose({ cause }));
            }
        },
    }));
})();

export { create as default };
