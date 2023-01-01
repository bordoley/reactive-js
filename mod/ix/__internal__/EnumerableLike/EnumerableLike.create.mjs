/// <reference types="./EnumerableLike.create.d.ts" />
import { createInstanceFactory, mix, props } from '../../../__internal__/mixins.mjs';
import { none, pipe } from '../../../functions.mjs';
import { InteractiveContainerLike_interact } from '../../../ix.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import EnumeratorLike__empty from '../EnumeratorLike/EnumeratorLike.empty.mjs';

const EnumerableLike__create = /*@__PURE__*/ (() => {
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
                const emptyEnumerator = EnumeratorLike__empty();
                return pipe(emptyEnumerator, DisposableLike__dispose({ cause }));
            }
        },
    }));
})();

export { EnumerableLike__create as default };
