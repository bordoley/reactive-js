/// <reference types="./ix.d.ts" />
import { properties, prototype } from './__internal__/util/Disposable.mjs';
import { properties as properties$1, prototype as prototype$1 } from './__internal__/util/Enumerator.mjs';
import { mix, Object_init, init, createObjectFactory } from './__internal__/util/Object.mjs';
import { pipe, none, newInstance, forEach } from './functions.mjs';
import { SourceLike_move } from './util.mjs';
import { addTo } from './util/DisposableLike.mjs';
import { dispose } from './__internal__/util/DisposableLikeInternal.mjs';

/** @ignore */
const InteractiveContainerLike_interact = Symbol("InteractiveContainerLike_interact");
const createEnumerable = /*@__PURE__*/ (() => {
    class CreateEnumerable {
        constructor(_enumerate) {
            this._enumerate = _enumerate;
        }
        [InteractiveContainerLike_interact]() {
            try {
                return this._enumerate();
            }
            catch (cause) {
                const empty = emptyEnumerable();
                return pipe(empty[InteractiveContainerLike_interact](none), dispose({ cause }));
            }
        }
    }
    return (enumerate) => newInstance(CreateEnumerable, enumerate);
})();
const createEnumerableUsing = (resourceFactory, enumerableFactory) => createEnumerable(() => {
    const resources = resourceFactory();
    const resourcesArray = Array.isArray(resources) ? resources : [resources];
    const enumerator = enumerableFactory(...resourcesArray)[InteractiveContainerLike_interact]();
    pipe(resourcesArray, forEach(addTo(enumerator)));
    return enumerator;
});
const createEnumerableUsingT = {
    using: createEnumerableUsing,
};
const emptyEnumerable = 
/*@__PURE__*/ (() => {
    const properties$2 = {
        ...properties,
        ...properties$1,
    };
    const prototype$2 = mix(prototype, prototype$1, {
        [Object_init]() {
            init(prototype, this);
            init(prototype$1, this);
        },
        [SourceLike_move]() {
            pipe(this, dispose());
        },
    });
    const createInstance = createObjectFactory(prototype$2, properties$2);
    return () => createEnumerable(() => createInstance());
})();
const emptyEnumerableT = {
    empty: emptyEnumerable,
};

export { InteractiveContainerLike_interact, createEnumerable, createEnumerableUsing, createEnumerableUsingT, emptyEnumerable, emptyEnumerableT };
